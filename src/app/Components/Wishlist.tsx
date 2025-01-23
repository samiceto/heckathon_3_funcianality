"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { CartContext } from './Context'
import Link from 'next/link'
import { GitCompareArrows, Heart, Share2 } from 'lucide-react'

const Wishlist = () => {
    const obj:any=useContext(CartContext)
    
  return (
    <div className='w-fit md:w-[90vw] h-fit mt-8 flex  flex-wrap md:justify-between justify-center gap-4 md:gap-1 mx-auto'>
    {obj.wish && obj.wish.length > 0 ?( obj.wish.map((item:any)=>{
        return(
            <div key={item.id}className='md:w-[285px] md:h-[446px] w-[170px] h-[270px] flex flex-col justify-between items-center relative my-4'>
            <div className='md:w-[285px] w-[170] md:h-[301px] h-[179.63] relative'>
            <Image src={item.image} alt="" width={285} height={300} className='md:w-[285px] w-[170] md:h-[301px] h-[179.63]'></Image>
            <div className={`md:w-[48px] md:h-[48px] w-[25px] h-[25px] rounded-full bg-[#E97171] md:text-[20px] text-[10px] text-white flex justify-center items-center absolute top-6 right-6 ${item.dicountPercentage > 0 ? 'block':'hidden'}`}>-{item.dicountPercentage}%</div>
            <div className={`md:w-[48px] md:h-[48px] w-[25px] h-[25px] rounded-full bg-[#2EC1AC] md:text-[20px] text-[10px] text-white flex justify-center items-center absolute top-6 right-6 ${item.isNew ? 'block' : 'hidden'}`}>New</div>
            </div>
            <div className='flex flex-col p-4 justify-between bg-[#F4F5F7] w-full h-full'>
                <div className='md:text-[24px] text-[16px] font-semibold'><Link href={`./${item.id}`}>{item.name}</Link></div>
                <div className='md:text-[16px] text-[11px] font-medium text-gray-500'>{item.name.slice(0,5)}</div>
                <div className='flex justify-between md:text-[20px] text-[11px]'>
                    <div>{item.price}</div>
                    <div className={`text-gray-500 line-through ${item.dicountPercentage?item.dicountPercentage > 0:'hidden'}`}>{ (item.price / (1 - item.dicountPercentage / 100)).toFixed(0)}</div>
                </div>
            </div>
            <div className='md:w-[285px] md:h-[301px] w-[170px] h-[179px] flex flex-col justify-center items-center bg-black bg-opacity-70 absolute opacity-0 hover:opacity-100 p-7'>
                <div className='md:w-[202px] w-[90px] md:h-[48px] h-[27px] text-[12px] md:text-[16px] text-[#B88E2F] flex justify-center items-center bg-white my-4 cursor-pointer'onClick={() => obj.add({ id: item._id, name: item.name, image: item.image, price: item.price, qnty:1, shipping: 20 })}>Add to cart</div>
                <div className='flex md:gap-3 gap-1 items-center text-white font-semibold md:tex-[20px] text-[10px]'>
                    <div className='flex gap-1'>
                    <Share2 color="#ffffff" strokeWidth={1.25}  className='md:w-[20px] w-[12px]'/>
                    <p>Share</p>
                    </div>
                    <div className='flex gap-2'>
                    <GitCompareArrows color="#ffffff" strokeWidth={1.25} className='md:w-[20px] w-[12px]'/>
                    <p>Compare</p>
                    </div>
                    
                </div>

            </div>
            </div>
        )
    })):(
        <div className='w-[100%]'>
            <h1 className='w-fit mx-auto text-gray-500 font-bold text-[40px]'>No product available for wish list</h1>
        </div>
    )}

    </div>
  )
}

export default Wishlist