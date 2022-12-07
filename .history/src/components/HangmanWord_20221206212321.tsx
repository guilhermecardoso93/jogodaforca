import "../App.css";

export function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t", "e", "s"];

  return (
    <div className="HangmanWordContainer">
      {word.split("").map((letter, index) => (
        <span >
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
            key={index}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
