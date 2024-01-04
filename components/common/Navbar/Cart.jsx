import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Cart() {
  return (
    <div>
        <Link 
          href={`/cart`} 
          className={`flex flex-row gap-2 items-center font-semibold 
          hover:text-orange-600 cursor-pointer`}
        >
            <div className='relative'>
                <IoCartOutline className='w-6 h-6'/>
                <div 
                  className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 
                  bg-red-500 rounded-full w-4 h-4 flex items-center 
                  justify-center text-white text-xs`}
                >
                  3
                </div>
            </div>
            <span>
              Cart
            </span>
        </Link>
    </div>
  )
}
