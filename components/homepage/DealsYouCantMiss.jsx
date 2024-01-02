import React from 'react'
import Link from 'next/link';
import { deals } from '@/utils/deals';

export default function DealsYouCantMiss() {
  return (
    <div>
        <div className='bg-orange-100 p-4 w-full flex justify-center text-gray-800'>
            <div className='inline-flex items-center font-bold text-lg tracking-tight'>
                Deals You Can`t Miss
            </div>
        </div>
        <section className='py-2 px-4 grid grid-cols-6 gap-2 place-content-center place-items-center justify-center'>
            {deals.map((deal, index) => {
                return(
                    <Link 
                        href={`#`} 
                        key={index}
                        className='overflow-hidden transition-transform transform-gpu hover:scale-105'
                    >
                        <img 
                            src={`${deal.image}`} 
                            alt={`Image`} 
                            className={`rounded`}
                        />
                    </Link>
                )
            })}
        </section>
    </div>
  )
}
