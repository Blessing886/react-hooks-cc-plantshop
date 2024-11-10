import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addNewPlant, onSell}) {
  const [searchPlant, setSearchPlant] = useState('')
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setSearchPlant={setSearchPlant} />
      <PlantList plants={plants.filter(plant => plant.name.toLowerCase().startsWith(searchPlant.toLowerCase()))} onSell={onSell} />
    </main>
  );
}

export default PlantPage;
