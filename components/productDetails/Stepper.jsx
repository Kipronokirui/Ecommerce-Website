import React from 'react'
import { MdOtherHouses } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import Link from 'next/link';

export default function Stepper() {
  return (
    <div>
        <section>
        <ol 
            className={`flex items-center w-full p-3 space-x-2 text-sm font-medium text-center 
            text-gray-500 rounded-lg shadow-sm sm:p-2 sm:space-x-2 
            rtl:space-x-reverse`}
        >
            <li className="flex items-center text-blue-600 dark:text-blue-500 text-xs font-light">
                {/* <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border 
                    border-blue-600 rounded-full shrink-0 dark:border-blue-500`}
                >
                    <MdOtherHouses />
                </span> */}
                <Link href={`/`}>
                    Home 
                </Link>
                <IoMdArrowDropright className="w-4 h-4 ms-2 sm:ms-2 rtl:rotate-180"/>
            </li>
            <li className="flex items-center text-blue-600 dark:text-blue-500 text-xs font-light">
                <Link href={`#`}>
                    Phones & Tablets 
                </Link>
                <IoMdArrowDropright className="w-4 h-4 ms-2 sm:ms-2 rtl:rotate-180"/>
            </li>
            <li className="flex items-center text-blue-600 dark:text-blue-500 text-xs font-light">
                <Link href={`#`}>
                    Mobile Phones 
                </Link>
                <IoMdArrowDropright className="w-4 h-4 ms-2 sm:ms-2 rtl:rotate-180"/>
            </li>
            <li className="flex items-center text-blue-600 dark:text-blue-500 text-xs font-light">
                <Link href={`#`}>
                    Smart Phones 
                </Link>
                <IoMdArrowDropright className="w-4 h-4 ms-2 sm:ms-2 rtl:rotate-180"/>
            </li>
            <li className="flex items-center text-blue-600 dark:text-blue-500 text-xs font-light">
                <Link href={`#`}>
                    Android Phones 
                </Link>
                <IoMdArrowDropright className="w-4 h-4 ms-2 sm:ms-2 rtl:rotate-180"/>
            </li>
            <li className="flex items-center text-xs font-light">
                F9,4GB+64GB,6.52" 4G Smartphone,13.0MP 5000mAh, Dual SIM Android Phones,Grey 
                {/* <IoMdArrowDropright className="w-4 h-4 ms-2 sm:ms-2 rtl:rotate-180"/> */}
            </li>
        </ol>
        </section>
    </div>
  )
}
