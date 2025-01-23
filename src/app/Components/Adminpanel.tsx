"use client"
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';


const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const fetchProducts = async () => {
      const query = '*[_type == "product"]{_id,title,price}';
      const data = await client.fetch(query);
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, [products]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Admin Panel</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-1 md:px-4 bg-[#f2c48c] text-white text-left text-[12px] md:text-[16px]">Product Name</th>
              <th className="py-3 px-1 md:px-4 bg-[#f2c48c] text-white text-left text-[12px] md:text-[16px]">Price</th>
              <th className="py-3 px-1 md:px-4 bg-[#f2c48c] text-white text-left text-[12px] md:text-[16px]">Stock</th>
              <th className="py-3 px-1 md:px-4 bg-[#f2c48c] text-white text-left text-[12px] md:text-[16px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product:any) => (
              <tr key={product._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-1 md:px-4">{product.title}</td>
                <td className="py-3 px-1 md:px-4">{`$${product.price}`}</td>
                <td className="py-3 px-1 md:px-4">10</td>
                <td className="py-3 px-1 md:px-4 flex flex-col md:flex-row gap-2">
                  <button
                    className="bg-yellow-500 text-white py-1 w-12 sm:w-16 text-[12px] md:text-[16px] md:w-20 rounded-md md:rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    className=" bg-red-500 text-white w-12 sm:w-16 text-[12px] md:text-[16px] md:w-20 rounded-md md:rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
