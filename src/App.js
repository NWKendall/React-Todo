import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';

const taskList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



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
    const newTaskList = this.state.todoList.map(task => {
      if(task.id === id) 
        { return {
          ...task,
          completed: !task.completed
          }
        } else {
          return task
        }
    })
    this.setState({
      todoList: newTaskList
    });
  }



  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  }



  render() {
    return (
      
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoList={this.state.todoList} 
          toggleTask={this.toggleTask}
        />
        <TodoForm 
          addTask={this.addTask} 
        />

      </div>
    );
  }
}

export default App;
