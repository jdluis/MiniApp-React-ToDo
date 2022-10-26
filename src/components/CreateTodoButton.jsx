import React from 'react';
import '../styles/CreateTodoButton.css'

function CreateTodoButton (props) {
   const handleClick = () => {
        console.log(props)
       props.setOpenModal(!props.openModal);
    }

    const handleMousseOut = () => {
        console.log('OUT')
       props.setOpenModal(false);
    }

    return (
        <div>
            <button
            onClick={handleClick}
            >Create New Task</button>
    
           { props.openModal && (
            <button
                onClick={handleMousseOut}
                className='closeModal'
            >X</button>
           )} 
        </div>
    );
}

export { CreateTodoButton };