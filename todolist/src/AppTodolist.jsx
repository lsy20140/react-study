import React, { useState } from 'react'
import AddTodo from './components/AddTodo';
import { FaTrashAlt } from 'react-icons/fa';

export default function AppTodolist() {
 
  const [todos, setTodos] = useState([
    {id:'1', text: '밥먹기', status: 'active'}, {id:'2', text: '공부하기', status: 'active'}
  ])


  const handleAdd = (todo) => {
    //새로운 todo 추가
    setTodos([...todos, todo])
  }


  
  return (
    <section>
      <ul>
        {
          todos.map((item) => (
            <li key={item.id}>{item.text}</li>
            
          ))
        }
      </ul>

      <AddTodo onAdd={handleAdd}/>

    </section>


  )
}
