import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Signin from './pages/loginpage'
import Create from './pages/create'
import Search from './pages/search'
import Profile from './pages/profile'
import Notfound from './pages/errorpage'
import Auth from './authenticaton/auth'
import Home from './components/home/home'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={< Signin />} />
        <Route element={<Auth/>}>
        <Route path='/home' element={< Home />}/>
        <Route path='/search' element={< Search />}/>
        <Route path='/create' element={< Create />}/>
        <Route path='/profile' element={< Profile />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
