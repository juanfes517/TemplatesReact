import React, { useState } from 'react';
import '../../stylesheet/main/SidebarIcons.css';
import ProfileImage from '../../images/Gato.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SideBarIcons(props) {

  const [lastSelectedItem, setLastSelectedItem] = useState(null);

  //Verifica si un elemento tiene una clase
  const hasClassName = (element, className) => {
    return element.classList.contains(className);
  }

  //Verifica si el mismo elemento fue seleccionado dos veces consecutivas
  const areItemsDifferent = (selectedItem) => {
    return lastSelectedItem !== null && lastSelectedItem !== selectedItem;
  }

  const handleClick = (event) => {
    let newClass = '';
    const selectedItem = event.currentTarget;
    const tooltipText = selectedItem.querySelector('.tooltip').innerText;

    if (hasClassName(selectedItem, 'element-active')) {
      selectedItem.classList.remove('element-active');
      newClass = 'close';
    } else {
      selectedItem.classList.add('element-active');
      newClass = 'open';
      if (areItemsDifferent(selectedItem)) {
        lastSelectedItem.classList.remove('element-active');
      } else {
        newClass = 'open';
      }
    }
    props.openOrCloseSidebarList(tooltipText, newClass);
    setLastSelectedItem(selectedItem);
  }

  return (
    <div className="sidebar-icons">
      <ul>
        <li className='list-image' onClick={() => props.handleCat()}>
          <img src={ProfileImage} alt='profileImg' />
        </li>
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
      </ul>
    </div>
  );
}

export default SideBarIcons;