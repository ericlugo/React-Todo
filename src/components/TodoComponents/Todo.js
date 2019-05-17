//  <Todo /> is a component that takes in the todo data and displays the task to the screen.

import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <p data-id={props.id} onClick={props.toggleHandler}>
      {props.task}
    </p>
  );
};

export default Todo;
