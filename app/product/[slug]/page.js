import React from 'react'
import { Stepper, ProductDetails } from '@/components/productDetails'

export const metadata = {
  title: 'AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System',
  description: 'AILYONS ELP2404K 2.1CH SubWoofer Home Theatrer Multi Media Speaker System',
}

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
