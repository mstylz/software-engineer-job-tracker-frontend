import { useFormAndValidation } from '../../hooks/useFormAndValidation'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './RegisterModal.css'

function RegisterModal({
  isOpen,
  onClose,
  onSubmit,
  onSignInClick,
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

  function handleSignInClick() {
    resetForm()
    onSignInClick()
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!isValid) {
      return
    }

    onSubmit({
      name: values.name,
      email: values.email,
      password: values.password,
    })

    resetForm()
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title="Create Account"
      name="register"
      buttonText="Register"
      onSubmit={handleSubmit}
      isValid={isValid}
      secondaryText="Already have an account?"
      secondaryButtonText="Sign In"
      onSecondaryClick={handleSignInClick}
    >
      <label className="register-modal__label">
        Name
        <input
          className="register-modal__input"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={values.name || ''}
          onChange={handleChange}
          required
        />
        <span className="register-modal__error">
          {errors.name}
        </span>
      </label>

      <label className="register-modal__label">
        Email
        <input
          className="register-modal__input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        <span className="register-modal__error">
          {errors.email}
        </span>
      </label>

      <label className="register-modal__label">
        Password
        <input
          className="register-modal__input"
          type="password"
          name="password"
          placeholder="Create a password"
          value={values.password || ''}
          onChange={handleChange}
          required
        />
        <span className="register-modal__error">
          {errors.password}
        </span>
      </label>
    </ModalWithForm>
  )
}

export default RegisterModal
