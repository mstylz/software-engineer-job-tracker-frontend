import { useEffect } from 'react'
import './ModalWithForm.css'

function ModalWithForm({
  isOpen,
  onClose,
  title,
  name,
  children,
  buttonText,
  onSubmit,
  isValid,
  secondaryText,
  secondaryButtonText,
  onSecondaryClick,
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="modal"
      role="presentation"
      onMouseDown={handleOverlayClick}
    >
      <div
        className="modal__container"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${name}-modal-title`}
      >
        <button
          className="modal__close"
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="modal__title" id={`${name}-modal-title`}>
          {title}
        </h2>

        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}

          <button
            className="modal__submit"
            type="submit"
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>

        {secondaryButtonText && (
          <div className="modal__secondary">
            <span>{secondaryText}</span>

            <button
              className="modal__secondary-button"
              type="button"
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ModalWithForm
