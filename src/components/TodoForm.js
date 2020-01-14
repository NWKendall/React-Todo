import React, { Component } from "react";

class TodoForm extends Component{
  
  constructor(){
    super();
    this.state ={
      todoList: "",
      listDisplay: "all"
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

  updateListDisplay = s => {
    this.setState({
      listDisplay: s
    })
  }



  render() {

    let todoList = [];

    if (this.state.listDisplay === "all"){
      todoList = this.state.todoList
    } else if (this.state.listDisplay === "complete") {
      todoList = this.state.todoList.filter(todo => !todo.completed)
    }

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
        <button onClick={() => this.state.updateListDisplay("complete")}>Clear</button>
        
      </form>
      
    )
  }
}


export default TodoForm;