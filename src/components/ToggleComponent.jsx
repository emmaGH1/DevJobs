import { useContext } from 'react'
import { motion } from 'framer-motion'

import { BsFillSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'

import { stateContext } from '../context/contextProvider'
import {spring} from '../utils/animations' 

const ToggleComponent = () => {
  const { isDarkMode, toggleDarkMode } = useContext(stateContext)
  console.log(isDarkMode)
  return (
    <div className='flex items-center'>
        <BsFillSunFill className='mr-3' />
        <div onClick={toggleDarkMode} className={`bg-white w-11 mr-3 h-5 rounded-2xl flex items-center ${isDarkMode ? 'justify-end' : 'justify-start'} `}>
          <motion.div className='w-4 h-4 mx-1 rounded-full bg-violet hover:bg-violet/50' layout transition={spring} />
        </div>
        <BsFillMoonFill />
    </div>
  )
}

export default ToggleComponent