import { useState } from "react"
import words from './wordList.json'

 const randomWords = () => {
  words[Math.floor(Math.random() * words.length)]
 }


export function App() {
  const [ wordToGuess, setWordToGuess] = useState(randomWords)

  console.log(wordToGuess)
  return (
    <div>
      <h1>Oi</h1>
    </div>
  )
}


