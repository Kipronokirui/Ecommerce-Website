import React from 'react'
import Link from 'next/link';
import { deals } from '@/utils/deals';

export const forHome = [
    {
        title:"Storage & Organization",
        slug:"kitchen-storage-and-organization",
        image:"images/forHome/home01.png"
    },
    {
        title:"Lighting",
        slug:"home-lighting",
        image:"images/forHome/home02.png"
    },
    {
        title:"Kitchen & Dining",
        slug:"home-kitchen-dining",
        image:"images/forHome/home03.png"
    },
    {
        title:"Home Decor",
        slug:"home-decor",
        image:"images/forHome/home04.png"
    },
    {
        title:"Bedding",
        slug:"bedding",
        image:"images/forHome/home05.png"
    },
    {
        title:"Bath Accesories",
        slug:"bath-accessories",
        image:"images/forHome/home06.png"
    },
]
export default function ForYourHome() {
  return (
    <div>
        <div className='bg-orange-300 p-4 w-full flex justify-center text-gray-800'>
            <div className='inline-flex items-center font-bold text-lg tracking-tight'>
                For Your Home
            </div>
        </div>
        <section className='py-2 px-4 grid grid-cols-6 gap-2 place-content-center place-items-center justify-center'>
            {forHome.map((deal, index) => {
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
