import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const Carasol = () => {
  return (
    <div className='w-[100vw]  h-fit md:h-[670px] bg-[#FCF8F3] md:pl-[60px] py-[30px] relative overflow-hidden'>
        <div className='flex flex-col md:flex-row justify-between gap-11 w-[100vw] mt-[32rem] md:mt-1 md:w-[900px] items-center'>
            <div className='w-[422px]'>
                <h1 className='md:text-[40px] text-[20px] font-bold text-center md:text-start'>50+ Beautiful rooms 
                inspiration</h1>
                <p className='text-[16px] md:text-[20px] text-center md:text-start'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            </div>
            <div className='relative w-[404px] h-[585px]'>
            <Image src="/cr1.png" alt="" width={404} height={582} className='w-[404px] h-[585px]'></Image>
            <div className='w-[217px] h-[130px] bg-white flex items-center justify-center flex-col absolute bottom-8 left-8 opacity-80'>
                <p className='text-gray-600'>01-----Bed Room</p>
                <h1 className='text-[28px] font-semibold'>Inner Peace</h1>
                <div className='w-[48px] h-[48px] bg-[#B88E2F] flex items-center justify-center absolute bottom-0 -right-[48px]'>
                <ArrowRight color="#ffffff" strokeWidth={1.25} />
                </div>
            </div>
            </div>
            
        </div>
        <div className='ml-8 absolute -right-[700px] top-7'>
            <Carousel>
  <CarouselContent>
    <CarouselItem><Image src="/cr2.png" alt="" width={404} height={582} className='w-[372px] h-[486px]'></Image>
    </CarouselItem>
    <CarouselItem><Image src="/cr3.png" alt="" width={404} height={582} className='w-[372px] h-[486px]'></Image></CarouselItem>
    <CarouselItem><Image src="/cr2.png" alt="" width={404} height={582} className='w-[372px] h-[486px]'></Image></CarouselItem>
  </CarouselContent>
  {/* <CarouselPrevious /> */}
  <CarouselNext className='absolute left-80' />
</Carousel>


            </div>
    </div>
  )
}

export default Carasol