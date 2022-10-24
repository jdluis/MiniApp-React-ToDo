import React, { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { CreateNewTask } from "./components/CreateNewTask";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";

import "./styles/Layaout.css";

const defaultTodos = [
  { text: "Cortar cebollla", completed: true },
  { text: "Lavar cebollas", completed: false },
  { text: "Freir cebollas", completed: false },
];

function App() {
 
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length <=0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

     return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <div className="Layout">
        <div className="left-side">
          <CreateNewTask />
        </div>

        <div className="right-side">
          <TodoCounter 
            totalTodos = {totalTodos} 
            completedTodo = {completedTodos} 
          />
          <TodoSearch 
            searchValue= {searchValue} 
            setSearchValue= {setSearchValue} 
          />
          <TodoList>
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDeleted = {() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
