import React from 'react';

// styles
import '../../styles/css/components/pure/titleForm.css'

const TitleForm = ({title, description}) => {
  return (
    <div className='title-form-container'>
      <img alt='logo' className='logo-form' src='https://st2.depositphotos.com/1768926/11968/v/450/depositphotos_119685590-stock-illustration-beauty-lotus-logo-template.jpg' />
      <div className='title-container'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TitleForm;
