import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addNewPlant, onSell, deletePlant}) {
  const [searchPlant, setSearchPlant] = useState('')
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  );
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setSearchPlant={setSearchPlant} />
      <PlantList plants={filteredPlants} //{plants.filter(plant => plant.name.toLowerCase().startsWith(searchPlant.toLowerCase()))}
      onSell={onSell}
      deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
