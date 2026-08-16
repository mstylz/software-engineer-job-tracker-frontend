import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="/">
        Home
      </a>

      <a className="navigation__link" href="/saved-jobs">
        Saved Jobs
      </a>

      <button className="navigation__button" type="button">
        Sign In
      </button>
    </nav>
  )
}

export default Navigation
