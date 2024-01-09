import Link from 'next/link'
import React from 'react'
import AddToCartBtn from '../common/AddToCartBtn'

export default function ListProductsView({products}) {
  return (
    <div>
      <ul>
        {products?.map((product, index) => {
          return(
            <li 
              key={index}
              className={`py-2 relative border-b bg-white cursor-pointer rounded group overflow-hidden transition-transform transform-gpu hover:scale-104`}
            >
              <div className='flex justify-between'>
                <div>
                  <Link href={`/product/${product.slug}`}>
                    <img 
                      src={`/${product.image}`} 
                      alt='' 
                    />
                  </Link>
                </div>
                <div className='flex '>
                  <div>
                    <Link 
                      href={`/product/${product.slug}`}
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
                      {/* <button 
                        className={`py-1 px-2 text-white 
                        rounded bg-orange-700 hover:bg-orange-500 shadow-sm absolute bottom-4 right-2`}
                      >
                        Add to Cart
                      </button> */}
                      <div className={`absolute bottom-4 right-2`}>
                          <AddToCartBtn product={product} />
                      </div>
                      
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
