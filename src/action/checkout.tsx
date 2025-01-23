import { client } from "@/sanity/lib/client"
import { Product } from "../../types/product"
import { Customer } from "../../types/customer"

const CreatCustomerInsanity=async (customerInfo:Customer)=>{
    try {
        const customerObject={
            _type:"customer",
            name:customerInfo.name,
            email:customerInfo.email,
            phone:customerInfo.phone,
            address:customerInfo.address
        }

        const response =await client.create(customerObject)
        console.log("customer created in sanity",response)
        return response
    }
    catch(error){
       
        throw error
}
}
const CreateOrderInsanity=async (cartData:Product[],customer_id:string)=>
{
    try{
        const orderObject={
            _type: "order",
            customer:{
                _type:"reference",
                _ref:customer_id
            },
            items:cartData.map((item:Product)=>(
                {
                
                    _id:item._id,
                    _key: `${Date.now()}`,
                    product_name:item.name,
                    product_price:item.price,
                    quantity:item.qnty
                }
                
            )),
            order_date: new Date().toISOString()
        }
        const response =await client.create(orderObject)
       
        return response
    }
    catch(error){
        console.log('error created in order sanity',error)
        throw error
    }
}

export default async function checkout(cartData:Product[],customerInfo:Customer){
    try{
        const customer =await CreatCustomerInsanity(customerInfo)
        await CreateOrderInsanity(cartData,customer._id)
        console.log("checkout completed")
    }
    catch(error){
        
        throw error
    }
}