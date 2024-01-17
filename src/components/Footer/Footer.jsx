import './Footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
// import facebook from '../../Assets/facebook.jpg'
import HydraLogo from '../../Assets/Hydra-logo.png'
// import facebook from '../../Assets/facebook.jpg'
// import { AiFillPin}

const Footer = () => {
  return (
      <footer>
        <div className='footer'>
          <img src={HydraLogo} alt="Hydra Company Logo" width={170} height={170}  />
          <div className='footer-demarcation'></div>
          <div>
            <p>ABOUT</p>
            <p>SERVICES</p>
            <p>TECHNOLOGY</p>
            <p>HOW TO</p>
            <p>HYDRA</p>
          </div>
          <div className='footer-demarcation'></div>
          <div>
            <p>F.A.Q</p>
            <p>SITEMAP</p>
            <p>CONDITIONS</p>
            <p>LICENSES</p>
          </div>
          <div className='footer-demarcation'></div>
          <div className='socials' style={{display:'flex'}}>
            <p>SOCIALIZE WITH HYDRA</p>
            <div style={{display:'flex'}}>
              <FaFacebookF className='social-icon'/>
              <FaTwitter className='social-icon'/>
              <FaLinkedin className='social-icon'/>
              <FaYoutube className='social-icon'/>
              <FaInstagram className='social-icon' />
              <FaPinterest className='social-icon'/>
              {/* <img className='social-icon' src={facebook} alt="" /> */}
            </div>
            <button>BUILD YOUR WORLD</button>
          </div>
        </div>
        <div className='last-footer-border'></div>
        <p className='last-footer-p'>2024 &copy; HYDRA LANDING PAGE - BY MUHAMMED OPAREMI - ALL RIGHTS RESERVED</p>
        <p className='last-footer-p-small'>2024 &copy; HYDRA LANDING PAGE <br />BY MUHAMMED OPAREMI <br /> ALL RIGHTS RESERVED</p>
      </footer>
  )
}

export default Footer