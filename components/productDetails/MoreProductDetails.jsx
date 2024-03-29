import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaChevronRight, FaStarHalf  } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import Link from 'next/link';
import AddToCartBtn from '../common/AddToCartBtn';
import AddToCart from './AddToCart';

export default function MoreProductDetails({product}) {
  return (
    <div>
        <div className='grid grid-cols-10 gap-2'>
            <section className='col-span-8'>
                <div className={`bg-white shadow-sm rounded p-4`}>
                    <div className='border-b font-semibold text-lg'>
                        <p>
                            Product details
                        </p>
                    </div>
                    <div className='my-2'>
                        <div className='flex flex-col space-y-2 justify-center items-center'>
                            {product.images.map((image, index) => {
                                return(
                                    <div key={index}>
                                        <img 
                                            src={`/${image.src}`} 
                                            alt={`Image`} 
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6 className='font-semibold text-sm'>
                                A Design that dare to surmount
                            </h6>
                            <ul>
                                {product.points.map((point, index) => {
                                    return(
                                    <li 
                                        key={index}
                                        className='text-sm font-light mb-2'
                                    >
                                        {point}
                                    </li>
                                    )
                                })}
                            </ul>
                            <div>
                                <iframe 
                                    src={`https://www.youtube.com/embed/i_5pt4FbzTk`}
                                    className='w-full h-[400px]'
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`bg-white shadow-sm rounded p-4 mt-4`}>
                    <div className='border-b font-semibold text-base'>
                        <p>
                            Specifications
                        </p>
                    </div>
                    <div className='py-2 grid grid-cols-2 gap-2'>
                        <div className='border rounded p-2'>
                            <div className='border-b'>
                                <h6 className='font-medium text-base uppercase'>KEY FEATURES</h6>
                            </div>
                            <div className='pl-4'>
                                <ul className='list-disc mt-2'>
                                    {product.key_features?.map((feature, index) => {
                                        return(
                                            <li key={index}>
                                                {feature}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='border rounded p-2'>
                            <div className='border-b'>
                                <h6 className='font-medium text-base uppercase'>
                                    What`s In The Box
                                </h6>
                            </div>
                            <div className='pl-4'>
                                <ul className='list-disc mt-2'>
                                    {product.what_is_in_the_box?.map((item, index) => {
                                        return(
                                            <li key={index}>
                                                {item}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='border rounded p-2'>
                            <div className='border-b'>
                                <h6 className='font-medium text-base uppercase'>KEY FEATURES</h6>
                            </div>
                            <div className='pl-2'>
                                <ul className='mt-2'>
                                    {product.specifications.map((specification, index) => {
                                        return(
                                            <li 
                                                key={index}
                                            >
                                                <span className='font-semibold text-base'>
                                                    {specification.title}
                                                </span>{':'}
                                                <span>
                                                    {specification.description}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`bg-white shadow-sm rounded p-4 mt-4`}>
                    <div className='font-semibold text-base'>
                        <p>
                            Customers who viewed this also viewed
                        </p>
                    </div>
                    <section>
                        <div className='p-4 flex flex-row items-center justify-center space-x-2'>
                            {product.related_products?.map((item, index) => {
                                const percentageChange = ((item.oldPrice - item.currentPrice) / item.oldPrice) * 100;
                                return(
                                    <div
                                        key={index}
                                        className={`relative bg-white border border-gray-200 rounded-lg shadow-md 
                                            text-start overflow-hidden transition-transform transform-gpu hover:scale-105`}
                                    >
                                        <a href="#">
                                            <img
                                                className="rounded-lg"
                                                src={`/${item.image}`}
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
                                            <a href={`#`} >
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
                                            {/* <small className='flex flex-col'>
                                                {item.currentItems} Items Left
                                            </small>

                                            <div className={`w-full bg-gray-200 rounded-full dark:bg-gray-700`}>
                                                <div className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`} 
                                                style={{width: `${Math.round(percentageChange)}%`}}
                                                > 
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </div>
                <div className={`bg-white shadow-sm rounded p-4 mt-4`}>
                    <div className='border-b flex items-center justify-between'>
                        <p className='font-semibold text-base'>
                            Customers Feedback
                        </p>
                        <div>
                            <Link href={`#`}>
                                <div 
                                    className={`inline-flex items-center font-medium uppercase text-base 
                                    tracking-tight transition-transform transform-gpu 
                                    text-orange-600 hover:bg-orange-200 p-1 
                                    rounded`}
                                >
                                    See All
                                    <FaChevronRight className='w-4 h-4'/>
                                </div>
                            </Link>
                            {/* <Link href={`#`}>
                                See All
                            </Link> */}
                        </div>
                    </div>
                    <section className='grid grid-cols-10 gap-4'>
                        <div className='col-span-2'>
                            <div className='my-2'>
                                <p className='font-semibold text-sm'>
                                    VERIFIED RATINGS (46)
                                </p>
                            </div>
                            <div 
                                className={`flex flex-col items-center justify-center 
                                bg-gray-200 rounded space-y-2 p-4`}
                            >
                                <div>
                                    <p className='text-orange-600 font-semibold text-3xl'>
                                        <span>4.5</span>{'/'}
                                        <span>5</span>
                                    </p>
                                </div>
                                <div className='flex items-center space-x-1 text-orange-600'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStarHalfStroke />
                                </div>
                                <div className='text-sm'>
                                    <span>46</span> Verified Ratings
                                </div>
                            </div>
                        </div>
                        <div className='col-span-8'>
                            <div className='my-2'>
                                <p className='font-semibold text-sm'>
                                    PRODUCT REVIEWS (18)
                                </p>
                            </div>
                            <section>
                                {product.reviews?.map((review, index) => {
                                    return(
                                        <div 
                                            key={index}
                                            className='mb-2 flex flex-col border-b space-y-2'
                                        >
                                            <div className='flex items-center space-x-1 text-orange-600'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                {/* <FaRegStarHalfStroke /> */}
                                            </div>
                                            <div>
                                                <p className='font-semibold text-sm'>
                                                    {review.title}
                                                </p>
                                            </div>
                                            <div>
                                                <p className='font-light text-sm tracking-tight'>
                                                    {review.comment}
                                                </p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <div>
                                                    <p className='font-light text-sm tracking-tight'>
                                                        <span className='me-1'>
                                                            {review.date}
                                                        </span>{'by'}
                                                        <span className='ms-1'>
                                                            {review.reviewer.name}
                                                        </span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p 
                                                        className={`inline-flex items-center 
                                                        space-x-1 font-light text-sm tracking tight text-green-500`}
                                                    >
                                                        <span>
                                                            <FiCheckCircle className='w-4 h-4' />
                                                        </span>
                                                        <span>
                                                            Verified Purchase
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </section>
                        </div>
                    </section>
                </div>
                <div className={`bg-white shadow-sm rounded p-4 mt-4`}>
                    <div className='font-semibold text-base'>
                        <p>
                            You may also like
                        </p>
                    </div>
                    <section>
                        <div className='p-4 flex flex-row items-center justify-center space-x-2'>
                            {product.related_products?.map((item, index) => {
                                const percentageChange = ((item.oldPrice - item.currentPrice) / item.oldPrice) * 100;
                                return(
                                    <div
                                        key={index}
                                        className={`relative bg-white border border-gray-200 rounded-lg shadow-md 
                                            text-start overflow-hidden transition-transform transform-gpu hover:scale-105`}
                                    >
                                        <a href="#">
                                            <img
                                                className="rounded-lg"
                                                src={`/${item.image}`}
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
                                            <a href={`#`} >
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
                                            {/* <small className='flex flex-col'>
                                                {item.currentItems} Items Left
                                            </small>

                                            <div className={`w-full bg-gray-200 rounded-full dark:bg-gray-700`}>
                                                <div className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`} 
                                                style={{width: `${Math.round(percentageChange)}%`}}
                                                > 
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </section>
            <section className='col-span-2'>
                <div className="sticky top-20 z-10 pt-20">
                    <div className='bg-white shadow-sm rounded'>
                        <div className='mb-2 flex items-center space-x-2 border-b p-2 font-bold'>
                            <span>
                                <GiNotebook className='w-6 h-6'/>
                            </span>
                            <span>
                                Product Details
                            </span>
                        </div>
                        <div className='mb-2 flex items-center space-x-2 border-b p-2 font-bold'>
                            <span>
                                <AiOutlineBars className='w-6 h-6'/>
                            </span>
                            <span>
                                Specifications
                            </span>
                        </div>
                        <div className='mb-2 flex items-center space-x-2 border-b p-2 font-bold'>
                            <span>
                                <MdOutlineFeedback className='w-6 h-6'/>
                            </span>
                            <span>
                                Customer Feedback
                            </span>
                        </div>
                    </div>
                    <div className='my-2 bg-white shadow-sm rounded'>
                        <div className='p-2'>
                            <div className='flex space-x-2'>
                                <div>
                                    <img src={`/images/shop_now.gif`} alt={``} />
                                </div>
                                <div>
                                    <p className='text-xs font-light'>
                                        Freeyond F9,4GB+64GB,6.5...
                                    </p>
                                    <span className='text-sm font-semibold'>
                                        KSh 12,616
                                    </span>
                                    <div className='flex space-x-2 items-center'>
                                        <span className='text-xs font-light line-through'>
                                            Ksh 20,456
                                        </span>
                                        <span 
                                            className={`bg-orange-600 
                                            text-xs font-bold text-orange-100 p-1 leading-none rounded`}>
                                                40%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 mb-2'>
                                {/* <button 
                                    className={`uppercase font-semibold text-md w-full bg-orange-600 hover:bg-orange-800 text-white rounded-sm shadow-md p-2`}
                                >
                                    Add to Carty
                                </button>
                                <AddToCartBtn product={product} /> */}
                                <AddToCart product={product}/>
                            </div>
                        </div>
                    </div>
                    <div className='my-2 bg-white shadow-sm rounded'>
                        <div className='p-2'>
                            <p className='text-xs text-center'>
                                Questions about this product?
                            </p>
                            <Link 
                                href={`#`} 
                                className='font-semibold flex items-center justify-center text-orange-500'
                            >
                                <IoChatboxEllipsesOutline className='w-6 h-6' />
                                <span>Chat</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div className="sticky top-20 z-10">B</div>
                <div>
                    <div>
                        <img src="/images/shop_now.gif" />
                        <strong>Bob Alfred</strong>
                    </div>
                    <div>
                        <img src="/images/shop_now.gif" />
                        <strong>Bob Alfred</strong>
                    </div>
                </div> */}
            </section>
        </div>
        <section className={`bg-white shadow-sm rounded p-4 mt-4`}>
            <div className='font-semibold text-lg mb-2'>
                <p>
                    More items from this seller
                </p>
            </div>
            <div className='flex flex-row space-x-2 items-center'>
                {product.related_products?.map((item, index) => {
                    const percentageChange = ((item.oldPrice - item.currentPrice) / item.oldPrice) * 100;
                    return(
                        <div
                            key={index}
                            className={`relative bg-white border border-gray-200 rounded-lg shadow-md 
                                text-start overflow-hidden transition-transform transform-gpu hover:scale-105`}
                        >
                            <a href="#">
                                <img
                                    className="rounded-lg"
                                    src={`/${item.image}`}
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
                                <a href={`#`} >
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
                                {/* <small className='flex flex-col'>
                                    {item.currentItems} Items Left
                                </small>

                                <div className={`w-full bg-gray-200 rounded-full dark:bg-gray-700`}>
                                    <div className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`} 
                                    style={{width: `${Math.round(percentageChange)}%`}}
                                    > 
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    </div>
  )
}
