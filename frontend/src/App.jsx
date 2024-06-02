import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Signin from './pages/loginpage'
import Auth from './authenticaton/auth'
import Home from './components/home/home'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={< Signin />} />
        <Route element={<Auth/>}>
        <Route path='/home' element={< Home />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
