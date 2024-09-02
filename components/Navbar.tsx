import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image
            alt='logo' 
            src='/logo.svg'
            width={115}
            height={43}
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7 '>
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;