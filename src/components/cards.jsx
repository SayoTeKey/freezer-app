import React from "react";
{
  /* Draggable Items */
}

const Cards = ({ items, handleDragStart }) => {
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(item)}
          className=""
        >
          <img src={item.imageUrl} alt={item.name} className="" />
          <p className="cardText">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
