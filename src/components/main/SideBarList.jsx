import React from 'react';
import { getListComponents } from './Designs';
import '../../stylesheet/main/SideBarList.css';

function SideBarList(props) {


  return (
    <div className={`div-sidebar-list ${props.classSidebarList}`}>
      <p className='title'>{props.selectedItem}</p>
      {
        getListComponents(props.selectedItem)?.map((item, index) => (
          <div key={index} className='component-sidebar-list'>
            <span>{item}</span>
          </div>
        ))
      }
    </div>

  );
}

export default SideBarList;