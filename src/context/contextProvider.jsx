import { useState, useEffect, createContext, useReducer, useRef } from 'react'

import jobsData from '../assets/data.json'
import { reducer } from './AppReducer'
import { FILTER_LOCATION, FILTER_SEARCH, FULLTIME_CHECK } from './caseTypes'

export const stateContext = createContext()

export const initialState = {
    filterByTitle: '',
    filterByLocation: '',
    fullTimeChecked: false
}


export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  let { filterByTitle, filterByLocation } = state
  const [fullTimeChecked, setFullTimeChecked] = useState(false)
  const [filteredData, setFilteredData] = useState(jobsData)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toggleShow, setToggleShow] = useState(false)
  const myRef = useRef(null)

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDark);

    
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
     let returnedData = jobsData
     returnedData = jobsData.filter((each) => {
     const searchFilter = (each.position.toLowerCase().includes(filterByTitle.toLowerCase()) || each.company.toLowerCase().includes(filterByTitle.toLowerCase())) && each.location.toLowerCase().includes(filterByLocation.toLowerCase())
     return fullTimeChecked ? searchFilter && each.contract === "Full Time" : searchFilter
  })
  setFilteredData(returnedData)
}
  
  const titleFilter = (e) => {
      dispatch({ type: FILTER_SEARCH, payload: e.target.value })
  }
  
  const locationFilter = (e) => {
      dispatch({ type: FILTER_LOCATION, payload: e.target.value })
  }

  return (
    <stateContext.Provider value={{ filterByTitle, filterByLocation, filteredData, fullTimeChecked, isDarkMode, toggleShow, myRef,setToggleShow, setIsDarkMode, setFullTimeChecked, titleFilter, locationFilter, handleSubmit, toggleDarkMode }}>
          {children}
    </stateContext.Provider>
  )
}
