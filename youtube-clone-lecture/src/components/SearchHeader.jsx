import React, { useEffect, useState } from 'react'
import '../index.css'
import logo from '../assets/images/YouTube-White-Logo.png';
import { useNavigate, useParams } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';


export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  }

  useEffect(() => {
    setText(keyword || '')
  },[keyword])


  return (
    <header className='w-4/5 flex items-center justify-between'>
      <img className='w-36 h-10 cursor-pointer' src={logo} alt='logo!!!' onClick={() => navigate('/')} />
      <form className='w-3/4 flex px-4 py-6' onSubmit={handleSubmit}>
        <input 
          className='w-full bg-black text-base px-3 border-none outline-none' 
          type='text' 
          value={text}
          placeholder='Search...' 
          onChange={handleChange}
        />
        <button className='text-2xl cursor-pointer py-2 px-2 text-white bg-zinc-700' onSubmit={handleSubmit}><BiSearch/></button>
      </form>
    </header>
  )
}
