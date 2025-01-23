"use client"
import React, { useContext } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { CartContext } from './Context';

const Pagination1 = () => {
      const {
        cart,
        add,
        del,
        filteredProducts,
        filters,
        pagination,
        setFilters,
        setPagination,
      } = useContext(CartContext)!;

      const handleNext = () => {
        if (pagination.currentPage < totalPages) {
          setPagination(prevState => ({ ...prevState, currentPage: pagination.currentPage + 1 }));
        }
      };
      const handlePrevious = () => {
        if (pagination.currentPage > 1) {
          setPagination(prevState => ({ ...prevState, currentPage: pagination.currentPage - 1 }));
        }
      };
      const totalPages = Math.ceil(filteredProducts.length / pagination.itemsPerPage);
  return (
    <div>
           <Pagination className='md:my-28 my-8'>
  <PaginationContent >
    <PaginationItem >
      <PaginationPrevious  type="button" className='bg-[#FAF3EA] md:text-[20px] text-[12px] md:w-[200px] md:h-[50px] w-[100px] h-[30px] hover:bg-[#B88E2F] hover:text-white'
                 onClick={handlePrevious} disabled={pagination.currentPage === 1}/>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink  type="button" className='  md:text-[20px] text-[12px] md:w-[100px] md:h-[50px] w-[50px] h-[30px] bg-[#B88E2F] text-white'>{pagination.currentPage}</PaginationLink>
    </PaginationItem>
    <PaginationItem>
    <PaginationLink type="button" className='bg-[#FAF3EA] md:text-[20px] text-[12px] md:w-[100px] md:h-[50px] w-[50px] h-[30px] hover:bg-[#B88E2F] hover:text-white' onClick={handleNext} disabled={pagination.currentPage === totalPages}>{pagination.currentPage +1}</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext  type="button" className='bg-[#FAF3EA] md:text-[20px] text-[12px] md:w-[200px] md:h-[50px] w-[100px] h-[30px] hover:bg-[#B88E2F] hover:text-white' onClick={handleNext}
              disabled={pagination.currentPage === totalPages}/>
    </PaginationItem>
  </PaginationContent>
</Pagination>
    </div>
  )
}

export default Pagination1