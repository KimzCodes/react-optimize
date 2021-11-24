import { useState, useMemo } from 'react';
import ViewCounter from './components/ViewCounter';
import ViewText from './components/ViewText';

//re run / re evaluation
function App() {
  const [count, setCount] = useState(0);
  const name = useMemo(() => ({ name: 'kareem' }), []);

  const counterHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className='App'>
      <ViewCounter num={count} increaseCount={counterHandler} />
      <ViewText text={name} />
    </div>
  );

  //react dom run x2
}

export default App;
