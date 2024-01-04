import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlinePhoneIphone, MdBluetoothAudio, MdChildCare, MdOutlineSportsBasketball, MdOutlineOtherHouses   } from "react-icons/md";
import { BiSolidFridge } from "react-icons/bi";
import { SiWorldhealthorganization } from "react-icons/si";
import { GiOfficeChair, GiClothes } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import Link from 'next/link';

export const categories = [
    {
        title:"Official Stores",
        slug:"official-stores",
        icon: <FaShoppingBag />,
    },
    {
        title:"Phones & Tablets",
        slug:"phones-tablets",
        icon:<MdOutlinePhoneIphone />,
    },
    {
        title:"Tvs & Audio",
        slug:"tvs-audio",
        icon:<MdBluetoothAudio />
    },
    {
        title:"Appliances",
        slug:"appliances",
        icon:<BiSolidFridge />
    },
    {
        title:"Health & Beauty",
        slug:"health-and-beauty",
        icon:<SiWorldhealthorganization />
    },
    {
        title:"Home & Office",
        slug:"home-and-office",
        icon:<GiOfficeChair />
    },
    {
        title:"Fashion",
        slug:"fashion",
        icon:<GiClothes />
    },
    {
        title:"Computing",
        slug:"computing",
        icon:<FaComputer/>
    },
    {
        title:"Supermarket",
        slug:"supermarket",
        icon:<TiShoppingCart />
    },
    {
        title:"Baby Products",
        slug:"baby-products",
        icon:<MdChildCare />
    },
    {
        title:"Sporting Goods",
        slug:"sporting-goods",
        icon:<MdOutlineSportsBasketball />
    },
    {
        title:"Other Categories",
        slug:"other-categories",
        icon:<MdOutlineOtherHouses />,
    }
]
export default function Categories() {
  return (
    <div className='p-2 h-full flex-grow'>
        <ul className="h-full flex flex-col space-y-3">
            {categories.map((category, index) => (
            <li 
                key={index} 
            >
                <Link 
                    href={`/category/${category.slug}`}
                    className={`flex items-center space-x-2 cursor-pointer hover:text-orange-500`}
                >
                    <span>
                        {/* <FaShoppingBag className='w-4 h-4 me-1'/> */}
                        {category.icon}
                    </span>
                    <span className='font-light text-sm'>
                        {category.title}
                    </span>
                </Link>
            </li>
            ))}
        </ul>
    </div>
  )
}
