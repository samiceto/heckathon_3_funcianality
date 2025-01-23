"use client"
import { CircleDot } from 'lucide-react'
import React, { useContext, useState } from 'react'
import Icon from '../Components/Icon'
import Shop from '../Components/Shop'
import { CartContext } from '../Components/Context'
import checkout from '@/action/checkout'

const Page = () => {
    let shop={
        heading:'checkout',
        first:'Home',
        second:'checkout',
        disp:"block"
      }

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


const [customerInfo,setcustomerInfo]=useState({name:'',email:'',phone:'',address:''})
console.log(customerInfo)
const hanleinput=(e:any)=>{
    const {name,value}= e.target;
    setcustomerInfo(prev=>({...prev,[name]:value}))
}





const checoutproceed=()=>{
    if(obj.cart.length ==0 || customerInfo.address == "" || customerInfo.email == "" || customerInfo.name == "" || customerInfo.phone == ""){
        alert("please fill out the form currectly")
    }else{
      checkout(obj.cart,customerInfo)  
    }
    
}
console.log("cart",obj.cart)
  return (
    <div>
         <Shop shop={shop}/>
    <div className='w-[100vw]  h-fit flex flex-col flex-wrap md:flex-row justify-center my-8 md:my-1'>
        <div className='md:w-[608px] w-fit my-8 h-fit flex flex-col md:flex-row flex-wrap justify-center gap-4 mx-auto'>
            <h1 className='md:text-[40px] text-[30px] font-semibold'>Billing details</h1>
            <div className='flex flex-col gap-2'>Name    
            <label htmlFor="name">
                <input type="text" value={customerInfo.name} name="name" onChange={hanleinput} className='md:w-[412px] w-[90vw] h-[50px] border-2 rounded-lg p-3 border-gray-500'></input>
            </label>
            </div>
            <div className='flex flex-col gap-2'>Address
            <label htmlFor="address">
                <input type="text" value={customerInfo.address} onChange={hanleinput} name="address" className='md:w-[412px] w-[90vw] h-[50px] border-2 rounded-lg p-3 border-gray-500'></input>
            </label>
            </div>
            <div className='flex flex-col gap-2'>Phone
            <label htmlFor="phone">
                <input type="text" value={customerInfo.phone} onChange={hanleinput} name="phone" className='md:w-[412px] w-[90vw] h-[50px] border-2 rounded-lg p-3 border-gray-500'></input>
            </label>
            </div>
            <div className='flex flex-col gap-2'>Email address
            <label htmlFor="email">
                <input type="text" value={customerInfo.email} onChange={hanleinput} name="email" className='md:w-[412px] w-[90vw] h-[50px] border-2 rounded-lg p-3 border-gray-500'></input>
            </label>
            </div>
        </div>
        <div className='md:w-[508px] w-[300px] md:h-[789px] h-fit flex flex-col gap-6 justify-center items-center mx-auto mt-10 md:mt-1'>
        <div className='flex gap-5 justify-between w-full'>
                    <h1 className='text-[20px] font-medium'>Product</h1>
                    <p className='text-[20px] font-medium'>Subtotal</p>
                </div>
        {obj.cart.map((item:any)=>{
            return(
                <div className='w-full'>
                    <div className='flex gap-5 justify-between w-full'>
                    <h1 className='text-gray-500'>{item.name}</h1>
                    <h1 className='text-gray-500'>{item.qnty} x</h1>
                    <p className='text-gray-500 '>Rs. {item.price * item.qnty}</p>
                </div> 
                </div>
            )
        })}
       
                
       <div className='flex gap-5 justify-between w-full'>
                    <h1 className='text-[16px] font-medium'>Total shipping</h1>
                    <p className='text-[#B88E2F] text-[20px] font-semibold'>Rs. {totalshippin}</p>
                </div>
                <div className='flex gap-5 justify-between w-full'>
                    <h1 className='text-[16px] font-medium'>Total</h1>
                    <p className='text-[#B88E2F] text-[20px] font-semibold'>Rs. {total}</p>
                </div>
                <hr />
                <div className='flex gap-3 w-full justify-start'>
                <CircleDot size={20} color="#000000" strokeWidth={3} />
                    <p>Direct Bank Transfer</p>
                </div>
                <div className='text-gray-500'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</div>
                <form className='flex flex-col gap-2 w-full justify-start'>
        <label>
          <input
            type="radio"
            name="option"
            value="option1"
            className='mx-4'
          />
          Bank
        </label>

        <label>
          <input
            type="radio"
            name="option"
            value="option2"
            className='mx-4'
          />
         Cash on delevry
        </label>


      </form>
      <div>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</div>
                <button className='py-2 px-7 rounded-lg border-2 border-black w-fit bg-[#e4cc96e5]' onClick={checoutproceed}>Check Out</button>

        </div>
    </div>
<Icon />
    </div>
  )
}

export default Page