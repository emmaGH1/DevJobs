import { useState, useContext } from 'react'
import {RiFilter2Fill, HiSearch, MdLocationPin, AiOutlineCheck} from 'react-icons/all'
import { useLocation } from 'react-router-dom'

import { stateContext } from '../context/contextProvider'


const SearchFunctionality = () => {
  const [hideFeature, setHideFeature] = useState(false)
  const { filterByTitle, filterByLocation, titleFilter, locationFilter, fullTimeChecked, setFullTimeChecked, handleSubmit, isDarkMode, toggleShow, setToggleShow } = useContext(stateContext)
  const { pathname } = useLocation()
  const handleFullTimeCheck = () => {
    setFullTimeChecked(prev => !prev)
  }
  
  const handleSubmitMobile = (e) => {
    handleSubmit(e)
    setToggleShow(prev => !prev)
  }
  
  return (
     <form className={` ${pathname === '/' ? 'block' : 'hidden'} ${isDarkMode ? 'bg-dark-blue shadow-none text-light-grey' : 'shadow-slate-100  bg-white text-dark-grey shadow'} w-full rounded-md text-lg`} onSubmit={handleSubmit} >

        <div className='hidden md:flex items-center justify-between'>
          <div className={` ${isDarkMode ? 'border-white/10' : 'border-slate-300'} flex items-center border-r-[1px] w-1/3 xl:w-2/5 truncate p-5`}>
            <div className='text-violet mr-3 text-2xl'>
              <HiSearch />
            </div>
            <div className='w-full'>
              <label htmlFor='filterSearch' />
              <input type="search" name="filterSearch" placeholder='Filter by title, companies, expertise...' className={` ${isDarkMode && 'bg-dark-blue'} w-full truncate`} value={filterByTitle} onChange={titleFilter} />
            </div>
          </div>

          <div className={` ${isDarkMode ? 'border-white/10' : 'border-slate-300'} flex items-center  border-r-[1px] w-1/3 xl:w-[30%] p-5`}>
            <div className='text-violet text-2xl mr-2'>
              <MdLocationPin />
            </div>
            <div className='truncate'>
                <label htmlFor="filterLocation" />
                <input type="search" name="filterLocation" placeholder='Filter by location...' className='bg-transparent' value={filterByLocation} onChange={locationFilter}/>
            </div>
          </div>

          <div className='flex items-center w-1/3 xl:w-[30%] truncate justify-between'>
            <div className='flex'>
              <label htmlFor='fullTimeCheck' />
              <div className='ml-4 flex items-center cursor-pointer' onClick={handleFullTimeCheck}>
                  {
                    <div className='flex'>
                      <input name="fullTimeCheck" type="checkbox" className={`appearance-none ${fullTimeChecked ?  'bg-violet' : `${isDarkMode ? 'bg-grey/10 hover:bg-gray-700' : 'bg-slate-300 hover:bg-light-violet/50'} `} rounded-sm w-5 h-5 flex transition-colors duration-500 cursor-pointer `}  value={fullTimeChecked}  />
                      <AiOutlineCheck className={`${fullTimeChecked ? 'block' : 'hidden'} self-center absolute ml-[2px] transition-colors duration-500 text-white`}  />
                    </div>
                  }
              </div>
              <p className={` ${isDarkMode ? 'text-white' : 'text-black'} font-bold ml-3` }>Full Time <span className='sm:hidden lg:inline-block'>Only</span> </p>
            </div>
            <button type='submit' className='bg-violet p-2 px-5 rounded-md font-bold mr-5 text-white hover:bg-violet/75' >
                Search
            </button>
          </div>
        </div>

        {/*  For mobile screens */}
        <div className='md:hidden'>

          <div className='flex justify-between p-2'>
            <label htmlFor='filterSearch' />
            <input type="search" name="filterSearch" placeholder='Filter by title...' className={`ml-2 outline-none text-xl will-change-transform ${isDarkMode && 'bg-dark-blue'}` }value={filterByTitle} onChange={titleFilter} />
            <div className='flex items-center'>
              <RiFilter2Fill className='text-dark-grey text-2xl' onClick={() => setToggleShow(prev => !prev)}/>
              <div className='flex bg-violet px-3 py-4 rounded-md ml-3'>
                <button type="submit"><HiSearch className='text-2xl text-white'/></button>
              </div>
            </div>
          </div>

          {/* for hidden location search */}
           {
            toggleShow &&
             <div className='flex justify-center'>
              <div className={`z-50 ${isDarkMode ? 'bg-dark-blue' : 'bg-white shadow-slate-300'}  drop-shadow-2xl w-[90%] mx-auto absolute bottom-[-500%]`}>
                <div className={` ${isDarkMode && 'border-white/10'} flex items-center border-b-[1px] p-5 `}>
                  <label htmlFor='filterLocation' />
                  <MdLocationPin className='text-xl text-violet mr-2'/>
                  <input type="search" name="filterLocation" placeholder='Filter by location...'className='outline-none bg-transparent' value={filterByLocation} onChange={locationFilter} />
                </div>
                <div>
                <div className='flex p-3 py-5 mb-2'>
                  <label htmlFor='fullTimeCheck' />
                  <div className='ml-4 flex items-center cursor-pointer' onClick={handleFullTimeCheck}>
                      {
                        <div className='flex'>
                          <input name='fullTimeCheck' type="checkbox" className={`appearance-none ${fullTimeChecked ?  'bg-violet' : ` ${isDarkMode ? 'bg-white/10' : 'bg-slate-300'}`} rounded-sm w-5 h-5 flex transition-colors duration-500`} value={fullTimeChecked}  />
                          <AiOutlineCheck className={`${fullTimeChecked ? 'block' : 'hidden'} self-center absolute ml-[2px] transition-colors duration-500 text-white`}/>
                        </div>
                      }
                  </div>
                  <p className={` ${isDarkMode ? 'text-white' : 'text-black' }  font-bold ml-3`}> Full Time </p>
                </div>
                <div className='flex justify-center'>
                  <button  className='bg-violet p-2 w-[90%] rounded-md font-bold mb-5 text-white' type='submit' onClick={handleSubmitMobile} >
                    Search
                  </button>
              </div>
             </div>
            </div>
            </div>
           }
         
            
          

        </div>

     </form>
  )
}

export default SearchFunctionality