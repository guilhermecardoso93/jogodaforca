import styles from './Keyboard.module.css'
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
]


export function Keyboard() {
  return (
    <div className={styles.KeyboardContainer}>
     {KEYS.map(key => {
      return (
        <button key={key}
        className={styles.btn}>
          {key}
        </button>)
     })}
    </div>
  )
}