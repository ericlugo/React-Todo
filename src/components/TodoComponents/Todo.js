//  <Todo /> is a component that takes in the todo data and displays the task to the screen.

import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return <p>{props.task}</p>;
};

export default Todo;
