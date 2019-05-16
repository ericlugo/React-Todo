/* 
  <TodoList /> receives your Todos array
  <TodoList /> iterates over the list generating a new <Todo /> for each element in the array.
*/

import React from 'react';
import Todo from './Todo';
import './Todo.css';

// your components will all go in this component directory.

const TodoList = (props) => {
  return props.todoList.map((listItem) => <Todo task={listItem.task} />);
};

export default TodoList;
