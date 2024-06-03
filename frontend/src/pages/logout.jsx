import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const logout = () => {

  const token = localStorage.clear('token')
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/')
  })

}

export default logout