// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import TodoItem from "./TodoItem";


class TodoList extends Component{
  render() {
    return (
      <div>
        <TodoItem />
      </div>
    )
  }
}

export default TodoList;