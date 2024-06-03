import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Search from '../../pages/search'
import Create from '../../pages/create'
import Profile from '../../pages/profile'
import Home from '../../pages/homepage'
import Logout from '../../pages/logout'
import Explore from '../../pages/explore'
import Notfound from '../../pages/errorpage'
import { FaPlusSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import './home.css'

const home = () => {
  return (
    <div className="homepagemain">
      <div className="sections">
        <div className="section-left">
          <div className="leftheader">
            <h1>Only friends</h1>
          </div>
          <div className="left-discussion">
            <Link to='/home'> <button><FaHouseUser /> Home</button></Link>
            <Link to='/search'> <button><FaSearch /> Search</button></Link>
            <Link to='/explore'> <button><FaRegCompass /> Explore</button></Link>
            <Link to='/create'> <button><FaPlusSquare /> Create</button></Link>
            <Link to='/profile'> <button><FaUserAlt />  Profile</button></Link>
            <Link to='/logout'> <button><FaSignOutAlt /> Logout</button></Link>

          </div>
        </div>
        <div className="section-right">
          <Routes>
          <Route path='/home' element={< Home />}/>
          <Route path='/search' element={< Search />}/>
          <Route path='/explore' element={< Explore />}/>
          <Route path='/create' element={< Create />}/>
          <Route path='/profile' element={< Profile />}/>
          <Route path='/logout' element={< Logout />}/>
          <Route path='*' element={< Notfound />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default home