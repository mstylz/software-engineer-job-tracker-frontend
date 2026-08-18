import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './RegisterModal.css'

function RegisterModal({ isOpen, onClose, onSubmit, onSignInClick }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Create Account"
      name="register"
      buttonText="Register"
      onSubmit={onSubmit}
      secondaryText="Already have an account?"
      secondaryButtonText="Sign In"
      onSecondaryClick={onSignInClick}
    >
      <label className="register-modal__label">
        Name
        <input
          className="register-modal__input"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
      </label>

      <label className="register-modal__label">
        Email
        <input
          className="register-modal__input"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </label>

      <label className="register-modal__label">
        Password
        <input
          className="register-modal__input"
          type="password"
          name="password"
          placeholder="Create a password"
          required
        />
      </label>
    </ModalWithForm>
  )
}

export default RegisterModal
