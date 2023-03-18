import { memo } from "react";
import Text from "./Text";

const ViewText = ({ style, textHandler }) => {
  const apiConnect = () => {
    for (let i = 0; i <= 500_000_000; i++) {}
    console.log("api called");
  };

  apiConnect();

  console.log("view text", style);

  return (
    <div className="box">
      <button onClick={textHandler}>text</button>
      <p>the included text:</p>

      <Text>kareem</Text>
    </div>
  );
};

export default memo(ViewText);
