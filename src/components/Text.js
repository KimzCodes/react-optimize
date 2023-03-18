import React from "react";

const Text = ({ children }) => {
  console.log(" text component");

  let text = children.name ? children.name : "no text";
  return <div>{text}</div>;
};

export default Text;
