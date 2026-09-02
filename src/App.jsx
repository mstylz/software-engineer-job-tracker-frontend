import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import About from './components/About/About'
import SavedJobs from './components/SavedJobs/SavedJobs'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import LoginModal from './components/LoginModal/LoginModal'
import RegisterModal from './components/RegisterModal/RegisterModal'
import Footer from './components/Footer/Footer'
import { getJobs, searchJobs } from './utils/JobsApi'
import './App.css'

const USER_STORAGE_KEY = 'jobTrackerCurrentUser'
const SAVED_JOBS_STORAGE_KEY = 'jobTrackerSavedJobs'

function getStoredUser() {
  try {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY)

    return storedUser ? JSON.parse(storedUser) : null
  } catch {
    return null
  }
}

function getStoredSavedJobs() {
  try {
    const storedJobs = localStorage.getItem(SAVED_JOBS_STORAGE_KEY)

    return storedJobs ? JSON.parse(storedJobs) : []
  } catch {
    return []
  }
}

function App() {
  const [activeModal, setActiveModal] = useState(null)
  const [jobs, setJobs] = useState([])
  const [savedJobs, setSavedJobs] = useState(getStoredSavedJobs)
  const [resultState, setResultState] = useState('loading')
  const [visibleCount, setVisibleCount] = useState(3)
  const [currentUser, setCurrentUser] = useState(getStoredUser)

  const isLoggedIn = Boolean(currentUser)

  useEffect(() => {
    getJobs()
      .then((response) => {
        const receivedJobs = response.results || []

        setJobs(receivedJobs)

        if (receivedJobs.length === 0) {
          setResultState('empty')
        } else {
          setResultState('success')
        }
      })
      .catch(() => {
        setJobs([])
        setResultState('error')
      })
  }, [])

  function handleSearch(searchTerm) {
    setResultState('loading')
    setVisibleCount(3)

    searchJobs(searchTerm)
      .then((foundJobs) => {
        setJobs(foundJobs)

        if (foundJobs.length === 0) {
          setResultState('empty')
        } else {
          setResultState('success')
        }
      })
      .catch(() => {
        setJobs([])
        setResultState('error')
      })
  }

  function handleShowMore() {
    setVisibleCount((currentCount) => currentCount + 3)
  }

  function handleSaveToggle(job) {
    if (!isLoggedIn) {
      return
    }

    const isAlreadySaved = savedJobs.some((savedJob) => savedJob.id === job.id)

    let updatedSavedJobs

    if (isAlreadySaved) {
      updatedSavedJobs = savedJobs.filter(
        (savedJob) => savedJob.id !== job.id,
      )
    } else {
      updatedSavedJobs = [...savedJobs, job]
    }

    setSavedJobs(updatedSavedJobs)
    localStorage.setItem(
      SAVED_JOBS_STORAGE_KEY,
      JSON.stringify(updatedSavedJobs),
    )
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

  function handleLogin({ email }) {
    const user = {
      email: email.trim(),
    }

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
    setCurrentUser(user)
    closeActiveModal()
  }

  function handleRegister({ name, email }) {
    const user = {
      name: name.trim(),
      email: email.trim(),
    }

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
    setCurrentUser(user)
    closeActiveModal()
  }

  function handleLogout() {
    localStorage.removeItem(USER_STORAGE_KEY)
    setCurrentUser(null)
  }

  return (
    <div className="app">
      <Header
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        onSignInClick={handleSignInClick}
        onLogout={handleLogout}
        onSearch={handleSearch}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main
                jobs={jobs}
                savedJobs={savedJobs}
                resultState={resultState}
                visibleCount={visibleCount}
                isLoggedIn={isLoggedIn}
                onShowMore={handleShowMore}
                onSaveToggle={handleSaveToggle}
              />
              <About />
            </>
          }
        />

        <Route
          path="/saved-jobs"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedJobs
                savedJobs={savedJobs}
                isLoggedIn={isLoggedIn}
                onSaveToggle={handleSaveToggle}
              />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer isLoggedIn={isLoggedIn} />

      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={closeActiveModal}
        onSubmit={handleLogin}
        onRegisterClick={handleRegisterClick}
      />

      <RegisterModal
        isOpen={activeModal === 'register'}
        onClose={closeActiveModal}
        onSubmit={handleRegister}
        onSignInClick={handleSignInClick}
      />
    </div>
  )
}

export default App
