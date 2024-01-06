import React from 'react'
import Link from 'next/link'
import AddToCartBtn from '../common/AddToCartBtn'

export default function GridProductsView({products}) {
  return (
    <div className='grid grid-cols-4 gap-2'>
      {products?.map((product, index) => {
        return(
          <div 
            key={index}
            className={`p-2 relative bg-white border border-gray-200 rounded-lg shadow-md 
                      text-start group overflow-hidden transition-transform transform-gpu hover:scale-105`}
          >
            <Link href={``}>
              <img
                  className="rounded-lg"
                  src={`/${product.image}`}
                  alt="Item Image"
              />
              <div>
                <p className='text-xs font-light text-gray-600'>
                  {product.title.length > 30 ? `${product.title.substring(0, 30)}...` : product.title}
                </p>
                <p className='text-sm font-semibold'>
                  Ksh. {product.currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <small className='flex flex-col line-through text-gray-400'>
                    Ksh. {product.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </small>
              </div>
            </Link>
            <div className='my-2 hidden group-hover:block'>
              {/* <button 
                className={`w-full py-1 px-2 text-white rounded bg-orange-500 shadow-sm`}
              >
                Add to Cart
              </button> */}
              <AddToCartBtn product={product}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}
