import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../paths'

const SharedLayout = () => {
  return (
    <div className='w-full h-screen'>
      <Header />
      <Outlet />
    </div>
  )
}

export default SharedLayout