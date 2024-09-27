import { useState } from "react";
import CheerButton from "./components/CheerButton";
import CheerForm from "./components/CheerForm";
import "./App.css";

function App() {
  const [word, setWord] = useState("MAKERS");
  const [shoutLetter, setShoutLetter] = useState("");

  return (
    <>
      <h1>Cheerleadr</h1>
      <CheerForm onSubmit={setWord} />

      <div>
        {word.split("").map((letter, i) => {
          return (
            <CheerButton
              key={`button-${i}`}
              letter={letter}
              handleClick={() => setShoutLetter(letter)}
            />
          );
        })}
      </div>
      <p className="shout">{shoutLetter}!</p>
    </>
  );
}

export default App;
