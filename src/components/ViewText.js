import React from 'react';
import Text from './Text';

//re run/re evaluation
const ViewText = ({ text }) => {
  console.log('view text component');
  //print x2

  //apiConnect => rn
  //run

  //apiConnectx => rn
  //run
  const apiConnect = () => {
    for (let i = 0; i <= 500_000_000; i++) {}
    console.log('view text component');
  };

  apiConnect();

  return (
    <div className='box'>
      <p>the included text:</p>
      <Text>{text}</Text>
    </div>
  );
};

export default React.memo(ViewText);
