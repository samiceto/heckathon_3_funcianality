import React from 'react'
import Shop from '../Components/Shop'
import Icon from '../Components/Icon'
import Image from 'next/image'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { Calendar, Search, Tag, User } from 'lucide-react'
import Link from 'next/link'

const page = () => {
          let shop={
        heading:'blog',
        first:'Home',
        second:'blog',
        disp:"block"
      }
  return (
    <div className='w-[100vw]'>
<Shop shop={shop}/>
<div className='w-[100vw] md:h-[2650px] h-fit flex flex-col md:flex-row justify-between md:px-20 mt-20'>
<div className='md:w-[820px] w-fit md:h-[2600px] h-fit flex flex-col justify-between gap-8 md:gap-1 mx-auto '>
    <div className='md:w-[820px] w-[90vw] md:h-[794px] h-auto flex flex-col justify-between'>
    <Image src="/b1.png" alt="" width={817} height={500} className='md:w-[817px] w-[90vw] md:h-[500px] h-auto'></Image>
    <div className='text-gray-500 flex gap-4 my-2 md:my-1 w-[90vw] justify-center md:justify-start'>
    <User size={20} color="#8f8f8f" strokeWidth={3} />
    <p>Admin</p>
    <Calendar size={20} color="#8f8f8f" strokeWidth={3} />
    <p>14 Oct 2022</p>
    <Tag size={20} color="#8f8f8f" strokeWidth={3} />
    <p>Wood</p>
    </div>
    <h1 className='text-[30px] font-medium text-center md:text-start'>Handmade pieces that took time to make</h1>
    <p className='text-gray-500 text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    <Link href='' className='underline underline-offset-8 font-bold text-center md:text-start'>Read more</Link>
    </div>
    <div className='md:w-[820px] w-[90vw] md:h-[794px] h-auto flex flex-col justify-between'>
    <Image src="/b2.png" alt="" width={817} height={500} className='md:w-[817px] w-[90vw] md:h-[500px] h-auto'></Image>
    <div className='text-gray-500 flex gap-4 my-2 md:my-1 w-[90vw] justify-center md:justify-start'>
    <User size={20} color="#8f8f8f" strokeWidth={3} />
    <p>Admin</p>
    <Calendar size={20} color="#8f8f8f" strokeWidth={3} />
    <p>14 Oct 2022</p>
    <Tag size={20} color="#8f8f8f" strokeWidth={3} />
    <p>Wood</p>
    </div>
    <h1 className='text-[30px] font-medium text-center md:text-start'>Handmade pieces that took time to make</h1>
    <p className='text-gray-500 text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    <Link href='' className='underline underline-offset-8 font-bold text-center md:text-start'>Read more</Link>
    </div>
    <div className='md:w-[820px] w-[90vw] md:h-[794px] h-auto flex flex-col justify-between'>
    <Image src="/b3.png" alt="" width={817} height={500} className='md:w-[817px] w-[90vw] md:h-[500px] h-auto'></Image>
    <div className='text-gray-500 flex gap-4 my-2 md:my-1 w-[90vw] justify-center md:justify-start'>
    <User size={20} color="#8f8f8f" strokeWidth={3} />
    <p>Admin</p>
    <Calendar size={20} color="#8f8f8f" strokeWidth={3} />
    <p>14 Oct 2022</p>
    <Tag size={20} color="#8f8f8f" strokeWidth={3} />
    <p>Wood</p>
    </div>
    <h1 className='text-[30px] font-medium text-center md:text-start'>Handmade pieces that took time to make</h1>
    <p className='text-gray-500 text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    <Link href='' className='underline underline-offset-8 font-bold text-center md:text-start'>Read more</Link>
    </div>

   

  
</div>
<div className='md:w-[393px] w-[90vw] md:h-[1228px] h-fit'>
<div className='md:w-[393px] w-[90vw] h-[537px] flex flex-col justify-between mx-auto'>
    <div className='flex items-center mx-auto'>
        <label htmlFor="name" className='relative'>
        <Search size={36} color="#000000" strokeWidth={1.25} className='absolute right-3 top-3' />
            <input type="text" className='md:w-[311px] w-[79vw] h-[58px] border-2 border-black rounded-lg p-3'/>
        </label>
    </div>

    <h1 className='text-[24px] font-medium px-10'>Categories</h1>
    <div className='text-gray-500 flex justify-between px-10'>
        <p>Crafts</p>
        <p>2</p>
    </div>
    <div className='text-gray-500 flex justify-between px-10'>
        <p>Design</p>
        <p>2</p>
    </div>
    <div className='text-gray-500 flex justify-between px-10'>
        <p>Handmade</p>
        <p>8</p>
    </div>
    <div className='text-gray-500 flex justify-between px-10'>
        <p>Inerior</p>
        <p>6</p>
    </div>
    <div className='text-gray-500 flex justify-between px-10'>
        <p>wood</p>
        <p>4</p>
    </div>
</div>
<div className='md:w-[393px] w-[90vw] h-[650px] flex flex-col justify-between items-center mx-auto'>
    <h1 className='text-[24px] font-medium '>Recent Posts</h1>
    <div className='flex items-center gap-4'>
    <Image src="/img2.png" alt="" width={80} height={80} className='w-[80px] h-[80px]'></Image>

        <div className='w-[120px]'>
            <h1 className='text-[14px]'>Going all-in with millennial design</h1>
            <p className='text-gray-500 text-[12px]'>03 Aug 2022</p>
        </div>
    </div>

    <div className='flex items-center gap-4'>
    <Image src="/img4.png" alt="" width={80} height={80} className='w-[80px] h-[80px]'></Image>

        <div className='w-[120px]'>
            <h1 className='text-[14px]'>Going all-in with millennial design</h1>
            <p className='text-gray-500 text-[12px]'>03 Aug 2022</p>
        </div>
    </div>

    <div className='flex items-center gap-4'>
    <Image src="/img3.png" alt="" width={80} height={80} className='w-[80px] h-[80px]'></Image>

        <div className='w-[120px]'>
            <h1 className='text-[14px]'>Going all-in with millennial design</h1>
            <p className='text-gray-500 text-[12px]'>03 Aug 2022</p>
        </div>
    </div>

    <div className='flex items-center gap-4'>
    <Image src="/img4.png" alt="" width={80} height={80} className='w-[80px] h-[80px]'></Image>

        <div className='w-[120px]'>
            <h1 className='text-[14px]'>Going all-in with millennial design</h1>
            <p className='text-gray-500 text-[12px]'>03 Aug 2022</p>
        </div>
    </div>

    <div className='flex items-center gap-4'>
    <Image src="/img3.png" alt="" width={80} height={80} className='w-[80px] h-[80px]'></Image>

        <div className='w-[120px]'>
            <h1 className='text-[14px]'>Going all-in with millennial design</h1>
            <p className='text-gray-500 text-[12px]'>03 Aug 2022</p>
        </div>
    </div>
</div>
</div>

</div>

<Pagination className='md:my-28 my-8'>
  <PaginationContent >
    <PaginationItem >
      <PaginationPrevious   className='bg-[#FAF3EA] md:text-[20px] text-[12px] md:w-[200px] md:h-[50px] w-[100px] h-[30px] hover:bg-[#B88E2F] hover:text-white'/>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink  className='bg-[#FAF3EA]  md:text-[20px] text-[12px] md:w-[100px] md:h-[50px] w-[50px] h-[30px] hover:bg-[#B88E2F] hover:text-white'>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
    <PaginationLink className='bg-[#FAF3EA] md:text-[20px] text-[12px] md:w-[100px] md:h-[50px] w-[50px] h-[30px] hover:bg-[#B88E2F] hover:text-white'>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext  className='bg-[#FAF3EA] md:text-[20px] text-[12px] md:w-[200px] md:h-[50px] w-[100px] h-[30px] hover:bg-[#B88E2F] hover:text-white'/>
    </PaginationItem>
  </PaginationContent>
</Pagination>

<Icon />
    </div>
  )
}

export default page