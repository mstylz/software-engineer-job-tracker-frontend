import JobCard from '../JobCard/JobCard'
import './JobCardList.css'

function JobCardList({
  jobs = [],
  savedJobs = [],
  visibleCount = 3,
  isLoggedIn = false,
  onShowMore,
  onSaveToggle,
}) {
  const visibleJobs = jobs.slice(0, visibleCount)

  return (
    <section className="job-card-list">
      <div className="job-card-list__grid">
        {visibleJobs.map((job) => {
          const isSaved = savedJobs.some((savedJob) => savedJob.id === job.id)

          return (
            <JobCard
              key={job.id}
              job={job}
              isSaved={isSaved}
              isLoggedIn={isLoggedIn}
              onSaveToggle={onSaveToggle}
            />
          )
        })}
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
