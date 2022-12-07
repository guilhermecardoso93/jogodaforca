import styles from "./Keyboard.module.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetter,
  inactiveLetter,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div className={styles.KeyboardContainer}>
      {KEYS.map((key) => {
        return (
          <button 
            onClick={() => addGuessedLetter(key)}
            key={key} 
            className={styles.btn}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
