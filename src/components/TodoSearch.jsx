import React, { useContext } from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

  const { searchValue, setSearchValue } = useContext(TodoContext)
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
