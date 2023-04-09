import React from 'react'
import "./FutureForecast.css"
import Card from './Card'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function FutureForecast({data}) {
  

  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));
  
  
  return (
    <>
    
    <div className='forecast'>
        <div className='future-days'> 
        
          <div className='future-title'>7 DAY FORECAST</div>
          {
            
            data.list.slice(0,7).map((item, idx) =>{
              
              return <  Card key={idx} day={forecastDays[idx]} icon={`icons/${item.weather[0].icon}.png`} type={item.weather[0].description} min={Math.round(item.main.temp_min)} max={Math.round(item.main.temp_max)}/>; 
              <div >
                
                <label>{item.main.temp_min}</label>
              </div>
              
              
              
            })
          }
          
        </div>
        
    </div>
    </>
  )
}
