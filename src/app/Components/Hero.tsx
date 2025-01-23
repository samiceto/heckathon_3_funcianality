import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-[100vw] h-[55vw] md:h-[716px] relative'>
                <Image src="/hero.png" alt="" width={1440} height={1440} className='w-[100vw] h-[55vw] md:h-[716px]'></Image>
                <div className='w-[40vw] md:w-[643px] h-[35vw] md:h-[443px] bg-[#FFF3E3] flex flex-col justify-evenly absolute right-11 bottom-10 md:bottom-24 p-10'>
                    <p className='text-[2vw] md:text-[16px] font-semibold'>New Arrival</p>
                    <h1 className='text-[2vw] md:text-[52px] font-bold text-[#B88E2F]'>Discover Our New Collection</h1>
                    <p className="hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button className='w-[20vw] md:w-[222px] h-[10vw] md:h-[74px] bg-[#B88E2F] flex justify-center items-center text-white text-[3vw] md:text-[16px]'>BUY Now</button>
                </div>

    </div>
  )
}
export default Hero