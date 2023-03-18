import { useState, useMemo, useEffect } from "react";
import ViewCounter from "./components/ViewCounter";
import ViewText from "./components/ViewText";

function App() {
  const [counter, setCounter] = useState(0); //new value
  const [isRerender, setIsRerender] = useState(false);

  const counterHandler = () => {
    setCounter((prev) => prev + 1); //rffn2
  };

  useEffect(() => {
    if (counter > 3) {
      setIsRerender(true);
    }
  }, [counter]);

  const styles = useMemo(() => {
    if (isRerender) {
      return { fontSize: "25px" };
    }
    return { fontSize: "20px" };
  }, [isRerender]); //rfobj2

  return (
    <div className="App">
      <ViewCounter counterHandler={counterHandler} counter={counter} />
      <ViewText style={styles} />
    </div>
  );
}

export default App;
