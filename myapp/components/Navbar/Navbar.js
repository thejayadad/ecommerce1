'use client'

import Link from 'next/link'
import React from 'react'
import logo from "../../public/logo.png"
import Image from 'next/image'

import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
  return (
    <header className='w-screen h-12 md:h-14 bg-zinc-50 flex items-center justify-center fixed top-8 left-0 z-[100]'>
      <div className='w-full max-w-7xl flex justify-between items-center px-4'>
        <div className='flex items-center'>
          <Image
            alt='logo'
            src={logo}
            className='flex mr-4 md:mr-0 h-[68px] w-[68px] md:h=[50px] md:w-[55px]'
          />
          <div className='flex h-10 w-[1px] bg-zinc-400 mx-5'></div>
          <Link
          href={'/'}
          className='hover:no-underline'
          >
            <FaInstagram className='text-[#bc2a8d] mr-4 text-lg' />
          </Link>
          <Link
          href={'/'}
          className='hover:no-underline'
          >
            <FaTwitter className='text-[#1da1f2] mr-4 text-lg' />
          </Link>
        </div>
        <div className='flex items-center justify-end md:justify-between md:w-fit'>
        <FaShoppingCart className='text-lg text-zinc-500' />
          <span
          className='text-lg md:text-2xl text-zinc-900 ml-5 md:ml-6'
          >Logout</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar