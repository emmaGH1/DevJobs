import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import { stateContext, jobsData } from '../paths'
import lib from 'use-media'

const JobDetails = () => {
  const { isDarkMode } = useContext(stateContext)

  const { jobId } = useParams()

  const [job] = jobsData.filter((each) => {
    return each.id === Number(jobId)
  })
  const { company, logo, logoBackground, website, contract, position, postedAt, location, apply, description, requirements, role } = job

  return (
    <div>
       <div>
          <div style={{ backgroundColor: logoBackground}}><img src={logo} alt={company} /></div>
          <div>{company}</div>
          <div>{website}</div>
          <button>Company Site</button>
       </div>

       <div>
          <div>
              <div className='flex mb-3'>
                <div className='pr-3'>{postedAt}</div>
                <span className='w-1 h-1 rounded-full bg-dark-grey self-center' />
                <div className='pl-3'>{contract}</div>
              </div>
              <div className={` ${isDarkMode ? 'text-white' : 'text-black'} font-bold text-xl mb-3`}>
              {position}
              </div>
              <div className={` ${isDarkMode ? 'text-light-violet' : 'text-violet'} mb-2 text-sm font-bold`}>{location}</div>
              <button><a href={apply}>Apply Now</a></button>
          </div>

           <div>
            {description}
           </div>

           <div>
             <div>Requirements</div>
             <div>{requirements.content}</div>
             <div>
              <ul className='list-decimal list-item'>{requirements.items.map(each => 
              <li className='bg-red-900 mb-1 list-decimal'>{each}</li>)}</ul>
             </div>
           </div>
       </div>
    </div>
  )
}

export default JobDetails