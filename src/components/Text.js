import React from 'react';

const Text = ({ children }) => {
  console.log(' text component');

  let text = children ? children : 'no text';
  return <div>{text}</div>;
};

export default Text;
