import './ctaOptions.css';
import Ctaoption from '../ctaOption/ctaOption';
import {ctaConstants} from '../../Constants/ctaConstants';
import paginationBtn from "../../Assets/chevron-circle-right.png";
import { useState } from 'react';

const CtaOptions = () => {

  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 1;
  const totalItems = ctaConstants.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = ctaConstants.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  

  return (
    <div className='ctaOptions-container' id='how-to'>
      
      <div className='ctaOptions'>
        <div>
          <Ctaoption imgSrc={ctaConstants[0].img} heading={ctaConstants[0].heading} paragraph={ctaConstants[0].paragraph} width={ctaConstants[0].width} height={ctaConstants[0].height}/>
        </div>
        <div className='demarcation'></div>
        <div>
          <Ctaoption imgSrc={ctaConstants[1].img} heading={ctaConstants[1].heading} paragraph={ctaConstants[1].paragraph} width={ctaConstants[0].width} height={ctaConstants[1].height}/>  
        </div>
        <div className='demarcation'></div>
        <div>
          <Ctaoption imgSrc={ctaConstants[2].img} heading={ctaConstants[2].heading} paragraph={ctaConstants[2].paragraph} width={ctaConstants[0].width} height={ctaConstants[2].height}/>
        </div>
      </div>

      <div className="ctaOptions-medium-small">
        <button className='abcd-1'>
          <img
            src={paginationBtn}
            alt={paginationBtn}
            onClick={() => handlePageChange(currentPage - 1)}
            style={{ display: currentPage === 1 ? 'none' : 'block' }}
          />
          </button>
          {currentItems.map((cta, index) => (
            <div key={index}>
              <Ctaoption
                imgSrc={cta.img}
                heading={cta.heading}
                paragraph={cta.paragraph}
                width={cta.width}
                height={cta.height}
              />
            </div>
          ))}
          <button className='abcd-2'>
            <img
            src={paginationBtn}
            alt={paginationBtn}
            onClick={() => handlePageChange(currentPage + 1)}
            style={{ display: currentPage === totalPages ? 'none' : 'block' }}
          />
          </button>
      </div>
    </div>
  )
}

export default CtaOptions;
