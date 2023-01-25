import './App.css';
import Wisdom from './components/Wisdom';
import backgroundImage from "../src/images/background.png"

function App() {
  return (
    <div className="App">
      <div className='Wrapper'>
      <img src={backgroundImage} alt="Something nice" className='backgroundImage' />
      <Wisdom />
      </div>
    </div>
  );
}

export default App;
