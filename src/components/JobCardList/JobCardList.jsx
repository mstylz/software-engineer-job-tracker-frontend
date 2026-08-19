import JobCard from '../JobCard/JobCard'
import './JobCardList.css'

function JobCardList({ jobs = [], visibleCount = 3, onShowMore }) {
  const visibleJobs = jobs.slice(0, visibleCount)

  return (
    <section className="job-card-list">
      <div className="job-card-list__grid">
        {visibleJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {visibleCount < jobs.length && (
        <button
          className="job-card-list__show-more"
          type="button"
          onClick={onShowMore}
        >
          Show More
        </button>
      )}
    </section>
  )
}

export default JobCardList
