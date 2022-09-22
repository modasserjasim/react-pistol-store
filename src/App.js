import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import LoadAllGuns from './components/LoadAllGuns/LoadAllGuns';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LoadAllGuns></LoadAllGuns>
    </div>
  );
}

export default App;
