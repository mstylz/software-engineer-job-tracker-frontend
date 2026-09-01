import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

function Header({
  currentUser,
  isLoggedIn,
  onSignInClick,
  onLogout,
  onSearch,
}) {
  return (
    <header className="header">
      <div className="header__top">
        <h1 className="header__title">Software Engineer Job Tracker</h1>

        <Navigation
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
          onSignInClick={onSignInClick}
          onLogout={onLogout}
        />
      </div>

      <SearchForm onSearch={onSearch} />
    </header>
  )
}

export default Header
