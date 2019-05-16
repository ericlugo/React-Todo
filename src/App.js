/* 
  App will hold all the data needed for this project.
  It will also be the container for your Todo Components.
  
  All of your application data will be stored here on <App />.
  All of your handler functions should live here on <App />.
*/

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

const defaultState = {
  todoList: [],
  newTask: {
    task: '',
    id: '',
    completed: false,
  },
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = defaultState;
  }

  onChangeHandler = (event) => {
    this.setState({
      newTask: { task: event.target.value },
    });
  };

  submitTodoHandler = (event) => {
    event.preventDefault();
    let tempTask = {
      task: this.state.newTask.task,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todoList: [...this.state.todoList, tempTask],
      newTask: {
        task: '',
        id: '',
        completed: false,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoList todoList={this.state.todoList} />
        <TodoForm submitTodoHandler={this.submitTodoHandler} onChangeHandler={this.onChangeHandler} task={this.state.newTask.task} />
      </div>
    );
  }
}

export default App;
