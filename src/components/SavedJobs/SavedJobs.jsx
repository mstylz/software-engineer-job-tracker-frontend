import JobCard from '../JobCard/JobCard'
import './SavedJobs.css'

function SavedJobs({ savedJobs = [], onSaveToggle }) {
  return (
    <main className="saved-jobs">
      <section className="saved-jobs__content">
        <h2 className="saved-jobs__title">Saved Jobs</h2>

        {savedJobs.length === 0 ? (
          <p className="saved-jobs__text">Jobs you save will appear here.</p>
        ) : (
          <div className="saved-jobs__grid">
            {savedJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isSaved
                onSaveToggle={onSaveToggle}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default SavedJobs
