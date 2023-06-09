import React from 'react'
import { useState, useEffect } from 'react'

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() =>{
        const id = setTimeout(() =>{
            // console.log('setting new timeout');
            setDebouncedValue(value)
        }, delay)

        return () =>{
            // console.log('clearing Time out');
            clearTimeout(id)
        }

    }, [value, delay])

  return debouncedValue
}

export default useDebounce