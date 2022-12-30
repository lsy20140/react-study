import React from 'react'
import '../AppXY.css';

export default function XY({position}) {
  return (
    <div className='pointer' style={{position:"absolute", left:position.x, top:position.y}}/>
  )
}
