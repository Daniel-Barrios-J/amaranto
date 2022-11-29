import React from 'react';
import '../../styles/css/components/pure/inputField.css'

const InputField = ({ type, id, placeholder, textLabel, onChange }) => {
  return (
    <div className='input-field-container'>
      <label htmlFor={id} className='label'>{textLabel}</label>
      {
        type === 'text-area'
        ? <textarea id={id} className='input text-area' placeholder={placeholder} onChange={onChange}/>
        : <input type={type} id={id} className='input' placeholder={placeholder} onChange={onChange}/>
      }
    </div>
  );
}

export default InputField;
