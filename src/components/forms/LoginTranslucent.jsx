import React from 'react';
import '../../stylesheet/forms/LoginTranslucent.css';

//first, run this: 'npm install --save @fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de Font Awesome

function LoginTranslucent(props) {
  return (
    <div className='div-login-translucent'>
      <div className='form-box'>
        <div className='form-value'>
          <form>
            <h2>Login</h2>
            <div className='inputbox'>
              <i className="fa-regular fa-envelope"></i>
              <input type='email' placeholder='' required />
              <label htmlFor=''>Usuario</label>
            </div>
            <div className='inputbox'>
              <i className="fa-solid fa-lock"></i>
              <input type='password' placeholder='' required />
              <label htmlFor=''>Contraseña</label>
            </div>
            <div className='forget'>
              <label htmlFor=''>
                <input type='checkbox' /> Recordar</label> <a href='#'>Olvidé mi contraseña</a>
              
            </div>
            <button>Log in</button>
            <div className='register'>
              <p>
                No tengo una cuenta (<a href='#'>Resgistrarse</a>)
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginTranslucent;