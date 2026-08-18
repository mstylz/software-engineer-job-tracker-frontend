import './ApiError.css'

function ApiError() {
  return (
    <div className="api-error" role="alert">
      <h3 className="api-error__title">Something went wrong</h3>

      <p className="api-error__text">
        Sorry, something went wrong during the request. There may be a
        connection issue or the server may be down. Please try again later.
      </p>
    </div>
  )
}

export default ApiError
