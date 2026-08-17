import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import About from './components/About/About'
import SavedJobs from './components/SavedJobs/SavedJobs'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

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
    </div>
  )
}

export default App
