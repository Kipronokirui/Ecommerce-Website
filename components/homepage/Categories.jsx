import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlinePhoneIphone, MdBluetoothAudio, MdChildCare, MdOutlineSportsBasketball, MdOutlineOtherHouses   } from "react-icons/md";
import { BiSolidFridge } from "react-icons/bi";
import { SiWorldhealthorganization } from "react-icons/si";
import { GiOfficeChair, GiClothes } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";

export const categories = [
    {
        title:"Official Stores",
        icon: <FaShoppingBag />,
    },
    {
        title:"Phones & Tablets",
        icon:<MdOutlinePhoneIphone />,
    },
    {
        title:"Tvs & Audio",
        icon:<MdBluetoothAudio />
    },
    {
        title:"Appliances",
        icon:<BiSolidFridge />
    },
    {
        title:"Health & Beauty",
        icon:<SiWorldhealthorganization />
    },
    {
        title:"Home & Office",
        icon:<GiOfficeChair />
    },
    {
        title:"Fashion",
        icon:<GiClothes />
    },
    {
        title:"Computing",
        icon:<FaComputer/>
    },
    {
        title:"Supermarket",
        icon:<TiShoppingCart />
    },
    {
        title:"Baby Products",
        icon:<MdChildCare />
    },
    {
        title:"Sporting Goods",
        icon:<MdOutlineSportsBasketball />
    },
    {
        title:"Other Categories",
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
                className='flex items-center space-x-2 cursor-pointer hover:text-orange-500'
            >
                <span>
                    {/* <FaShoppingBag className='w-4 h-4 me-1'/> */}
                    {category.icon}
                </span>
                <span className='font-light text-sm'>
                    {category.title}
                </span>
            </li>
            ))}
        </ul>
    </div>
  )
}
