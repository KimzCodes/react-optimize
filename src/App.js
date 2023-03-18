import { useState, useMemo, useCallback, useEffect } from "react";
import ViewCounter from "./components/ViewCounter";
import ViewText from "./components/ViewText";

function App() {
  const [counter, setCounter] = useState(0); //new value
  const [counterTwo, setCounterTwo] = useState(0);
  const [isRerender, setIsRerender] = useState(false);

  useEffect(() => {
    if (counter > 3) {
      setIsRerender(true);
    }
  }, [counter]);

  const counterHandler = useCallback(() => {
    setCounter((prev) => prev + 1); //rffn1
  }, []);

  const textHandler = useCallback(() => {
    setCounterTwo((prev) => prev + 1); //rffn1
  }, []);

  const styles = useMemo(() => {
    if (isRerender) {
      return { fontSize: "25px" };
    }
    return { fontSize: "20px" };
  }, [isRerender]); //rfobj2

  return (
    <div className="App">
      <ViewCounter counterHandler={counterHandler} counter={counter} />
      <ViewText style={styles} textHandler={textHandler} />
    </div>
  );
}

export default App;
