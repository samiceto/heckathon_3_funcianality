"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import {
    Menubar,

    MenubarMenu,

    MenubarTrigger,
  } from "@/components/ui/menubar"
import Link from 'next/link'
import { CartContext } from './Context'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CircleX, ShoppingBag, ShoppingCart } from 'lucide-react'
  

const Header = (props:any) => {
  const obj:any=useContext(CartContext)
  return (
    <div>
    <div className='hidden  w-[100vw] h-[100px] md:flex justify-between items-center px-[30px]'>
        <div className='flex items-center gap-4'>
        <Image src="/logo.png" alt="" width={50} height={50} className='w-[50px]'></Image>
            <h1 className='text-[34px] font-bold inter2'>Furniro</h1></div>
        <div className='flex text-[16px]'>
        <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <Link href="/" className='text-[16px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Home</Link>

    </MenubarTrigger>
    
  </MenubarMenu>
  
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
<Link href="/shop" className='text-[16px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Shop</Link>
</MenubarTrigger>
    
    </MenubarMenu>
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
<Link href="/blog" className='text-[16px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Blog</Link>
</MenubarTrigger>
    
    </MenubarMenu>
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
   <Link href="/contect" className='text-[16px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Contact</Link>
   </MenubarTrigger>
    
    </MenubarMenu>
</Menubar>
        </div>
        <div className='flex items-center gap-4'>
        <div className='text-gray-800'>{props.cart}
        
        </div>


            <div className='flex items-center'>
              <input value={ obj.searchQuery} placeholder='search' onChange={(e)=>obj.setsearchQuery(e.target.value)} className='w-34'/>
                <Image src="/search.png" alt="" width={24} height={24} className='w-[24px]'></Image>
            </div>
            <div className={`${obj.wish.length !== 0 ? 'bg-red-500   rounded-full  flex items-center '  : ''}`}><Link href="/wishlist">{props.heart}</Link></div>
            <div className='text-gray-800 relative'>{<DropdownMenu>
      <DropdownMenuTrigger><ShoppingCart /></DropdownMenuTrigger>
      <DropdownMenuContent className="text-black bg-white  px-7">
        <DropdownMenuLabel className="flex gap-24"><p className="text-[24px] font-semibold">Shopping Cart</p> <ShoppingBag /></DropdownMenuLabel>
        <DropdownMenuSeparator />
        {obj.cart.map((item:any)=>{
          return(
            <div key={item._id}>
              <DropdownMenuItem className="flex justify-between">
        <Image src={item.image} width={100} height={100} alt="/" className='w-[108px] h-[105px] my-2 bg-[#B88E2F] bg-opacity-40 rounded-lg '></Image>
        <div>
          <div><p>{item.title}</p></div>
          <div className="flex gap-3"><span>{item.qnty}</span><span>x</span><span className="text-[#B88E2F]">Rs. {item.price}</span></div>
        </div>
        <div>
        <CircleX color="#595959" onClick={()=>obj.del(item.id)}/>
        </div>
        </DropdownMenuItem>
            </div>
          )
        })}
        <DropdownMenuSeparator className="mt-16"/>
        <DropdownMenuItem className=" flex gap-4"><span className=" px-4 py-1 border-[1.2px] border-black rounded-full"><Link href="/cart">Cart</Link></span ><span className=" px-4 py-1 border-[1.2px] border-black rounded-full"><Link href="/checkout">Checkout</Link></span><span  className=" px-4 py-1 border-[1.2px] border-black rounded-full"><Link href="/productcomparision">Comparison</Link></span></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>}{obj.cart && obj.cart.length > 0 && (
    <div className="bg-red-500 rounded-full h-[18px] w-[18px] absolute -top-3 -right-3 text-white text-xs flex items-center justify-center font-bold">
      {obj.cart.length}
    </div>
  )}


            </div>

            
        </div>

    </div>
    <div className='absolute md:top-[70px] top-3 right-[6px] z-30 flex justify-center items-center rounded-md px-3 py-2  md:py-2 w-32 h-8 text-[12px] bg-green-500 text-white'><Link href="/auth">Login As Addmin</Link></div>

    <div className='md:hidden w-[100vw] h-full flex-col  items-center px-[10px] my-4 gap-4'>
      <div className='flex justify-between px-2 w-full'>
        <div className='flex items-center gap-4 w-fit '>
        <Image src="/logo.png" alt="" width={50} height={50} className='w-[35px]'></Image>
            <h1 className='text-[22px] font-bold inter2'>Furniro</h1></div>
            </div>
        <div className='flex items-center gap-4 w-fit justify-between mx-auto'>
        <div className='text-gray-800 '>{props.cart2}</div>


            <div className='flex items-center relative'>
            <input value={ obj.searchQuery} placeholder='search' onChange={(e)=>obj.setsearchQuery(e.target.value)} className='w-[50vw]'/>
                <Image src="/search.png" alt="" width={24} height={24} className='w-[20px] absolute right-0'></Image>
            </div>
            <div className='w-[20px]'>{props.heart}</div>
            <div className='text-gray-800 mt-2 relative'>{<DropdownMenu>
      <DropdownMenuTrigger><ShoppingCart className="w-[18px]"/></DropdownMenuTrigger>
      <DropdownMenuContent className="text-black bg-white  px-7">
        <DropdownMenuLabel className="flex gap-24"><p className="text-[24px] font-semibold">Shopping Cart</p> <ShoppingBag /></DropdownMenuLabel>
        <DropdownMenuSeparator />
        {obj.cart.map((item:any)=>{
          return(
            <div key={item._id}>
              <DropdownMenuItem className="flex justify-between">
        <Image src={item.image} width={100} height={100} alt="/" className='w-[108px] h-[105px] my-2 bg-[#B88E2F] bg-opacity-40 rounded-lg '></Image>
        <div>
          <div><p>{item.title}</p></div>
          <div className="flex gap-3"><span>{item.qnty}</span><span>x</span><span className="text-[#B88E2F]">Rs. {item.price}</span></div>
        </div>
        <div>
        <CircleX color="#595959" />
        </div>
        </DropdownMenuItem>
            </div>
          )
        })}
        <DropdownMenuSeparator className="mt-16"/>
        <DropdownMenuItem className=" flex gap-4"><span className=" px-4 py-1 border-[1.2px] border-black rounded-full"><Link href="/cart">Cart</Link></span ><span className=" px-4 py-1 border-[1.2px] border-black rounded-full"><Link href="/checkout">Checkout</Link></span><span  className=" px-4 py-1 border-[1.2px] border-black rounded-full"><Link href="/productcomparision">Comparison</Link></span></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>}
    {obj.cart && obj.cart.length > 0 && (
    <div className="bg-red-500 rounded-full h-[18px] w-[18px] absolute -top-3 -right-3 text-white text-xs flex items-center justify-center font-bold">
      {obj.cart.length}
    </div>
    
  )}
  
    </div>

            
        </div>
        </div>
        <div className='md:hidden flex text-[16px] w-fit mx-auto'>
        <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <Link href="/" className='text-[12px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Home</Link>

    </MenubarTrigger>
    
  </MenubarMenu>
  
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
<Link href="/shop" className='text-[12px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Shop</Link>
</MenubarTrigger>
    
    </MenubarMenu>
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
<Link href="/blog" className='text-[12px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Blog</Link>
</MenubarTrigger>
    
    </MenubarMenu>
</Menubar>

<Menubar>
<MenubarMenu>
<MenubarTrigger>
   <Link href="/contect" className='text-[12px] hover:font-semibold hover:underline active:underline active:font-bold focus:underline inter2'>Contact</Link>
   </MenubarTrigger>
    
    </MenubarMenu>
</Menubar>

        </div>
    

    </div>
  )
}

export default Header