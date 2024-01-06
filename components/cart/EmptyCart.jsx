import Link from 'next/link'
import React from 'react'

export default function EmptyCart() {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center'>
            <div className='mb-2'>
                Icon
            </div>
            <div className='mb-2'>
                <span className='text-sm font-semibold'>
                    Your cart is empty!
                </span>
            </div>
            <div className='mb-6'>
                <span className='font-light text-sm'>
                    Browse our categories and discover our best deals!
                </span>
            </div>
            <div>
                <Link 
                    href={`/`}
                    className={`px-4 py-2 text-center text-white font-semibold rounded-sm shadow-md bg-orange-700 hover:bg-orange-800`}
                >
                    Start Shopping
                </Link>
            </div>
        </div>
    </div>
  )
}
