import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { CreateNewTask } from "./components/CreateNewTask";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoProvider } from "./TodoContext";
import { TodoContext } from "./TodoContext";
import "./styles/Layaout.css";

function App() {
  return (
    <TodoProvider>
      <React.Fragment>
        <div className="Layout">
          <div className="left-side">
            <CreateNewTask />
          </div>

          <div className="right-side">
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
          </div>
        </div>
      </React.Fragment>
    </TodoProvider>
  );
}

export default App;
