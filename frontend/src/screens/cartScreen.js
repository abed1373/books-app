import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const CartScreen=()=>{
    const {bookId}=useParams()
    const location =useLocation();
   
    const searchParams=new URLSearchParams(location.search);
    
    const quantityValue=searchParams.get('quantity')
    const quantity = quantityValue ? Number(quantityValue) : 1;
    return (
        <div>
   <p>BookId:{bookId} ,quantity:{quantity} </p>
        </div>
    )
}
export default CartScreen
