import React, {useState} from 'react';
import '../../stylesheet/forms/LoginRegisterTransition.css';

//first, run this: 'npm install --save @fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de Font Awesome

function LoginRegisterTransition(props) {

  const [containerActive, setContainerActive] = useState('');
  
  const activateContainer = () => {
    setContainerActive('active');
    console.log(containerActive);
  }

  const desactivateContainer = () => {
    setContainerActive('');
    console.log(containerActive);
  }

  return (
    <div className='div-LoginRegisterTransition'>
      <div className={`container ${containerActive}`} >
        <div className='form-container sign-up' >
          <form>
            <h1>Create Account</h1>
            <div className='social-icons'>
              <a href='#' className='icon'><i className='fa-brands fa-google-plus-g'></i></a>
              <a href='#' className='icon'><i className='fa-brands fa-facebook-f'></i></a>
              <a href='#' className='icon'><i className='fa-brands fa-github'></i></a>
              <a href='#' className='icon'><i className='fa-brands fa-linkedin-in'></i></a>
            </div>
            <span>Or use your email to register</span>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='button'>Sign Up</button>
          </form>
        </div>
        <div className='form-container sign-in' >
          <form>
            <h1>Sign In</h1>
            <div className='social-icons'>
              <a href='#' className='icon'><i className='fa-brands fa-google-plus-g'></i></a>
              <a href='#' className='icon'><i className='fa-brands fa-facebook-f'></i></a>
              <a href='#' className='icon'><i className='fa-brands fa-github'></i></a>
              <a href='#' className='icon'><i className='fa-brands fa-linkedin-in'></i></a>
            </div>
            <span>Or use your email and password</span>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='button'>Sign In</button>
          </form>
        </div>
        <div className='toggle-container' >
          <div className='toggle'>
            <div className='toggle-panel toggle-left'>
              <h1>Are you Firulais?</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className='hidden' onClick={desactivateContainer}>Sign In</button>
            </div>
            <div className='toggle-panel toggle-right'>
              <h1>Hello Firulais!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className='hidden' onClick={activateContainer}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterTransition;