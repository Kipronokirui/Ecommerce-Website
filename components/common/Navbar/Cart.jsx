import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';

export default function Cart() {
  return (
    <div>
        <Link href={`#`} className='flex flex-row gap-2 items-center font-bold hover:text-orange-600 cursor-pointer'>
            <span>
                <FaShoppingCart className='w-6 h-6'/>
            </span>
            <span>Cart</span>
        </Link>
    </div>
  )
}
