import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, removeItem, productQtyInCartSelector } from '@/store/features/cartSlice';

export default function ProductCartQty({product}) {
    const qty = useSelector(state=>productQtyInCartSelector(state, product.product.id))
    const dispatch = useDispatch()
  return (
    <div className='flex justify-between items-center'>
        <div>
            <button 
                className={`py-0.5 px-1 flex items-center space-x-1 
                text-center text-orange-700 font-semibold
                rounded hover:bg-orange-200`}
                onClick={() => dispatch(removeItem(product.product)) }
            >
                <span>
                    <MdOutlineDeleteOutline className='w-6 h-6' />
                </span>
                <span>
                    Remove
                </span>
            </button>
        </div>
        <div className='flex space-x-2 items-center'>
            <button 
                className={`flex items-center justify-center px-2 py-0.5
                text-white text-2xl font-semibold rounded shadow-sm
                bg-orange-700 hover:bg-orange-500`}
                onClick={()=>dispatch(decrement(product.product))}
            >
                {qty === 1 ?
                    <button>
                        <MdOutlineDeleteOutline className='w-6 h-6' />
                    </button> :
                    <span className="w-6">
                        -
                    </span>
                }
            </button>
            <span className={`font-semibold text-lg`}>
                {qty}
            </span>
            <button
                className={`flex items-center justify-center px-2 py-0.5
                text-white text-2xl font-semibold rounded shadow-sm
                bg-orange-700 hover:bg-orange-500`}
                onClick={()=>dispatch(increment(product.product))}
            >
                <span className="w-6">
                    +
                </span>
            </button>
        </div>
    </div>
  )
}
