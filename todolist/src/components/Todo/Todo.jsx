import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css'


export default function Todo({todo, onUpdate, onDelete}) {
  const {text, status} = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status: status})
  }

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input className={styles.checkbox} id='checkBox' type='checkbox' checked={status == 'completed'} onChange={handleChange}/>
      <label htmlFor='checkBox' className={styles.text}>{text}</label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt/>
        </button>
      </span>

    </li>
    
  )
}
