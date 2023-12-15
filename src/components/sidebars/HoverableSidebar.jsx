import React, { useState } from 'react';
import '../../stylesheet/sidebars/HoverableSidebar.css';
import ProfileImage from '../../images/Gato.png';

//first, run this: 'npm install --save @fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de Font Awesome

function HoverableSidebar(props) {

  const [hoverableSidebarClass, setHoverableSidebarClass] = useState('');

  const handleCloseBtn = () => {
    if (hoverableSidebarClass === ''){
      setHoverableSidebarClass('open');
    } else {
      setHoverableSidebarClass('');
    }
  }

  return (
    <div className={`hoverable-sidebar ${hoverableSidebarClass}`}>
      <div className='logo-details'>
        <i className="fa-solid fa-f icon"></i>
        <div className='logo-name'>Firulais</div>
        <i className="fa-solid fa-bars" id='btn' onClick={handleCloseBtn}></i>
      </div>
      <ul className='nav-list'>
        <li>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type='text' placeholder='Search...' />
          <span className='tooltip'>Search</span>
        </li>
        <li>
          <a href='#'>
            <i className="fa-solid fa-table-cells-large"></i>
            <span className='links_name'>Dashboard</span>
          </a>
          <span className='tooltip'>Dashboard</span>
        </li>
        <li>
          <a href='#'>
            <i className="fa-regular fa-user"></i>
            <span className='links_name'>Dashboard</span>
          </a>
          <span className='tooltip'>User</span>
        </li>
        <li>
          <a href='#'>
            <i className="fa-regular fa-message"></i>
            <span className='links_name'>Messages</span>
          </a>
          <span className='tooltip'>Messages</span>
        </li>
        
        <li>
          <a href='#'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='links_name'>Order</span>
          </a>
          <span className='tooltip'>Order</span>
        </li>
        <li>
          <a href='#'>
            <i className="fa-regular fa-heart"></i>
            <span className='links_name'>Saved</span>
          </a>
          <span className='tooltip'>Saved</span>
        </li>
        <li>
          <a href='#'>
            <i className="fa-solid fa-gear"></i>
            <span className='links_name'>Settings</span>
          </a>
          <span className='tooltip'>Settings</span>
        </li>
        <li className='profile'>
          <div className='profile-details'>
            <img src={ProfileImage} alt='profileImg'/>
            <div className='name-job'>
              <div className='name'>Firulais Escobar</div>
              <div className='job'>Web designer</div>
            </div>
          </div>
          <i className="fa-solid fa-arrow-right-from-bracket" id='log_out'></i>
        </li>
      </ul>
    </div>
  );
}

export default HoverableSidebar;