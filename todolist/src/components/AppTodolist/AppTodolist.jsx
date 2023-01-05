import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './AppTodolist.module.css'


export default function AppTodolist({filter}) {
 
  const [todos, setTodos] = useState([
    {id:'1', text: '밥먹기', status: 'active'}, 
    {id:'2', text: '공부하기', status: 'active'}
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

  const filtered = getFilteredItems(todos, filter);
  
  return (
    <section className={styles.container}> 
      <ul className={styles.list}>
        {
          filtered.map((item) => (
            
            <Todo 
              key={item.id} 
              todo={item} 
              onUpdate={handleUpdate} 
              onDelete={handleDelete}
            />
          ))
        }
      </ul>

      <AddTodo onAdd={handleAdd}/>

    </section>

  )
}

function getFilteredItems(todos, filter){
  if(filter === 'all'){
    return todos;
  }

  return todos.filter((todo) => todo.status === filter);
}
