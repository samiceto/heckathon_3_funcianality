"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { ArchiveX, ChevronDown, ChevronUp } from 'lucide-react'
import Icon from '../Components/Icon'
import Shop from '../Components/Shop'
import { CartContext } from '../Components/Context'

const Page = () => {

const obj:any=useContext(CartContext)

const [quntities,setquantities]=useState(
    obj.cart.map((item:any)=>item.qnty)
)

const totalshippin= obj.cart.reduce((acc:any,item:any,index:number)=>{
    
    
    return acc + item.shipping
},0)
const total= obj.cart.reduce((acc:any,item:any,index:number)=>{
    const subtotal=quntities[index] * item.price
    const total= subtotal + item.shipping
    return acc + total
},0)

const subtotal= obj.cart.reduce((acc:any,item:any,index:number)=>{
    const subtotal=quntities[index] * item.price
    
    return subtotal
},0)
    function increaseqnty(index:any){
        setquantities((prevquantities:any)=>{
            const newquntities=[...prevquantities]
            newquntities[index] +=1
            return newquntities

        })
    }

    function decreaseqnty(index:any){
        setquantities((prevquantities:any)=>{
            const newquntities=[...prevquantities]
            if(newquntities[index] >1)newquntities[index] -=1
            return newquntities

        })

}
      let shop={
        heading:'cart',
        first:'Home',
        second:'cart',
        disp:"block"
      }


      const [productavailable,setproductavailable]=useState(false)
      useEffect(()=>{
        if(obj.cart.length > 0){
        setproductavailable(true)}
      },[obj.cart])
  return (
    <div>
         <Shop shop={shop}/>
    <div className=' md:h-[525px] w-[100vw] h-fit flex flex-col md:flex-row items-center justify-center my-6 md:my-1'>
        <div className='flex flex-col md:flex-row gap-10 '>
            <div className='flex flex-col gap-8'>
                <div className='md:w-[817px] w-[90vw] h-[55px] bg-[#F9F1E7] text-[16px] font-medium flex justify-evenly items-center mx-auto'>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                </div>
                {productavailable ? (obj.cart.map((item:any,index:any)=>{
                    return(
                        <div >
                             <div className='md:w-[817px] w-[90vw] h-[105px] flex items-center justify-between mx-auto'>
                <Image src={item.image} alt="" width={150} height={150} className='md:w-[105px] w-[70px] rounded-lg'></Image>
                <p className='text-gray-500 text-[12px]'>Rs. {item.price}</p>
                <div className='py-2 px-6 rounded-lg border-2 text-[12px] border-black flex flex-col items-center justify-center gap-1 w-fit h-fit'><div className='w-[16px] h-[16px]' onClick={()=>increaseqnty(index)}><ChevronUp className='w-[16px]'/></div><div className='flex items-center justify-center w-4 h-4 m-1'>{quntities[index]}</div><div onClick={()=>decreaseqnty(index)}><ChevronDown className='w-[16px]'/></div></div>
                <p className=' text-[12px]'>Rs. {item.price * quntities}</p>
                <ArchiveX size={20} color="#ce870d" onClick={()=>obj.del(item.id)}/>
                </div>
                        </div>
                    )
                })) : (
                    <div className='text-[#ef9b34] font-semibold text-xl mx-10'>
                        you dont have any product in yout cart yet! Add some ....
                    </div>
                )}
               
            </div>
            <div className='md:w-[393px] md:h-[390px] w-[90vw] h-[300px] bg-[#F9F1E7] flex justify-center flex-col items-center gap-6 mx-auto'>
                <h1 className='text-[32px] font-semibold'>Cart Totals</h1>
                <div className='flex gap-5'>
                    <h1 className='text-[16px] font-medium'>Subtotal</h1>
                    <p className='text-gray-500'>Rs. {subtotal}</p>
                </div>
                <div className='flex gap-5'>
                    <h1 className='text-[16px] font-medium'>Total shipping</h1>
                    <p className='text-gray-500'>Rs. {totalshippin}</p>
                </div>

                <div className='flex gap-5'>
                    <h1 className='text-[16px] font-medium'>Total</h1>
                    <p className='text-[#B88E2F] text-[20px]'>Rs. {total}</p>
                </div>
                <button className='py-2 px-7 rounded-lg border-2 border-black'>Check Out</button>


            </div>
        </div>
    </div>
    <Icon />
    </div>
  )
}

export default Page