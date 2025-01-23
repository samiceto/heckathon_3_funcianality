import React from 'react'

const Footer1 = () => {
  return (
    <div className='w-[100vw] h-[700px] md:h-[505px] pb-[50px] pt-[10px] md:px-[80px] flex flex-col justify-between'>
        <hr />
        <div className="flex flex-col md:flex-row justify-evenly text-center md:text-start md:justify-between h-[600px] items-center w-fit md:w-[90vw] mx-auto ">
            <div className="flex flex-col gap-3 w-[285px]">
                <h1 className='text-[20px] md:text-[24px] font-bold'>Funiro</h1>
                <p className='text-[12px] md:text-[16px] text-gray-500'>400 University Drive Suite 200 Coral Gables,
                FL 33134 USA</p>
            </div>
            <div className="flex flex-col gap-3 w-[185px]">
                <div className='text-gray-400 text-[20px] md:text-[24px] font-bold'>Links</div>
                <div className='text-[12px] md:text-[16px] font-medium'>Home</div>
                <div className='text-[12px] md:text-[16px] font-medium'>Shop</div>
                <div className='text-[12px] md:text-[16px] font-medium'>About</div>
                <div className='text-[12px] md:text-[16px] font-medium'>Cotect</div>
            </div>
            <div className="flex flex-col gap-3 w-[185px]">
                <div className='text-gray-400 text-[20px] md:text-[24px] font-bold'>Help</div>
                <div className='text-[12px] md:text-[16px] font-medium'>Payment Options</div>
                <div className='text-[12px] md:text-[16px] font-medium'>Returns</div>
                <div className='text-[12px] md:text-[16px] font-medium'>Privacy Policies</div>
            </div>
            <div className="flex flex-col gap-3 w-[290px]">
                <div className='text-gray-400 text-[12px] md:text-[16px] font-medium'>Newsletter</div>
                <div className='text-[12px] md:text-[16px] flex gap-2'><input type="text" placeholder="Enter Your Email Address" className="w-[200px]"/><div className='underline underline-offset-2'>Subscribe</div>
                </div>

            </div>
        </div>
        <div><hr className="mb-6"/><div className='flex justify-center md:block w-full text-[16px]'>
            
            2023 furino. All rights reverved</div></div>
        
    </div>
  )
}

export default Footer1