import React from 'react';
import InputField from '../pure/InputField';
import Button from '../pure/Button';
import '../../styles/css/arreglosFormulario.css'

const ArreglosFormulario = () => {
  return (
    <div className='arreglos-formulario-container'>
      <div className='title-container'>
        <h2>Personaliza tu arreglo florar</h2>
        <p>Elige las flores que mas te gusten, nosotros hacemos tu arreglo 😊</p>
      </div>
      
      <InputField
        id={'text-area'} 
        placeholder={
          'Cuentanos tu idea de ramo o arreglo con tus flores favoritas y te enviaremos un par de propuestas...'
          }
        textLabel={'Sobre tu ramo o arreglo'}
        type={'text-area'}
      />

      <InputField
      id={'nombre'} 
      placeholder={'A quien contactaremos...'} 
      textLabel={'Nombre'}
      />

      <InputField
      id={'correo'} 
      placeholder={'Tu correo, opcional...'} 
      textLabel={'Correo'}
      />

      <InputField
      id={'telefono'} 
      placeholder={'55-555-555...'} 
      textLabel={'Telefono (WhatsApp)'}
      type={'number'}
      />

      <Button buttonText={'Solicitar propuestas'} typeButton={'primary-button'} />
    </div>
  );
}

export default ArreglosFormulario;
