import React from 'react';
import Header from '../../components/container/Header';
import InputField from '../../components/pure/InputField';
import Button from '../../components/pure/Button';
import '../../styles/css/register.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLog } from '../../store/loginState/reducer';

const Register = () => {

  const dispatch =  useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="register">
      <div className="register-form-container">
        <h1 className="title">Registrarme</h1>
        
        <div className="form-container">
          <img src="https://scontent.fmex7-1.fna.fbcdn.net/v/t39.30808-6/280951877_112559854786002_6645048926993550950_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEXMDOvOHKjv7L5sIaLZfUl5KsPiLZKYb_kqw-ItkphvwKFrGU4OoOoHzlz9rgdwAZywN7JQ2Eg0PaRPP1111K-&_nc_ohc=VGePVZ4GfhsAX854UwL&_nc_ht=scontent.fmex7-1.fna&oh=00_AT_efgiVyGOXkPcIMJ_4B4FY1mDUhnmm9LcsJe55yKXLUg&oe=635C6664" alt="logo"  className="logo" />
          <div className="form">
            <InputField
              id={'email'}
              placeholder={'ejemplo@correo.com...'}
              textLabel={'Correo'}
              type={'email'}
            />
            <InputField
              id={'password'}
              placeholder={'**************'}
              textLabel={'Contraseña'}
              type={'password'}
            />
            <InputField
              id={'repeat-password'}
              placeholder={'**************'}
              textLabel={'Repite tu contraseña'}
              type={'password'}
            />
            {/* <Button buttonText={'Iniciar sesión'} typeButton={'primary-button'} onClick={()=>logInState()}  /> */}
            <Button buttonText={'Registrarme'} typeButton={'primary-button'} onClick={()=>{console.log('iniciando sesion...'); dispatch(setLog({logged: true, textLog: 'Conectado'})); navigate('/')}}  />
          </div>
          <Button buttonText={'Ya tienes cuenta? inicia sesion aqui'} typeButton={'third-button'} onClick={()=>navigate('/login')} />
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Register;