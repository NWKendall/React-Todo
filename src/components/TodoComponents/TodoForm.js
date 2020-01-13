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
    
  }
   
  render() {
    return (
      <form>
        <input 
          type="text"
          name=""
          onChange={this.handleChanges}
          value={this.state.todotask}
        />
        <button onSubmit={this.handleOnSubmit}>Add</button>
        <button onSubmit={""}>Clear Completed</button>


      </form>
    )
  }
}


export default TodoForm;