import React from 'react';
import '../../stylesheet/sliders/AccordionSlider.css';

function AccordionSlider(props) {
  return (
    <div className='accordion'>
      <ul>
        <li>
          <div>
            <a href='#'>
              <h2>Un gato</h2>
              <p>Un gato caminando todo chiquito, todo panzón</p>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href='#'>
              <h2>Otro gato</h2>
              <p>Otro gato que elijio el camino de la violencia</p>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href='#'>
              <h2>Un pato</h2>
              <p>Un pato feliz que no confia en los gatos</p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AccordionSlider;