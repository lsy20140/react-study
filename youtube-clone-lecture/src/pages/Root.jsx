import React from 'react'
import '../index.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'



export default function Root() {
  return (
    <div className='w-10/12 m-2.5 mx-auto'>
      <Header/>
      <Outlet/>
    </div>
  )
}
