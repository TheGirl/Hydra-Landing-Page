import './Process.css';
import smallArrow from '../../Assets/arrow-small-right.png';
import Sectionheading from '../../components/SectionsHeading/Sectionsheading';
import arrowlong from '../../Assets/arrow-long-right.png';
import { useState } from 'react';
import processConstants from '../../Constants/ProcessConstants';


const Process = () => {

  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 1;
  const totalItems = processConstants.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = processConstants.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  
  return (
    <div className='process-div'>
        <Sectionheading heading='HOW WE BUILD' paragraph='WITH HYDRA VR?' image={arrowlong}/>
        <div className='process'>
          <div>
            <h1>01</h1>
            <div>
              <img src={smallArrow} alt="A small Arrow Sign" />
              <p>3D Conception <br />& Design</p>
            </div>
          </div>
          <div>
            <h1>02</h1>
            <div>
              <img src={smallArrow} alt="A small Arrow Sign" />
              <p>Interaction <br /> Design</p>
            </div>
          </div>
          <div>
            <h1>03</h1>
            <div>
              <img src={smallArrow} alt="A small Arrow Sign" />
              <p>VR World <br /> User Testing</p>
            </div>
          </div>
          <div>
            <h1>04</h1>
            <div>
              <img src={smallArrow} alt="A small Arrow Sign" />
              <p>Hydra VR <br /> Deploy</p>
            </div>
          </div>
        </div>
        
        <div className='process-small'>
            <svg
              className='btn-1'
              onClick={() => handlePageChange(currentPage - 1)}
              style={{ display: currentPage === 1 ? 'none' : 'block' }} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M15.8334 26.9166L23.75 19L15.8334 11.0833" stroke="#433D60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {currentItems.map((currentItem) => {
              return (
                  <div>
                    <h1>{currentItem.Number}</h1>
                    <div>
                      <p>{currentItem.paragragh}</p>
                    </div>
                  </div>
              )
            })}
            <svg
              className='btn-2'
              onClick={() => handlePageChange(currentPage + 1)}
              style={{ display: currentPage === totalPages ? 'none' : 'block' }} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M15.8334 26.9166L23.75 19L15.8334 11.0833" stroke="#433D60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>  
  )
}

export default Process