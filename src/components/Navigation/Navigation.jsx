import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation({
  currentUser,
  isLoggedIn,
  onSignInClick,
  onLogout,
}) {
  const userLabel = currentUser?.name || currentUser?.email

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

      {isLoggedIn ? (
        <>
          <span className="navigation__user">{userLabel}</span>

          <button
            className="navigation__button"
            type="button"
            onClick={onLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className="navigation__button"
          type="button"
          onClick={onSignInClick}
        >
          Sign In
        </button>
      )}
    </nav>
  )
}

export default Navigation
