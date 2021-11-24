import React from 'react';
import Text from './Text';

//re run/re evaluation
//text => name => 1
//addAge => 11 vs 13 = fasle
const ViewText = ({ text, addAge }) => {
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
      <button onClick={addAge}>add Age</button>
      <p>the included text:</p>
      <Text>{text.name}</Text>
      <Text>{text.age}</Text>
    </div>
  );
};

export default React.memo(ViewText);
