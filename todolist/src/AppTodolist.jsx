import React from 'react'
import Todo from './components/Todo'

export default function AppTodolist() {
  const todos = ['밥먹기', '리액트 공부하기', '알바가기', '청소하기'];

  return (
    <>
      {
        todos.map((data) => (
          <Todo todo={data}/>
        ))
      }
      
    </>
  )
}
