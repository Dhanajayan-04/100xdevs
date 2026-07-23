import { useState, useEffect } from 'react'

function App() {
  const [color, setColor] = useState('');

  useEffect(() => {
    document.body.style.background = color;
  }, [color])

  const changeBG = (e) => {
    setColor(e.target.innerText.toLowerCase())
  }

  return (
    <div className="toolbar">
        <span onClick={changeBG}>Red</span>
        <span onClick={changeBG}>Yellow</span>
        <span onClick={changeBG}>Purple</span>
        <span onClick={changeBG}>Green</span>
        <span onClick={changeBG}>Blue</span>
        <span onClick={changeBG}>Orange</span>
    </div>
  )
}

export default App
