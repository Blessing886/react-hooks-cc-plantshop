import React from "react";

function Search({setSearchPlant}) {
  function handleChange(event) {
    setSearchPlant(event.target.value);
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange} //{(e) => setSearchPlant(e.target.value)}
      />
    </div>
  );
}

export default Search;
