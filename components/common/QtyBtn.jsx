import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function QtyBtn({onIncrease, onDecrease, qty}) {
  return (
    <div className='flex space-x-2 items-center'>
        <button 
          className={`flex items-center justify-center px-2 py-0.5
              text-white text-xl font-semibold rounded shadow-sm
              bg-orange-700 hover:bg-orange-500`}
          onClick={onDecrease}
        >
            {qty === 1 ? 
              <MdOutlineDeleteOutline className='w-6 h-6' /> : 
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
          onClick={onIncrease}
        >
          <span className="w-6">+</span>
        </button>
    </div>
  )
}
