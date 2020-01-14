import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todoList: [],
      listDisplay: "all"      
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
      text: taskName,
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

  updateListDisplay = s => {
    console.log(`this is s`, s)

    this.setState({
      listDisplay: s
    })
  }

  render() {
    let todoList = [];

    if (this.state.listDisplay === "all"){
      todoList = this.state.todoList
    } else if (this.state.listDisplay === "active") {
      todoList = this.state.todoList.filter(todo => !todo.completed)
    } else if (this.state.listDisplay === "completed") {
      todoList = this.state.todoList.filter(todo => todo.completed)
    }

    return (
      
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoList={todoList} 
          toggleTask={this.toggleTask}
          completeTask={this.completeTask}
        />
        <TodoForm 
          addTask={this.addTask} 
        />
        <button onClick={() => this.updateListDisplay("all")}>All</button>
        <button onClick={() => this.updateListDisplay("active")}>Active</button>
        <button onClick={() => this.updateListDisplay("complete")}>Complete</button>

      </div>
    );
  }
}

export default App;
