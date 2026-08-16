import './JobCard.css'

function JobCard() {
  return (
    <article className="job-card">
      <h3 className="job-card__title">Frontend Developer</h3>
      <p className="job-card__company">Example Company</p>
      <p className="job-card__location">Remote</p>
      <p className="job-card__description">
        Build modern web applications using React and JavaScript.
      </p>
      <a
        className="job-card__link"
        href="https://example.com"
        target="_blank"
        rel="noreferrer"
      >
        View Job
      </a>
    </article>
  )
}

export default JobCard
