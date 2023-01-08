import React, { useState } from 'react'
import '../index.css'
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function Searchbox() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  }

  return (
    <form className='w-3/4 flex px-4 py-6' onSubmit={handleSubmit}>
      <input 
        className='w-full bg-black text-base px-3 border-none outline-none' 
        type='text' 
        placeholder='Search...' 
        onChange={handleChange}
      />
      <button className='text-2xl cursor-pointer py-2 px-2 text-white bg-zinc-700' onSubmit={handleSubmit}><BiSearch/></button>
    </form>
  )
}
