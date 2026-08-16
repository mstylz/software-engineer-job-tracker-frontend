import JobCardList from '../JobCardList/JobCardList'
import './Main.css'

function Main() {
  return (
    <main className="main">
      <section className="main__content">
        <h2 className="main__title">Software Engineering Jobs</h2>
        <JobCardList />
      </section>
    </main>
  )
}

export default Main
