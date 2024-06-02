import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const auth = () => {

  const findtoken = localStorage.getItem('token')

return findtoken ? <Outlet /> : <Navigate to='' />
}

export default auth