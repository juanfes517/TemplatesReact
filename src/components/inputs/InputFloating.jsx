import React from 'react';
import '../../stylesheet/inputs/InputFloating.css';

function InputFloating(props) {
  return (
    <div className='div-input-floating'>
      <div className='wrapper'>
        <input type='text' name='input' placeholder=' ' />
        <label for='input'>Floating label</label>
      </div>
    </div>
  );
}

export default InputFloating;