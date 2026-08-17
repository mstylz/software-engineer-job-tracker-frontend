import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__links" aria-label="Footer navigation">
        <Link className="footer__link" to="/">
          Home
        </Link>

        <Link className="footer__link" to="/saved-jobs">
          Saved Jobs
        </Link>
      </nav>

      <p className="footer__copyright">
        © 2026 Software Engineer Job Tracker
      </p>
    </footer>
  )
}

export default Footer
