import  React  from "react";
import "../styles/TodoEditItem.css";
function TodoEditItem(item) {

const handleChange = (e) => {
    let temp = e.target.value;
    item.text = temp;
}

const handleClickUpdate = (e) => {
    item.setIsEdit(false);
}
  return (
    <li className="item-container">
      <input onChange={handleChange} type="text" className='task-text' placeholder={item.text}/>
      <button onClick={handleClickUpdate}>Update</button>
    </li>
  );
}

export { TodoEditItem };
