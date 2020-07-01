import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo'


const App = () => {
  const [todos, setTodos]= useState([{id: '1', text: "todo"}]);

  const addNewTodo = todo => {
    // setTodos(todos.concat(todo))
    setTodos((prevTodos) => {
      return prevTodos.concat(todo)
    });
  }; 

  return (
    <div className="to-do-list">
    <h1>To Do List</h1>
      <h2>New Todo </h2>
      <NewTodo addNewTodo={addNewTodo}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
