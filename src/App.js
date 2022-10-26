import React, { useEffect, useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { CreateNewTask } from "./components/CreateNewTask";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import "./styles/Layaout.css";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      //simulate the loading of request data of backend
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newTodos) => {
    try {
      const stringifyItem = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newTodos);
    } catch {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length <= 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const editTodo = (text, input) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].text = input;
    saveTodos(newTodos);
  };

  return (
    <React.Fragment>
      <div className="Layout">
        <div className="left-side">
          <CreateNewTask />
        </div>

        <div className="right-side">
          <TodoCounter totalTodos={totalTodos} completedTodo={completedTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {error && <p>Ups somethin is wrong...</p>}
            {loading && <p>Loading Data...</p>}
            {!loading && !searchedTodos.length && <p>Create your firts TODO</p>}

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
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
