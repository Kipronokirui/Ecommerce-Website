import React from 'react'
import { Stepper, ProductDetails } from '@/components/productDetails'

export default function page() {
  return (
    <div>
        <div>
            <Stepper />
        </div>
        <div>
            <ProductDetails />
        </div>
    </div>
  )
}
