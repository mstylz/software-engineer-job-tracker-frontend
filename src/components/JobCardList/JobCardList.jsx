import JobCard from '../JobCard/JobCard'
import './JobCardList.css'

function JobCardList() {
  return (
    <section className="job-card-list">
      <div className="job-card-list__grid">
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </section>
  )
}

export default JobCardList
