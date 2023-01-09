import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { JobDetails, Job, SharedLayout, Home, ErrorPage } from './paths'

const App = () => {
  return (
    <div className='dark:bg-midnight text-white font-kumbh-shans flex m-0 p-0'>
      <Routes>
        <Route path='/'  element={<SharedLayout /> } >
          <Route index element={<Home /> } />

          <Route path='job' element={<Job /> } >
            <Route path=':jobId' element={<JobDetails /> } />
          </Route>
        
          <Route path='*' element={<ErrorPage /> } />
        </Route>
      </Routes>
    </div>
   
  )
}

export default App