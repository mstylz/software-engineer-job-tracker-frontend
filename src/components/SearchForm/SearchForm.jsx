import { useState } from 'react'
import './SearchForm.css'

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleChange(event) {
    setSearchTerm(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(searchTerm.trim())
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Search software engineering jobs"
        value={searchTerm}
        onChange={handleChange}
        required
      />

      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchForm
