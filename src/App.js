import logo from './logo.svg';
import './App.css';

function App() {

  let name = 'Legendary Muugii';
  const name1 = 'Buzz Muugii'
  
  
  const customStyle = {
    color: name.includes("Legendary") ? "#f3c701" : "#ffffff",
    fontSize: name.includes("Legendary") ? "56px" : "24px"
  }


  function welcomeMessage() {
    if(name.includes("Legendary")) {
      return <h1 style={customStyle}>{name}</h1>
    }
    if(name.includes("Buzz")) {
      return <h1 style={customStyle}>{name}</h1>
    }
  }

  const changeName = () => {
    name += "Chad"
    return <h1>{welcomeMessage()}</h1>
  }
  return (
    <div className="App">
     
      <header className="App-header">
        <h1>{welcomeMessage()} </h1>
        <button onClick={changeName()}>Change name</button>
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
