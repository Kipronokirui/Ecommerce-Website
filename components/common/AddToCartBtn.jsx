import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, productQtyInCartSelector } from '@/store/features/cartSlice'
import QtyBtn from './QtyBtn'

export default function AddToCartBtn({product}) {
    const qty = useSelector(state=>productQtyInCartSelector(state, product.id))
    const dispatch = useDispatch()

    if(!qty){
        return(
            <div>
                <button 
                    className={`w-full py-1 px-2 text-white rounded bg-orange-500 shadow-sm`}
                    onClick={()=>dispatch(increment(product))}
                >
                    Add to Cart
                </button>
            </div>
        )
    }
  return (
    <div>
        <QtyBtn 
            onIncrease={()=>dispatch(increment(product))}
            onDecrease={()=>dispatch(decrement(product))}
            qty={qty}
        />
    </div>
  )
}
