import React from 'react';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import { AllExpenses } from './Components/AllExpenses';

export default function Home() {
  return (
    <div className='poppins w-full h-screen flex justify-center items-center bg-purple-600'>
      <div className='w-[59%] relative max-lg:w-[97%] h-[760px] bg-white shadow-lg rounded-2xl p-12 px-[52px] max-sm:px-[30px]'>
        <Header />
        <SubHeader />
        <AllExpenses />
      </div>
    </div>
  )
}
