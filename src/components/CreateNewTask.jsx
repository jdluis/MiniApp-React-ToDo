import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import '../styles/CreateNewTask.css'
import girasol from '../assets/girasol.svg';

function CreateNewTask () {
    return (
        <React.Fragment>
            <h1>Create New Task</h1>
            <div>
            <h3>Task Name</h3>
            <input className='createTaskInput' type="text" placeholder='Hacer la comida de mañana' />
            </div>
            <CreateTodoButton />

            <img src={girasol} alt="" />
        </React.Fragment>
    );
}

export { CreateNewTask };