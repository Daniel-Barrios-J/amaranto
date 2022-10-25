import React from 'react';

const NewPassword = () => {
  return (
    <div class="new-password-form">
    <div class="new-password-form-container">
      <img src="../logos/logo_yard_sale.svg" alt="logo"  class="logo" />
      <h1 class="title">Create a new password</h1>
      <p class="subtitle">Enter a new password for your account</p>
      <form action="#" class="form">
        <label for="password" class="label">Password</label>
        <input type="password" id="password" class="input input-password"
        placeholder="***********" />
    
        <label for="r-password" class="label">Re-enter password</label>
        <input type="password" id="new-password" class="input input-password" placeholder="***********" />
      
        <input type="submit" class="primary-button login-button" value="Confirm" />
      </form>
    </div>
  </div>
  );
}

export default NewPassword;