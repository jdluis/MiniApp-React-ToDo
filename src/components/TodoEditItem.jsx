import React from "react";
import "../styles/TodoEditItem.css";

let temp;

function TodoEditItem(item) {
  const handleChange = (e) => {
    temp = e.target.value;
  };

  const handleClickUpdate = (e) => {
    item.setIsEdit(false);
    item.onEdit(temp);
  };

  const handleClickBack = (e) => {
    item.setIsEdit(false);
  };

  return (
    <li className="item-container">
      <button onClick={handleClickBack}>Back</button>

      <input
        onChange={handleChange}
        type="text"
        className="task-text"
        placeholder={item.text}
      />
      <button onClick={handleClickUpdate}>Update</button>
    </li>
  );
}

export { TodoEditItem };
