import React from 'react';
import '../../styles/css/buttons.css'

const Button = ({typeButton, buttonText}) => {
  return (
    <div className='button-container'>
      <button className={`button ${typeButton}`}>{buttonText}</button>
    </div>
  );
}

export default Button;
