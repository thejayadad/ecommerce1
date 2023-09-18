'use client'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className=''>
        <div className='p-10 flex justify-between align-center'>
            <Link
            className=''
            href={'/'}>DaMarket</Link>
            <div>center</div>
            <div>right</div>
        </div>
    </header>
  )
}

export default Navbar