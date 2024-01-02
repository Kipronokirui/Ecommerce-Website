import React from 'react'

export const customCategories = [
    {
        name: "Clearance Sale",
        url: "#",
        image: "images/customCategories/TN1.png"
    },
    {
        name: "Televisions",
        url: "#",
        image: "images/customCategories/TN2.png"
    },
    {
        name: "Small Appliances",
        url: "#",
        image: "images/customCategories/TN3.png"
    },
    {
        name: "Men`s Fashion",
        url: "#",
        image: "images/customCategories/TN9.png"
    },
    {
        name: "Women`s Fashion",
        url: "#",
        image: "images/customCategories/TN10.png"
    },
    {
        name: "Computing",
        url: "#",
        image: "images/customCategories/TN12.png"
    },
    {
        name: "Beauty",
        url: "#",
        image: "images/customCategories/TN14.png"
    },
    {
        name: "Home & Office",
        url: "#",
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
                <a href="#">
                    <img
                        className="rounded-lg"
                        src={`${category.image}`}
                        alt=""
                    />
                </a>
                <a href={`#`} >
                    <p className='text-center text-sm font-light'>
                        {category.name}
                    </p>
                </a>
            </div>
            ))}
        </section>
    </div>
  )
}
