// import React, { useState, useEffect } from "react";
// import food_map from "../../src/assets/data/FoodItems"; // Importiere dein Map-Objekt

// // function getRandomItems(foodMap, count = 10, maxPerCategory = 2) {
// //   let allItems = [];

// //   // Konvertiere die Map in ein Array von Arrays (Kategorie -> Items)
// //   foodMap.forEach((items) => {
// //     // Mische die Items einer Kategorie
// //     let shuffledItems = [...items].sort(() => 0.5 - Math.random());
// //     // Wähle maximal maxPerCategory Items aus
// //     allItems.push(...shuffledItems.slice(0, maxPerCategory));
// //   });

// //   // Mische die gesammelten Items erneut
// //   allItems.sort(() => 0.5 - Math.random());

// //   // Wähle die ersten `count` Elemente aus
// //   return allItems.slice(0, count);
// // }

// function getRandomItems(foodMap, count = 10, maxPerCategory = 2) {
//   let selectedSet = new Set();
//   let allItems = [];

//   // Konvertiere die Map in ein Array von Arrays (Kategorie -> Items)
//   foodMap.forEach((items, category) => {
//     // Mische die Items einer Kategorie
//     let shuffledItems = [...items].sort(() => 0.5 - Math.random());
//     // Wähle maximal maxPerCategory Items aus
//     allItems.push(...shuffledItems.slice(0, maxPerCategory));
//   });

//   // Mische die gesammelten Items erneut
//   allItems.sort(() => 0.5 - Math.random());

//   // Wähle die ersten `count` Elemente aus und füge sie zum Set hinzu
//   for (let item of allItems.slice(0, count)) {
//     selectedSet.add({
//       id: item.id,
//       name: item.name,
//       imageUrl: item.imageUrl, // Bilddaten speichern
//     });
//   }

//   return Array.from(selectedSet);
// }

// const FoodDisplay = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     setItems(getRandomItems(food_map)); // Beim Laden zufällige Items setzen
//   }, []);

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(2, 1fr)",
//         gap: "20px",
//       }}
//     >
//       {items.map((selectedSet) => (
//         <div
//           key={selectedSet.id}
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             textAlign: "center",
//           }}
//         >
//           <h1>{selectedSet.name}</h1>
//           <img
//             src={selectedSet.imageUrl}
//             alt={selectedSet.name}
//             style={{ width: "150px", height: "150px", objectFit: "cover" }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FoodDisplay;

import React, { useState, useEffect } from "react";

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

const FoodCards = ({ foodMap }) => {
  const [selectedItems, setSelectedItems] = useState([]);

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
            onError={(e) => {
              e.target.src = "";
            }} // Fallback-Bild falls fehlerhaft
          />
        </div>
      ))}
    </div>
  );
};

export default FoodCards;
