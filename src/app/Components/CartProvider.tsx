"use client"
import { ReactNode, useEffect, useState } from "react";
import { CartContext, Product }  from "./Context";
import { client } from "@/sanity/lib/client";


const CartProvider=({children}:{children: React.ReactNode})=>{


    interface obj{
        id:string,
        image:string,
        name:string,
        price:number,
        qnty:number,
        shipping:number,
        description:string,
        tags:string[]
    }
    interface CartProviderProps {
        children: ReactNode;
    }
    const [cart,setcart]=useState<obj[]>([])
    const [products,setProducts]=useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); 
    const [filteredProducts2, setFilteredProducts2] = useState<Product[]>([]); 
    const [filters, setFilters] = useState<{ priceRange: number[]; sortBy: string;catagory:string }>({
        priceRange: [0, 1000],
        sortBy: "Default",
        catagory:"",
    });
    const [pagination, setPagination] = useState({ currentPage: 1, itemsPerPage: 16 });
const [searchQuery,setsearchQuery]=useState<string>('')


    const [wish,setWish]=useState<obj[]>([])
    const addwish:any=(obj:obj)=>setWish([...wish,obj])
    const delwish=(id:any)=>{
        const newCArt=wish.filter((val)=>val.id !== id)
        return setWish([...newCArt])}

        const [compare,setcompare]=useState<obj[]>([])
        const addcompare:any=(obj:obj)=>setcompare([...compare,obj])
        const delcompare=(id:any)=>{
            const newcompare=compare.filter((val)=>val.id !== id)
            return setcompare([...newcompare])}



    useEffect(()=>{
        const fetchproduct=async()=>{
            const query=await client.fetch(`*[_type=='product']{title,_id,tags,
  'image':productImage.asset->url,price,
  isNew,description,_createdAt,dicountPercentage}`)
  setProducts(query)
        }
        fetchproduct()
    },[])



    
    const filterproducts=()=>{
        let filtered=[...products]


        if (searchQuery) {
            filtered = filtered.filter(product =>
              product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
          }

          if (filters.catagory) {
            filtered = filtered.filter(product =>
              product.tags.some(tag => 
                tag.toLowerCase().includes(filters.catagory.toLowerCase())
              )
            );
          }

       
    setFilteredProducts(filtered)
 }

 useEffect(()=>{
    filterproducts()
 },[searchQuery,products,filters])



    const add:any=(obj:obj)=>setcart([...cart,obj])

    const del=(id:any)=>{
        const newcart=cart.filter((val)=>val.id !== id)
        return setcart([...newcart])
    }


    const filterproducts2=()=>{
        let filtered2=[...filteredProducts]

        filtered2=filtered2.filter((product)=>product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])
   


    if(filters.sortBy== 'price'){
        filtered2.sort((a,b)=> b.price - a.price)
    }else{
        filtered2.sort((a,b)=> a.price - b.price)
    }
    setFilteredProducts2(filtered2)
    }
useEffect(()=>{
    filterproducts2()
},[filteredProducts,filters])
    return(
<div>
  < CartContext.Provider value={{filteredProducts2,searchQuery,setsearchQuery,compare,addcompare,delcompare,wish,addwish,delwish,cart,add,del, products,filteredProducts,filters,pagination,setProducts,setFilters,setPagination}}>
    {children}
    </ CartContext.Provider>
   
    
    </div>
)
  }


  export default CartProvider