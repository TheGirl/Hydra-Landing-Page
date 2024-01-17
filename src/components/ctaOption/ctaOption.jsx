import './ctaOption.css'

const ctaOption = (props) => {
  return (
    <div className='cta-option'>
        <div>
            <img src={props.imgSrc} alt={props.imgSrc} width={props.width} height={props.height}/>
        </div>
        <div className='cta-text'>
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default ctaOption;