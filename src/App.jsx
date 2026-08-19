import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import About from './components/About/About'
import SavedJobs from './components/SavedJobs/SavedJobs'
import LoginModal from './components/LoginModal/LoginModal'
import RegisterModal from './components/RegisterModal/RegisterModal'
import Footer from './components/Footer/Footer'
import { getJobs } from './utils/JobsApi'
import './App.css'

function App() {
  const [activeModal, setActiveModal] = useState(null)
  const [allJobs, setAllJobs] = useState([])
  const [jobs, setJobs] = useState([])
  const [resultState, setResultState] = useState('loading')
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    getJobs()
      .then((response) => {
        const receivedJobs = response.results || []

        setAllJobs(receivedJobs)
        setJobs(receivedJobs)

        if (receivedJobs.length === 0) {
          setResultState('empty')
        } else {
          setResultState('success')
        }
      })
      .catch(() => {
        setAllJobs([])
        setJobs([])
        setResultState('error')
      })
  }, [])

  function handleSearch(searchTerm) {
    const normalizedSearchTerm = searchTerm.toLowerCase()

    const filteredJobs = allJobs.filter((job) => {
      const title = job.name?.toLowerCase() || ''
      const companyName = job.company?.name?.toLowerCase() || ''
      const locations =
        job.locations
          ?.map((location) => location.name)
          .join(' ')
          .toLowerCase() || ''
      const contents = job.contents?.toLowerCase() || ''

      return (
        title.includes(normalizedSearchTerm) ||
        companyName.includes(normalizedSearchTerm) ||
        locations.includes(normalizedSearchTerm) ||
        contents.includes(normalizedSearchTerm)
      )
    })

    setJobs(filteredJobs)
    setVisibleCount(3)

    if (filteredJobs.length === 0) {
      setResultState('empty')
    } else {
      setResultState('success')
    }
  }

  function handleShowMore() {
    setVisibleCount((currentCount) => currentCount + 3)
  }

  function handleSignInClick() {
    setActiveModal('login')
  }

  function handleRegisterClick() {
    setActiveModal('register')
  }

  function closeActiveModal() {
    setActiveModal(null)
  }

  function handleAuthSubmit(event) {
    event.preventDefault()
    closeActiveModal()
  }

  return (
    <div className="app">
      <Header onSignInClick={handleSignInClick} onSearch={handleSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main
                jobs={jobs}
                resultState={resultState}
                visibleCount={visibleCount}
                onShowMore={handleShowMore}
              />
              <About />
            </>
          }
        />

        <Route path="/saved-jobs" element={<SavedJobs />} />
      </Routes>

      <Footer />

      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={closeActiveModal}
        onSubmit={handleAuthSubmit}
        onRegisterClick={handleRegisterClick}
      />

      <RegisterModal
        isOpen={activeModal === 'register'}
        onClose={closeActiveModal}
        onSubmit={handleAuthSubmit}
        onSignInClick={handleSignInClick}
      />
    </div>
  )
}

export default App
