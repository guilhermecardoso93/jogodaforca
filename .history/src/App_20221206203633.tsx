import { useState } from "react";
import words from "./wordList.json";

export function App() {
  const randomWords = () => {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  const [wordToGuess, setWordToGuess] = useState(randomWords);

  console.log(wordToGuess);
  return (
    <div>
      <h1>Oi</h1>
    </div>
  );
}
