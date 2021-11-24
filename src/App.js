import { useState, useMemo, useCallback } from 'react';
import ViewCounter from './components/ViewCounter';
import ViewText from './components/ViewText';

//re run / re evaluation
function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'kareem' });

  //counterHandler => fn => 1
  //counterHandler => fn => 30
  const counterHandler = () => {
    setCount((prev) => prev + 1);
  };

  //name => obj => 12
  //name => obj => 15

  const name = useMemo(() => {
    return user;
  }, [user]);

  //ageHandler => fn => 20
  const ageHandler = useCallback(() => {
    setUser((prev) => {
      if (prev.age) {
        return prev;
      } else {
        return { ...prev, age: 30 };
      }
    });
  }, []);

  return (
    <div className='App'>
      <ViewCounter num={count} increaseCount={counterHandler} />
      <ViewText text={name} addAge={ageHandler} />
    </div>
  );

  //react dom run x2
}

export default App;
