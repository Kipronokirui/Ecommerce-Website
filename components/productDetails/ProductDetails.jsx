"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { FaRegHeart, FaHandHoldingUsd } from "react-icons/fa";
import { FcFlashOn } from "react-icons/fc";
import { CiLocationArrow1, CiDeliveryTruck } from "react-icons/ci";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import Timer from '../homepage/Timer';
import MoreProductDetails from './MoreProductDetails';
import AddToCart from './AddToCart';
import { product } from '@/utils/product';

export const images=[
    "/images/productDetails/detail01.jpg",
    "/images/productDetails/detail02.jpg",
    "/images/productDetails/detail03.gif",
    "/images/productDetails/detail04.gif",
    "/images/productDetails/detail05.gif",
]
export default function ProductDetails() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
  return (
    <div>
        <section className='grid grid-cols-10 gap-2'>
            <section className='col-span-8 grid grid-cols-10 gap-2 bg-white shadow-sm rounded p-2'>
                {/* Div for Images starts */}
                <div className='col-span-4 mt-4 p-2'>
                    <div className="grid gap-2">
                        {/* Div Holding large image */}
                        <div>
                            <img 
                                className={`h-auto max-w-full rounded-lg cursor-zoom-in`} 
                                src={selectedImage} 
                                alt="" 
                            />
                        </div>
                        {/* End Div Holding large image */}
                        <div className="grid grid-cols-5 gap-2">
                            {images?.map((image, index) => {
                                return(
                                    <div 
                                        key={index}
                                        className={`flex items-center justify-center p-0.5 border rounded hover:border-gray-600
                                        ${selectedImage === image ? 'border-orange-700' : ''}`}
                                    >
                                        <img 
                                            className={`h-auto max-w-full rounded cursor-pointer`}
                                            onClick={() => handleImageClick(image)} 
                                            src={`${image}`} 
                                            alt="" 
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* Div for Images ends */}
                {/* Div for Product Details starts */}
                <div className='col-span-6'>
                    {/* Bordered Div starts  */}
                    <div className='border-b py-2 mb-2'>
                        <div className='flex justify-between items-center'>
                            <div className='inline-flex items-center space-x-2'>
                                <small className='bg-blue-600 text-white rounded py-0.5 px-1 text-xs'>
                                    <Link href={`#`}>
                                        Official Store
                                    </Link>
                                </small>
                                <small className='bg-blue-600 text-white rounded py-0.5 px-1 text-xs'>
                                    <Link href={`#`}>
                                        Official Store
                                    </Link>
                                </small>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <span className="w-8 h-8 flex items-center justify-center text-orange-400 hover:bg-orange-200 rounded-full">
                                        <Link href={`#`}>
                                            <FaRegHeart className='w-6 h-6'/>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='pb-2'>
                                <h3 className='font-semibold text-lg tracking-wide'>
                                    Freeyond F9,4GB+64GB,6.52" 4G Smartphone,13.0MP 5000mAh, 
                                    Dual SIM Android Phones,Grey
                                </h3>
                            </div>
                            <div className='flex items-center space-x-1 text-sm'>
                                <p className=''>
                                    Brand: 
                                    <span className='ms-1'>
                                        <Link 
                                            href={`#`}
                                            className='text-blue-600 hover:underline underline-offset-2'
                                        >
                                            Freyoornd
                                        </Link>
                                    </span>
                                </p>
                                <span>|</span>
                                <p>
                                    <span>
                                        <Link 
                                            href={`#`}
                                            className='text-blue-600 hover:underline underline-offset-2'
                                        >
                                            Similar Products from Freyoornd
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Bordered Div ends  */}
                    {/* Countdown Div starts */}
                    <div className='border border-red-600 rounded-sm'>
                        <div className='flex justify-between items-center bg-red-600 p-2 text-white'>
                            <div className='inline-flex items-center'>
                                <span>
                                    <FcFlashOn className='w-6 h-6' />
                                </span>
                                <span className='text-sm font-semibold'>
                                    Flash Sales
                                </span>
                            </div>
                            <div className='inline-flex items-center'>
                                <span className='text-sm font-light'>
                                    Time Left:
                                </span>
                                <span className='text-sm font-semibold'>
                                    <Timer />
                                </span>
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='flex items-center space-x-2'>
                                <span className='font-bold text-lg'>
                                    Ksh. 2,453
                                </span>
                                <span className='font-semibold text-sm text-gray-500 line-through'>
                                    Ksh. 2,453
                                </span>
                                <span 
                                    className={`bg-orange-200 text-xs font-bold 
                                    text-orange-600 p-1 leading-none rounded`}
                                >
                                    -40%
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <small className='font-light text-xs'>
                                    250 Items Left
                                </small>
                                <div className={`w-full bg-gray-200 rounded-full dark:bg-gray-700`}>
                                    <div 
                                        className={`bg-orange-600 text-xs font-medium text-blue-100 
                                        text-center p-0.5 leading-none rounded-full`}
                                        style={{width: `80%`}}
                                    >
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-b-2'>
                        <div>
                            <p className='font-light text-sm mt-2'>
                                In Stock
                            </p>
                            <p className='inline-flex items-center space-x-1 font-light'>
                                <small>
                                    + shipping from
                                </small>
                                <span className='font-medium'>
                                    Ksh. 69 
                                </span>
                                <small>
                                    to CBD - UON/Globe/Koja/River Road
                                </small>
                            </p>
                        </div>
                    </div>
                    {/* Countdown Div ends */}
                    <div className='pb-2 border-b-2'>
                        <div>
                            <p className='font-semibold text-sm'>
                                VARIATION AVAILABLE
                            </p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <span className='p-1 text-sm font-semibold flex-col justify-center items-center text-orange-600 border border-orange-600 rounded-sm'>
                                Grey
                            </span>
                            <span className='p-1 text-sm font-semibold flex-col justify-center items-center text-orange-600 border border-orange-600 rounded-sm'>
                                Grey
                            </span>
                        </div>
                        <div className='mt-2 w-full'>
                            {/* <button 
                                className={`uppercase font-semibold text-md w-full bg-orange-600 hover:bg-orange-800 text-white rounded-sm shadow-md p-2`}
                            >
                                Add to Carts
                            </button> */}
                            <AddToCart product={product}/>
                        </div>
                    </div>
                    <div className='py-2'>
                        <div>
                            <p className='font-semibold text-sm uppercase'>
                                Promotions
                            </p>
                        </div>
                        <div className='mt-2'>
                            <ul className='space-y-2'>
                                <li className='flex items-center space-x-2'>
                                    <FaHandHoldingUsd className='w-6 h-6 text-orange-600'/>
                                    <Link 
                                        href={`#`}
                                        className={`text-sm text-blue-400 hover:underline underline-offset-2`}
                                    >
                                        Free delivery for orders above Ksh 1999 in selected majority cities.
                                    </Link>
                                </li>
                                <li className='flex items-center space-x-2'>
                                    <FaHandHoldingUsd className='w-6 h-6 text-orange-600'/>
                                    <Link 
                                        href={`#`}
                                        className={`text-sm text-blue-400 hover:underline underline-offset-2`}
                                    >
                                        Easy and safer payments via the JumiaPay App.
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Div for Product Details ends */}
            </section>
            <section className='col-span-2 bg-white shadow-sm rounded'>
                <div className='border-b-2 p-2'>
                    <p className='text-md font-semibold tracking-tight uppercase'>
                        Delivery & Returns
                    </p>
                </div>
                <div className='border-b-2 p-2'>
                    <p className='flex items-center text-sm font-medium tracking-tight uppercase'>
                        <span>
                            JUMIA
                        </span>
                        <span>
                            <CiLocationArrow1 className='w-4 h-4 text-orange-600'/>
                        </span>
                        <span className='text-orange-600'>
                            EXPRESS
                        </span>
                    </p>
                </div>
                <div className='border-b-2 p-2'>
                    <div>
                        <p className='text-md font-medium tracking-tight'>
                            Choose your location
                        </p>
                    </div>
                    <form>
                        <div className='mb-4'>
                            <div className="mt-2">
                                <select 
                                    id="city" 
                                    name="city" 
                                    className={`block w-full rounded-md border-0 p-2 font-bold cursor-pointer text-gray-900 shadow-sm ring-1 
                                    ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs 
                                    sm:text-sm sm:leading-6`}
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                    <option>Mexico</option>
                                    <option>Mexico</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className="mt-2">
                                <select 
                                    id="pickupLocation" 
                                    name="pickupLocation" 
                                    className={`block w-full rounded-md border-0 p-2 font-bold cursor-pointer text-gray-900 shadow-sm ring-1 
                                    ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs 
                                    sm:text-sm sm:leading-6`}
                                >
                                    <option>Dagoretti South - Ngand'o/Riruta</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                    <option>Mexico</option>
                                    <option>Mexico</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    {/* Divs with icons starts */}
                    <div className='flex items-start space-x-2 mb-2'>
                        <div className='flex items-center justify-center'>
                            <span className='w-10 h-10 flex items-center justify-center border shadow-sm rounded-sm'>
                                <CiDeliveryTruck className='w-7 h-7'/>
                            </span>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <span className={`text-sm font-semibold`}>
                                    Door Delivery
                                </span>
                                <Link 
                                    href={`#`} 
                                    className={`text-xs text-blue-400 hover:underline underline-offset-2`}
                                >
                                    Details
                                </Link>
                            </div>
                            <div>
                                <span className='text-xs font-light tracking-tight'>
                                    Delivery Fees <span className={`text-xs font-semibold`}>Ksh 179</span>
                                </span>
                                <p className='text-xs font-light tracking-tight'>
                                    Delivered by {' '}
                                    <span className={`text-xs font-semibold`}>03 January</span>{' '}
                                    when you order within the next {' '}
                                    <span className={`text-xs font-semibold`}>21hrs 14mins</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start space-x-2 mb-2'>
                        <div className='flex items-center justify-center'>
                            <span className='w-10 h-10 flex items-center justify-center border shadow-sm rounded-sm'>
                                <FaHandsHoldingCircle className='w-7 h-7'/>
                            </span>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <span className={`text-sm font-semibold`}>
                                    Pickup Station
                                </span>
                                <Link 
                                    href={`#`} 
                                    className={`text-xs text-blue-400 hover:underline underline-offset-2`}
                                >
                                    Details
                                </Link>
                            </div>
                            <div>
                                <span className='text-xs font-light tracking-tight'>
                                    Delivery Fees <span className={`text-xs font-semibold`}>Ksh 179</span>
                                </span>
                                <p className='text-xs font-light tracking-tight'>
                                    Available for pick up from {' '}
                                    <span className={`text-xs font-semibold`}>03 January</span>{' '}
                                    when you order within the next {' '}
                                    <span className={`text-xs font-semibold`}>21hrs 14mins</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Divs with icons ends */}
                </div>
                {/* Return Policy Starts  */}
                <div className='p-2 border-b'>
                    <div className='flex items-start space-x-2 mb-2'>
                        <div className='flex items-center justify-center'>
                            <span className='w-10 h-10 flex items-center justify-center border shadow-sm rounded-sm'>
                                <FaHandsHoldingCircle className='w-7 h-7'/>
                            </span>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <span className={`text-sm font-semibold`}>
                                    Return Policy
                                </span>
                            </div>
                            <div>
                                <span className='text-xs font-light tracking-tight'>
                                    Easy Return, Quick Refund.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Return Policy ends */}
                {/* Warranty Starts */}
                <div className='p-2 border-b'>
                    <div className='flex items-start space-x-2 mb-2'>
                        <div className='flex items-center justify-center'>
                            <span className='w-10 h-10 flex items-center justify-center border shadow-sm rounded-sm'>
                                <FaHandsHoldingCircle className='w-7 h-7'/>
                            </span>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <span className={`text-sm font-semibold`}>
                                    Warranty
                                </span>
                            </div>
                            <div>
                                <span className='text-xs font-light tracking-tight'>
                                    Service Centres:NAIROBI CITY CENTRE-----Nairobi City Centre building,ground floor,
                                    Ronald Ngala street,Nairobi,Kenya. 0712251220AMNI PLAZA-----Amni plaza, ground floor, 
                                    Harambee road, Garissa county Kenya. 0712251220BIASHARA PLAZA-----Biashara plaza 3rd floor, 
                                    Biashara street, Naivasha,Nakuru county, Kenya. 0712251220
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Warranty Ends */}
            </section>
        </section>
        <div className='mt-2'>
            <MoreProductDetails product={product} />
        </div>
    </div>
  )
}
