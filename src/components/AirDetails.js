import React from 'react'
import './AirDetails.css'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
import OpacityIcon from '@mui/icons-material/Opacity';
import CompressIcon from '@mui/icons-material/Compress';
import WavesIcon from '@mui/icons-material/Waves';

export default function AirDetails({data}) {
  return (
    <div className='wrapper-air'>
        <p className='title'>AIR CONDITIONS</p>
        <div className='container'>
            <div className='box'>
                <div className='title-air'>
                    <ThermostatIcon />
                    <div className='sub'>Real Feel</div>
                </div>
                <div className='sub-head'>{Math.round(data.main.feels_like)}°C</div>
            </div>

            <div className='box'> 
                <div className='title-air'>
                    <AirIcon />
                    <div className='sub'>Wind</div>
                </div>
                <div className='sub-head'>{data.wind.speed} m/s</div>
            </div>

            <div className='box'>
                <div className='title-air'>
                    <OpacityIcon />
                    <div className='sub'>Humidity</div>
                </div>
                <div className='sub-head'>{data.main.humidity} %</div>
            </div>

            <div className='box'>
                <div className='title-air'>
                    <CloudIcon />
                    <div className='sub'>Cloud</div>
                </div>
                <div className='sub-head'>{data.clouds.all}%</div>
            </div>

            <div className='box'>
                <div className='title-air'>
                    <CompressIcon />
                    <div className='sub'>Pressure</div>
                </div>
                <div className='sub-head'>{data.main.pressure} hPa</div>
            </div>

            {/* <div className='box'>
                <div className='title-air'>
                    <WavesIcon />
                    <div className='sub'>Sea Level</div>
                </div>
                <div className='sub-head'>{data.main.sea_level}m</div>
            </div> */}

        </div>
    </div>
  )
}
