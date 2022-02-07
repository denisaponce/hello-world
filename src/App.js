import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hello, setHello] = useState("");
  
  useEffect(() => {
    setHello("¡Hello World! 😉");
  }, []);
  return (
    <div className="container">
      <h1 className="saludo"> Hello World App</h1>
      
      <p className="saludo-2"> {hello} </p>
    </div>
  );
}

export default App;