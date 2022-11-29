//react, hooks, router
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../../components/pure/Button';
import InputField from '../../components/pure/InputField';

//redux
// import { setLog } from '../../store/loginState/reducer';
// import { useDispatch } from 'react-redux';

//services
import { signUp } from '../../firebase';
import { setLog } from '../../store/loginState/reducer';
import { setUserState } from '../../store/userState/reducer';

//styles
import '../../styles/css/components/forms/registerForm.css'

const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const dispatch =  useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    alert(`
      Ésta pagina se encuentra en desarrollo
      y es una demo.
      
      Para registrarte y probarla no ingreses
      correo o contraseñas reales!

      ejemplo para probar la funcionalidad:
      correo: correo-inventado-por-ti@ejemplo.com
      contraseña: 123456

      Aunque no exista el correo, si lo que ingresas 
      contiene un arroba '@' y .com al final
      la pagina lo tomara como valido.

      estas mismas credenciales (correo y contraseña inventados)
      puedes usarlas para acceder posteriormente
      y poder seguir probando la pagina.
     `)
  }, []);


  const handleSignUp = async ()=> {
    if (password1 !== password2) return alert('las contraseñas no coinciden...')
    try {
      // await signUp('',email, password1, '');
      dispatch(setUserState(await signUp('', email, password1, '')))
      console.log('Usuario creado correctamente...');
      dispatch(setLog(true));
      navigate('/')
    } catch(err) {
      console.log(`hubo un error al realizar el registro: ${err}`);
      alert(`Ingresa un correo valido...`);
    }
    // await signUp('peter','pedrito@sss.com', '123456789', 555);
  }

  return (
    <div className="register-form">
      <div className="register-form-container">
      {/* <img alt="logo"  className="logo" src="https://scontent.fmex7-1.fna.fbcdn.net/v/t39.30808-6/280951877_112559854786002_6645048926993550950_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEXMDOvOHKjv7L5sIaLZfUl5KsPiLZKYb_kqw-ItkphvwKFrGU4OoOoHzlz9rgdwAZywN7JQ2Eg0PaRPP1111K-&_nc_ohc=c5RAnQ3iKpwAX8hzcwh&_nc_ht=scontent.fmex7-1.fna&oh=00_AfCeML1yjMBQjbXNpaHqN_Rv-E-5ED4LREWUS3yLy2BjWg&oe=636A3E24" /> */}
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
            {/* <Button buttonText={'Iniciar sesión'} typeButton={'primary-button'} onClick={()=>logInState()}  /> */}
            <Button buttonText={'Registrarme'} typeButton={'primary-button'} onClick={()=>handleSignUp()} />
          </div>
          <Button buttonText={'¿Ya tienes cuenta? inicia sesion aqui'} typeButton={'third-button'} onClick={()=>navigate('/login')} />
          
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;