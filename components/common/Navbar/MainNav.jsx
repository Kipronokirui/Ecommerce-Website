"use client"
import React, {useState} from 'react'
import { FaSearch,FaStar, FaChevronDown } from "react-icons/fa";
import Account from './Account';
import Help from './Help';
import Cart from './Cart';

export default function MainNav() {

  return (
    <div className="py-2 flex gap-4 items-center justify-between mx-auto">
        <section>
            <a href={`/`} className="flex items-center space-x-2 rtl:space-x-reverse">
                {/* <img 
                    src="https://flowbite.com/docs/images/logo.svg" 
                    className="h-8" 
                    alt="Flowbite Logo" 
                /> */}
                <span className='w-10 h-10 rounded-full flex items-center justify-center font-bold bg-orange-300'>
                    <FaStar className='w-8 h-8 text-white'/>
                </span>
                <span 
                    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >
                    Jumuika
                </span>
            </a>
        </section>
        <section className='flex items-center space-x-2'>
            <section>
                <form className="max-w-sm mx-auto flex gap-2 items-center">
                    <div className='relative'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                            <FaSearch className='w-4 h-4 text-gray-500 dark:text-gray-400'/>
                        </div>
                        <input 
                            type='text'
                            placeholder='Search products, brands, and categories' 
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                            rounded-lg block w-76 ps-10 p-2.5 focus:border-transparent`} 
                        />
                    </div>
                    <div>
                        <button 
                            type='submit'
                            className={`focus:outline-none text-white bg-orange-400 hover:bg-orange-500 
                            font-medium rounded-lg text-sm px-5 py-2.5 shadow-md`}
                        >
                            Search
                        </button>
                    </div>
                </form>
            </section>
            <section>
                <Account />
            </section>
            <section>
                <Help />
            </section>
            <section>
                <Cart />
            </section>
        </section>
    </div>
  )
}
