import React, { useContext } from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../TodoContext';
function TodoCounter ( ) {
    const {totalTodos, completedTodos } = useContext(TodoContext);
   
    return (
        <h2 className='title'>Has completado {completedTodos} de {totalTodos} tareas</h2>
    );
}


export { TodoCounter };