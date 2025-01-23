"use client"
import React, { useContext } from 'react'
import Shop from '../Components/Shop'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { CartContext } from '../Components/Context'
import { useRouter } from 'next/navigation'
import { nextImageLoaderRegex } from 'next/dist/build/webpack-config'


const Page = () => {
  const router=useRouter()
  const obj:any=useContext(CartContext)
      let shop={
    heading:'Product comparison',
    first:'Home',
    second:'comparison',
    disp:"block"
  }

  const handlechoose=()=>{
    if (obj.compare.length >= 2){
      alert("Delete al least one product from comparison list")
    }else{
      router.push("/")
    }
  }
  return (
    <div> <Shop shop={shop}/>
    <div className=' w-[100vw] md:h-[384px] h-fit flex flex-col md:flex-row items-center justify-between px-12 my-11 md:my-1 gap-6 md:gap-1'>
        <div className="w-[223px] text-center">
            <h1 className='text-[28px] font-medium'>Go to Product page for more 
            Products</h1>
            <Link href="/" className='underline underline-offset-2 text-gray-500'>View More</Link>
        </div>
       {obj.compare[0] ? ( <div className='text-center'>
        <Image src={obj.compare[0].image} alt="" width={280} height={177} className='w-[280px] h-[177px] rounded-md'></Image>
<h1 className='text-[24px] font-medium'><div>{obj.compare[0].name}</div></h1>
<p className='text-[18px] font-medium'>Rs. {obj.compare[0].price}</p>
<div className='flex gap-2 text-center justify-center'>
<Image src="/Four-Half.png" alt="" width={180} height={177} className='w-[124px] '></Image>
    <p className='text-gray-500 text-[10px]'>204 Review</p>
</div>
<div className='w-full'><button type='button' className='mx-auto py-2 px-3 bg-[#B88E2F] text-[12px] text-white flex w-[150px] items-center justify-center my-4 rounded-md' onClick={()=>obj.delcompare(obj.compare[0].id)}>Remove Product</button></div>

</div>) : <div>no product available</div>}
{obj.compare[1] ? ( <div className='text-center'>
        <Image src={obj.compare[1].image} alt="" width={280} height={177} className='w-[280px] h-[177px] rounded-md'></Image>
<h1 className='text-[24px] font-medium'><div>{obj.compare[1].name}</div></h1>
<p className='text-[18px] font-medium'>Rs. {obj.compare[1].price}</p>
<div className='flex gap-2 text-center justify-center'>
<Image src="/Four-Half.png" alt="" width={180} height={177} className='w-[124px] '></Image>
    <p className='text-gray-500 text-[10px]'>204 Review</p>

</div>
<div className='w-full'><button type='button' className='mx-auto py-2 px-3 bg-[#B88E2F] text-[12px] text-white flex w-[150px] items-center justify-center my-4 rounded-md' onClick={()=>obj.delcompare(obj.compare[1].id)}>Remove Product</button></div>

</div>) : <div>no product available</div>}
        <div className="w-[223px]">
            <h1 className='text-[28px] font-medium'>Add A Product</h1>
           <button className='py-2 px-5 bg-[#B88E2F] text-white rounded-lg flex' onClick={handlechoose}>Choose a product <ChevronDown size={20} color="#ffffff" className='ml-4' /></button>
        </div>
        <div></div>
        <div></div>
    </div>
    


    <div className='md:w-[80vw] w-[90vw] md:px-11 text-[10px] md:text-[12px]'>
        <hr />
    <div className="flex space-x-2 flex-col md:flex-row ">
      <div className="flex-1 px-2 md:px-4 py-2 hidden border-l border-gray-400 md:flex flex-col gap-8 mx-auto">
<div className='text-[20px] font-medium'></div>

      </div>
      <div className="flex-1 md:w-10 px-2 md:px-4 py-2 md:border-l border-gray-400 flex flex-col gap-8">
      {obj.compare[0] ? ( <div className='text-center'><div className='text-[16px] font-semibold'>{obj.compare[0].name}</div>{obj.compare[0].description}<button className='mx-auto py-2 px-3 bg-[#B88E2F] text-[12px] text-white flex w-[100px]'onClick={() => obj.add({ id:obj.compare[0]._id, name: obj.compare[0].title, image: obj.compare[0].image, price: obj.compare[0].price, qnty:1, shipping: 20 })}>Add to Cart </button></div>) : <div>no product available</div>}
      

</div>

      
      <div className="flex-1 px-2 md:px-4   py-2 md:border-l border-gray-400 flex flex-col gap-8">

      {obj.compare[1] ? ( <div  className='text-center'><div className='text-[16px] font-semibold'>{obj.compare[1].name}</div>{obj.compare[1].description}<br/><button className='mx-auto py-2 px-3 bg-[#B88E2F] text-[12px] text-white flex w-[100px]'onClick={() => obj.add({ id:obj.compare[1]._id, name: obj.compare[1].title, image: obj.compare[1].image, price: obj.compare[1].price, qnty:1, shipping: 20 })}>Add to Cart </button>
      </div>) : <div>no second product available</div>}


</div></div>
      </div>
      <div className="flex-1 px-4 md:px-4 hidden md:flex py-2 border-l border-gray-400"></div>
    </div>

    
  )
}

export default Page