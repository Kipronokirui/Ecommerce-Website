import Image from 'next/image'
import { TopComponents, CustomCategories, FlashSales, DealsYouCantMiss, ForYourHome, FAQs } from '@/components/homepage'

export default function Home() {
  return (
    <section className='px-20'>
      <div className='mb-2'>
        <TopComponents />
      </div>
      <div className='mt-2 mb-6 bg-white rounded shadow min-w-full'>
        <CustomCategories />
      </div>
      <div className='mt-2 mb-6 bg-white rounded shadow min-w-full'>
        <FlashSales />
      </div>
      <div className='mt-2 mb-6 bg-white rounded shadow min-w-full'>
        <DealsYouCantMiss />
      </div>
      <div className='mt-2 mb-6 bg-white rounded shadow min-w-full'>
        <ForYourHome />
      </div>
      <div className='mt-2 mb-6 bg-white rounded shadow min-w-full'>
        <FAQs />
      </div>
    </section>
  )
}
