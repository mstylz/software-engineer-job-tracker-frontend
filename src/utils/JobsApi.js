import { JOBS_API_URL } from './constants'

const SEARCH_PAGE_COUNT = 10

function requestJobs({ page = 1, company = '' } = {}) {
  const params = new URLSearchParams({
    page: String(page),
    category: 'Software Engineering',
  })

  if (company) {
    params.set('company', company)
  }

  return fetch(`${JOBS_API_URL}?${params.toString()}`).then((res) => {
    if (!res.ok) {
      return Promise.reject(
        new Error(`Jobs API request failed with status ${res.status}`),
      )
    }

    return res.json()
  })
}

function getJobs(page = 1) {
  return requestJobs({ page })
}

function searchJobs(searchTerm) {
  const trimmedSearchTerm = searchTerm.trim()
  const normalizedSearchTerm = trimmedSearchTerm.toLowerCase()

  const generalRequests = Array.from(
    { length: SEARCH_PAGE_COUNT },
    (_, index) => requestJobs({ page: index + 1 }),
  )

  const companyRequest = requestJobs({
    page: 1,
    company: trimmedSearchTerm,
  })

  return Promise.all([...generalRequests, companyRequest]).then(
    (responses) => {
      const uniqueJobs = new Map()

      responses.forEach((response) => {
        const responseJobs = response.results || []

        responseJobs.forEach((job) => {
          uniqueJobs.set(job.id, job)
        })
      })

      return Array.from(uniqueJobs.values()).filter((job) => {
        const title = job.name?.toLowerCase() || ''
        const companyName = job.company?.name?.toLowerCase() || ''
        const locations =
          job.locations
            ?.map((location) => location.name)
            .join(' ')
            .toLowerCase() || ''

        return (
          title.includes(normalizedSearchTerm) ||
          companyName.includes(normalizedSearchTerm) ||
          locations.includes(normalizedSearchTerm)
        )
      })
    },
  )
}

export { getJobs, searchJobs }
