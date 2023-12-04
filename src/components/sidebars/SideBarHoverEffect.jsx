import React from 'react';
import '../../stylesheet/sidebars/SideBarHoverEffect.css';
import icon1 from '../../images/icons/icon1.png';
import icon2 from '../../images/icons/icon2.png';
import icon3 from '../../images/icons/icon3.png';
import icon4 from '../../images/icons/icon4.png';
import icon5 from '../../images/icons/icon5.png';
import icon6 from '../../images/icons/icon6.png';

function SideBarHoverEffect(props) {
  return (
    <div className='sidebar'>
      <div className='item'>
        <img className='icon' src={icon1} width={25} height={25}/>
        <div className='text'>The app</div>
      </div>
      <hr id='line'/>
      <div className='item'>
        <img className='icon' src={icon2} />
        <div className='text'>Dashboard</div>
      </div>
      <div className='item'>
        <img className='icon' src={icon3} />
        <div className='text'>Search</div>
      </div>
      <div className='item'>
        <img className='icon' src={icon4} />
        <div className='text'>Insights</div>
      </div>
      <div className='item'>
        <img className='icon' src={icon5} />
        <div className='text'>Docs</div>
      </div>
      <div className='item'>
        <img className='icon' src={icon6} />
        <div className='text'>Settings</div>
      </div>
    </div>
  );
}

export default SideBarHoverEffect;