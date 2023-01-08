import React from 'react'
import Searchbox from './Searchbox'
import logo from '../assets/images/YouTube-White-Logo.png';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();

  return (
    <header className='w-4/5 flex items-center justify-between'>
      <img className='w-36 h-10 cursor-pointer' src={logo} alt='logo!!!' onClick={() => navigate('/')} />
      <Searchbox/>
    </header>
  )
}
