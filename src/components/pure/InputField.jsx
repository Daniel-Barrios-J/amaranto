import React from 'react';
import '../../styles/css/inputField.css'

const InputField = ({ type, id, placeholder, textLabel }) => {
  return (
    <div className='input-field-container'>
      <label htmlFor={id} className='label'>{textLabel}</label>
      {
        type === 'text-area'
        ? <textarea id={id} className='input text-area' placeholder={placeholder} />
        : <input type={type} id={id} className='input' placeholder={placeholder} />
      }
    </div>
  );
}

export default InputField;
