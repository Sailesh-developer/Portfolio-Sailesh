import React from 'react'
import '../stylesheets/AboutMe.css'
import newPortrait from "../assets/newPortrait.png"
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {

  const navigate = useNavigate(); 

  const navigateToHome = () => {
    navigate("/")
  }

  const navigatetoSkills = () => {
    navigate("/Skills")
  }

  const navigateToOfficialProjects = () => {
    navigate("/OfficialProjects")
  }


  return (
    <div className='about-me-background'>

<div className='about-me-slanted-div'>
<motion.div
      animate={{
        y: [0, -20, 0], // Moves up by -20px and back to 0
      }}
      transition={{
        duration: 1, // Duration of one bounce cycle
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop
        repeatType: "loop",
      }}
      style={{ display: 'flex' }} // Keeps it inline for better layout
    >
   <img src = {newPortrait} className='portrait-image' alt = ''/>
   </motion.div>
</div>
<button className='home-button-about-me' data-tooltip-id="tooltip" data-tooltip-content="Home" onClick={navigateToHome}><img className='home-icon-about-me' alt=''/></button>
<Tooltip place="top" id="tooltip" />
 <button className='skills-button-about-me' data-tooltip-id="tooltip" data-tooltip-content="Skills" onClick={navigatetoSkills}><img className='skills-icon-about-me' alt=''/></button>
<Tooltip place="top" id="tooltip" />
  <button className='projects-button-about-me' data-tooltip-id="tooltip" data-tooltip-content="Official-Projects" onClick={navigateToOfficialProjects}><img className='projects-icon-about-me' alt=''/></button>
  <Tooltip place="top" id="tooltip" />

<div className='About-me-heading'>About me:</div>
<div className='about-me-text'>
<p>
Hi, I’m Sailesh, a passionate and dedicated full-stack developer with a flair for creating seamless, user-friendly applications. With expertise in both front-end and back-end technologies, I enjoy solving complex problems and bringing ideas to life through code.

I have a strong foundation in frameworks and tools like React, Spring Boot, and PostgreSQL, enabling me to build robust, scalable solutions tailored to user needs. Whether it's designing intuitive interfaces or optimizing back-end processes, I take pride in delivering high-quality results.

When I’m not coding, I enjoy exploring new tools like Affinity Designer to bring creative ideas into digital form. Feel free to check out my portfolio to see some of the personal and official projects I’ve worked on.

Let’s connect and create something amazing together!
</p>
</div>
    </div>
  )
}

export default AboutMe