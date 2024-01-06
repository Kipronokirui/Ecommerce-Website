"use client"
import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link'
import { FaSearch, FaChevronDown, FaAddressBook, FaUser, FaRegHeart, FaList } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import GridProductsView from './GridProductsView';
import ListProductsView from './ListProductsView';

export const category_products=[
    {
        id:0,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related01.jpg",
        currentPrice:13176,
        oldPrice:25025,
        initialItems:100,
        currentItems:45
    },
    {
        id:1,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related02.jpg",
        currentPrice:13577,
        oldPrice:24815,
        initialItems:100,
        currentItems:45
    },
    {
        id:2,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related03.jpg",
        currentPrice:11099,
        oldPrice:19118,
        initialItems:100,
        currentItems:45
    },
    {
        id:3,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related04.jpg",
        currentPrice:11900,
        oldPrice:15000,
        initialItems:100,
        currentItems:45
    },
    {
        id:4,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related05.jpg",
        currentPrice:11549,
        oldPrice:14999,
        initialItems:100,
        currentItems:45
    },
    {
        id:5,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:6,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:7,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:8,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:9,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:10,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:11,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:12,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:13,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:14,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:15,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
    {
        id:16,
        price:450,
        name:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        title:"AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System",
        image: "images/productDetails/related/related06.jpg",
        currentPrice:11590,
        oldPrice:19733,
        initialItems:100,
        currentItems:45
    },
]
export const brands=[
    {
        name:"TCL"
    },
    {
        name:"Toshimba"
    },
    {
        name:"Lenovo"
    },
    {
        name:"HP"
    },
    {
        name:"HP"
    },
    {
        name:"HP"
    },
    {
        name:"HP"
    },
]
export default function Category() {
    const [isActive, setIsActive] = useState(false);
    const [displayStyle, setDisplayStyle] = useState("grid");
    const dropdownRef = useRef(null);
    const onClick = () => setIsActive(!isActive);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsActive(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, []);
  return (
    <div>
        <section className='flex flex-row gap-2'>
            <section>
                <section className='flex flex-col w-3/10 bg-white rounded shadow'>
                    <div className='border-b p-2'>
                        <div>
                            <h6 className='uppercase text-sm font-medium'>
                                CATEGORY
                            </h6>
                        </div>
                        <div className={`w-full p-1 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-400`}>
                            <Link 
                                href={`#`} 
                                className='w-full text-sm font-medium'>
                                Sporting Goods
                            </Link>
                        </div>
                        <div className='mt-1'>
                            <ul className='pl-4'>
                                <li className={`cursor-pointer rounded-sm p-1 hover:bg-gray-300`}>
                                    <Link 
                                        href={`#`}
                                        className='font-normal text-sm'
                                    >
                                        Outdoor Recreation
                                    </Link>
                                </li>
                                <li className={`cursor-pointer rounded-sm p-1 hover:bg-gray-300`}>
                                    <Link 
                                        href={`#`}
                                        className='font-normal text-sm'
                                    >
                                        Sports & Fitness
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-b p-2'>
                        <div>
                            <h6 className='uppercase text-sm font-medium'>
                                EXPRESS DELIVERY
                            </h6>
                        </div>
                        <div className='inline-flex justify-center items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span>
                                JUMIA EXPRESS
                            </span> 
                        </div>
                    </div>
                    <div className='border-b p-2'>
                        <div>
                            <h6 className='uppercase text-sm font-medium'>
                                SHIPPED FROM
                            </h6>
                        </div>
                        <div className='inline-flex justify-center items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='bg-blue-500 text-white text-xs p-1 rounded'>
                                Shipped from abroad
                            </span> 
                        </div>
                        <div className='inline-flex justify-center items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                Shipped from Kenya
                            </span> 
                        </div>
                    </div>
                    <div className='border-b p-2'>
                        <div>
                            <h6 className='uppercase text-sm font-medium'>
                                Brand
                            </h6>
                        </div>
                        <div className='relative'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                                <FaSearch className='w-4 h-4 text-gray-500 dark:text-gray-400'/>
                            </div>
                            <input 
                                type='text'
                                placeholder='Search products, brands, and categories' 
                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                    focus:ring-blue-500 focus:border-blue-500 block w-80 ps-10 p-2.5  
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                            />
                        </div>
                        <section className='my-2 overflow-auto h-32'>
                            {brands?.map((brand, index) => {
                                return(
                                    <div
                                        key={index} 
                                        className={`flex items-center space-x-2 cursor-pointer group`}
                                    >
                                        <span className={`w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full`}>
                                            <input 
                                                id="default-checkbox" 
                                                type="checkbox" 
                                                defaultChecked={false}
                                                className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                                rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                            />
                                        </span>
                                        <span className='font-normal text-sm'>
                                            {brand.name}
                                        </span> 
                                    </div>
                                )
                            })}
                        </section>
                    </div>
                    <div className='border-b p-2'>
                        <div>
                            <h6 className='uppercase text-sm font-medium'>
                                Color
                            </h6>
                        </div>
                        <section className='my-2 overflow-auto h-32'>
                            {brands?.map((brand, index) => {
                                return(
                                    <div
                                        key={index} 
                                        className={`flex items-center space-x-2 cursor-pointer group`}
                                    >
                                        <span className={`w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full`}>
                                            <input 
                                                id="default-checkbox" 
                                                type="checkbox" 
                                                defaultChecked={false}
                                                className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                                rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                            />
                                        </span>
                                        <span className='font-normal text-sm'>
                                            {brand.name}
                                        </span> 
                                    </div>
                                )
                            })}
                        </section>
                    </div>
                    <div className='border-b p-2'>
                        <div>
                            <h6 className='uppercase text-sm font-medium'>
                                Discount
                            </h6>
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                Show only discounted items
                            </span> 
                        </div>
                    </div>
                    <div className='border-b p-2'>
                        <div className='flex items-center justify-between'>
                            <h6 className='uppercase text-sm font-medium'>
                                Discount
                            </h6>
                            <button 
                                className={`text-sm font-semibold py-0.5 px-1 rounded text-orange-500 hover:bg-orange-200`}
                            >
                                Apply
                            </button>
                        </div>
                        <div>
                            <input 
                                id="default-range" 
                                type="range" 
                                // value="50" 
                                className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700`} 
                            />
                        </div>
                    </div>
                    <div className='border-b p-2'>
                        <div>
                            <h6 className='uppercase text-sm font-medium'>
                                Discount Percentage
                            </h6>
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                50% or more
                            </span> 
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                40% or more
                            </span> 
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                30% or more
                            </span> 
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                20% or more
                            </span> 
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                10% or more
                            </span> 
                        </div>
                    </div>
                    <div className='border-b p-2'>
                        <div>
                            <h6 className='uppercase text-sm font-medium'>
                                Product Rating
                            </h6>
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='space-x-1 flex items-center font-normal text-sm'>
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-gray-400' />
                                <span className='ms-2'>& more</span>
                            </span> 
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='space-x-1 flex items-center font-normal text-sm'>
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-gray-400' />
                                <FaStar className='text-gray-400' />
                                <span className='ms-2'>& more</span>
                            </span> 
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='space-x-1 flex items-center font-normal text-sm'>
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-gray-400' />
                                <FaStar className='text-gray-400' />
                                <FaStar className='text-gray-400' />
                                <span className='ms-2'>& more</span>
                            </span> 
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='space-x-1 flex items-center font-normal text-sm'>
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-gray-400' />
                                <FaStar className='text-gray-400' />
                                <FaStar className='text-gray-400' />
                                <FaStar className='text-gray-400 me-1' />
                                <span className='ms-2'>& more</span>
                            </span> 
                        </div>
                    </div>
                    <div className='border-b p-2'>
                        <div>
                            <h6 className='uppercase text-sm font-medium'>
                                Seller Score
                            </h6>
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                80% or more
                            </span> 
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                60% or more
                            </span> 
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                40% or more
                            </span> 
                        </div>
                        <div className='flex items-center space-x-2 cursor-pointer group'>
                            <span className='w-8 h-8 flex items-center justify-center group-hover:bg-orange-300 rounded-full'>
                                <input 
                                    id="default-checkbox" 
                                    type="checkbox" 
                                    defaultChecked={false}
                                    className={`w-4 h-4 text-orange-600 bg-orange-600 border-gray-300 cursor-pointer
                                    rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500`} 
                                />
                            </span>
                            <span className='font-normal text-sm'>
                                20% or more
                            </span> 
                        </div>
                    </div>
                </section>
            </section>
            <section className='flex flex-col w-7/10 bg-white rounded shadow p-2'>
                <div className='border-b p-2 flex justify-between items-center'>
                    <div>
                        <h6 className='text-sm font-medium'>
                            Sporting Goods
                        </h6>
                    </div>
                    {/* Sort by Button starts  */}
                    <div className="relative" ref={dropdownRef}>
                        <button 
                            onClick={onClick}
                            className={`text-gray-500 bg-gray-200 hover:text-orange-600 
                            font-medium rounded-lg text-sm px-5 py-2.5 
                            text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 
                            dark:focus:ring-blue-800`} 
                            type="button"
                        >
                            Sort by:
                            <span>
                                <FaChevronDown className={`w-2.5 h-2.5 ms-3 ${isActive ? 'rotate-180' : ''}`} />
                            </span>
                        </button>

                        <div 
                            className={`absolute z-10 ${isActive ? 'block' : 'hidden'} bg-white divide-y 
                            divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                            style={{ top: 'calc(100% + 5px)', left: 0 }}
                        >
                            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
                                <li>
                                    <a 
                                        href="#" 
                                        className="px-2 py-2 w-full hover:bg-gray-100 inline-flex items-center"
                                    >
                                        Popularity
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        className="w-full inline-flex items-center px-2 py-2 hover:bg-gray-100"
                                    >
                                        Newest Arrivals
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        className="w-full inline-flex items-center px-2 py-2 hover:bg-gray-100"
                                    >
                                        Price: Low to High
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        className="w-full inline-flex items-center px-2 py-2 hover:bg-gray-100"
                                    >
                                        Price: High to Low
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        className="w-full inline-flex items-center px-2 py-2 hover:bg-gray-100"
                                    >
                                        Product Rating
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Sort by Button ends  */}
                </div>
                <div className='border-b p-2 flex justify-between items-center'>
                    <div>
                        <h6 className='text-sm font-medium'>
                            Sporting Goods
                        </h6>
                    </div>
                    {/* Display style buttons starts  */}
                    <div className='inline-flex items-center space-x-2'>
                        <div>
                            <button 
                                onClick={() => setDisplayStyle("list")}
                                className={`${displayStyle === 'list' ? 'text-orange-500' : 'text-gray-500'}`}
                            >
                                <FaList className='w-6 h-6'/>
                            </button>
                        </div>
                        <div>
                            <button 
                                onClick={() => setDisplayStyle("grid")}
                                className={`${displayStyle === 'grid' ? 'text-orange-500' : 'text-gray-500'}`}
                            >
                                <BsFillGridFill className='w-6 h-6'/>
                            </button>
                        </div>
                    </div>
                    {/* Display style buttons ends  */}
                </div>
                {/* Main Div rendering items starts */}
                <section className='p-2'>
                    {displayStyle === "grid" ? 
                    <GridProductsView products={category_products}/>
                    :
                    <ListProductsView products={category_products}/>
                    }
                </section>
                {/* Main Div rendering items ends */}
            </section>
        </section>
    </div>
  )
}
