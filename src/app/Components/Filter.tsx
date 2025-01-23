"use client"
import { GripHorizontal, SlidersHorizontal, StretchHorizontal } from 'lucide-react'
import React, { useContext, useState } from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { CartContext } from './Context'
import Products from './Products'
import FilterSelect from './Catagory'


const Filter = () => {

  const {
    cart,
    add,
    del,
    filteredProducts,
    filters,
    products,
    pagination,
    setFilters,
    setPagination,
  } = useContext(CartContext)!;


  
const handlevaluechange=(value:number | number[])=>{
  setFilters((prev:any)=>({...prev, priceRange: value as number[] }))
}
  
const handleSortChange=(event: React.ChangeEvent<HTMLSelectElement>)=>{
  setFilters((prev) => ({ ...prev, sortBy: event.target.value }))
}

const totalProducts = filteredProducts.length;


const displayedStart = (pagination.currentPage - 1) * pagination.itemsPerPage + 1;
const displayedEnd = Math.min(pagination.currentPage * pagination.itemsPerPage, totalProducts);
console.log("filteredproducts",products.map((obj)=>obj.tags.map((tg)=>tg)))
  return (
    <div className='w-[100vw] h-fit py-4 md:py-1 md:h-[100px] bg-[#F9F1E7] flex flex-col md:flex-row gap-4 md:gap-1 justify-between px-4 md:px-32 items-center'>
        <div className='flex gap-3 items-center'>
        
        <Sheet >
  <SheetTrigger ><SlidersHorizontal strokeWidth={1.25} /></SheetTrigger>
  <SheetContent side="left" className='bg-[#F9F1E7] '>
    <SheetHeader>
      <SheetTitle className='my-9 font-semibold'>Apply filters</SheetTitle>
      <SheetDescription> 
        <div className='text-lg my-4'>Price Starting with : {filters.priceRange[0]}</div>
      <Slider defaultValue={filters.priceRange} min={0} max={1000} step={1} onValueChange={handlevaluechange} className='my-8'/>
  <FilterSelect />
     
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        <div className='md:text-[20px] text-[12px] font-semibold'>Filter</div>
        <GripHorizontal color="#000000" strokeWidth={2.75} />
        <StretchHorizontal strokeWidth={1} />
        <div>|</div>
        <div className='md:text-[18px] text-[11px]'>Showing {displayedStart}&ndash;{displayedEnd} of {totalProducts} results</div>
        </div>
        <div className='flex gap-3 items-center'>
            <div className='md:text-[20px] text-[12px]'>show</div>
            <div className='md:w-[55px] w-[25px] md:h-[55px] h-[30px] bg-white opacity-50 rounded-lg flex justify-center items-center  md:text-[18px] text-[11px]'>{pagination.itemsPerPage}</div>
            <div className='md:text-[20px] text-[12px]'>Sort by</div>
            <div className='md:w-[188px] w-[100px] md:h-[55px] h-[30px] bg-white opacity-50 rounded-lg flex justify-center items-center  md:text-[18px] text-[11px]'>   <select value={filters.sortBy} className='bg-[#F9F1E7] outline-none text-black' onChange={handleSortChange}>
          <option value="price">High to low</option>
          <option value="name">Low to high</option>
        </select>
      </div></div>

        </div>
    
  )
}

export default Filter