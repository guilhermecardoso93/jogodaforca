import { useEffect, useState } from "react";
import words from "./wordList.json";

import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";

import "./App.css";

export function App() {
  const randomWords = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [wordToGuess, setWordToGuess] = useState(randomWords);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  console.log(wordToGuess);
  return (
    <div className="container">
      <div className="loseOrWin">Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}
