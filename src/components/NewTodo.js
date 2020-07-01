import React from 'react';
import './NewTodo.css'

const NewTodo = props => {
  const newTodoHandler = event => {
     event.preventDefault()
     props.addNewTodo(event)
  }  
  
  return (
      <form className="new-todo" onSubmit={newTodoHandler}>
          <input type="text" />
          <button type="submit">Submit</button>
      </form>
  )
}
export default NewTodo

