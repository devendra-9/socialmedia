import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
   <div>
    <button><Link>Home</Link></button>
    <button><Link to='/search'>Search</Link></button>
    <button><Link>Create</Link></button>
    <button><Link>Explore</Link></button>
    <button><Link>Profile</Link></button>
    <button><Link>Saved</Link></button>
    <button><Link>Logout</Link></button>
   </div>
  )
}

export default navbar