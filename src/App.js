import React, { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoProvider } from "./TodoContext";
import { TodoContext } from "./TodoContext";
import { Modal } from "./modal/Modal";
import { TodoForm } from "./components/TodoForm";
import "./styles/Layaout.css";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <TodoProvider>
      <React.Fragment>
        <div className="Layout">
          {openModal && (
            <Modal>
              <TodoForm openModal={openModal} setOpenModal={setOpenModal} />
            </Modal>
          )}

          <TodoCounter />
          <TodoSearch />
          <TodoContext.Consumer>
            {({
              error,
              loading,
              searchedTodos,
              completeTodo,
              deleteTodo,
              editTodo,
            }) => (
              <TodoList>
                {error && <p>Ups somethin is wrong...</p>}
                {loading && <p>Loading Data...</p>}
                {!loading && !searchedTodos.length && (
                  <p>Create your firts TODO</p>
                )}

                {searchedTodos.map((todo) => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDeleted={() => deleteTodo(todo.text)}
                    onEdit={(input) => editTodo(todo.text, input)}
                  />
                ))}
              </TodoList>
            )}
          </TodoContext.Consumer>
            <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      </React.Fragment>
    </TodoProvider>
  );
}

export default App;
