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
      <PlantPage plants={plants} addNewPlant={addNewPlant} />
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
}

export default App;
