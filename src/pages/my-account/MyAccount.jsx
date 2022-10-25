import React from 'react';
import '../../styles/css/myAccount.css'

const MyAcount = () => {
  return (
    <div class="account-form">
    <div class="account-form-container">
      <h1 class="title">My account</h1>
      <form action="#" class="form">
        <div>
          <label for="name" class="label">Name</label>
          <p class="value">Pedrito Sola</p>
      
          <label for="email" class="label">Email address</label>
          <p class="value">tucorreo@host.com</p>

          <label for="password" class="label">Password</label>
          <p class="value">***********</p>
        </div>
        <input type="submit" class="secondary-button edit-button" value="Edit" />
      </form>
    </div>
  </div>
  );
}

export default MyAcount;