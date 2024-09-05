
import Image from 'next/image';
import React from 'react'

const Home = () => {
  return (
    <div className='flex h-screen max-h-screen'>
      <section className="remove-scrollbar container my-auto">
        <div className='sub-container max-w-[496px]'>
          <Image />
        </div>
      </section>
    </div>
  )
}

export default Home;