import "../App.css";

type HangmanWordProps = {
  guessedLetters:string[];
  wordToGuess: string;
}

export function HangmanWord({guessedLetters, wordToGuess} : HangmanWordProps) {
  
  
    return (
    <div className="HangmanWordContainer">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
