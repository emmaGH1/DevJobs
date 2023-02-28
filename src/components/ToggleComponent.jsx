import { useState, useContext } from 'react'

import { BsFillSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'

import { stateContext } from '../context/contextProvider'

const ToggleComponent = () => {
  const { isDarkMode, toggleDarkMode } = useContext(stateContext)
  console.log(isDarkMode)
  return (
    <div className='flex items-center'>
        <BsFillSunFill className='mr-3' />
        <div onClick={toggleDarkMode} className={`bg-white w-11 mr-3 h-5 rounded-2xl flex items-center ${isDarkMode ? 'justify-end' : 'justify-start'} `}>
          <div className='w-4 h-4 mx-1 rounded-full bg-violet hover:bg-violet/50'/>
        </div>
        <BsFillMoonFill />
    </div>
  )
}

export default ToggleComponent