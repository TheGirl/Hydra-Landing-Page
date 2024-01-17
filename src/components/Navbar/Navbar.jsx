import './Navbar.css'
import HydraLogo from '../../Assets/Hydra-logo.png'
import HydraLogoText from '../../Assets/Hydra-logo-text.png'
import HamburgerBtn from '../../Assets/Hamburger-Button.png' 
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img className='logo' src={HydraLogo} alt="Logo" height="90px"/>
        <img className='logo-text' src={HydraLogoText} alt="LogoText" height="40px"/>
      </div>
      <div>
        <ul className='navigations'>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#technologies">TECHNOLOGIES</a></li>
          <li><a href="#how-to">HOW TO</a></li>
        </ul>
      </div>
      <div className='nav-cta-btn'>
        <a href="#optIn"><button >CONTACT US</button></a>
        <button>JOIN HYDRA</button>
      </div>
      <div className="hamburger">
        <img src={HamburgerBtn} alt='Hamburger Button' onClick={() => {setToggleMenu(!toggleMenu)}}/>
      </div>
      {toggleMenu && (
      <div className='mobile-nav'>
        <AiOutlineClose className="close" onClick={() => {setToggleMenu(!toggleMenu)}}/>
        <ul>
          <li><a href='#about'>ABOUT</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#technologies">TECHNOLOGIES</a></li>
          <li><a href="how-to">HOW TO</a></li>
          <li><button>CONTACT US</button></li>
          <li><button>JOIN HYDRA</button></li>
        </ul>
      </div>
      )}
    </div>
  )
}

export default Navbar;