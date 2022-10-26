import React from "react";
import "../styles/TodoEditItem.css";
function TodoEditItem(item) {
  let temp;

  const handleChange = (e) => {
    temp = e.target.value;
  };

  const handleClickUpdate = (e) => {
    item.setIsEdit(false);
    item.onEdit(temp);
  };

  return (
    <li className="item-container">
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
