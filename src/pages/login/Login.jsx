import React, { useEffect } from 'react';
import Button from '../../components/pure/Button';
import InputField from '../../components/pure/InputField';
import '../../styles/css/login.css';
import { setLog } from '../../store/loginState/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/container/Header';

const Login = () => {

  const navigate = useNavigate();
  const logState = useSelector(state => state.logState)
  const dispatch = useDispatch()
  console.log(logState.logged);
  
  useEffect(() => {
     if (logState.logged){
        return navigate("/");
     }
  },[logState.logged, navigate]);

  return (
      // todo, averiguar como prevenir el event default/
    <>
      <Header />
      <div className="login">
        
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
            {/* <Button buttonText={'Iniciar sesión'} typeButton={'primary-button'} onClick={()=>logInState()}  /> */}
            <Button buttonText={'Iniciar sesion'} typeButton={'primary-button'} onClick={()=>{console.log('iniciando sesion...'); dispatch(setLog({logged: true, textLog: 'Conectado'}))}}  />
          </div>
          <Button buttonText={'Olvidé mi contraseña'} typeButton={'third-button'} />
          <Button buttonText={'Registrarme'} typeButton={'secondary-button'} onClick={console.log('boton registrarme')} />
        </div>
      </div>
    </>
    
  );
}

export default Login;