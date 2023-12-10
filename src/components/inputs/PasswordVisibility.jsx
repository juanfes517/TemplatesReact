import React, {useState} from 'react';
import '../../stylesheet/inputs/PasswordVisibility.css';

//first, run this: 'npm install --save @fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de Font Awesome

function PasswordVisibility(props) {

  const [typeInput, setTypeInput] = useState('password');
  const [classEye, setClassEye] = useState('fa-eye');

  const handdleVisibility = () => {
    if (typeInput === 'password'){
      setTypeInput('text');
      setClassEye('fa-eye-slash');
    } else {
      setTypeInput('password');
      setClassEye('fa-eye');
    }
  }

  return (
    <div className='div-password-visibility'>
      <input type={`${typeInput}`} placeholder='Enter Password'/>
      <span>
        <i className={`fa-regular ${classEye}`} onClick={handdleVisibility}></i>
      </span>
    </div>
  );
}

export default PasswordVisibility;