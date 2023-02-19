import React from 'react'
import { Link } from 'react-router-dom'

import { SearchFunctionality, ToggleComponent } from '../paths'
const Header = () => {

  return (
    <div className='relative bg-mobile bg-tablet bg-desktop flex w-full text-white'>

      <div className='flex flex-col w-[90%] mx-auto mt-5 xl:w-4/5 md:mt-8'>
        <div className='flex justify-between py-5 mb-[3.2rem]'>
           <Link to='/'><div className='font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer'>devjobs</div></Link>
           <ToggleComponent />
        </div>
        <div className='absolute top-[80%] xl:w-4/5 w-[90%] mx-auto'>
          <SearchFunctionality />
        </div>
        
      </div> 

    </div>
  )
}

export default Header