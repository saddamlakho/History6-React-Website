import React from 'react'
import './MenuItem.css'

function MenuItem({ title, tag }) {
  return (
    <div className='menuItem'>
    
      <sup>{tag}</sup>
        <h4>{title}</h4>
    </div>
  )
}

export default MenuItem;