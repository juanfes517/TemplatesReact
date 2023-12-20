import React from 'react';
import { getListComponents } from './Designs';
import '../../stylesheet/main/SideBarList.css';

function SideBarList(props) {

  const handleClick = (event) => {
    const selectedItem = event.currentTarget;
    const selectedText = selectedItem.querySelector('.text-component').innerText;
    console.log(selectedText); //Borrar
    props.handleSelectedComponent(selectedText);
  }

  return (
    <div className={`div-sidebar-list ${props.classSidebarList}`}>
      <p className='title'>{props.selectedItem}</p>
      {
        getListComponents(props.selectedItem)?.map((item, index) => (
          <div key={index} className='component-sidebar-list' onClick={handleClick}>
            <span className='text-component'>{item}</span>
          </div>
        ))
      }
    </div>

  );
}

export default SideBarList;