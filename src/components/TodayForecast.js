import React, { useState } from 'react'
import "./TodayForecast.css"
import Searchbox from './Searchbox'
import AirDetails from './AirDetails'
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api';
import FutureForecast from './FutureForecast';


export default function TodayForecast() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) =>{
    const [lat, lon] = searchData.value.split(" ");
    console.log(lat,lon)

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    
    

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        

        setCurrentWeather({city: searchData.label, ...weatherResponse})
        setForecast({city: searchData.label, ...forecastResponse})
      })
      .catch((error) => console.log(error));

  }

  console.log(forecast)
  console.log(currentWeather)
   
  
  return (
    <div className='today-forecat'>

      <div className='main-comp'>
        <Searchbox onSearchChange={handleOnSearchChange}/>

        <div className='banner'>
          <div className='temp-details'>
            <p className='city'>{currentWeather && currentWeather.city}</p>
            <p className='rain'>{currentWeather && currentWeather.weather[0].description}</p>
            <p className='temp'>{currentWeather && Math.round(currentWeather.main.temp)+"°C"}</p>
          </div>
          <div className='image'>
            <img src={currentWeather && `icons/${currentWeather.weather[0].icon}.png`}/>
          </div>
        </div>

        <div className='details'>
          {currentWeather && <AirDetails data={currentWeather} />}
        </div>

      </div>

        <div className='right-side'>
          {forecast && <FutureForecast data={forecast}/>}
        </div>
      </div>
      
  )
  
  
}
