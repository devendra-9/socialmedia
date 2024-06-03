import React from 'react'
import './css/create.css'

const create = () => {
  return (
    <div className='create'>
      <h1>Create New Post</h1>
      <div className="create-main">
        <div className="header">
          <label htmlFor="acceptimage">Upload Post</label>
          <input type="file" accept=".png,.jpg,.gif" id='acceptimage' hidden />
        </div>
      </div>
    </div>
  )
}

export default create