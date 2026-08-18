import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import About from './components/About/About'
import SavedJobs from './components/SavedJobs/SavedJobs'
import LoginModal from './components/LoginModal/LoginModal'
import RegisterModal from './components/RegisterModal/RegisterModal'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [activeModal, setActiveModal] = useState(null)

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
      <Header onSignInClick={handleSignInClick} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
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
