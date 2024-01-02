"use client";
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import Categories from './Categories'
import TopRight from './TopRight'

export const carouselImages = [
    {
        id:1,
        src:'/images/top/01.gif',
        link:"#"
    },
    {
        id:2,
        src:'/images/top/02.gif',
        link:"#"
    },
    {
        id:3,
        src:'/images/top/03.gif',
        link:"#"
    },
    {
        id:4,
        src:'/images/top/04.png',
        link:"#"
    },
    {
        id:5,
        src:'/images/top/05.jpg',
        link:"#"
    },
    {
        id:6,
        src:'/images/top/06.jpg',
        link:"#"
    },
]
export default function TopComponents() {
  return (
    <div className='grid grid-cols-12 gap-4 min-w-full pt-4 mx-4'>
        <section className='col-span-3 shadow rounded-sm h-full flex flex-col'>
            <Categories />
        </section>
        <section className='col-span-6'>
            <Carousel 
                transition={{ duration: 1 }} 
                loop = {true}
                autoplay = {true}
                autoplayDelay ={2000}
                className="rounded-xl"
            >
                {carouselImages.map((image, index) => (
                <img 
                    key={index}
                    src={`${image.src}`} 
                    alt={`Image`} 
                    className='w-full h-full object-contain' 
                />
                ))}
                {/* <img src={`images/top/1.gif`} alt={`Image`} className='w-full h-full object-contain' /> */}
            </Carousel>
            {/* <div className='h-full rounded shadow'>
                <img src={`images/top/2.jpg`} alt={`Image`} className='w-full h-full object-contain' />
            </div> */}
        </section>
        <section className='col-span-3'>
            <TopRight />
        </section>
    </div>
  )
}
