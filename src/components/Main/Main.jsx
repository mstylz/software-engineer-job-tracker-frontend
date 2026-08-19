import JobCardList from '../JobCardList/JobCardList'
import Preloader from '../Preloader/Preloader'
import NothingFound from '../NothingFound/NothingFound'
import ApiError from '../ApiError/ApiError'
import './Main.css'

function Main({
  jobs = [],
  savedJobs = [],
  resultState = 'success',
  visibleCount,
  onShowMore,
  onSaveToggle,
}) {
  function renderResults() {
    if (resultState === 'loading') {
      return <Preloader />
    }

    if (resultState === 'empty') {
      return <NothingFound />
    }

    if (resultState === 'error') {
      return <ApiError />
    }

    return (
      <JobCardList
        jobs={jobs}
        savedJobs={savedJobs}
        visibleCount={visibleCount}
        onShowMore={onShowMore}
        onSaveToggle={onSaveToggle}
      />
    )
  }

  return (
    <main className="main">
      <section className="main__content">
        <h2 className="main__title">Software Engineering Jobs</h2>

        {renderResults()}
      </section>
    </main>
  )
}

export default Main
