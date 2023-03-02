import { useEffect } from "react"

export const ScrollToTopOnLoad = ({children}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div>
    {children}
  </div>
}

export const scrollToBottom = (myRef) => {
  myRef.current.scrollTop = myRef.current.scrollHeight;

}

