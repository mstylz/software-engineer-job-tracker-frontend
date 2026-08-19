import './JobCard.css'

function JobCard({ job }) {
  const companyName = job.company?.name || 'Company not listed'

  const locationNames =
    job.locations?.map((location) => location.name).join(', ') ||
    'Location not listed'

  const jobUrl = job.refs?.landing_page

  const publicationDate = job.publication_date
    ? new Date(job.publication_date).toLocaleDateString()
    : 'Date not listed'

  return (
    <article className="job-card">
      <h3 className="job-card__title">{job.name}</h3>

      <p className="job-card__company">{companyName}</p>

      <p className="job-card__location">{locationNames}</p>

      <p className="job-card__description">
        Published: {publicationDate}
      </p>

      {jobUrl && (
        <a
          className="job-card__link"
          href={jobUrl}
          target="_blank"
          rel="noreferrer"
        >
          View Job
        </a>
      )}
    </article>
  )
}

export default JobCard
