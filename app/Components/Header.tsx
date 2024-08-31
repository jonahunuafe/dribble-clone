import React from 'react'
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined'
import SearchOutlinedIcon  from '@mui/icons-material/SearchOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

function Header() {
  return (
    <nav className='flex justify-center items-center'>
        
    </nav>
  )
}

function LogoSection() {
    return (
        <div className='flex gap-2 items-center'>
            <div className='bg-purple-600 flex items-center justify-center p-[11px] rounded-lg'>
                <div className='w-[26px] h-[26px] flex items-center justify-center'>
                    <SavingsOutlinedIcon 
                        sx={{ fontSize: '25px' }}
                        className='text-white'
                    />
                </div>
            </div>


            <div className='flex gap-1 text-[24px]'>
                <span className='font-bold text-purple-600'>Penny</span>
                <span className='text-slate-600'>Wise</span>
            </div>
        </div>

    )
}

function SearchBar() {
    return (
        <div className='h-[46px] bg-slate-50 flex items-center text-sm rounded-md pl-3 gap-1 w-[300px]'>
            <div>
                <SearchOutlinedIcon className='text-slate-400'/>
            </div>
            <input 
               placeholder='Search an expense...'
               className='bg-transparent outline-none w-full font-light'
            />
        </div>
    )
}

function Button() {

}



export default Header