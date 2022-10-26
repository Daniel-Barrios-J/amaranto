import React from 'react';
import InputField from '../pure/InputField';
import Button from '../pure/Button';
import '../../styles/css/eventosFormulario.css'

const EventosFormulario = () => {
  return (
    <div className='eventos-formulario-container'>
      <div className='title-container'>
        <h2>Cotiza tu evento social</h2>
        <p>Bodas, compleaños, bautizos, y más 🍾🎉</p>
      </div>
      
      <InputField
        id={'text-area'} 
        placeholder={
          'Tipo de evento, lugar, cuantas personas (o mesas), colores, fecha. Te contactaremos por el medio que nos indiques. 😊'
          }
        textLabel={'Cuentame sobre tu evento'}
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
      placeholder={'55-55-55-55...'} 
      textLabel={'Telefono (WhatsApp)'}
      type={'number'}
      />

      <Button buttonText={'Solicitar cotización'} typeButton={'primary-button'} />
    </div>
  );
}

export default EventosFormulario;
