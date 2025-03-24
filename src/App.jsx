import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
// import InsideFridge from "./components/InsideFridge";
import StartScreen from "./components/StartScreen";
import FoodDisplay from "./components/FoodDisplay";
// import FoodCards from "./components/FoodDisplay";

import food_map from "./assets/data/FoodItems";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false); //Zustand für den Soielstand
  return (
    <>
      {/* <ProgressBar /> */}
      <StartScreen onStart={() => setGameStarted(true)} />
      {gameStarted && (
        <div className="order">
          {/* <FoodCards foodMap={food_map} /> */}

          <FoodDisplay />
          {/* <InsideFridge /> */}
        </div>
      )}
    </>
  );
};

export default App;
