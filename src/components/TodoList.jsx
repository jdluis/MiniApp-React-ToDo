import React from 'react';
import '../styles/TodoList.css';


function TodoList (props) {
    return (
        <section className='container-list'>
          <ul>
            {props.children}
          </ul>
        </section>
    );
}

export { TodoList };