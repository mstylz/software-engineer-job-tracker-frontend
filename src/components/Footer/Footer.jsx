import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__links" aria-label="Footer navigation">
        <a className="footer__link" href="/">
          Home
        </a>

        <a className="footer__link" href="/saved-jobs">
          Saved Jobs
        </a>
      </nav>

      <p className="footer__copyright">
        © 2026 Software Engineer Job Tracker
      </p>
    </footer>
  )
}

export default Footer
