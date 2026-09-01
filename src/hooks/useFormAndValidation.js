import { useCallback, useState } from 'react'

function useFormAndValidation() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  function handleChange(event) {
    const { name, value, validationMessage } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validationMessage,
    }))

    setIsValid(event.target.closest('form').checkValidity())
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [],
  )

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  }
}

export { useFormAndValidation }
