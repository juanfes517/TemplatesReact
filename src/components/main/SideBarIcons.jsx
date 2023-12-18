import React, { useState } from 'react';
import '../../stylesheet/main/SidebarIcons.css';
import ProfileImage from '../../images/Gato.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SideBarIcons(props) {

  const [lastSelectedItem, setLastSelectedItem] = useState(null);

  const handleClick = (event) => {
    assignClass(event);
  }

  const assignClass = (event) => {
    const selectedItem = event.currentTarget;
    if (selectedItem.classList.contains('element-active')) {
      selectedItem.classList.remove('element-active');
    } else{
      selectedItem.classList.add('element-active');
      if (lastSelectedItem !== null && lastSelectedItem !== selectedItem){
        lastSelectedItem.classList.remove('element-active');
      }
    }
    setLastSelectedItem(selectedItem);
  }

  return (
    <div className="sidebar-icons">
      <ul>
        <li className='list-element' onClick={handleClick}>
          <div className='icon-container'>
            <i className="fa-solid fa-hat-wizard"></i>
          </div>
          <span className='tooltip'>Animations</span>
        </li>
        <li className='list-element' onClick={handleClick}>
          <div className='icon-container'>
            <i className="fa-solid fa-pen"></i>
          </div>
          <span className='tooltip'>Forms</span>
        </li>
        <li className='list-element' onClick={handleClick}>
          <div className='icon-container'>
            <i className="fa-solid fa-keyboard"></i>
          </div>
          <span className='tooltip'>Inputs</span>
        </li>
        <li className='list-element' onClick={handleClick}>
          <div className='icon-container'>
            <i className="fa-solid fa-inbox"></i>
          </div>
          <span className='tooltip'>Menus</span>
        </li>
        <li className='list-element' onClick={handleClick}>
          <div className='icon-container'>
            <i className="fa-solid fa-flask"></i>
          </div>
          <span className='tooltip'>Sidebars</span>
        </li>
        <li className='list-element' onClick={handleClick}>
          <div className='icon-container'>
            <i className="fa-solid fa-sliders"></i>
          </div>
          <span className='tooltip'>Sliders</span>
        </li>
        <li className='list-element' onClick={handleClick}>
          <div className='icon-container'>
            <i className="fa-solid fa-table"></i>
          </div>
          <span className='tooltip'>Tables</span>
        </li>
        <li className='list-image'>
          <img src={ProfileImage} alt='profileImg' />
        </li>
        <div className='indicator-icons'></div>
      </ul>
    </div>
  );
}

export default SideBarIcons;