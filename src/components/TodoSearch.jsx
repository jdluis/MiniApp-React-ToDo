import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {

  const handleOnSearch = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value);
  };

  return (
        <input
        className="searchInput"
        placeholder="Cebolla"
        value={searchValue}
        onChange={handleOnSearch}
        />
  );
}

export { TodoSearch };
