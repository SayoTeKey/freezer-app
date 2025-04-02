import React, { useState, useEffect } from "react";

const FoodDisplay = (foodMap) => {
  console.log("foodDisplay", foodMap);
  function getRandomItems(foodMap, count = 10, maxPerCategory = 2) {
    let selectedItems = [];
    let allItems = [];

    // Pro Kategorie maximal `maxPerCategory` zufällig wählen
    foodMap.forEach((items) => {
      let shuffledItems = [...items].sort(() => 0.5 - Math.random());
      allItems.push(...shuffledItems.slice(0, maxPerCategory));
    });

    // Die gesammelten Items mischen und `count` auswählen
    allItems.sort(() => 0.5 - Math.random());
    selectedItems = allItems.slice(0, count);

    return selectedItems;
  }

  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems);

  // Beim ersten Rendern zufällige Items setzen
  useEffect(() => {
    setSelectedItems(getRandomItems(foodMap));
  }, [foodMap]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
      }}
    >
      {selectedItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "18px" }}>{item.name}</h1>
          <img
            src={item.imageUrl}
            alt={item.name}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            // onError={(e) => {
            //   e.target.src = "";
            // }} // Fallback-Bild falls fehlerhaft
          />
        </div>
      ))}
    </div>
  );
};

export default FoodDisplay;
