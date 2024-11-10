import React from "react";

function PlantCard({plant, onSell, deletePlant}) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!plant.sold ? (
        <button className="primary" onClick={() => onSell(plant)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={() => deletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
