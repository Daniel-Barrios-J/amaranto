//react, hooks, router
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../../components/pure/Button';
import InputField from '../../components/pure/InputField';

//redux
import { setUserState } from '../../store/userState/reducer';

//styles
import '../../styles/css/components/forms/registerForm.css'

const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const dispatch =  useDispatch();
  const navigate = useNavigate();
  
  const handleSignUp = async ()=> {
    if (password1 !== password2) return alert('las contraseñas no coinciden...')
    try {
      console.log('creando usuario');
      console.log(email, password1, password2);
      dispatch(setUserState({
        logged: true,
        name: '',
        email: email,
        phone: '',
        uid: '',
        cart: [],
        orders: []
      }))
      navigate('/')
    } catch(err) {
      console.log(`hubo un error al realizar el registro: ${err}`);
      alert(`Ingresa un correo valido...`);
    }
  }

  return (
    <div className="register-form">
      <div className="register-form-container">
      <img alt="logo"  className="logo" src="https://st2.depositphotos.com/1768926/11968/v/450/depositphotos_119685590-stock-illustration-beauty-lotus-logo-template.jpg" />
        <h1 className="title">Registrarme</h1>
        <div className="form-container">
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
              onChange={(e)=>setPassword1(e.target.value)}
            />
            <InputField
              id={'repeat-password'}
              placeholder={'**************'}
              textLabel={'Repite tu contraseña'}
              type={'password'}
              onChange={(e)=>setPassword2(e.target.value)}
            />
            <Button
              buttonText={'Registrarme'} 
              typeButton={'primary-button'}
              onClick={()=>handleSignUp()}
            />
          </div>
          <Button buttonText={'¿Ya tienes cuenta? inicia sesion aqui'} typeButton={'third-button'} onClick={()=>navigate('/login')} />
          
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;