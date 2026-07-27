import { useState } from "react";
import "./App.css";

function App() {
  const [words, setWords] = useState("");
  const [para, setPara] = useState("");

  const wordsArr = ['cat', 'dog', 'house', 'car', 'tree', 'book', 'computer', 'mountain', 'beach', 'sun'];

  function generateParagraph() {
    if(!words || isNaN(words) || words <= 0) {
      alert("Please enter a valid positive number of words.");
      return;
    }

    let sentence = '';
    for(let i = 0; i < words; i++){
      const randomNum = Math.floor(Math.random() * wordsArr.length);
      sentence += wordsArr[randomNum] + " ";
    }

    setPara(sentence.trim());
  }

  return (
    <div className="container">
    <h1>Paragraph Generator</h1>

    <div className="input-section">
      <input type="number" value={words} onChange={(e) => setWords(e.target.value)} 
      placeholder="Enter number of words"/>

      <button onClick={generateParagraph}>Generate</button>
    </div>

    <div className="output">{para}</div>
    </div>
  )
}

export default App
