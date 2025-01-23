import React from 'react'
import Shop from '../Components/Shop'
import Icon from '../Components/Icon'
import { Clock, MapPin, Phone } from 'lucide-react'

const page = () => {
       let shop={
        heading:'contect',
        first:'Home',
        second:'contect',
        disp:"block"
      }
  return (
    <div>
  <Shop shop={shop}/>
<div className='w-[100vw] mt-16'>
    <div className='md:w-[644px] w-[70vw] mx-auto text-center'>
        <h1 className='md:text-[32px] text-[20px] font-semibold'>Get In Touch With Us</h1>
        <p className='text-gray-500'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
    </div>
    <div className='flex flex-col md:flex-row w-[100vw] justify-center mt-32 md:ml-14 '>
    <div className='md:w-[393px] w-fit h-[537px] flex flex-col gap-11  mx-auto'>
        <div className='w-[212px] h-[115px] relative'>
        <MapPin size={20} color="#000000" strokeWidth={3} className='absolute -left-11 -top-2'/>
        <div className='text-[24px] font-medium'>Address</div>
        <div>236 5th SE Avenue, New York NY10000, United States</div>
        </div>

        <div className='w-[212px] h-[115px] relative'>
        <Phone size={20} color="#000000" strokeWidth={3} className='absolute -left-11 -top-2'/>
        <div className='text-[24px] font-medium'>Phone</div>
        <div>Mobile: +(84) 546-6789
        Hotline: +(84) 456-6789</div>
        </div>

        <div className='w-[212px] h-[115px] relative'>
        <Clock size={20} color="#000000" strokeWidth={3} className='absolute -left-11 -top-2'/>
        <div className='text-[24px] font-medium'>Working Time</div>
        <div>Monday-Friday: 9:00 - 22:00
        Saturday-Sunday: 9:00 - 21:00</div>
        </div>

    </div>
    <div className='md:w-[635px] w-fit h-[923px] flex flex-wrap flex-col md:flex-row mx-auto justify-evenly'>
    <div className='flex flex-col  gap-2'>Your Name
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] h-[75px] border-2 rounded-lg p-3 border-black' placeholder='abc'/>
            </label>
            </div>
            <div className='flex flex-col  gap-2'>Email Address
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] h-[75px] border-2 rounded-lg p-3 border-black' placeholder='skjld@gmail.com'/>
            </label>
            </div>
            <div className='flex flex-col  gap-2'>Subject
            <label htmlFor="name">
                <input type="text" name="name" className='w-[412px] h-[75px] border-2 rounded-lg p-3 border-black' placeholder='this is an optional'/>
            </label>
            </div>
            <div className='flex flex-col  gap-2'>Messagge
            <label htmlFor="name">
                <textarea  name="name" className='w-[412px] h-[75px] border-2 rounded-lg p-3 border-black appearance-none' placeholder='hi i would like to '/>
            </label>
            </div>
            <div className='w-full '><button className='py-3 px-20 bg-[#B88E2F] rounded-lg text-white flex justify-center items-center mx-auto'>Submit</button></div>
    </div>
    </div>
</div>


  <Icon />
    </div>
  )
}

export default page