import React from 'react';

const ViewCounter = ({ num, increaseCount }) => {
  console.log('view counter component');
  //run console log

  return (
    <div className='box'>
      <p>{num}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default ViewCounter;
