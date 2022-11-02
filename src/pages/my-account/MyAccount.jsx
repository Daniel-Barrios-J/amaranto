import React, { useState } from 'react';
import Header from '../../components/container/Header';
import Button from '../../components/pure/Button';
import InputField from '../../components/pure/InputField';
// import { useNavigate } from 'react-router-dom';
import '../../styles/css/myAccount.css'

const MyAcount = () => {
  
  const [edit, setEdit] = useState(false);
  // const navigate = useNavigate();

  return (
  <>
    <Header></Header>
    <div className="account-form">
      <div className="account-form-container">
        <h1 className="title">My account</h1>
        <div action="#" className="form">
          <div>
            <label for="name" className="label">Name</label>
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
              ? <InputField id={'email'} placeholder={'ejemplo@correo.com...'} textLabel={'Contraseña anterior'} type={'email'} />
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
  </>
  );
}

export default MyAcount;