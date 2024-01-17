import './OptIn.css'

const OptIn = () => {
  return (
    <div className='optIn-div' id='optIn'>
      <div className='optIn'>
        <h1>JOIN HYDRA</h1>
        <div className='border'></div>
        <p>Let's Build Your VR Experience</p>
        <form action="">
          <div>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <div>
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Phone Number' />
          </div>
          <input type="text" placeholder='Subject' />
          <textarea name="" id="" cols="100" rows="10" placeholder='Tell Us Something...'></textarea>
          <button>SEND TO HYDRA</button>
        </form>
      </div>
    </div>
  )
}

export default OptIn