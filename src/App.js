import { useState, useMemo, useCallback } from 'react';
import ViewCounter from './components/ViewCounter';
import ViewText from './components/ViewText';

//re run / re evaluation
function App() {
  const [count, setCount] = useState(0);

  //counterHandler => fn => 11
  //counterHandler => fn => 12
  const counterHandler = () => {
    setCount((prev) => prev + 1);
  };

  //name => obj => kareem => 1
  const name = useMemo(() => {
    return { name: 'kareem' };
  }, []);

  return (
    <div className='App'>
      <ViewCounter num={count} increaseCount={counterHandler} />
      <ViewText text={name} />
    </div>
  );

  //react dom run x2
}

export default App;
