import React from 'react'
import './Card.css'


function Card({day, icon, type, min, max}) {
  
  return (
    <div className='card'>
        <div className='day'>{day}</div>
        <div className='img-type'>
            <img className="icon-small" src= {icon}/>
            <div className='day-type'>{type}</div>
        </div>
        {/* <div className='temp-min'>{min +'/'+max}</div> */}
        <br></br>
        <br></br>
    </div>
  )
}

export default Card