import React from 'react';
import '../styles/CreateTodoButton.css'

function CreateTodoButton (props) {
   const handleClick = () => {
        console.log(props)
       props.setOpenModal(!props.openModal);
    }

    return (
        <div className='btn-open-container'>
            <button
            className='openModal'
            onClick={handleClick}
            >
                <div className='close'></div>
            </button>
        </div>
    );
}

export { CreateTodoButton };