import Link from 'next/link'
import React from 'react'

export default function ListProductsView({products}) {
  return (
    <div>
      <ul>
        {products?.map((product, index) => {
          return(
            <li 
              key={index}
              className={`bg-white rounded group overflow-hidden transition-transform transform-gpu hover:scale-105`}
            >
              <div className='flex justify-between'>
                <div>
                  <img 
                    src={`/${product.image}`} 
                    alt='' 
                  />
                </div>
                <div className='flex '>
                  <div>
                    <Link 
                      href={`#`}
                      className={`group-hover:text-orange-600`}
                    >
                      <p className=''>
                        {product.title}
                      </p>
                    </Link>
                  </div>
                  <div className='flex flex-col justify-between'>
                    <div>
                      <h5 className='font-semibold text-lg'>
                        Ksh. {product.currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h5>
                      <p className='text-sm line-through text-gray-400'>
                        Ksh. {product.oldPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                    <div className='mb-4'>
                      <button 
                        className={`w-full py-1 px-2 text-white 
                        rounded bg-orange-700 hover:bg-orange-500 shadow-sm`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
        ListProductsView
    </div>
  )
}
