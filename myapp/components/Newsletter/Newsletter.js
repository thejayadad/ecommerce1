import React from 'react'

const Newsletter = () => {
    const backgroundImageUrl =
    'https://images.pexels.com/photos/439818/pexels-photo-439818.jpeg';
  return (
    <section
    className='py-0 md:py-24 bg-center bg-cover flex justify-center  items-center'
    style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
    <div
    className='rounded-md p-10 md:p-24 bg-[#1e1e1ee5] mx-auto w-full max-w-7xl'
    >
    <h2
    className='text-3xl md:text-5xl pb-3 border-b boder-zinc-500 text-white px-2 md:px-0'
    >Subscribe To Our Newsletter</h2>
    <p
    className='uppercase text-blue-700 px-2 md:px-0 mt-1 mb-1'
    >Subscribe To Keep Up With The Trends</p>
        <form className='flex flex-col gap-4 md:flex-row md:flex-wrap'>
        <input className='px-4 py-2 rounded-sm' placeholder='First Name' />
        <input className='px-4 py-2 rounded-sm' placeholder='Last Name' />
        <input className='px-4 py-2 rounded-sm' placeholder='Email' />
        <input className='px-4 py-2 bg-blue-700 w-[300px] rounded-sm' type='submit'  />

    </form>
    </div>
    </section>
  )
}

export default Newsletter