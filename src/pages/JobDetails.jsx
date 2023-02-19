import { useContext} from 'react'
import { useParams } from 'react-router-dom'

import { stateContext, jobsData } from '../paths'

const JobDetails = () => {
  const { filteredData } = useContext(stateContext)

  const { jobId } = useParams()

  const [job] = jobsData.filter((each) => {
    return each.id === Number(jobId)
  })
  const { id, company, position, postedAt } = job

  return (
    <div>
     <h1>{company}</h1>
     <h2>{position}</h2>
     <h3>{postedAt}</h3>
     <h1>{id}</h1>
    </div>
  )
}

export default JobDetails