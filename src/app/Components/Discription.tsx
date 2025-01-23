import React from 'react'
import Image from 'next/image'

const Discription = () => {
  return (
    <div className=' md:h-[644px] w-[100vw] h-fit flex flex-col gap-14 my-10'>
        <div className='flex md:gap-5 gap-4 mx-auto md:w-fit'>
            <div className='md:text-[24px] text-[16px] font-medium'>Description</div>
            <div className='md:text-[24px] text-[16px] font-medium text-gray-500'>Additional Information</div>
            <div className='md:text-[24px] text-[16px] font-medium text-gray-500'>Reviews [5]</div>
        </div>
        <div className=' md:h-[644px] w-[90vw] h-fit mx-auto'>
            <p className='text-[10px] md:text-[14px] text-gray-500'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className='md:w-[94vw] w-[90vw] mx-auto'>
        <Image src="/sofa2.png" alt="" width={1440} height={721} className='md:w-[94vw] w-[90vw] '></Image>
        </div>
    </div>
  )
}

export default Discription