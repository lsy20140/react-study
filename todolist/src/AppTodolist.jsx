import React, { useState } from 'react'
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

export default function AppTodolist() {
 
  const [todos, setTodos] = useState([
    {id:'1', text: '밥먹기', status: 'active'}, {id:'2', text: '공부하기', status: 'active'}
  ])


  const handleAdd = (todo) => {
    setTodos([...todos, todo])
  }

  const handleUpdate = (updated) => {
    setTodos(todos.map((item) => item.id === updated.id ? updated : item))
  }

  const handleDelete = (deleted) => {
    setTodos(todos.filter(item => item.id !== deleted.id));
  }


  
  return (
    <section>
      <ul>
        {
          todos.map((item) => (
            <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
          ))
        }
      </ul>

      <AddTodo onAdd={handleAdd}/>

    </section>


  )
}
