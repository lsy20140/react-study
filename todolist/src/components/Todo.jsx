import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

export default function Todo({todo}) {
  return (
    <>
      <input id='checkBox' type='checkbox'/>
      <label htmlFor='checkBox'>{todo}</label>
      <FaTrashAlt/>
      <br/>
    </>
  )
}
