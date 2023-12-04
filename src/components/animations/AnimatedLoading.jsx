import React from 'react';
import '../../stylesheet/animations/AnimatedLoading.css';

function AnimatedLoading(props){
  return (
    <div className='animated-loading'>
      <div className='smoke'>
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
    </div>
  );
}

export default AnimatedLoading;