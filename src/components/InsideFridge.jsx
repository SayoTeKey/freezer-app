import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

{
  /* Left Side */
}

const InsideFridge = () => {
  const [items, setItems] = useState([]);

  const [draggingItem, setDraggingItem] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  // const [compartments, setCompartments] = useState({
  //   frozen: [],
  //   ready: [],
  //   fishMeatDairy: [],
  //   fruit: [],
  //   vegetable: [],
  //   egg: [],
  //   sauce: [],
  //   drink: [],
  // });

  // // 10 zufällige Items
  // useEffect(() => {
  //   console.log(ItemCard());

  //   setItems(ItemCard());
  // }, []);

  // const handleDragStart = (item) => {
  //   setDraggingItem(item);
  // };

  // const handleDrop = (compartmentType) => {
  //   if (!draggingItem) return;

  //   if (draggingItem.type === compartmentType) {
  //     setShowMessage({ text: "Correct placement!", isError: false });
  //     setItems(items.filter((item) => item.id !== draggingItem.id));
  //     setCompartments({
  //       ...compartments,
  //       [compartmentType]: [...compartments[compartmentType], draggingItem],
  //     });
  //   } else {
  //     setShowMessage({ text: "Wrong compartment! Try again.", isError: true });
  //   }

  //   setTimeout(() => {
  //     setShowMessage(null);
  //   }, 1000);

  //   setDraggingItem(null);
  // };

  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // };

  // const renderCompartmentItems = (items) => {
  //   return (
  //     <div className="flex flex-wrap gap-2">
  //       {items.map((item) => (
  //         <div key={item.id}>
  //           <img src={item.imageUrl} title={item.name} />
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <div className="container">
      <div className="">
        <h1>Kühlschrank einräumen aber Dalli</h1>
        {/* 
        {showMessage && (
          <div className={`fixed ${showMessage.isError ? "error" : "check"}`}>
            {showMessage.text}
          </div>
        )} */}

        <div className="fridge">
          {/* Left Side */}
          {/* <div className="leftSide">
            <div
              className="frozenMeal dropbox "
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("frozen")}
            >
              <h2 className="textFridge">Frozen Items</h2>
              {renderCompartmentItems(compartments.frozen)}
            </div>

            <div
              className="readyMeal dropbox"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("ready")}
            >
              <h2 className="textFridge">Ready Meals</h2>
              {renderCompartmentItems(compartments.ready)}
            </div>

            <div
              className="meatFishDairy dropbox "
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("fishMeatDairy")}
            >
              <h2 className="textFridge">Meat, Fish & Dairy</h2>
              {renderCompartmentItems(compartments.fishMeatDairy)}
            </div>

            <div className="fruitAndVeggie">
              <div
                className="fruits dropbox  "
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("fruit")}
              >
                <h2 className="textFridge">Fruits</h2>
                {renderCompartmentItems(compartments.fruit)}
              </div>

              <div
                className="veggie dropbox "
                onDragOver={handleDragOver}
                onDrop={() => handleDrop("vegetable")}
              >
                <h2 className="textFridge">Vegetables</h2>
                {renderCompartmentItems(compartments.vegetable)}
              </div>
            </div>
          </div>
          {/* Right Side */}
          {/* <div className="rightSide">
            <div
              className="eggs "
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("egg")}
            >
              <h2 className="textFridge">Eggs</h2>
              {renderCompartmentItems(compartments.egg)}
            </div>

            <div
              className="sauces"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("sauceAndCanned")}
            >
              <h2 className="textFridge">Sauces & Canned Food</h2>
              {renderCompartmentItems(compartments.sauce)}
            </div>

            <div
              className="drinks"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("drink")}
            >
              <h2 className="textFridge">Drink</h2>
              {renderCompartmentItems(compartments.drink)}
            </div>
          </div> */}
        </div>

        {/* Draggable Items */}
        {/* <Cards items={items} handleDragStart={handleDragStart} /> */}
      </div>
    </div>
  );
};

export default InsideFridge;
