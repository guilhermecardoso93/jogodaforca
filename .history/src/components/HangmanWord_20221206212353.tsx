import "../App.css";

export function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t", "e", "s"];

  return (
    <div className="HangmanWordContainer">
      {word.split("").map((letter, index) => (
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
