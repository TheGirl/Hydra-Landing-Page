import React from 'react'
import './Technology.css'
import arrow from '../../Assets/chevron-small-down.jpg'
import unrrealLogo from '../../Assets/Unreal-engine-logo.png'
import unity from '../../Assets/Unity-logo.png'
import oculus from '../../Assets/Oculus-logo.png'
import vive from '../../Assets/Vive-logo.png'
import logoConstants from '../../Constants/logoConstants';
import { useState } from 'react'

const Technology = () => {

  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 1;
  const totalItems = logoConstants.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = logoConstants.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='tech' id='technologies'>
      <div className='tech-top'>
        <div>
          <h2>TECHNOLOGIES & HARDWARE</h2>
          <p>USED BY HYDRA VR.</p>
        </div>
        <img src={arrow} alt="" />
      </div>
      <div className='logos'>
        <img src={unrrealLogo} alt="Unreal Company Logo" />
        <img src={unity} alt="Unity Company Logo" />
        <img src={oculus} alt="Oculus Company Logo" />
        <img src={vive} alt="Vive Company Logo" />
      </div>
      
      <div>
        <div  className='tech-top-small'>
          <h2>TECHNOLOGIES & HARDWARE</h2>
          <p>USED BY HYDRA VR.</p>
        </div>
        <div className='logos-small'>
          <svg
            className='btn-1'
            onClick={() => handlePageChange(currentPage - 1)}
            style={{ display: currentPage === 1 ? 'none' : 'block' }} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M15.8334 26.9166L23.75 19L15.8334 11.0833" stroke="#433D60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {currentItems.map((currentItem) => {
            return (
                <img src={currentItem.imgSrc} alt="Unreal Company Logo" />
            )
          })}
          <svg
            className='btn-2'
            onClick={() => handlePageChange(currentPage + 1)}
            style={{ display: currentPage === totalPages ? 'none' : 'block' }} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M15.8334 26.9166L23.75 19L15.8334 11.0833" stroke="#433D60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Technology;