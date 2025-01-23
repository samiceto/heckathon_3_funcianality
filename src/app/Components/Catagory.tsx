"use client";
import { useContext, useState } from 'react';
import { CartContext } from './Context';

const FilterSelect = () => {
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

  const [selectedCategory, setSelectedCategory] = useState('select category');


  const handleCategoryChange = (category: string) => {

    if (selectedCategory === category) {
      setSelectedCategory('select category');  
      setFilters({ ...filters, catagory: '' }); 
    } else {
      setSelectedCategory(category);           
      setFilters({ ...filters, catagory: category }); 
    }
  };


  const uniqueTags = Array.from(new Set(products.flatMap((obj) => obj.tags)));

  return (
    <div className="mb-6">
      <label htmlFor="cat" className="block text-lg font-semibold mb-2 text-gray-700">
        Filter by Category
      </label>

      <div
        className="overflow-auto max-h-72 border border-gray-300 rounded-lg p-4"
        style={{ width: '100%' }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {uniqueTags.map((tg, index) => (
            <div
              key={index}
              onClick={() => handleCategoryChange(tg)}
              className={`cursor-pointer text-center p-3 rounded-lg border border-gray-300 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white 
                          ${selectedCategory === tg ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} 
                          shadow-md hover:shadow-lg transform hover:scale-105 break-words`}
            >
              {tg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSelect;
