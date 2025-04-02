import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import foodItemsData from "./assets/data/FoodItems";
// import InsideFridge from "./components/InsideFridge";
import StartScreen from "./components/StartScreen";
import FoodDisplay from "./components/FoodDisplay";

const App = () => {
  console.log("App.jsx", foodItemsData);

  const [gameStarted, setGameStarted] = useState(false); //Zustand für den Soielstand
  return (
    <>
      {/* <ProgressBar /> */}
      <StartScreen onStart={() => setGameStarted(true)} />
      {gameStarted && (
        <div className="order">
          <FoodDisplay foodItemsData={foodItemsData} />
          {/* <InsideFridge /> */}
        </div>
      )}
    </>
  );
};

export default App;
