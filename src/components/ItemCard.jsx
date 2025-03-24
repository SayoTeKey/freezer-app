import React, { useState, useEffect } from "react";
import "../styles/ItemCard.css";
import food_map from "../assets/data/FoodItems";

/* 
- 
- go to food_map
- pick out 10  random items (2 / compartment)
- counter to 10 (count +1 by picking)
- NO Item twice (if)
- save in selectedItems
- 
- load all information in ItemCard

*/

// 10 random items aus dem food_map ziehen
function getRandomItems(foodMap, count = 10, maxPerCategory = 2) {
  let allItems = [];

  // Konvertiere die Map in ein Array von Arrays (Kategorie -> Items)
  foodMap.forEach((items, category) => {
    // Mische die Items einer Kategorie
    let shuffledItems = [...items].sort(() => 0.5 - Math.random());
    // Wähle maximal maxPerCategory Items aus
    allItems.push(...shuffledItems.slice(0, maxPerCategory));
  });

  // Mische die gesammelten Items erneut
  allItems.sort(() => 0.5 - Math.random());

  // Wähle die ersten `count` Elemente aus
  return allItems.slice(0, count);
}

// Beispielverwendung
const selectedItems = getRandomItems(food_map);
console.log(selectedItems);

// const getRandomItems = (items, count) => {
//   const shuffled = [...items].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// };

// const ItemCard = () => {
//   const [randomItems, setRandomItems] = useState([]);

//   useEffect(() => {
//     const selectedItems = new Set();
//     const keys = Array.from(food_map.keys());

//     while (selectedItems.size < 10) {
//       const randomKey = keys[Math.floor(Math.random() * keys.length)];
//       const items = food_map.get(randomKey);
//       const randomItem = getRandomItems(items, 1)[0];

//       if (
//         randomItem &&
//         !Array.from(selectedItems).some((item) => item.id === randomItem.id)
//       ) {
//         selectedItems.add(randomItem);
//       }
//     }

//     setRandomItems(Array.from(selectedItems));
//   }, []);

//   return selectedItems;
// };

export default ItemCard;
