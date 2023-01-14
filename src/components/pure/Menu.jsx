//react, router
import React from 'react';
import { useNavigate } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetUserState } from '../../store/userState/reducer';

//styles
import '../../styles/css/components/pure/menu.css'

const Menu = ({className = ''}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.userState.user)
  return (
    <div className={`mobile-menu ${className}`}>
      <h3>Menu</h3>
      <ul className='ul-menu'>
        <li onClick={()=>navigate('/')}>Inicio</li>
        <li onClick={()=>navigate('/cotizacion-arreglos')}>Arreglos</li>
        <li onClick={()=>navigate('/cotizacion-eventos')}>Eventos</li>
      </ul>
      
      {
        user.logged && 
          <ul className='ul-account'>
            <li onClick={()=>navigate('/my-orders')}>Mis compras</li>
            <li onClick={()=>navigate('/my-account')}>Mi Cuenta</li>
          </ul>
      }

      <ul className="ul-email">
        {
          user.logged && <li onClick={()=>navigate('/my-account')} className="correo">{user.email}</li>
        }
        <li
          className="sign-out-menu"
          onClick={ ()=> {
              if(user.logged) {
                dispatch(resetUserState(true))
                alert('Se ha cerrado tu sesion correctamente')
                navigate('/');
              } else {
                navigate('/login')
              }
            }
          }
        >
          { user.logged ? 'Log Out' : 'Log In' }
        </li>
      </ul>
    </div>
  );
}

export default Menu;
