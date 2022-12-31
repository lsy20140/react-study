import React from 'react'

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1672187455503-70bafac016ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
          name='Bob'
          size={200}
        />
      </Navbar>

      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1672187455503-70bafac016ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
          name='Bob'
          size={200}
        />
        <p>fjdkfjdkfjk</p>
      </Navbar>

      <Navbar>
        <p>fjdkfjdkfjk</p>
      </Navbar>
    </div>
  )
}

function Navbar({children}) {
  return (
    <header style={{backgroundColor: 'yellow'}}>{children}</header>
  );
}

function Avatar({image, name, size}){
  return(
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{borderRadius: '50%'}}
        />
    </div>
  )
}
