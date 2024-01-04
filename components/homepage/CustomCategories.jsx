import React from 'react'
import Link from 'next/link'

export const customCategories = [
    {
        name: "Clearance Sale",
        url: "clearance-sale",
        image: "images/customCategories/TN1.png"
    },
    {
        name: "Televisions",
        url: "televisions",
        image: "images/customCategories/TN2.png"
    },
    {
        name: "Small Appliances",
        url: "small-appliances",
        image: "images/customCategories/TN3.png"
    },
    {
        name: "Men`s Fashion",
        url: "mens-fashion",
        image: "images/customCategories/TN9.png"
    },
    {
        name: "Women`s Fashion",
        url: "womens-fashion",
        image: "images/customCategories/TN10.png"
    },
    {
        name: "Computing",
        url: "computing",
        image: "images/customCategories/TN12.png"
    },
    {
        name: "Beauty",
        url: "beauty",
        image: "images/customCategories/TN14.png"
    },
    {
        name: "Home & Office",
        url: "home-and-office",
        image: "images/customCategories/TN1.png"
    },
]
export default function CustomCategories() {
  return (
    <div className='p-4'>
        <section className='flex flex-row items-center justify-center space-x-2'>
            {customCategories.map((category, index) => (
            <div
                key={index}
                className={`bg-white border border-gray-200 rounded-lg shadow-md 
                    text-center overflow-hidden transition-transform transform-gpu hover:scale-105`}
            >
                <Link href={`/category/${category.url}`}>
                    <img
                        className="rounded-lg"
                        src={`${category.image}`}
                        alt=""
                    />
                    <p className='text-center text-xs font-light'>
                        {category.name}
                    </p>
                </Link>
            </div>
            ))}
        </section>
    </div>
  )
}
