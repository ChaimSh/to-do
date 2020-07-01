import React, { useState } from 'react';
import './NewTodo.css';

const NewTodo = props => {
  const [enteredText, setEnteredText] = useState('')
  const newTodoHandler = event => { 
    event.preventDefault();
     
    const todo = {
        id: Math.random.toString(),
        text: enteredText
    };

    setEnteredText('');

    props.addNewTodo(todo);
  }  

  const textChangeHandler = event => {
     setEnteredText(event.target.value)
  }

  
  return (
      <form className="new-todo" onSubmit={newTodoHandler}>
          <input type="text" value={enteredText} onChange={textChangeHandler}/>
          <button type="submit">Submit</button>
      </form>
  )
}
export default NewTodo

