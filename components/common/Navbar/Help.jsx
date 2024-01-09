"use client"
import Link from 'next/link';
import React, {useState, useEffect, useRef} from 'react'
import { FaSearch, FaChevronDown, FaAddressBook  } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function Help() {
    const [isActive, setIsActive] = useState(false);
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
    <div className="relative" ref={dropdownRef}>
        <button 
            onClick={onClick}
            className={`text-gray-500 bg-gray-200 hover:text-orange-500 
            font-medium rounded-lg text-sm px-5 py-2.5 
            text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 
            dark:focus:ring-blue-800`} 
            type="button"
        >
            <span>
                <AiOutlineQuestionCircle className='w-6 h-6 me-2'/>
            </span>
            Help
            <span>
                <FaChevronDown className='w-2.5 h-2.5 ms-3' />
            </span>
        </button>

        <div 
            className={`absolute z-10 ${isActive ? 'block' : 'hidden'} bg-white divide-y 
            divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            style={{ top: 'calc(100% + 5px)', left: 0 }}
        >
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 border-b'>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Help Center
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Place an Order
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Track Your Order
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Order Cancellation
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Returns & Refunds
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Payment & Jumia Account
                    </a>
                </li>
            </ul>
            <div className='py-4 px-4 w-full'>
                <Link 
                    href={`/auth/sign-in`}
                    className={`block focus:outline-none text-white bg-orange-600 hover:bg-orange-700 
                    font-medium rounded-lg text-sm px-5 py-2.5 w-full shadow-sm`}
                >
                    Sign In
                </Link>
            </div>
        </div>
    </div>
  )
}
