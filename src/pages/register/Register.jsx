import React from 'react';
import '../../styles/css/register.css'

const Register = () => {
  return (
    <div class="register">
    <div class="register-form-container">
      <h1 class="title">My account</h1>
      
      <form action="#" class="form">
        <div>
          <label for="name" class="label">Name</label>
          <input type="text" id="name" class="input input-name"
          placeholder="Pedrito Sola..." />
      
          <label for="email" class="label">Email address</label>
          <input type="email" id="email" class="input input-email" placeholder="tucorreo@host.com" />

          <label for="password" class="label">Password</label>
          <input type="password" id="password" class="input input-password" placeholder="***********" />
        </div>
        <input type="submit" class="primary-button login-button" value="Create" />
      </form>
    </div>
  </div>
  );
}

export default Register;