'use client'

import React from 'react'

const Product = () => {
  return (
    <section className='w-full md:py-20'>
        <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                left column
            </div>
            <div className='flex-[1] py-3'>
                <div className='text-[34px] font-semibold mb-2 leading-tight'>
                Product Name
                </div>
                <div className="text-lg font-semibold mb-5">
                Product Description
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Product