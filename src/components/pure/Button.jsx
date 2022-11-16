import React from 'react';
import '../../styles/css/components/pure/buttons.css'

const Button = ({typeButton, buttonText, onClick}) => {
  return (
    <div className='button-container'>
      <button className={`button ${typeButton}`} onClick={onClick}>{buttonText}</button>
    </div>
  );
}

export default Button;
