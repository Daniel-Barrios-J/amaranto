import React from 'react';

//components
import InputField from '../pure/InputField';
import Button from '../pure/Button';
import TitleForm from '../pure/TitleForm';

//styles
import '../../styles/css/components/forms/arreglosFormulario.css'

//services
// import { setUsuario, crearUsuario, readDocument, listenToADocument } from '../../firebase';

const ArreglosFormulario = () => {

  const handlePruebas = ()=> {
    console.log('pruebas de base de datos...');
    // setUsuario();
    // crearUsuario();
    // readDocument();
  }
  
  // listenToADocument();

  return (
    <div className='arreglos-formulario-container'>
      
      <TitleForm 
        title={'Personaliza tu arreglo floral'}
        description={'Elige las flores que mas te gusten, nosotros hacemos tu arreglo'}/>
      
      <InputField
        id={'text-area'} 
        placeholder={
          'Cuentame sobre tu idea para un arreglo... 😊'
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

      <Button buttonText={'Solicitar propuestas'} typeButton={'primary-button'} onClick={()=>handlePruebas()}/>
    </div>
  );
}

export default ArreglosFormulario;
