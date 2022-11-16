import React from 'react';

//components
import InputField from '../pure/InputField';
import Button from '../pure/Button';

//styles
import '../../styles/css/components/forms/arreglosFormulario.css'

//services
import { setUsuario, crearUsuario, readDocument, listenToADocument } from '../../firebase';

const ArreglosFormulario = () => {

  const handlePruebas = ()=> {
    console.log('pruebas de seteo...');
    // setUsuario();
    // crearUsuario();
    readDocument();
  }
  
  // listenToADocument();

  return (
    <div className='arreglos-formulario-container'>
      <img alt='logo' className='logo-form' src='https://scontent.fmex7-1.fna.fbcdn.net/v/t39.30808-6/280951877_112559854786002_6645048926993550950_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEXMDOvOHKjv7L5sIaLZfUl5KsPiLZKYb_kqw-ItkphvwKFrGU4OoOoHzlz9rgdwAZywN7JQ2Eg0PaRPP1111K-&_nc_ohc=c5RAnQ3iKpwAX8hzcwh&_nc_ht=scontent.fmex7-1.fna&oh=00_AfCeML1yjMBQjbXNpaHqN_Rv-E-5ED4LREWUS3yLy2BjWg&oe=636A3E24' />
      <div className='title-container'>
        <h2>Personaliza tu arreglo florar</h2>
        <p>Elige las flores que mas te gusten, nosotros hacemos tu arreglo 😊</p>
      </div>
      
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
