import React from 'react'
import '../stylesheets/Title.css'
import { ReactComponent as FrontImg } from '../assets/ForPortFolioFrontPage.svg';
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
      <button className='skills-button' onClick={navigateToSkills}>Skills</button>
      <button className='projects-button' onClick={navigateToOfficialProjects}>Projects</button>
      <button className='aboutme-button' onClick={navigateToAboutMe}>about me</button>
     <div className='slanted-div'>
      
        <div className='title-img'><FrontImg width="70%" height="90%"/></div>

    
     </div>
     <div className='title-text'>Hi, I'm Sailesh</div>
     <div className='title-sub-text'>- Full stack developer</div>
     <div className='title-sub-text-2'>Check out some of the cool stuffs which I did. Click the button below</div>
     <button className='explore-button' onClick={navigateToSkills}>Explore now!</button>
    </div>
  )
}

export default Title