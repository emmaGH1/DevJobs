import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import Job from '../components/Job'
import { stateContext } from '../context/contextProvider'

const Home = () => {
  const [showJobs, setshowJobs] = useState(9)
  const { filterByTitle, filterByLocation, fullTimeChecked, filteredData, isDarkMode, toggleShow } = useContext(stateContext)

  const handleShowJobs = () => {
    if (filterByTitle || filterByLocation || fullTimeChecked) {
      return 12
    } else {
      return showJobs
    }
  }

  return (
    <div className={` ${isDarkMode ? `bg-midnight text-light-grey ${toggleShow && 'opacity-10'}` : `bg-slate-100 text-dark-grey ${toggleShow && 'opacity-50'}` }  mt-28`}>
      <div className='sm:flex'>
        {
          filteredData.length > 0 ?  <div className='sm:flex sm:flex-wrap sm:mx-auto sm:justify-center sm:w-4/5'>
          {filteredData.slice(0, handleShowJobs()).map((job) => {
          return (
            <div key={job.id} className='sm:w-1/2 md:w-1/3'>
              <Link to={`job/${job.id}`}>
                <Job {...job} />
              </Link>
            </div>
          )
          })}
        </div> : <div className='flex flex-col justify-center items-center w-full text-3xl font-bold'>
           <div className='text-grey mb-5'>Oops!!!</div>
           <div className=''>No result Found</div>
        </div>
        }


      </div>
      <div className={`justify-center mb-5 ${handleShowJobs() > 9 ? 'hidden' : 'flex'}`} onClick={() => setshowJobs(prev => prev + 3)}>
        <div className='bg-violet text-white font-bold w-32 text-center py-3 rounded-md mb-20 cursor-pointer'>Load More</div>
      </div>
  
    </div>
  )
}

export default Home