// Components
export { default as Header } from './components/Header'
export { default as Job } from './components/Job'
export { default as SearchFunctionality } from './components/SearchFunctionality'
export { default as ToggleComponent } from './components/ToggleComponent'
export { ScrollToTopOnLoad, scrollToBottom } from './components/Scroll'

// Pages
export { default as JobDetails } from './pages/JobDetails'
export { default as SharedLayout } from './pages/SharedLayout'
export { default as Home } from './pages/Home'
export { default as ErrorPage } from './pages/ErrorPage'

// Context
export { stateContext } from './context/contextProvider'

// Json Data
export { default as jobsData } from './assets/data.json'

//Utils
export { jobVariant, jobDetailsVariant, spring } from './utils/animations'