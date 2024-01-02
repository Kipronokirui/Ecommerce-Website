import React from 'react'

export const questions = [
    {
        question:"How can I place an order?",
        answer:"Placing an order is easy! Simply browse our website, select the products you want, add them to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.",
    },
    {
        question:"What payment methods do you accept?",
        answer:"We accept a variety of payment methods, including credit cards and cash on delivery. Choose the one that suits you best during the checkout process.",
    },
    {
        question:"How long does delivery take?",
        answer:"Delivery times may vary depending on your location and the product. We strive to deliver your orders as quickly as possible, and you can check the estimated delivery time during the checkout process.",
    },
    {
        question:"Do you offer refunds or returns?",
        answer:"Yes, we have a hassle-free return and refund policy. If you're not satisfied with your purchase, you can initiate a return request, and we'll guide you through the process.",
    },
    {
        question:"Is my personal information safe?",
        answer:"Absolutely. We take data security seriously and have robust measures in place to protect your personal information. Your data is safe with us.",
    },
]
export default function FAQs() {
  return (
    <div className='p-4'>
        <div>
            <h3 className='font-semibold underline underline-offset-4'>Frequently Asked Questions <span>(FAQs)</span></h3>
        </div>
        <div className='p-4'>
            <ol className='list-decimal'>
                {questions.map((question, index) => {
                    return(
                        <li 
                            key={index}
                            className='mb-2'
                        >
                            <div>
                                <h6 className='font-bold text-sm'>{question.question}</h6>
                                <p className='font-light tracking-tight text-sm'>{question.answer}</p>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </div>
    </div>
  )
}
