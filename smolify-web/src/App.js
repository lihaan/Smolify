import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import convert from "./convert";



function App() {

  const hostname = "smoli.fy"
  const [shortenedLink, setShortenedLink] = useState("")
  const [longLink, setLongLink] = useState("")

  function handleClick() {
    let newLink = convert(longLink)
    setShortenedLink(newLink)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="h1Title">Smolify</h1>
        <p id="pCaption">Give me a URL and I'll make it smol and friendly!</p>
        <input
          type="text"
          id="inputLink"
          size="22"
          placeholder="Insert not smol URL here"
          onChange={event => setLongLink(event.target.value)}
          value={longLink}
        />
        <button type="button" id="buttonSubmit" onClick={handleClick}>
          Shorten
        </button>
        <div id="divShortenedContainer">
          <p id="pShortenedHeader">Your shortened link is:</p>
          <a id="aShortenedLink" href={shortenedLink}>{hostname}/{shortenedLink}</a>
        </div>
      </header>
    </div>
  );
}

export default App;
