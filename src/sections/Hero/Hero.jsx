import './Hero.css'
import smallArrow from '../../Assets/arrow-small-right.png';
import HeroImage from '../../Assets/Hero-image.png';
import CtaOptions from '../../components/ctaOptions/ctaOptions';
// import Vector4 from '../../Assets/Vector_4.svg';
// import Vector_4 from "../../Assets/Vector_4/Vector_4.html"
// import Vector4 from "../../components/Vector_4"

const Hero = () => {
  return (
    <div>
      {/* <img src={Vector4} alt="" /> */}
      <div className='hero'>
        <div className='hero-header'>
          {/* <Vector4 /> */}
          <h1><span className='header-linear'>Dive</span> Into The Depths <br /> Of <span className='header-linear'>Virtual Reality</span></h1>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br />nisl tincidunt eget. Lectus mauris eros in vitae .</p>
          <div className='hero-cta'>
            <button>BUILD YOUR WORLD</button>
            <img src={smallArrow} alt="arrow" height={50} width={70}/>
          </div>
        </div>
        <div>
          <img className="hero-img" src={HeroImage} alt="A lady wearing a VR headset" width={426}/>
        </div>
      </div>
      <CtaOptions />
      <div>
        
      </div>
    </div>
  )
}

export default Hero;