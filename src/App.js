import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  const todos = [{id: '1', text: "todo"}];

  return (
    <div className="to-do-list">
    <h1>To Do List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
