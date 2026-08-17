import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        Home
      </Link>

      <Link className="navigation__link" to="/saved-jobs">
        Saved Jobs
      </Link>

      <button className="navigation__button" type="button">
        Sign In
      </button>
    </nav>
  )
}

export default Navigation
