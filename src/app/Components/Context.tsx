"use client"
import { createContext } from "react";
 
interface Cart{
    [X:string]:any
}
export interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    tags: string[];
    description: string;
    isNew: boolean;
    dicountPercentage: number;
}

interface CartContextProps {
    cart: Cart[];
    add: (item: Cart) => void;
    del: (id: string) => void;
    wish: Cart[];
    searchQuery:string;
    addwish: (item: Cart) => void;
    delwish: (id: string) => void;
    compare: Cart[];
    addcompare: (item: Cart) => void;
    delcompare: (id: string) => void;
    products: Product[];
    filteredProducts: Product[];
    filteredProducts2: Product[];
    filters: {
        priceRange: number[];
        sortBy: string;
        catagory:string;
    };
    pagination: {
        currentPage: number;
        itemsPerPage: number;
    };
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    setsearchQuery: React.Dispatch<React.SetStateAction<string>>;
    setFilters: React.Dispatch<React.SetStateAction<{ priceRange: number[]; sortBy: string;catagory:string }>>;
    setPagination: React.Dispatch<React.SetStateAction<{ currentPage: number; itemsPerPage: number }>>;
}

export const CartContext=createContext<CartContextProps | undefined>(undefined)