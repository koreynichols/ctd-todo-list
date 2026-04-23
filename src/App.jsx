import './App.css'
import { useState } from 'react';

import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

function App() {
  
  const [todoList, setTodoList] = useState([])

  return (
      <div>
        <h1>Todo List</h1>
        <TodoForm></TodoForm>
        <TodoList todoList={todoList}></TodoList>    
      </div>
  )
}

export default App
