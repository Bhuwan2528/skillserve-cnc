import React from 'react'
import './Bottom.css'
import Info from '../info/Info';
import Form from '../Form/Form'

const Bottom = () => {
  return (
    <div className="bottom">
        <span className='info'><Info/></span>
        <span className='form'><Form/></span>
      </div> 
  )
}

export default Bottom