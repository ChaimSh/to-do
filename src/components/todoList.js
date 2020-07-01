import React from 'react';
import './TodoList.css'

const TodoList = props => {
    return (
      <ul className="to-do">
         {props.todos.map((todo) => {
             return <li key={todo.id}>{todo.text}</li>
         })}      
     </ul>
    )
}
export default TodoList;
