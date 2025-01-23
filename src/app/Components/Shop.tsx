import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const Shop = (props:any) => {
  return (
    <div className=' mx-auto md:h-[316px] w-[100vw] h-[40vw] relative flex items-center my-1'>
    <Image src="/shop2.jpg" alt="" width={1440} height={316} className='md:h-[316px] w-[100vw] h-[40vw]'></Image>
<div className='mx-auto md:h-[316px] w-[100vw] h-[40vw] absolute bg-white bg-opacity-80 flex justify-center items-center'>
<div className=' flex flex-col justify-center items-center md:w-[500px] w-[50vw]'>
    <Image src="/logo.png" alt="" width={77} height={77} className={`md:w-[77px] w-[25px] ${props.shop.disp}`}></Image>
    <h1 className='md:text-[48px] sm:text-[18px] text-[15px] font-medium'>{props.shop.heading}</h1>
    <div className='flex gap-2'>
     <div className='md:text-[16px] text-[11px] font-medium'>{props.shop.first}</div> 
     <div><ChevronRight color="#000000" strokeWidth={2.25} className='w-[15px] md:w-[20px]'/></div> 
    <div className='md:text-[16px] text-[11px]'>{props.shop.second}</div>  
    </div>
    </div>
</div>
    </div>
  )
}

export default Shop