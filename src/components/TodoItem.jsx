import { React, useState } from "react";
import { TodoIcon } from "./TodoIcon";
import { TodoEditItem } from "./TodoEditItem";
import "../styles/TodoItem.css";

function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {isEdit ? (
        <TodoEditItem onEdit={props.onEdit} key={props.text} text={props.text} completed={props.completed} setIsEdit={setIsEdit} />
      ) : (
        <li className="item-container">
          <span
            onClick={props.onComplete}
          >
          {TodoIcon ({type: "check", color: 'white'})}          </span>

          <p
            onClick={() => setIsEdit(true)}
            className={`task-text ${props.completed && "task-text_completed"}`}
          >
            {props.text}
          </p>
          <span onClick={props.onDeleted}>
            {TodoIcon ({type: "delete", color: 'black'})}
          </span>
        </li>
      )}
    </div>
  );
}

export { TodoItem };
