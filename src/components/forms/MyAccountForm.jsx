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
        <img alt="logo"  className="logo" src="https://scontent.fmex7-1.fna.fbcdn.net/v/t39.30808-6/280951877_112559854786002_6645048926993550950_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEXMDOvOHKjv7L5sIaLZfUl5KsPiLZKYb_kqw-ItkphvwKFrGU4OoOoHzlz9rgdwAZywN7JQ2Eg0PaRPP1111K-&_nc_ohc=c5RAnQ3iKpwAX8hzcwh&_nc_ht=scontent.fmex7-1.fna&oh=00_AfCeML1yjMBQjbXNpaHqN_Rv-E-5ED4LREWUS3yLy2BjWg&oe=636A3E24" />
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