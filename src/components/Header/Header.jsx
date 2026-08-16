import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <h1 className="header__title">Software Engineer Job Tracker</h1>
        <Navigation />
      </div>

      <SearchForm />
    </header>
  )
}

export default Header
