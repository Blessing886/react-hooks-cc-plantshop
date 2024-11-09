import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [plant, setPlant] = useState({
    name: '', image: '', price: 0
  })

  function handleChange(event) {
    setPlant({...plant, [event.target.name] : event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewPlant(plant);
    
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
        name="name"
        value={plant.name}
        onChange={handleChange}
        placeholder="Plant name"
        />
        <input type="text"
        name="image"
        value={plant.image}
        onChange={handleChange}
        placeholder="Image URL"
        />
        <input type="number"
        name="price"
        value={plant.price}
        onChange={handleChange}
        step="0.01"
        placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
