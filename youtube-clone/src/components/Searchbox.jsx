import React from 'react'
import '../index.css'
import { BiSearch } from 'react-icons/bi';

export default function Searchbox() {
  return (
    <form className='w-4/6 h-10 flex items-center justify-center'>
      <input className='w-full h-full  bg-black pl-1.5' type='text' placeholder='Search...'></input>
      <button className='w-max h-full px-3 overflow-hidden bg-zinc-700'><BiSearch/></button>
    </form>
  )
}
