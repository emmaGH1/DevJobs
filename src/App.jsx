import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { JobDetails, Job, SharedLayout, Home, ErrorPage, stateContext } from './paths'


const App = () => {
  const { isDarkMode } = useContext(stateContext)
  return (
    <div className={`${isDarkMode ? 'bg-midnight text-white' : 'bg-slate-100 text-grey' }   font-kumbh-shans flex m-0 p-0`}>
      <Routes>
        <Route path='/'  element={<SharedLayout /> } >
          <Route index element={<Home /> } />

            <Route path='job/:jobId' element={<JobDetails /> } />
        
          <Route path='*' element={<ErrorPage /> } />
        </Route>
      </Routes>
    </div>
   
  )
}

export default App