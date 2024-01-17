import React from 'react'
import './ServicesBox.css'

const ServicesBox = ({imgSrc, heading, paragraph}) => {
  return (
    <div className='service-box'>
        <img src={imgSrc} alt="" />
        <h3>{heading}</h3>
        <div></div>
        <p>{paragraph}</p>
        <button>TRY IT NOW</button>
    </div>
  )
}

export default ServicesBox