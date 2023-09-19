import React from 'react'

const Press = () => {
    const backgroundImageUrl =
    'https://images.pexels.com/photos/439818/pexels-photo-439818.jpeg';
  return (
    <section className='py-24 bg-center bg-cover bg-zinc-950 py-24 flex justify-center items-center px-8'>
     <div
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        className='hidden md:flex h-[300px] w-[650px] rounded-sm bg-cover bg-top mr-8 rounded-sm'>
      </div>
        <div
        className='max-w-sm md:max-w-2xl px-4 md:px-0 flex flex-col justify-end'
        >
        <h3
        className='mb-3 text-white uppercase text-3xl md:text-5xl pb-3 border-b border-zinc-300'
        >Interested In Selling?</h3>
        <p
        className='text-zinc-300 mb-4 text-sm leading-6'
        >We are always looking to showcase items that relate to our customers. Feel Free to contact us if you share our vision</p>
        <button
        className='rounded-sm uppercase px-6 py-1 text-white text-lb bg-blue-700 hover:bg-blue-900'
        >
        Contact Us
        </button>
        </div>
    </section>
  )
}

export default Press