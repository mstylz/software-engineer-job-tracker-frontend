import './NothingFound.css'

function NothingFound() {
  return (
    <div className="nothing-found" role="status">
      <h3 className="nothing-found__title">Nothing found</h3>
      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  )
}

export default NothingFound
