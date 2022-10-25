import React from 'react';
import Button from '../../components/pure/Button';
import InputField from '../../components/pure/InputField';
import '../../styles/css/login.css'

const Login = () => {
  return (
    <div class="login">
      <div class="form-container">
        <img src="https://scontent.fmex7-1.fna.fbcdn.net/v/t39.30808-6/280951877_112559854786002_6645048926993550950_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEXMDOvOHKjv7L5sIaLZfUl5KsPiLZKYb_kqw-ItkphvwKFrGU4OoOoHzlz9rgdwAZywN7JQ2Eg0PaRPP1111K-&_nc_ohc=VGePVZ4GfhsAX854UwL&_nc_ht=scontent.fmex7-1.fna&oh=00_AT_efgiVyGOXkPcIMJ_4B4FY1mDUhnmm9LcsJe55yKXLUg&oe=635C6664" alt="logo"  class="logo" />
        <form action="#" class="form">

          {/* <label for="email" class="label">Email address</label>
          <input type="email" id="email" class="input input-email"
          placeholder="correo@tucorreo.com" /> */}
          <InputField
            id={'email'}
            placeholder={'ejemplo@correo.com...'}
            textLabel={'Correo'}
            type={'email'}
          />

          {/* <label for="password" class="label">Password</label>
          <input type="password" id="password" class="input input-password" placeholder="***********" /> */}
          <InputField
            id={'password'}
            placeholder={'**************'}
            textLabel={'Contraseña'}
            type={'password'}
          />

          {/* <input type="submit" class="primary-button login-button" value="Log in" /> */}
          <Button buttonText={'Iniciar sesión'} typeButton={'primary-button'} />

        </form>

        {/* <p class="forgot">
          <a href="#">Forgot my password</a>
        </p> */}
        <Button buttonText={'Olvidé mi contraseña'} typeButton={'third-button'} />

        {/* <button class="secondary-button sign-up-button">Sign up</button> */}
        <Button buttonText={'Registrarme'} typeButton={'secondary-button'} />

      </div>
    </div>
  );
}

export default Login;