"use client"
import React, { FormEvent, useRef, useState } from 'react'

import { useRouter } from 'next/navigation'

const Auth = () => {
    const routur= useRouter()
    const[inpt_value,setinput_value]=useState("")
    const email=useRef<HTMLInputElement>(null)
    const password=useRef<HTMLInputElement>(null)
    async function handle_req(e:FormEvent <HTMLFormElement>){
        e.preventDefault()
        const emailbody=email?.current?.value // keeping the track of value just like we do in usestate with onchang function
        const passwordbody=password?.current?.value
        console.log(emailbody)
        let res=await fetch('/api/Auth',{
            cache:'no-store',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:emailbody,password:passwordbody})

        })
        let data=await res.json()
        console.log('data',data)
        routur.push(data.redirecturl)
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffffff]">
    <form 
      onSubmit={handle_req} 
      className="bg-[#fff4e6] p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
      <div className='text-gray-500'> 
        <h4>For admin panel</h4>
        <p>Email :: admin@gmail.com</p>
        <p>Pssword :: 123</p>
      </div>
      <div>
        <input
          type="email"
          ref={email}
          placeholder="Enter your Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c07b27]"
          required
        />
      </div>
      <div>
        <input
          type="password"
          ref={password}
          placeholder="Enter your Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#de8d29]"
          required
        />
      </div>
      <div className="text-center">
        <button 
          type="submit"
          className="w-full py-3 px-4 bg-[#f7a643] text-white rounded-lg hover:bg-[#f3ab53] focus:outline-none focus:ring-2 focus:ring-[#fa9d2b] transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default Auth