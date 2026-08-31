import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation({ isLoggedIn, onSignInClick }) {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        Home
      </Link>

      {isLoggedIn && (
        <Link className="navigation__link" to="/saved-jobs">
          Saved Jobs
        </Link>
      )}

      <button
        className="navigation__button"
        type="button"
        onClick={onSignInClick}
      >
        Sign In
      </button>
    </nav>
  )
}

export default Navigation
