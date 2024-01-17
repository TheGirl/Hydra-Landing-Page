import React from 'react'
import './Sectionsheading.css'

const Sectionheading = ({heading, paragraph, image}) => {
  return (
    <div className='section-heading-div'>
        <div className='section-heading'>
            <div>
                <h1>{heading}</h1>
                <span>
                    <p>{paragraph}</p>
                    <img className='long-arrow' src={image} alt="A long pointed arrow sign" />
                </span>
            </div>
            <p className='section-heading-p'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
        <div className='small-heading'>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default Sectionheading;