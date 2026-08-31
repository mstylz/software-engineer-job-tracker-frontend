import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

function Header({ isLoggedIn, onSignInClick, onSearch }) {
  return (
    <header className="header">
      <div className="header__top">
        <h1 className="header__title">Software Engineer Job Tracker</h1>

        <Navigation
          isLoggedIn={isLoggedIn}
          onSignInClick={onSignInClick}
        />
      </div>

      <SearchForm onSearch={onSearch} />
    </header>
  )
}

export default Header
