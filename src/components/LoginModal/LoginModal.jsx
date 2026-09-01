import { useFormAndValidation } from '../../hooks/useFormAndValidation'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './LoginModal.css'

function LoginModal({
  isOpen,
  onClose,
  onSubmit,
  onRegisterClick,
}) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormAndValidation()

  function handleClose() {
    resetForm()
    onClose()
  }

  function handleRegisterClick() {
    resetForm()
    onRegisterClick()
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!isValid) {
      return
    }

    onSubmit({
      email: values.email,
      password: values.password,
    })

    resetForm()
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title="Sign In"
      name="login"
      buttonText="Sign In"
      onSubmit={handleSubmit}
      isValid={isValid}
      secondaryText="Don't have an account?"
      secondaryButtonText="Register"
      onSecondaryClick={handleRegisterClick}
    >
      <label className="login-modal__label">
        Email
        <input
          className="login-modal__input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        <span className="login-modal__error">
          {errors.email}
        </span>
      </label>

      <label className="login-modal__label">
        Password
        <input
          className="login-modal__input"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={values.password || ''}
          onChange={handleChange}
          required
        />
        <span className="login-modal__error">
          {errors.password}
        </span>
      </label>
    </ModalWithForm>
  )
}

export default LoginModal
