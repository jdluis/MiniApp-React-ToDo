import React, { useContext } from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "../TodoContext";
import searchIcon from "../assets/buscar.png";

function TodoSearch() {

  const { searchValue, setSearchValue } = useContext(TodoContext)
  const handleOnSearch = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-container">
      <input
      className="searchInput"
      placeholder="Filter by Name"
      value={searchValue}
      onChange={handleOnSearch}
      />
      <img src={searchIcon} alt="search Icon" /> 
    </div>
  );
}

export { TodoSearch };
