import React from 'react'
import '../stylesheets/Title.css'
import { ReactComponent as FrontImg } from '../assets/ForPortFolioFrontPage.svg';
import { Tooltip } from 'react-tooltip';
// import Frontimg from '../assets/portfolioFrontimg.png'


const Title = ({scrollToSection}) => {
  return (
    <div className='background'>
      <button className='skills-button' data-tooltip-id="tooltip" data-tooltip-content="Skills" onClick={() => scrollToSection("section-2")}><img className='skills-icon'/></button>
      <Tooltip place="top" id="tooltip" />
      <button className='projects-button' data-tooltip-id="tooltip" data-tooltip-content="Projects"><img className='projects-icon'/></button>
      <Tooltip place="top" id="tooltip" />
      <button className='aboutme-button' data-tooltip-id="tooltip" data-tooltip-content="About me" onClick={() => scrollToSection("section-3")}><img className='aboutme-icon'/></button>
      <Tooltip place="top" id="tooltip" />
     <div className='slanted-div'>
      
        <div className='title-img'><FrontImg width="70%" height="90%"/></div>

        {/* <img src = {Frontimg} alt='' className='Title-image'/> */}
     </div>
     <div className='title-text'>Hi, I'm Sailesh</div>
     <div className='title-sub-text'>- Full stack developer</div>
     <div className='title-sub-text-2'>Check out some of the cool stuffs which I did. Click the button below</div>
     <button className='explore-button' onClick={() => scrollToSection("section-2")}>Explore now!</button>
    </div>
  )
}

export default Title