import React, { useContext, useState } from 'react';
import '../styles/TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm (props) {

    const [newTodoValue, setNewTodoValue] = useState('');

    const { addTodo } = useContext(TodoContext);
    const onBack = () => {
        props.setOpenModal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        props.setOpenModal(false);
    }


    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <h3>Create Your Task</h3>
            <label className='titleTask'>{newTodoValue}</label>
            <textarea placeholder='Make the list for the party' value={newTodoValue} onChange={onChange} cols="30" rows="10"/>
            <div className='btn-container'>
                <button
                className='btn btn-back'
                    type='button'
                    onClick={onBack}
                    >
                    Back
                </button>
                <button
                className='btn btn-add'
                type='submit'
                >
                    Add
                </button>
            </div>
        </form>
    );
}
export {TodoForm};