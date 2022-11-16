//react, router
import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../pure/Button';
import InputField from '../pure/InputField';
import TitleForm from '../pure/TitleForm';

//styles
import '../../styles/css/components/forms/recoveryPasswordForm.css'

const RecoveryPasswordForm = () => {

  const navigate = useNavigate();

  return (
    <div className='recovery-password-form'>
      <TitleForm 
        title={'Recuperación de contraseña'} 
        description={'Ingresa el correo con el que te registraste, te enviaremos un enlace para cambiar tu contraseña'}
      />
      <InputField
        id={'email'} 
        placeholder={'ingresa tu correo...'} 
        textLabel={'Correo'} 
        type={'email'}
      />
      <Button 
        buttonText={'Recuperar contraseña'} 
        typeButton={'primary-button'}
        onClick={()=>navigate('/email-sent')}
      />
      <Button buttonText={'Ir al inicio de sesión'} typeButton={'third-button'} onClick={()=>navigate('/login')} />
    </div>
  );
}

export default RecoveryPasswordForm;
