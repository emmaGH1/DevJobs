import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'
import { GlobalContext } from './context/contextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <GlobalContext>
          <App />
       </GlobalContext>
    </BrowserRouter>
)
