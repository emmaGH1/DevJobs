import React, { useContext} from 'react'
import { stateContext } from '../paths'

const Job = ({ company, logo, logoBackground, position, postedAt, contract, location}) => {
  const { isDarkMode } = useContext(stateContext)
  return (
    <div className={` ${isDarkMode ? 'bg-dark-blue shadow-none text-light-grey' : 'bg-white text-dark-grey shadow-2xl shadow-slate-200'} rounded-md flex flex-col mb-12 w-[90%] mx-auto pl-7`}>

      <div style={{ backgroundColor: `${logoBackground}`}} className='w-12 h-12 rounded-xl flex justify-center items-center -mt-5 mb-5'>
          <img src={logo} alt={company} />
      </div>
      <div className='flex mb-3'>
        <div className='pr-3'>{postedAt}</div>
        <span className='w-1 h-1 rounded-full bg-dark-grey self-center' />
        <div className='pl-3'>{contract}</div>
      </div>
      <div className={` ${isDarkMode ? 'text-white' : 'text-black'} font-bold text-lg mb-3`}>
        {position}
      </div>
      <div className='mb-7'>{company}</div>
      <div className={` ${isDarkMode ? 'text-light-violet' : 'text-violet'} mb-2 text-sm font-bold`}>{location}</div>
    </div>
  )
}

export default Job