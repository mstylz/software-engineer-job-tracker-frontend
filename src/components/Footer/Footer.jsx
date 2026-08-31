import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({ isLoggedIn }) {
  return (
    <footer className="footer">
      <nav className="footer__links" aria-label="Footer navigation">
        <Link className="footer__link" to="/">
          Home
        </Link>

        {isLoggedIn && (
          <Link className="footer__link" to="/saved-jobs">
            Saved Jobs
          </Link>
        )}
      </nav>

      <p className="footer__copyright">
        © 2026 Software Engineer Job Tracker · Built by Mesut YILDIZ
      </p>
    </footer>
  )
}

export default Footer
