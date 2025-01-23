import React from 'react'
import Image from 'next/image'

const Galeray = () => {
  return (
    <div className=' w-[100vw] h-[50vw] md:h-[721px] my-32'>
            <div>
    <p className="md:text-[20px] text-[16px] text-gray-500 mx-auto text-center">Share your setup with</p>
    <h1 className="md:text-[32px] text-[25px] font-bold mx-auto text-center">#FuniroFurniture</h1>
   </div>
    <div className=' w-[100vw] h-[50vw] md:h-[721px]'>
                <Image src="/ss1.png" alt="" width={1440} height={721} className=' w-[100vw] h-[50vw] md:h-[721px]'></Image>
    </div>
 </div>
  )
}

export default Galeray