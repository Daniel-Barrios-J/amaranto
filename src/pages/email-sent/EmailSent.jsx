import React from 'react';
import '../../styles/css/emailSent.css'

const EmailSent = () => {
  return (
    <div className="email">
      <div className="email-container">
        <img src="../logos/logo_yard_sale.svg" alt="logo"  className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-icon">
          <img src="../icons/email.svg" alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive de email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
}

export default EmailSent;