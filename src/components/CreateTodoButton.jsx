import React from 'react';
import '../styles/CreateTodoButton.css'

function CreateTodoButton () {

   const handleClick = () => {
        console.log('click')
    }

    return (
        <button
        onClick={handleClick}
        
        >Create New Task</button>
    );
}

export { CreateTodoButton };