import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Smolify</h1>
        <input type="text" id="inputLink" size="22" placeholder='Insert not smol link here'/>
      </header>
    </div>
  );
}

export default App;
