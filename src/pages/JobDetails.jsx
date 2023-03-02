import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import { stateContext, jobsData, jobDetailsVariant } from '../paths'

const JobDetails = () => {
  const { isDarkMode } = useContext(stateContext)

  const { jobId } = useParams()

  const [job] = jobsData.filter((each) => {
    return each.id === Number(jobId)
  })
  const { company, logo, logoBackground, website, contract, position, postedAt, location, apply, description, requirements, role } = job
console.log(logoBackground)
  return (
    <div className={`flex flex-col relative ${isDarkMode ? 'text-dark-grey  bg-midnight' : 'bg-slate-100 text-grey'} `} >
        <div className={` w-[90%] sm:w-[70%] mx-auto`}>

          <motion.div className={`${isDarkMode ? 'bg-dark-blue text-white' : 'bg-white text-dark-blue'} -mt-5 sm:-mt-10 rounded-lg flex flex-col sm:flex-row items-center text-white justify-between`} initial="hidden" whileInView="show" variants={jobDetailsVariant('left')}>
               <div className='flex flex-col sm:flex-row items-center'>
                  <div style={{ backgroundColor: `${logoBackground}`}} className='sm:h-32 sm:px-5 sm:rounded-l-lg sm:rounded-r-none flex items-center justify-center py-8 px-3 rounded-xl mb-5 -mt-10 sm:mt-0 sm:mb-0'>
                    <img src={`.${logo}`} alt={company} className='w-14 sm:w-20' />
                  </div>
                  
                  <div className='text-center sm:ml-10'>
                    <div className='text-2xl font-bold mb-2'>{company}</div>
                    <div className='text-dark-grey'>{website}</div>
                  </div>
                </div> 

                <div className='flex mt-5 sm:mt-0 sm:mr-5'>
                  <button className={`${isDarkMode ? 'bg-white/10 hover:bg-white/25' : 'bg-light-violet/20 text-violet hover:bg-light-violet/50'} p-3 rounded-md font-semibold mb-10 sm:mb-0`}><a href={apply}>Company Site</a></button>
                </div>
          </motion.div>

          <motion.div className={`${isDarkMode ? 'bg-dark-blue' : 'bg-white'} mt-10`} initial="hidden" whileInView="show" variants={jobDetailsVariant('right')}>
            <div className='flex flex-col mx-auto w-[90%]'>

                <div className='flex flex-col sm:flex-row sm:justify-between items-center mb-7'>
                  <div className='flex flex-col'>
                    <div className='flex mb-3 mt-10'>
                      <div className='pr-3 '>{postedAt}</div>
                      <span className='w-1 h-1 rounded-full bg-dark-grey self-center' />
                      <div className='pl-3'>{contract}</div>
                    </div>
                    <div className={` ${isDarkMode ? 'text-white' : 'text-black'} font-bold text-2xl mb-3`}>
                    {position}
                    </div>
                    <div className={` ${isDarkMode ? 'text-violet' : 'text-light-violet'} mb-2 text-sm font-bold`}>{location}</div>
                    </div>  

                    <button className='bg-violet text-white rounded-md sm:px-4 py-4 hover:bg-violet/75 mt-10 mb-3 sm:m-0 w-full sm:w-auto'>
                        <a href={apply}>Apply Now</a>
                    </button>
                </div>

                <div>
                  {description}
                </div>

                <div className='mt-10'>
                  <div className={`${isDarkMode ? 'text-white' : 'text-dark-blue'} text-xl font-bold mb-3`}>Requirements</div>
                  <div>{requirements.content}</div>
                  <div className='mt-5'>
                    <ul className=' list-item'>{requirements.items.map((each, i) => 
                      <li key={i} className='mb-2 list-disc list-inside'>{each}</li>)}
                    </ul>
                  </div>
                </div>

                <div className='mt-7 mb-10'>
                  <div className={`${isDarkMode ? 'text-white' : 'text-dark-blue'} text-xl font-bold mb-3`}>What You Will Do</div>
                    <div>{role.content}</div>
                    <div className='mt-5'>
                      <ul className='list-item'>{role.items.map((each, i) => 
                        <li key={i} className='mb-2'>
                          <span className='text-violet font-bold text-sm mr-4'>{i + 1}</span>
                              {each}
                          </li>
                        )}
                      </ul>
                    </div>
                </div>

              </div>
          </motion.div>
        </div>

        <motion.footer className={`${isDarkMode ? 'bg-dark-blue' : 'text-dark-blue bg-white'} mt-20 w-full p-7`} initial="hidden" whileInView="show" variants={jobDetailsVariant('bottom')}>
            <div className='flex  sm:w-[70%] mx-auto sm:justify-between'>
              <div className='hidden sm:block'>
                <div className={`${isDarkMode ? 'text-white' : 'text-dark-blue'} font-bold text-xl`}>{position}</div>
                <p>{company}</p>
              </div>
              <button className='bg-violet text-white font-bold sm:px-4 rounded-md hover:bg-violet/50 w-full sm:w-auto py-4'>
                Apply Now
              </button>
            </div>
        </motion.footer>
    </div>
  )
}

export default JobDetails