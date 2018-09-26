import React from 'react'
import PropTypes from 'prop-types'

const TextFieldGroup = ({
  name,
  placeholder,
  label,
  value,
  type,
  handleChange,
  disabled,
  text,
  htmlFOR,
  id
}) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFOR}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  )
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  id: PropTypes.string.isRequired,
  htmlFOR: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}


export default TextFieldGroup
