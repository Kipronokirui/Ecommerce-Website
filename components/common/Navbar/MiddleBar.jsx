import Link from 'next/link'
import React from 'react'

export default function MiddleBar() {
  return (
    <div className='container flex py-1 gap-80'>
      <div>
        <Link href={`#`} className='text-sm font-light text-orange-400 hover:underline'>
          Sell on Jumia
        </Link>
      </div>
      <div className='flex flex-row gap-4 items-center'>
        <div>
          <h6>
            JUMIA
          </h6>
        </div>
        <div>
          <h6>
            PAY
          </h6>
        </div>
      </div>
    </div>
  )
}
