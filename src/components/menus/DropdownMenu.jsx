import React from 'react';
import '../../stylesheet/menus/DropdownMenu.css'

function DropdownMenu(props) {
  return (
    <div className='div-dropdown-menu'>
      <ul className='menu'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>Portafolio</a>
        </li>
        <li>
          <a href='/'>Services</a>
          <div className='dropdown'>
            <a href='/'>Development</a>
            <a href='/'>Graphic Design</a>
            <a href='/'>Marketing</a>
            <a href='/'>Copywriting</a>
          </div>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a href='/'>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;