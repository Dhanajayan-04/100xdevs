import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="toolbar">
      <button className="red" onClick={() => setColor("red")}>Red</button>

      <button className="yellow" onClick={() => setColor("yellow")}>Yellow</button>

      <button className="black" onClick={() => setColor("black")}>Black</button>

      <button className="purple" onClick={() => setColor("purple")}>Purple</button>

      <button className="green" onClick={() => setColor("green")}>Green</button>

      <button className="blue" onClick={() => setColor("blue")}>Blue</button>

      <button className="default" onClick={() => setColor("white")}>Default</button>
    </div>
  );
}

export default App;