import React from 'react'
import Searchbox from './Searchbox'

export default function Header() {
  return (
    <header className='w-4/5 flex items-center justify-between'>
      <img className='w-36 h-10' src='YouTube-White-Logo.png'/>
      <Searchbox/>
    </header>
  )
}
