import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './LoginModal.css'

function LoginModal({ isOpen, onClose, onSubmit, onRegisterClick }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign In"
      name="login"
      buttonText="Sign In"
      onSubmit={onSubmit}
      secondaryText="Don't have an account?"
      secondaryButtonText="Register"
      onSecondaryClick={onRegisterClick}
    >
      <label className="login-modal__label">
        Email
        <input
          className="login-modal__input"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </label>

      <label className="login-modal__label">
        Password
        <input
          className="login-modal__input"
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
      </label>
    </ModalWithForm>
  )
}

export default LoginModal
