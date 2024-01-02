import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaInstagram  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const footerTabs=[
  {
    title:"Need Help",
    links:[
      {
        title:"Chat With Us",
        href:"#"
      },
      {
        title:"Help Center",
        href:"#"
      },
      {
        title:"Contact Us",
        href:"#"
      },
    ]
  },
  {
    title:"About Jumia",
    links:[
      {
        title:"About Us",
        href:"#"
      },
      {
        title:"Returns and Refunds Policy",
        href:"#"
      },
      {
        title:"Jumia Careers",
        href:"#"
      },
      {
        title:"Jumia Express",
        href:"#"
      },
      {
        title:"Terms and Conditions",
        href:"#"
      },
      {
        title:"Store Credit Terms and Conditions",
        href:"#"
      },
      {
        title:"Privacy Notice",
        href:"#"
      },
      {
        title:"Cookie Notice",
        href:"#"
      },
      {
        title:"Flash Sales",
        href:"#"
      },
      {
        title:"Jumia Global",
        href:"#"
      },
    ]
  },
  {
    title:"Make Money With Jumia",
    links:[
      {
        title:"Sell on Jumia",
        href:"#"
      },
      {
        title:"Vendor Hub",
        href:"#"
      },
      {
        title:"Become a Sales Consultant",
        href:"#"
      },
      {
        title:"Become a Logistics Service Provider",
        href:"#"
      },
      {
        title:"Jumia City Partner Program",
        href:"#"
      },
    ]
  },
  {
    title:"Jumia International",
    links:[
      {
        title:"Algeria",
        href:"#"
      },
      {
        title:"Ivory Coast",
        href:"#"
      },
      {
        title:"Egypt",
        href:"#"
      },
      {
        title:"Nigeria",
        href:"#"
      },
      {
        title:"Ghana",
        href:"#"
      },
      {
        title:"Senegal",
        href:"#"
      },
      {
        title:"Uganda",
        href:"#"
      },
      {
        title:"Morocco",
        href:"#"
      },
      {
        title:"Zando",
        href:"#"
      },
    ]
  },
]

export default function Footer() {
  return (
    <div className='container'>
      <div className='py-4 border-b border-white'>
        <section className='flex justify-between'>
          {footerTabs.map((tab, index) => {
            return(
              <div 
                key={index}
              >
                <div className='mb-2'>
                  <p className='text-white uppercase font-semibold'>{tab.title}</p>
                </div>
                <div>
                  <ul>
                    {tab.links?.map((link, index) => (
                      <li key={index}>
                        <Link 
                          href={`${link.href}`}
                          className='text-xs text-white hover:underline underline-offset-2'
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </section>
      </div>
      <div className='pb-6 pt-2'>
        <div className='flex justify-center items-center space-x-2'>
          <div>
            <Link href={`#`}>
              <FaFacebookSquare className='w-6 h-6 text-orange-500'/>
            </Link>
          </div>
          <div>
            <Link href={`#`}>
              <FaInstagram className='w-6 h-6 text-orange-500'/>
            </Link>
          </div>
          <div>
            <Link href={`#`}>
              <FaSquareXTwitter className='w-6 h-6 text-orange-500'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
