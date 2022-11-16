import React from 'react';

//components
import InputField from '../pure/InputField';
import Button from '../pure/Button';

//styles
import '../../styles/css/components/forms/eventosFormulario.css'
import TitleForm from '../pure/TitleForm';

const EventosFormulario = () => {
  return (
    <div className='eventos-formulario-container'>
      <TitleForm 
        title={'Cotiza tu evento'}
        description={'Bodas, cumpleaños, bautizos y más 🍾🎉'}
      />
      
      <InputField
        id={'text-area'} 
        placeholder={
          'Cuentame un par de detalles sobre tu evento... 😊'
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
