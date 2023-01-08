import React from 'react'
import '../index.css'
import { BiSearch } from 'react-icons/bi';

export default function Searchbox() {
  return (
    <form className='w-3/4 flex px-4 py-6'>
      <input className='w-full bg-black text-base px-3 border-none outline-none' type='text' placeholder='Search...'></input>
      <button className='text-2xl cursor-pointer py-2 px-2 text-white bg-zinc-700'><BiSearch/></button>
    </form>
  )
}
