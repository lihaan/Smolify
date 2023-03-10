import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import convert from "./convert";
import redirect from "./redirect";

export const HOSTNAME = "http://35.206.254.212";
export const PORT_FRONTEND = "3000"
export const PORT_BACKEND = "8000"

function App() {
  const [shortenedLink, setShortenedLink] = useState("");
  const [longLink, setLongLink] = useState("");
  const [resultStyles, setResultStyles] = useState({ visibility: "hidden" })

  function handleClick() {
    setResultStyles({
      display: "hidden"
    });
    convert(longLink).then((res) => {
      console.log(res);
      if (res !== "") {
        setShortenedLink(res);
      } else {
        alert("invalid URL provided!")
      }
    });
    setResultStyles({
      display: "block"
    });
  }

  useEffect(() => {
    const hash = window.location.pathname.substring(
      1,
      window.location.pathname.length
    );
    console.log("filtered", hash)
    if (hash) {
      redirect(hash).then((res) => {
        console.log(res);
        window.location.replace(res);
      });
    }
  }, []);

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
          onChange={(event) => setLongLink(event.target.value)}
          value={longLink}
        />
        <button type="button" id="buttonSubmit" onClick={handleClick}>
          Shorten
        </button>
        <div id="divShortenedContainer" style={resultStyles}>
          <p id="pShortenedHeader">Your shortened link is:</p>
          <a id="aShortenedLink" href={shortenedLink}>
            {HOSTNAME}:{PORT_FRONTEND}/{shortenedLink}
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
