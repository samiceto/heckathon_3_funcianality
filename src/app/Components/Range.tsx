import React from 'react'
import Image from 'next/image'

const Range = (props:any) => {
  return (
    <div className='w-fit md:w-[90vw] h-fit md:h-[685px] mx-auto mt-[55px]'>
         <div>
    <h1 className="text-[32px] font-bold mx-auto text-center">Browse The Range</h1>
    <p className="text-[20px] text-gray-500 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </div>
   <div className='w-[300px] md:w-[90vw] flex flex-col md:flex-row justify-between mt-[55px] mx-auto'>
{props.rang.map((item:any,index: any)=>{
    return(
        <div key={index} className='w-[300px] h-[480px] flex flex-col justify-center gap-4 mx-auto'>
    <Image src={item.img} alt="" width={381} height={480} className='w-[300px] h-[400px] rounded-md'></Image>
    <p className='text-[24px] font-semibold mx-auto'>{item.des}</p>

        </div>
    )
})}
</div>

    </div>
  )
}

export default Range