import { useState, useEffect, createContext, useReducer, useRef } from 'react'

import jobsData from '../assets/data.json'

export const stateContext = createContext()

export const initialState = {
    filterByTitle: '',
    filterByLocation: '',
    fullTimeChecked: false
}


export const GlobalContext = ({ children }) => {
  const [filterByTitle, setFilterByTitle] = useState('')
  const [filterByLocation, setFilterByLocation] = useState('')
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

  const onSubmit = () => {
    let returnedData = jobsData
    returnedData = jobsData.filter((each) => {
    const searchFilter = (each.position.toLowerCase().includes(filterByTitle.toLowerCase()) || each.company.toLowerCase().includes(filterByTitle.toLowerCase())) && each.location.toLowerCase().includes(filterByLocation.toLowerCase())
    return fullTimeChecked ? searchFilter && each.contract === "Full Time" : searchFilter
 })
 setFilteredData(returnedData)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit()
    setFilterByTitle('')
    setFilterByLocation('')
    setFullTimeChecked(false)
}
  
  const titleFilter = (e) => {
      setFilterByTitle(e.target.value)
  }
  
  const locationFilter = (e) => {
      setFilterByLocation(e.target.value)
  }

  return (
    <stateContext.Provider value={{ filterByTitle, filterByLocation, filteredData, fullTimeChecked, isDarkMode, toggleShow, myRef,setToggleShow, setIsDarkMode, setFullTimeChecked, titleFilter, locationFilter, handleSubmit, toggleDarkMode }}>
          {children}
    </stateContext.Provider>
  )
}
