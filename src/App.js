import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';

const taskList = [];



class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todoList: taskList,
    }
  }

  toggleTask = id => {
    const newTaskList = this.state.todoList.map(item => {
      if(item.id === id) 
        { return {
          ...item,
          completed: !item.completed
          
          }
        } else {
          return item
        }
    })
    this.setState({
      todoList: newTaskList
    });
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  }

  handleChanges = e => {
    this.setState({
      todotask: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.todoList)
    
  }

  render() {
    return (
      
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoList={this.state.todoList} 
          toggleTask={this.toggleTask}
          completeTask={this.completeTask}
        />
        <TodoForm 
          addTask={this.addTask} 
        />

      </div>
    );
  }
}

export default App;
