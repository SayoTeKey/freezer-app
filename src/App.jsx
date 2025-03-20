import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import InsideFridge from "./components/InsideFridge";
import StartScreen from "./components/StartScreen";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false); //Zustand für den Soielstand
  return (
    <>
      <StartScreen onStart={() => setGameStarted(true)} />
      {gameStarted && (
        <div className="order">
          <InsideFridge />
        </div>
      )}
    </>
  );
};

export default App;
