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

  toggleHandler = (event) => {
    event.preventDefault();
    this.state.todoList.forEach((item) => {
      if (item.id.toString() === event.target.dataset.id) item.completed = !item.completed;
    });
  };

  submitHandler = (event) => {
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

  clearHandler = (event) => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter((item) => !item.completed),
    });
  };

  clearAllHandler = (event) => {
    event.preventDefault();
    this.setState(defaultState);
  };

  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoForm submitHandler={this.submitHandler} clearHandler={this.clearHandler} clearAllHandler={this.clearAllHandler} onChangeHandler={this.onChangeHandler} task={this.state.newTask.task} />
        <TodoList todoList={this.state.todoList} toggleHandler={this.toggleHandler} />
      </div>
    );
  }
}

export default App;
