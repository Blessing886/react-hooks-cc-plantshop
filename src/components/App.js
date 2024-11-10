import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const PlantAPI = 'http://localhost:6001/plants'

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => fetch(PlantAPI)
.then(response => response.json())
.then(setPlants)
, [])
  
  return (
    <div className="app">
      <Header />
      <PlantPage
      plants={plants}
      addNewPlant={addNewPlant}
      onSell={onSell}
      deletePlant={deletePlant}
      />
    </div>
  );

  function addNewPlant(plant) {
    fetch(PlantAPI, {
      method: 'POST',
      headers: {
        Accepts: 'Application/json' ,
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(plant),
    })
    .then(response => response.json())
    .then(json => setPlants([...plants, json]));
  }

  function onSell(plant) {
    setPlants(plants.map(p => p.id !== plant.id ? p : { ...p, sold: true }));
  }

  function deletePlant(plantId) {
    fetch(`${PlantAPI}/${plantId}`, {
      method: 'DELETE',
    })
    .then(() => {
      setPlants(plants.filter(plant => plant.id !== plantId));
    });
  }
}

export default App;
