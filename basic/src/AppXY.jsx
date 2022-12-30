import React, {useState} from 'react';
import './AppXY.css';
import Pointer from './components/Pointer'

export default function AppXY() {
  const [position, setPosition] = useState({x:0, y:0});

  return (
    <div className='container' onPointerMove={(e) => {
      setPosition((prev) => ({x: e.clientX, y: prev.y}));
    }}>
    <Pointer position={position}/>
    </div>
  )
}
