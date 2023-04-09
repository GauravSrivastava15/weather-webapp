import React from 'react'
import "./SearchBox.css"
import { useState, useEffect } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import useDebounce from '../hooks/useDebounce'

const Searchbox = ({onSearchChange}) =>{
    
    const apiOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_LOCATION_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_LOCATION_API_URL
        }
    };


    const [search, setSearch] = useState(null)
    
    const loadOptions = (inputValue) => {
        return (
            fetch(`${process.env.REACT_APP_GEO_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, apiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return{
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}` ,
                        }   
                    })
                }
            })
            .catch(err => console.error(err))
            
        )
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    const customStyles = {
        option: (defaultStyles, state) => ({
          ...defaultStyles,
          
          backgroundColor: state.isSelected ? "#a0a0a0" : "",
          "&:hover": {
              ...defaultStyles,
              backgroundColor:"rgb(234, 236, 239)",
              cursor: 'pointer',
          },
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          
          backgroundColor: "rgb(234, 236, 239)",
          padding: "10px",
          border: "none",
          boxShadow: "none",
          background: "selected",
        }),
        
      };

    

    return (
        <div className='wrapper'>
            <AsyncPaginate 
                placeholder="Search for city"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
                styles={customStyles}
            />

        </div>
    )
}

export default Searchbox

