import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";

export default function TopRight() {
  return (
    <div>
        <div className={`max-w-sm mb-2 p-2 bg-white border border-gray-200 rounded-lg shadow`}>
            <div className='flex items-center cursor-pointer mb-2'>
                <span className='text-orange-500'>
                    <FaRegQuestionCircle className='w-10 h-10 me-2'/>
                </span>
                <div>
                    <h6 className='uppercase'>Help Center</h6>
                    <p className='text-sm font-light tracking-tight'>
                        Guide to Customer Care
                    </p>
                </div>
            </div>
            <div className='flex items-center cursor-pointer mb-2'>
                <span className='text-orange-500'>
                    <FaRegQuestionCircle className='w-10 h-10 me-2'/>
                </span>
                <div>
                    <h6 className='uppercase'>Easy Return</h6>
                    <p className='text-sm font-light tracking-tight'>
                        Quick Refund
                    </p>
                </div>
            </div>
            <div className='flex items-center cursor-pointer mb-2'>
                <span className='text-orange-500'>
                    <FaRegQuestionCircle className='w-10 h-10 me-2'/>
                </span>
                <div>
                    <h6 className='uppercase'>
                        Sell on Jumia
                    </h6>
                    <p className='text-sm font-light tracking-tight'>
                        Millions Of Users
                    </p>
                </div>
            </div>
        </div>
        <div className={``}>
            <img src={`images/shop_now.gif`} alt={`Shop Now`} className='w-full rounded-lg shadow'/>
        </div>
    </div>
  )
}
