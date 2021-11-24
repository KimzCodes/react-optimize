import { useState } from 'react';
import ViewCounter from './components/ViewCounter';
import ViewText from './components/ViewText';

function App() {
  const [count, setCount] = useState(0);

  const counterHandler = () => {
    setCount((prev) => prev + 1);
  };

  //init counterHandlerx => fn

  return (
    <div className='App'>
      {/* <p>
        {count}
        <br />
        <button onClick={counterHandler}>Increase</button>
      </p> */}
      <ViewCounter num={count} increaseCount={counterHandler} />
      <ViewText />
    </div>
  );
}

export default App;
