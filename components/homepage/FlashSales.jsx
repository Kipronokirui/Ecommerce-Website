"use client";
import React, { useState, useRef, useEffect } from "react";
import { FcFlashOn } from "react-icons/fc";
import { FaChevronRight } from "react-icons/fa";
import Link from 'next/link';
import Timer from "./Timer";
import { flashSales } from "@/utils/flashSales";
import millify from "millify";

export default function FlashSales() {
  return (
    <div>
        <div className='bg-red-800 p-4 w-full flex justify-between text-white'>
            <div className='inline-flex items-center font-bold text-lg tracking-tight'>
                <FcFlashOn className='w-8 h-8'/>
                Flash Sales
            </div>
            <div className='inline-flex items-center font-bold text-lg tracking-tight'>
                Time Left: <Timer />
            </div>
            <Link href={`#`}>
                <div className='inline-flex items-center font-bold text-base tracking-tight transition-transform transform-gpu hover:scale-105'>
                    See All
                    <FaChevronRight className='w-4 h-4'/>
                </div>
            </Link>
        </div>
        <section className='p-4 flex flex-row items-center justify-center space-x-2'>
            {flashSales.map((item, index) => {
                const percentageChange = ((item.oldPrice - item.currentPrice) / item.oldPrice) * 100;
                return(
                <div
                    key={index}
                    className={`relative bg-white border border-gray-200 rounded-lg shadow-md 
                        text-start overflow-hidden transition-transform transform-gpu hover:scale-105`}
                >
                    <a href={`/product/${item.slug}`}>
                        <img
                            className="rounded-lg"
                            src={`${item.image}`}
                            alt="Item Image"
                        />
                    </a>
                    <div className='p-2'>
                        {/* Discount Percentage Div */}
                        <div 
                            className={`absolute top-2 right-2 bg-orange-600 
                            text-xs font-bold text-orange-100 p-1 leading-none rounded`}
                        >
                            {`${Math.round(percentageChange)}%`}
                            {/* {`${percentageChange.toFixed(2)}%`}% */}
                        </div>
                        {/* End Discount Percentage Div */}
                        <a href={`/product/${item.slug}`} >
                            <p className='text-xs font-medium text-gray-600'>
                                {item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}
                            </p>
                        </a>
                        <p className='font-bold'>
                            Ksh. {item.currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                        <small className='flex flex-col line-through text-gray-400'>
                            Ksh. {item.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </small>
                        <small className='flex flex-col'>
                            {item.currentItems} Items Left
                        </small>

                        <div className={`w-full bg-gray-200 rounded-full dark:bg-gray-700`}>
                            <div className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`} 
                            style={{width: `${Math.round(percentageChange)}%`}}
                            > 
                                {/* <p>{`${Math.round(percentageChange)}%`}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </section>
    </div>
  )
}
