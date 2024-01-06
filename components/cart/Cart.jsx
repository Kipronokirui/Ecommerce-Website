"use client";
import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { totalPriceSelector, totalCartItemsSelector } from '@/store/features/cartSlice';
import EmptyCart from './EmptyCart';

export const cartLocalItems = [
    {
        id:0,
        name:"Cart Item",
        price: 1200,
    },
    {
        id:1,
        name:"Cart Item",
        price: 120,
    },
]
export default function Cart() {
    const totalItems = useSelector(totalCartItemsSelector)
    const cartItems = useSelector((state)=> state.cart.cartItems);
    const totalPrice = useSelector(totalPriceSelector)
    const image = "https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/56/3070651/1.jpg?6593";

    if(totalItems === 0){
        return(
            <section className='my-4 py-8 bg-white rounded'>
                <EmptyCart />
            </section>
        )
    }
  return (
    <div className='mt-4'>
        <div className='grid grid-cols-10 gap-2'>
            <div className='col-span-7'>
                <div className='bg-white rounded w-full'>
                    <div className='p-2 border-b'>
                        <h5 className='font-semibold text-lg'>
                            Cart ({totalItems})
                        </h5>
                    </div>
                    <div className='p-2'>
                        <ul>
                            {cartItems.map((item,index)=>(
                                <li key={index}>
                                    {item.product.title} 
                                    <small>
                                        {item.qty * item.product.price}
                                    </small>
                                    <h6>
                                        Total: {totalPrice}
                                    </h6>
                                </li>
                            ))}
                            {cartItems?.map((item, index) =>{
                                return(
                                    <li 
                                        key={index}
                                        className={`border-b p-2`}
                                    >
                                        <div>
                                            <div className='flex justify-between'>
                                                <div className='flex items-center space-x-2'>
                                                    <div>
                                                        <Link href={`#`}>
                                                            <img 
                                                                src={image} 
                                                                alt=''
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link 
                                                            href={`#`}
                                                            className={`text-sm font-medium hover:text-orange-500`}
                                                        >
                                                            <h6>
                                                                {item.product.title}
                                                            </h6>
                                                        </Link>
                                                        <small className={`py-2 font-light text-xs text-deep-orange-500`}>
                                                            Few units left
                                                        </small>
                                                        <p className='font-semibold text-sm'>
                                                            JUMIA EXPRESS
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className='font-bold text-lg'>
                                                        Ksh. 2999
                                                    </h6>
                                                    <div className='flex'>
                                                        <span className='font-medium text-xs text-gray-500 line-through'>
                                                            Ksh. {item.product.price}
                                                        </span>
                                                        <span 
                                                            className={`flex items-center justify-center 
                                                            bg-orange-200 text-xs font-bold 
                                                            text-orange-600 px-1 py-0.5 leading-none rounded`}
                                                        >
                                                            30%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <button 
                                                        className={`py-0.5 px-1 flex items-center space-x-1 
                                                        text-center text-orange-700 font-semibold
                                                        rounded hover:bg-orange-200`}
                                                    >
                                                        <span>
                                                            <MdOutlineDeleteOutline className='w-6 h-6' />
                                                        </span>
                                                        <span>
                                                            Remove
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className='flex space-x-2 items-center'>
                                                    <button 
                                                        className={`flex items-center justify-center px-2 py-0.5
                                                        text-white text-2xl font-semibold rounded shadow-sm
                                                        bg-orange-700 hover:bg-orange-500`}
                                                    >
                                                        <span className="w-6">-</span>
                                                    </button>
                                                    <span className={`font-semibold text-lg`}>
                                                        1
                                                    </span>
                                                    <button
                                                        className={`flex items-center justify-center px-2 py-0.5
                                                        text-white text-2xl font-semibold rounded shadow-sm
                                                        bg-orange-700 hover:bg-orange-500`}
                                                    >
                                                        <span className="w-6">+</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-span-3'>
                <div className='sticky top-0 bg-white rounded w-full'>
                    <div className='border-b p-2 text-center'>
                        <h6 className='font-semibold text-lg'>
                            CART SUMMARY
                        </h6>
                    </div>
                    <div className='border-b p-2'>
                        <div className='flex justify-between items-center'>
                            <span className='font-normal text-sm'>
                                Subtotal
                            </span>
                            <span className='font-semibold text-lg'>
                                Ksh. {totalPrice}
                            </span>
                        </div>
                    </div>
                    <div className='border-b p-2'>
                        <div className='flex space-x-2'>
                            <span className='pt-0.5 text-green-500 font-semibold'>
                                <IoMdCheckmarkCircleOutline className='w-5 h-5' />
                            </span>
                            <div>
                                <small className='font-light text-sm'>
                                    Jumia Express items are eligible for free delivery 
                                </small>
                                <p className='font-semibold text-sm'>
                                    JUMIA EXPRESS
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 text-center'>
                        <button 
                            className={`text-white font-semibold w-full p-2 
                            bg-orange-700 hover:bg-orange-800 rounded shadow-md`}
                        >
                            CHECKOUT (Ksh. {totalPrice})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
