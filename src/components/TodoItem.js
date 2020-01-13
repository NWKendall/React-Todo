import React from "react";

const TodoItem = props => {
  console.log(`ToDoItem props: `, props)
  return (
    <div className={`task${props.task.completed ? "completed" : ""}`}
    onClick={() => props.toggleTask}
    >
      <p>{props.task.task}</p>
    </div>
  )
}



export default TodoItem;