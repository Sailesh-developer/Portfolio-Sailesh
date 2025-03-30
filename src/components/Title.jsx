import React from 'react'
import '../stylesheets/Title.css'
import { ReactComponent as FrontImg } from '../assets/ForPortFolioFrontPage.svg';
import { Tooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';





const Title = () => {
  
  const navigate = useNavigate();

const navigateToAboutMe = () => {
navigate("/Aboutme")
}

const navigateToSkills = () => {
  navigate("/Skills")
}

const navigateToOfficialProjects = () => {
  navigate("/OfficialProjects")
}

  return (
    <div className='background'>
      <button className='skills-button' data-tooltip-id="tooltip" data-tooltip-content="Skills" onClick={navigateToSkills}>Skills</button>
      <Tooltip place="top" id="tooltip" />
      <button className='projects-button' data-tooltip-id="tooltip" data-tooltip-content="Official-Projects" onClick={navigateToOfficialProjects}>Projects</button>
      <Tooltip place="top" id="tooltip" />
      <button className='aboutme-button' data-tooltip-id="tooltip" data-tooltip-content="About me" onClick={navigateToAboutMe}>about me</button>
      <Tooltip place="top" id="tooltip" />
     <div className='slanted-div'>
      
        <div className='title-img'><FrontImg width="70%" height="90%"/></div>

        {/* <img src = {Frontimg} alt='' className='Title-image'/> */}
     </div>
     <div className='title-text'>Hi, I'm Sailesh</div>
     <div className='title-sub-text'>- Full stack developer</div>
     <div className='title-sub-text-2'>Check out some of the cool stuffs which I did. Click the button below</div>
     <button className='explore-button' onClick={navigateToSkills}>Explore now!</button>
    </div>
  )
}

export default Title