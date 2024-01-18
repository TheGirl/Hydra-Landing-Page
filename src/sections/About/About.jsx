import './About.css'
import arrowLongRight from '../../Assets/arrow-long-right.png'
import aboutUsImage from '../../Assets/About-us-image.png'

const About = () => {
  return (
    <div className='about'>
      <div className='intro'>
        <div>
          <h1>Introduction</h1>
          <span>
            <p>to hydra vr</p>
            <img className='long-arrow' src={arrowLongRight} alt="A long pointed arrow sign" />
         </span>
        </div>
        <p className='intro-p'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
      </div>
      <div className='small-heading'>
        <h1>Introduction</h1>
        <p>to hydra VR</p>
      </div>
      <div id='about'>
        <img className='about-image' src={aboutUsImage} alt="A man wearing a VR headset" />
        <div>
          {/* <span className='span'>
            <h1>About</h1>
            <span>Hydra VR</span>
          </span> */}
          <p className='about-p'>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdietsed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudin tempor.</p>
          <button>LET'S GET IN TOUCH</button>          
        </div>
      </div>
    </div>
  )
}

export default About