import React, { Component } from "react";

class TodoForm extends Component{
  
  constructor(){
    super();
    this.state ={
      todoList: "",
    }
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.todoList)
    this.setState({ todoList: ""})
  }

  handleChanges = e => {
    this.setState({
      todoList: e.target.value
    })
  }

  



  render() {


    return (
      <form onSubmit={this.handleOnSubmit}>
        <input 
          type="text"
          name="task"
          placeholder="new task"
          onChange={this.handleChanges}
          value={this.state.todoList}
        />
        <button onSubmit={this.handleOnSubmit}>Add</button>
        
      </form>
      
    )
  }
}


export default TodoForm;