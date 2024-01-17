import Sectionheading from '../../components/SectionsHeading/Sectionsheading.jsx'
import "./Services.css"
import arrowLongRight from '../../Assets/arrow-long-right.png'
import ServicesBox from '../../components/ServicesBox/ServicesBox.jsx'
import servicesConstants from '../../Constants/servicesConstants.jsx'
import { useState } from 'react'


const Services = () => {

  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 1;
  const totalItems = servicesConstants.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = servicesConstants.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='services' id='services'>
      <Sectionheading heading='WhY Build' paragraph='WITH HYDRA?' image={arrowLongRight}/>
      <div className='boxes'>
        {servicesConstants.map((servicesConstant) => {
          return (
            <ServicesBox imgSrc={servicesConstant.imgSrc} heading={servicesConstant.heading} paragraph={servicesConstant.paragraph}/>
          )
        })}
      </div>
      <div className='services-small'>
        <svg
          className='btn-1'
          onClick={() => handlePageChange(currentPage - 1)}
          style={{ display: currentPage === 1 ? 'none' : 'block' }}xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M15.8334 26.9166L23.75 19L15.8334 11.0833" stroke="#433D60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        <div className='boxes-small'>
          {currentItems.map((currentItem) => {
            return (
              <ServicesBox imgSrc={currentItem.imgSrc} heading={currentItem.heading} paragraph={currentItem.paragraph}/>
            )
          })}
        </div>

        <svg
          className='btn-2'
          onClick={() => handlePageChange(currentPage + 1)}
          style={{ display: currentPage === totalPages ? 'none' : 'block' }} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M15.8334 26.9166L23.75 19L15.8334 11.0833" stroke="#433D60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default Services