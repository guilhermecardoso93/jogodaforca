import "../App.css";

export function HangmanWord() {
  const word = 'test'
  return (
    <div className="HangmanWordContainer">
      {
        word.split('').map((letter, index) => (
          <span>
            <span className="invisibleLetter">
              {letter}
            </span>
          </span>
        ))}
    </div>
  )
}