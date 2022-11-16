//react, router
import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Header from '../../components/container/Header';
import Button from '../../components/pure/Button';
import TitleForm from '../../components/pure/TitleForm';

//styles
import '../../styles/css/pages/emailSent.css'

const EmailSent = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="email-page">
        <div className="email-container">
          <TitleForm 
            title={'¡Hemos envíado un correo!'}
            description={'Porfavor verifica tu bandeja de entrada para seguir las intrucciones de reestablecimiento de tu contraseña'}


          />
          <div className="email-icon">
            <img src="https://img.icons8.com/color/96/null/secured-letter--v1.png" alt="email" />
          </div>
          {/* <button className="primary-button login-button">Login</button> */}
          <Button 
            buttonText={'Iniciar sesión'}
            typeButton={'primary-button'}
            onClick={()=>navigate('/login')}
          />
          <div className="resend">
            <span>¿No has recibido ningun correo? </span>
            <Button 
              buttonText={'Reenviar'}
              typeButton={'third-button'}
              onClick={()=>console.log('Reenviando correo de reestablecimiento...')}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailSent;