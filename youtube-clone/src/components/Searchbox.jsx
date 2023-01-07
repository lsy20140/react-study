import React from 'react'
import '../index.css'
import { BiSearch } from 'react-icons/bi';

export default function Searchbox() {
  return (
    <form className='w-3/4 flex px-4 py-6'>
      <input className='w-full flex-initial bg-black text-base px-3 py-2 border-none outline-none' type='text' placeholder='Search...'></input>
      <button className='text-2xl cursor-pointer py-0 px-3 text-white bg-zinc-700'><BiSearch/></button>
    </form>
  )
}
