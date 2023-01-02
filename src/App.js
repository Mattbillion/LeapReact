import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Legendary Muugii';
  
  const customStyle = {
    color: name.includes("Legendary") ? "#f3c701" : "#ffffff",
    fontSize: name.includes("Legendary") ? "56px" : "24px"
  }

  function welcomeMessage() {
    if (name.includes("Legendary")) {
      return <h1 style={customStyle}>{name}!</h1>
    }
    return <h1 style={customStyle}>{name}!</h1>
  }
  return (
    <div className="App">
     
      <header className="App-header">
        <h1>{welcomeMessage()} </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
