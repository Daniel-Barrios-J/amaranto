import React from 'react';
import '../../styles/css/inputField.css'

const InputField = ({ type, id, placeholder, textLabel }) => {
  return (
    <div className='input-field-container'>
      <label for={id} className='label'>{textLabel}</label>
      <input
      type={type}
      id={id}
      className='input'
      placeholder={placeholder} />
    </div>
  );
}

export default InputField;
