import React from 'react';
import '../../stylesheet/main/MainSection.css';
import { getComponent } from './Designs';

function MainSection(props) {
  return (
    <div className={`div-main-section ${props.classMainSection}`}>
      {getComponent(props.selectedComponent)}
    </div>
  );
}

export default MainSection;