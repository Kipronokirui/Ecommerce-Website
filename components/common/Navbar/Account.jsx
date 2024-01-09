"use client"
import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { FaSearch, FaChevronDown, FaAddressBook, FaUser, FaRegHeart  } from "react-icons/fa";

export default function Account() {
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
            className={`text-gray-500 bg-gray-200 hover:text-orange-600 
            font-medium rounded-lg text-sm px-5 py-2.5 
            text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 
            dark:focus:ring-blue-800`} 
            type="button"
        >
            <span>
                <FaAddressBook className='w-6 h-6 me-2'/>
            </span>
            Account
            <span>
                <FaChevronDown className={`w-2.5 h-2.5 ms-3 ${isActive ? 'rotate-180' : ''}`} />
            </span>
        </button>

        <div 
            className={`absolute z-10 ${isActive ? 'block' : 'hidden'} bg-white divide-y 
            divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            style={{ top: 'calc(100% + 5px)', left: 0 }}
        >
            <div className='py-4 px-4 w-full border-b-2'>
                <Link 
                    href={`/auth/sign-in`}
                    className={`block focus:outline-none text-white 
                    bg-orange-600 hover:bg-orange-700 font-medium 
                    rounded-lg text-sm px-5 py-2.5 w-full shadow-sm`}
                >
                    Sign In
                </Link>
            </div>
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
                <li>
                    <a href="#" className="px-2 py-2 w-full hover:bg-gray-100 inline-flex items-center">
                        <FaUser className='w-4 h-4 me-2'/>
                        My Account
                    </a>
                </li>
                <li>
                    <a href="#" className="w-full inline-flex items-center px-2 py-2 hover:bg-gray-100">
                        <FaRegHeart className='w-4 h-4 me-2'/>
                        Saved Items
                    </a>
                </li>
                <li>
                    <a href="#" className="w-full inline-flex items-center px-2 py-2 hover:bg-gray-100">
                        <FaRegHeart className='w-4 h-4 me-2'/>
                        Orders
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
