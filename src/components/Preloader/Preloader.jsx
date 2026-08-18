import './Preloader.css'

function Preloader() {
  return (
    <div className="preloader" role="status" aria-live="polite">
      <div className="preloader__circle" />
      <p className="preloader__text">Loading jobs...</p>
    </div>
  )
}

export default Preloader
