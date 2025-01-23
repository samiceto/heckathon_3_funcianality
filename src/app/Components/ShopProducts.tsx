"use client"
import React, { useContext } from 'react'
import { CartContext } from './Context';
import Image from 'next/image';
import { GitCompareArrows, Heart, Share2 } from 'lucide-react';
import Link from 'next/link';
import Pagination1 from './Pagination';

const ShopProducts = () => {
    const obj:any=useContext(CartContext)
     const {
        cart,
        add,
        del,
        filteredProducts,
        filteredProducts2,
        filters,
        pagination,
        setFilters,
        setPagination,
      } = useContext(CartContext)!;

      const displayedStart = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const displayedEnd = Math.min(pagination.currentPage * pagination.itemsPerPage, filteredProducts.length);
      
     
      const handlewishlistitem=(item:any)=>{
        const isinwishlist=obj.wish.some((inwishlist:any)=>inwishlist.id === item._id)
        if(isinwishlist){
            obj.delwish(item._id)
        }else{
            obj.addwish({id:item._id,name:item.title,image:item.image,price:item.price,qnty:1,shipping:20})
        }
    }

    const handlecompare=(item:any)=>{
        if(obj.compare.length < 2){
            const isincomparelist=obj.compare.some((incompare:any)=>incompare.id === item._id)
        if(isincomparelist){
            obj.delcompare(item._id)
        }else{
            obj.addcompare({description:item.description,id:item._id,name:item.title,image:item.image,price:item.price,qnty:1,shipping:20})
        }
    }
        
    }
        return(
            <div className='w-fit md:w-[95vw] h-fit mt-8 flex  flex-wrap md:justify-evenly justify-center gap-4 md:gap-1 mx-auto'>
            {filteredProducts2.slice(displayedStart,displayedEnd).map((item:any)=>{
                return(
                    <div key={item._id}className='md:w-[285px] md:h-[446px] w-[170px] h-[270px] flex flex-col justify-between items-center relative my-4'>
                    <div className='md:w-[285px] w-[170] md:h-[301px] h-[179.63] relative'>
                    <Image src={item.image} alt="" width={285} height={170} className='md:w-[285px] w-[170] md:h-[301px] h-[179.63px]'></Image>
                    <div className={`md:w-[48px] md:h-[48px] w-[32px] h-[32px] rounded-full bg-[#FF3D00] md:text-[14px] text-[10px] font-semibold text-white flex justify-center items-center absolute top-6 right-6 ${item.dicountPercentage > 0 ? 'block' : 'hidden'} shadow-md`}>-{item.dicountPercentage}%</div>
                    <div className={`md:w-[48px] md:h-[48px] w-[25px] h-[25px] rounded-full bg-[#2EC1AC] md:text-[16px] text-[8px] text-white flex justify-center items-center absolute top-6 left-6 ${item.isNew ? 'block' : 'hidden'} shadow-lg transform scale-105`}>New</div>
                      </div>
                    <div className='flex flex-col p-4 justify-between bg-[#F4F5F7] w-full h-full'>
                        <div className='md:text-[24px] text-[16px] font-semibold'><Link href={item._id} >{item.title}</Link></div>
                        <div className='md:text-[16px] text-[11px] font-medium text-gray-500'>{item.title.slice(0,5)}</div>
                        <div className='flex justify-between md:text-[20px] text-[11px]'>
                            <div>{item.price}</div>
                            <div className={`text-gray-500 line-through ${item.dicountPercentage?item.dicountPercentage > 0:'hidden'}`}>{ (item.price / (1 - item.dicountPercentage / 100)).toFixed(0)}</div>
                        </div>
                    </div>
                    <div className='md:w-[285px] md:h-[301px] w-[170px] h-[179px] flex flex-col justify-center items-center bg-black bg-opacity-70 absolute opacity-0 hover:opacity-100 p-7'>
                        <div className='md:w-[202px] w-[90px] md:h-[48px] h-[27px] text-[12px] md:text-[16px] text-[#B88E2F] flex justify-center items-center bg-white my-4 cursor-pointer' onClick={() => obj.add({ id: item._id, name: item.title, image: item.image, price: item.price, qnty:1, shipping: 20 })}>Add to cart</div>
                        <div className='flex md:gap-3 gap-1 items-center text-white font-semibold md:tex-[20px] text-[10px]'>
                            <div className='flex gap-1'>
                            <Share2 color="#ffffff" strokeWidth={1.25}  className='md:w-[20px] w-[12px]'/>
                            <p>Share</p>
                            </div>
                            <div className='flex gap-2'>
                    <div className={`${obj.compare.length >= 2 ? 'opacity-10':'opacity-100'}`}><GitCompareArrows color="#ffffff" strokeWidth={1.25} className='md:w-[20px] w-[12px]' onClick={()=>handlecompare(item)}/></div>
                            <p><Link href="/productcomparision">Compare</Link></p>
                            </div>
                            <div className='flex gap-2'>
                    <div className={`${obj.wish.some((wishlistItem:any) => wishlistItem.id === item._id) ? 'bg-red-500   rounded-full px-1'  : ''} flex items-center`}><Heart color="#ffffff" strokeWidth={1.25} className='md:w-[20px] w-[12px]'  onClick={()=>handlewishlistitem(item)} /></div>
                            <p>Add wish</p>
                            </div>
                        </div>
        
                    </div>
                    </div>
                )
            })}
                <div className='w-[100%] mx-auto'><Pagination1  /></div> 
         </div>
        )
       
 
}

export default ShopProducts