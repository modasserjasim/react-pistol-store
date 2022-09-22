import './App.css';
import Header from './components/Header/Header';
import LoadAllGuns from './components/LoadAllGuns/LoadAllGuns';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Header count={count}></Header>
      <LoadAllGuns countIncrease={countIncrease}></LoadAllGuns>
    </div>
  );
}

export default App;
