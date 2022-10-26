import React, { useContext, useState } from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import "../styles/CreateNewTask.css";
import girasol from "../assets/girasol.svg";
import { Modal } from "../modal/Modal";
import { TodoContext } from "../TodoContext";

function CreateNewTask() {
  const { searchedTodos } = useContext(TodoContext);
  const [ openModal, setOpenModal ] = useState(false);
  

  return (
    <React.Fragment>
      {openModal && (
        <Modal>
          <p>{searchedTodos[0]?.text || "No data"}</p>
        </Modal>
      )}

      <h1>Create New Task</h1>
      <div>
        <h3>Task Name</h3>
        <input
          className="createTaskInput"
          type="text"
          placeholder="Hacer la comida de mañana"
        />
      </div>
      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <img src={girasol} alt="" />
    </React.Fragment>
  );
}

export { CreateNewTask };
