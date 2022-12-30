import React from 'react'


export default function Profile({url, name, title, isNew}) {
  return (
    <div className='profile'>
      <img 
        className='photo'
        src={url}
        alt='avatar'
      />
      {isNew && <span className='new'>New</span>}
      <h1>I'm {name}</h1>
      <p>{title}</p>
    </div>
  )
}

