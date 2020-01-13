// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  console.log(`this is TODOList props:`, props )

  return (
    <div>
      {props.todoList.map(task => {
        <TodoItem 
          key={task.id}
          task={task}
        />
      })}
    </div>
  );
};


export default TodoList;