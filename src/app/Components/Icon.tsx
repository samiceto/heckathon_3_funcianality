import { BadgeCheck, HandPlatter, Headset, Trophy } from 'lucide-react'
import React from 'react'

const Icon = () => {
  return (
    <div className=' w-[100vw] h-fit md:h-[270px] bg-[#FAF3EA] px-28 items-center flex flex-col md:flex-row justify-between md:gap-1 gap-6 py-8 md:py-1 mx-auto'>
<div className='flex flex-col md:flex-row md:text-start text-center items-center gap-2'>
    <div><Trophy size={48} color="#000000" strokeWidth={1.5} /></div>
    <div>
        <h1 className='md:text-[25px] text-[16px] font-semibold'>High Quality</h1>
        <p className='md:text-[20px] text-[12px] font-medium text-gray-500'>crafted from top materials</p>
    </div>
</div>
<div className='flex flex-col md:flex-row md:text-start text-center items-center gap-2'>
<div><BadgeCheck size={48} color="#000000" strokeWidth={1.5} /></div>

<div>
        <h1 className='md:text-[25px] text-[16px] font-semibold'>Warranty Protection</h1>
        <p className='md:text-[20px] text-[12px] font-medium text-gray-500'>Over 2 years</p>
    </div>
</div>
<div className='flex flex-col md:flex-row md:text-start text-center items-center gap-2'>
<div><HandPlatter size={48} color="#000000" strokeWidth={1.5} /></div>

<div>
        <h1 className='md:text-[25px] text-[16px] font-semibold '>Free Shipping</h1>
        <p className='md:text-[20px] text-[12px] font-medium text-gray-500'>Order over 150 $</p>
    </div>
</div>
<div className='flex flex-col md:flex-row md:text-start text-center items-center gap-2'>
<div><Headset size={48} color="#000000" strokeWidth={1.5} /></div>
<div>
        <h1 className='md:text-[25px] text-[16px] font-semibold'>24 / 7 Support</h1>
        <p className='md:text-[20px] text-[12px] font-medium text-gray-500'>Dedicated support</p>
    </div>
    </div>
    </div>
  )
}

export default Icon