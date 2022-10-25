import React from 'react';
import '../../styles/css/emailSent.css'

const EmailSent = () => {
  return (
    <div class="email">
      <div class="email-container">
        <img src="../logos/logo_yard_sale.svg" alt="logo"  class="logo" />
        <h1 class="title">Email has been sent!</h1>
        <p class="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div class="email-icon">
          <img src="../icons/email.svg" alt="email" />
        </div>
        <button class="primary-button login-button">Login</button>
        <p class="resend">
          <span>Didn't receive de email?</span>
          <a href="#">Resend</a>
        </p>
      </div>
    </div>
  );
}

export default EmailSent;