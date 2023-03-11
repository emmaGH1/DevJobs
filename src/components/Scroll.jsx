import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollToTopOnLoad = ({children}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <div>
    {children}
  </div>
}

export const scrollToBottom = (myRef) => {
  useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  }, 
  [location])

}

