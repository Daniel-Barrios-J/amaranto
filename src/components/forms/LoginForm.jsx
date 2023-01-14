//react, hooks, router
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../../components/pure/Button';
import InputField from '../../components/pure/InputField';

//Redux
import { setUserState } from '../../store/userState/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

//services
import { logIn } from '../../services/signIn';

//styles
import '../../styles/css/components/forms/loginForm.css'


const LoginForm = () => {

  const logState = useSelector(state => state.userState.user.logged)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(logState) return navigate('/')
  }, [logState,navigate]);
  
  const handleLogin = async () => {
    try {
      console.log('iniciando sesion...');
      await logIn(email, password).then(res => dispatch(setUserState({...res, logged:true})))

    } catch(error) {
      alert('datos incorrectos...', error)
    }
  }

  return (
    <div className="login-form">
      <div className="form-container">
        <img alt="logo"  className="logo" src="https://st2.depositphotos.com/1768926/11968/v/450/depositphotos_119685590-stock-illustration-beauty-lotus-logo-template.jpg" />
        <h1 className="title">Iniciar sesión</h1>
        <div className="form">
          <InputField
            id={'email'}
            placeholder={'ejemplo@correo.com...'}
            textLabel={'Correo'}
            type={'email'}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <InputField
            id={'password'}
            placeholder={'**************'}
            textLabel={'Contraseña'}
            type={'password'}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Button
          buttonText={'Iniciar sesion'} 
          typeButton={'primary-button'}
          onClick={handleLogin}
          />
        </div>
        <Button buttonText={'Olvidé mi contraseña'} typeButton={'third-button'} onClick={()=>navigate('/recovery-password')} />
        <Button buttonText={'Registrarme'} typeButton={'secondary-button'} onClick={()=>navigate('/register')} />
      </div>
    </div>
  );
}

export default LoginForm;