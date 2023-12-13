import React, { useEffect } from 'react';
import '../../stylesheet/menus/NavigationMenuIndicator.css';

//first, run this: 'npm install --save @fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de Font Awesome

function NavigationMenuIndicator(props) {

  useEffect(() => {
    const listaItems = document.querySelectorAll('li');
    const listaItemsArray = Array.from(listaItems);

    listaItemsArray.forEach(item => {
      item.addEventListener('click', () => handleClick(item, listaItemsArray));
    });
  }, []);

  const handleClick = (item, items) => {
    items.forEach(i => {
      i.classList.remove('active');
    });
    item.classList.add('active');
  }

  return (
    <div className='div-navigation-menu-indicator'>
      <div className='navigation'>
        <ul>
          <li>
            <a href='#' >
              <span className='icon'>
                <i className='fa-solid fa-house'></i>
              </span>
              <span className='text'>Home</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'>
                <i className='fa-solid fa-user'></i>
              </span>
              <span className='text'>Profile</span>
            </a>
          </li>
          <li className='active'>
            <a href='#'>
              <span className='icon'>
                <i className='fa-solid fa-comment'></i>
              </span>
              <span className='text'>Message</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'>
                <i className='fa-solid fa-camera'></i>
              </span>
              <span className='text'>Photos</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'>
                <i className='fa-solid fa-gear'></i>
              </span>
              <span className='text'>Settings</span>
            </a>
          </li>
          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  );
}

export default NavigationMenuIndicator;