/*
  <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
  Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
  Once a todo is submitted, the Todo List should re-render and show the added todo.
*/
import React from 'react';
import './Todo.css';

function TodoForm(props) {
  return (
    <form name='TaskInputForm' onSubmit={props.submitTodoHandler}>
      <input type='text' value={props.task} placeholder='Please Enter New Task Here' name='newTask' onChange={props.onChangeHandler} />
      <button onClick={props.submitTodoHandler}>Submit</button>
      <button>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
