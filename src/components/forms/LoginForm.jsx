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
  
  const handleLogin = (e) => {
    e.preventDefault()
    console.log('iniciando sesion...');
    console.log(email, password);
    dispatch(setUserState({
      logged: true,
      name: 'asdas',
      email: 'asdas',
      phone: 'asdas',
      uid: 'asdas',
      cart: [],
      orders: []
    }))
  }

  return (
    <div className="login-form">
      <form onSubmit={handleLogin} className="form-container">
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
      </form>
    </div>
  );
}

export default LoginForm;