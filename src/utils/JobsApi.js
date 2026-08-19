import { JOBS_API_URL } from './constants'

function getJobs(page = 1) {
  return fetch(
    `${JOBS_API_URL}?page=${page}&category=Software%20Engineering`,
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(
        new Error(`Jobs API request failed with status ${res.status}`),
      )
    }

    return res.json()
  })
}

export { getJobs }
