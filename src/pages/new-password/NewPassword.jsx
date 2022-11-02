import React from 'react';

const NewPassword = () => {
  return (
    <div className="new-password-form">
    <div className="new-password-form-container">
      <img src="../logos/logo_yard_sale.svg" alt="logo"  className="logo" />
      <h1 className="title">Create a new password</h1>
      <p className="subtitle">Enter a new password for your account</p>
      <form action="#" className="form">
        <label for="password" className="label">Password</label>
        <input type="password" id="password" className="input input-password"
        placeholder="***********" />
    
        <label for="r-password" className="label">Re-enter password</label>
        <input type="password" id="new-password" className="input input-password" placeholder="***********" />
      
        <input type="submit" className="primary-button login-button" value="Confirm" />
      </form>
    </div>
  </div>
  );
}

export default NewPassword;