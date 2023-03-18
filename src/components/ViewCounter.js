import React from "react";

//re run /re evaluation
const ViewCounter = ({ counterHandler, counter }) => {
  console.log("view counter ");

  return (
    <div className="box">
      <p>{counter}</p>
      <button onClick={counterHandler}>Increase</button>
    </div>
  );
};

export default ViewCounter;
