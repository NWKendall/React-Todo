import React, { Component } from "react";

class TodoForm extends Component{
  
  constructor(){
    super();
    this.state ={
      todotask: ""
    }
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
      <form onSubmit={this.handleOnSubmit}>
        <input 
          type="text"
          name="task"
          onChange={this.handleChanges}
          value={this.state.todoList}
        />
        <button>Add</button>
        <button onSubmit={""}>Clear Completed</button>
      </form>
    )
  }
}


export default TodoForm;