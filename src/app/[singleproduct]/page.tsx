"use client"
import { ChevronRight, Facebook, Linkedin, Twitter } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import Discription from '../Components/Discription'

import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { CartContext } from '../Components/Context'

const Page = (props: any) => {
  const obj:any = useContext(CartContext)
  console.log(obj)
  
  const [result, setResult] = useState<any>({
    title: '',
    image: '',
    price: 0,
    description: '',
    tags: [] 
  })
  const [qnty, setQnty] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result1 = await client.fetch(`
          *[_type=='product' && _id == '${props.params.singleproduct}'][0]{
            title, _id, tags, 'image': productImage.asset->url, price,
            isNew, description, _createdAt, dicountPercentage
          }
        `)

      
        setResult({
          title: result1.title,
          image: result1.image,
          price: result1.price,
          description: result1.description,
          tags: result1.tags || []  
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData() 
  }, [props.params.singleproduct]) 

  return (
    <div className='w-[100vw]'>
      <div className='w-[100vw] md:h-[100px] h-fit bg-[#F9F1E7] flex md:px-32 items-center'>
        <div className='flex gap-3 items-center'>
          <div className='text-gray-500'>Home</div>
          <div><ChevronRight size={48} color="#000000" strokeWidth={1.5} className='w-[20px]' /></div>
          <div className='text-gray-500'>Shop</div>
          <div><ChevronRight size={48} color="#000000" strokeWidth={1.5} className='w-[20px]' /></div>
          <div>|</div>
          <div>{result.title}</div>
        </div>
      </div>

      <div className='mt-7 md:mx-32'>
        <div className='md:min-h-[800px] w-[100vw] h-fit flex flex-col md:flex-row md:gap-20'>
          <div className='flex md:gap-8 gap-4 md:w-[553px] w-[90vw] mx-auto md:mx-0 my-8 md:my-1'>
            <div className='flex flex-col gap-5'>
              {result.image ? (<Image src={result.image} alt="" width={76} height={80} className='md:w-[76px] md:h-[80px] w-[50px] h-[60px]' />) : (<div>Loading image...</div> )}
              {result.image ? (<Image src={result.image} alt="" width={76} height={80} className='md:w-[76px] md:h-[80px] w-[50px] h-[60px]' />) : (<div>Loading image...</div> )}
              {result.image ? (<Image src={result.image} alt="" width={76} height={80} className='md:w-[76px] md:h-[80px] w-[50px] h-[60px]' />) : (<div>Loading image...</div> )}
              {result.image ? (<Image src={result.image} alt="" width={76} height={80} className='md:w-[76px] md:h-[80px] w-[50px] h-[60px]' />) : (<div>Loading image...</div> )}
            </div>
            <div className='md:w-[423px] md:h-[391px] w-[323px] h-[220px] bg-[#F9F1E7] flex md:justify-center items-center'>
              {result.image ? (<Image src={result.image} alt="" width={481} height={391} className='md:w-[481px] md:h-[391px] w-[300px] h-[220px]' />) : (<div>Loading image...</div> )}
            </div>
          </div>

          <div className='md:w-[424px] w-[90vw] mx-auto md:mx-0'>
            <div className='flex flex-col gap-3 text-center md:text-start'>
              <h1 className='text-[42px]'>{result.title}</h1>
              <p className='text-gray-500'>Rs. {result.price}</p>
              <div className='flex gap-3 justify-center items-center md:justify-start'>
                <div><Image src="/Four-Half.png" alt="" width={124} height={24} className='w-[124px]' /></div>
                <div>|</div>
                <div className='text-[10px] text-gray-500'>5 Customer Review</div>
              </div>
              <p>{result.description}</p>
            </div>

            <div className='flex flex-col gap-3'>
              <div className='text-gray-500'>Size</div>
              <div className='flex gap-4'>
                <div className='w-[30px] h-[30px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white flex justify-center items-center'>L</div>
                <div className='w-[30px] h-[30px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white flex justify-center items-center'>XL</div>
                <div className='w-[30px] h-[30px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white flex justify-center items-center'>XS</div>
              </div>

              <div className='text-gray-500'>Color</div>
              <div className='flex gap-4'>
                <div className='w-[30px] h-[30px] rounded-full bg-[#816DFA]'></div>
                <div className='w-[30px] h-[30px] rounded-full bg-black'></div>
                <div className='w-[30px] h-[30px] rounded-full bg-[#B88E2F]'></div>
              </div>
            </div>

            <div className='flex gap-3 my-3'>
              <div className='md:py-3 md:px-2 md:w-20 md:h-fit w-4 py-2 px-2 flex justify-between items-center border rounded-md'>
                <button type='button' onClick={() => setQnty(qnty > 1 ? qnty - 1 : qnty)}>-</button>
                {qnty}
                <button type='button' onClick={() => setQnty(qnty + 1)}>+</button>
              </div>
              <div className='md:py-3 md:px-7 py-2 px-4 flex justify-center items-center border rounded-md cursor-pointer' onClick={() => obj.add({ id: result._id, name: result.title, image: result.image, price: result.price, qnty, shipping: 20 })}>Add To Cart</div>
              <div className='md:py-3 md:px-7 py-2 px-4 flex justify-center items-center border rounded-md'>+ Compare</div>
            </div>

            <div><hr /></div>
            <div className='flex flex-col gap-4 my-4 text-[10px]'>
              <div className='text-gray-500 flex gap-4'>
                <div>SKU</div>
                <div>:</div>
                <div>SSOO1</div>
              </div>
              <div className='text-gray-500 flex gap-4'>
                <div>Category</div>
                <div>:</div>
                <div>Sofas</div>
              </div>
              <div className='text-gray-500 flex gap-4'>
                <div>Tags</div>
                <div>:</div>
                <div>{result.tags.join(', ')}</div>
              </div>
              <div className='flex gap-4 text-gray-500 '>
                <div>Share</div>
                <div>:</div>
                <div className='flex gap-2'>
                  <Facebook size={20} strokeWidth={1.5} />
                  <Linkedin size={20} />
                  <Twitter size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Discription />
     
    </div>
  )
}

export default Page
