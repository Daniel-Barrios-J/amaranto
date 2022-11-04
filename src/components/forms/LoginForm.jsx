//react, hooks, router
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../../components/pure/Button';
import InputField from '../../components/pure/InputField';

//Redux
import { setLog } from '../../store/loginState/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

//styles
import '../../styles/css/loginForm.css';


const LoginForm = () => {

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
    <div className="login-form">
      <div className="form-container">
        <img alt="logo"  className="logo" src="https://scontent.fmex7-1.fna.fbcdn.net/v/t39.30808-6/280951877_112559854786002_6645048926993550950_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEXMDOvOHKjv7L5sIaLZfUl5KsPiLZKYb_kqw-ItkphvwKFrGU4OoOoHzlz9rgdwAZywN7JQ2Eg0PaRPP1111K-&_nc_ohc=c5RAnQ3iKpwAX8hzcwh&_nc_ht=scontent.fmex7-1.fna&oh=00_AfCeML1yjMBQjbXNpaHqN_Rv-E-5ED4LREWUS3yLy2BjWg&oe=636A3E24" />
        <h1 className="title">Iniciar sesión</h1>
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
        <Button buttonText={'Olvidé mi contraseña'} typeButton={'third-button'} onClick={()=>navigate('/recovery-password')} />
        <Button buttonText={'Registrarme'} typeButton={'secondary-button'} onClick={()=>navigate('/register')} />
      </div>
    </div>
  );
}

export default LoginForm;