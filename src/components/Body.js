import React from 'react'
import './Body.css'
import Sidebar from './Sidebar'

import TodayForecast from './TodayForecast'

export default function Body() {
  return (
    <div className='body'>
        <Sidebar />
        <TodayForecast />
        
    </div>
  )
}
