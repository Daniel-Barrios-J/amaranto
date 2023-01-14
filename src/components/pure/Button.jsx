import React from 'react';
import '../../styles/css/components/pure/buttons.css'

const Button = ({typeButton, buttonText, onClick, typeInput='button'}) => {
  return (
    <div className='button-container'>
      {
        typeInput === 'input'
        ? <input type={'submit'} className={`button ${typeButton}`} >{buttonText}</input>
        : <button className={`button ${typeButton}`} onClick={onClick}>{buttonText}</button>

      }
    </div>
  );
}

export default Button;