import React, { useState, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { stateContext, Job, jobVariant, scrollToBottom, jobsData} from '../paths'

const Home = () => {
  const [showJobs, setshowJobs] = useState(9)
  const { filterByTitle, filterByLocation, fullTimeChecked, filteredData, isDarkMode, toggleShow } = useContext(stateContext)
  const myRef = useRef(null)
  
  const handleShowJobs = () => {
    if (filterByTitle || filterByLocation || fullTimeChecked) {
      return 12
    } else {
      return showJobs
    }
  }

  useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  }, [handleShowJobs])
  
  return (
    <div className={` ${isDarkMode ? `bg-midnight text-light-grey ${toggleShow && 'opacity-10'}` : `bg-slate-100 text-dark-grey ${toggleShow && 'opacity-50'}` }  mt-28`}>
      <div className='sm:flex' ref={myRef}>
        {
          filteredData.length > 0 ?  <div className='sm:flex sm:flex-wrap sm:mx-auto sm:justify-center sm:w-4/5'>
          {filteredData.slice(0, handleShowJobs()).map((job) => {
          return (
            <motion.div key={job.id} className='xs:w-1/2 md:w-1/3' variants={jobVariant(job.id)} initial="hidden" whileInView="show" layout>
              <Link to={`job/${job.id}`}>
                <Job {...job} />
              </Link>
            </motion.div>
          )
          })}
        </div> : <div className='flex flex-col justify-center items-center w-full text-3xl font-bold'>
           <div className='text-grey mb-5'>Oops!!!</div>
           <div className=''>No result Found</div>
        </div>
        }


      </div>
      <div className={`justify-center mb-5 ${handleShowJobs() > 9 ? 'hidden' : 'flex'}`} onClick={() => {
        setshowJobs(prev => prev + jobsData.length - prev)
        scrollToBottom(myRef)
      }}>
        <div className='bg-violet text-white font-bold w-32 text-center py-3 rounded mb-20 cursor-pointer'>Load More</div>
      </div>
  
    </div>
  )
}

export default Home