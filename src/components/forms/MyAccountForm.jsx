import React, { useState } from 'react';

//components
import Button from '../../components/pure/Button';
import InputField from '../../components/pure/InputField';

//styles
import '../../styles/css/components/forms/myAccountForm.css'

const MyAccountForm = () => {
  
  const [edit, setEdit] = useState(false);

  return (
    <div className="account-form">
      <div className="account-form-container">
        <img alt="logo"  className="logo" src="https://st2.depositphotos.com/1768926/11968/v/450/depositphotos_119685590-stock-illustration-beauty-lotus-logo-template.jpg" />
        <h1 className="title">My account</h1>
        <div action="#" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <p className="value">Pedrito Sola</p>
            {
              edit
              ? <InputField id={'email'} placeholder={'ejemplo@correo.com...'} textLabel={'Correo'} type={'email'} />
              : 
              <>
                <label className="label">Correo</label>
                <p className="value">tucorreo@host.com</p>
              </>
            }
            {
              edit
              ? <InputField id={'prev-password'} placeholder={'***********'} textLabel={'Contraseña anterior'} type={'password'} />
              : 
                <>
                  <label className="label">Password</label>
                  <p className="value">***********</p>
                </>
              
            }
            {
              edit &&
              <div>
                <InputField id={'new-password'} placeholder={'***********'} textLabel={'Nueva contraseña'} type={'password'} />
                <InputField id={'repeat-new-password'} placeholder={'***********'} textLabel={'Repite la contraseña'} type={'password'} />
              </div>
            }
          </div>
          <Button buttonText={edit ? 'Confirmar' : 'Editar informacion' } typeButton={'secondary-button'} onClick={()=>setEdit(!edit)} />
        </div>
      </div>
    </div>
  );
}

export default MyAccountForm;