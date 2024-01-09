import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, productQtyInCartSelector } from '@/store/features/cartSlice';
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function AddToCart({product}) {
    const qty = useSelector(state=>productQtyInCartSelector(state, product.id))
    const dispatch = useDispatch()

    if(!qty){
        return(
            <div>
                <button 
                    className={`uppercase font-semibold text-md w-full bg-orange-600 hover:bg-orange-800 text-white rounded-sm shadow-md p-2`}
                    onClick={()=>dispatch(increment(product))}
                >
                    Add to Cart
                </button>
            </div>
        )
    }
  return (
    <div className='flex space-x-2 items-center'>
        <button 
          className={`flex items-center justify-center px-2 py-0.5
              text-white text-xl font-semibold rounded shadow-sm
              bg-orange-700 hover:bg-orange-500`}
          onClick={()=>dispatch(decrement(product))}
        >
            {qty === 1 ? 
                <button 
                    className={`flex items-center justify-center px-0.5 py-0.5
                    text-white text-2xl`}
                >
                    <MdOutlineDeleteOutline className='' />
                </button> : 
                <span className="w-6">-</span>
            }
        </button>
        <span className={`font-semibold text-lg`}>
            {qty}
        </span>
        <button 
          className={`flex items-center justify-center px-2 py-0.5
          text-white text-2xl font-semibold rounded shadow-sm
          bg-orange-700 hover:bg-orange-500`}
          onClick={()=>dispatch(increment(product))}
        >
          <span className="w-6">+</span>
        </button>
    </div>
  )
}
