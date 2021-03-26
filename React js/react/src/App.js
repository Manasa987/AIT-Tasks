import logo from './logo.svg';
import './App.css';
import Functional from './components/Functional'
import Classfync from './components/Classfunc'
import State from './components/State'
function App() {
  return (
    <div className="App">
      <Functional/>
      <Classfync/>
      <State/>
    </div>
  );
}

export default App;
