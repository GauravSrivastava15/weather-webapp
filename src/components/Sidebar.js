import React from 'react';
import "./Sidebar.css"


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <img src='https://assets.api.uizard.io/api/cdn/stream/d0bb0968-406e-4014-b9ab-080788e9d44b.png' alt='Img' style={{width:35.3, height:35.3}}/>
        <div className='sidebar-img'>
            <img src = './icons8-home-page-60.png' alt='Img' style={{width:18.6, height:18.6}}/>
        </div>
        <p className='sidebar-title'>Home</p>
        
        
    </div>
  )
}
