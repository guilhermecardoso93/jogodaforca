import "../App.css";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  revelWord?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  revelWord = false,
}: HangmanWordProps) {
  return (
    <div className="HangmanWordContainer">
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || revelWord
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
