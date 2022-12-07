import { useState } from "react";
import words from "./wordList.json";

import './App.css'

export function App() {
  const randomWords = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [wordToGuess, setWordToGuess] = useState(randomWords);
  const [ guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess);
  return (
    <div className='container'>
      <h1>Oi</h1>
    </div>
  );
}
