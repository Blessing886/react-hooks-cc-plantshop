import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onSell}) {
  return (
    <ul className="cards">{plants.map(plant => <PlantCard plant={plant} key={plant.id} onSell={onSell} />)}
    </ul>
  );
}

export default PlantList;
