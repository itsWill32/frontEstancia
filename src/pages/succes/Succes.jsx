import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Succes() {

    const location = useLocation();

    console.log(location);

  return (
    <>
       <div>
            exitoso
        </div> 
    </>
  )
}
