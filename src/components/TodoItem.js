import React from "react";

const TodoItem = props => {
  console.log(`ToDoItem props: `, props)



  return (
    <div 
      style={{textDecoration: props.task.completed ? "line-through" : ""}}
      onClick={() => props.toggleTask(props.task.id)}
    >
      
        {props.task.task}
    
    </div>
  )
}



export default TodoItem;