import { React, useState } from "react";
import completed from "../assets/Completed.png";
import deleted from "../assets/deleted.png";
import { TodoEditItem } from "./TodoEditItem";
import "../styles/TodoItem.css";

function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {isEdit ? (
        <TodoEditItem key={props.text} text={props.text} completed={props.completed} setIsEdit={setIsEdit} />
      ) : (
        <li className="item-container">
          <span
            onClick={props.onComplete}
            className={`check ${props.completed && "check-completed"}`}
          >
            <img style={{ width: "60px" }} src={completed} alt="check" />
          </span>

          <p
            onClick={() => setIsEdit(true)}
            className={`task-text ${props.completed && "task-text_completed"}`}
          >
            {props.text}
          </p>
          <span onClick={props.onDeleted} className="deleted">
            <img style={{ width: "60px" }} src={deleted} alt="deleted" />
          </span>
        </li>
      )}
    </div>
  );
}

export { TodoItem };
