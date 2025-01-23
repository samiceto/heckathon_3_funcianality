"use client"
import React, { useEffect, useState } from 'react'

const NetworkError = () => {
    const [isnetwork,setisnetwork]=useState(true)
const updateNetwork=()=>{
            setisnetwork(navigator.onLine)
        }
    useEffect(()=>{
        
        updateNetwork()


        window.addEventListener('online',updateNetwork)
        window.addEventListener('offline',updateNetwork)
        return ()=>{
            window.removeEventListener('online',updateNetwork)
            window.removeEventListener('offline',updateNetwork)
        }
    },[])
  return (
    <div>
        {!isnetwork && (
            <div className='text-red-500 font-semibold text-center'>
                Network connection failed! Please try again.
            </div>
        )}
    </div>
  )
}

export default NetworkError