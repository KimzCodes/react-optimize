import React from "react";
import Text from "./Text";

//re run/re evaluation
const ViewText = ({ text, changeName }) => {
  const apiConnect = () => {
    for (let i = 0; i <= 500_000_000; i++) {}
    console.log("api called");
  };

  apiConnect();

  return (
    <div className="box">
      <p>the included text:</p>
      <button onClick={changeName}>Click me please</button>
      <Text>{text}</Text>
    </div>
  );
};

export default ViewText; //rf1 !== rf2
