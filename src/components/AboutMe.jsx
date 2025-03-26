import React, { useState } from 'react'
import '../stylesheets/AboutMe.css'
import myPortrait from "../assets/myPortrait.png"
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import downloadIcon from "../assets/download-icon.png";
import downloadIconHovered from "../assets/download-icon-hover.png";

const AboutMe = () => {

  const [downloadResumeHovered , setDownloadResumeHovered] = useState(false)

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

  const handleResumeDownload = () => {
    const saileshResume = "/Sailesh-resume.pdf";
    const link = document.createElement("a");
    link.href = saileshResume;
    link.download = "Sailesh's resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
   <img src = {myPortrait} className='portrait-image' alt = ''/>
   </motion.div>
</div>
<button className='home-button-about-me' data-tooltip-id="tooltip" data-tooltip-content="Home" onClick={navigateToHome}>Home</button>
<Tooltip place="top" id="tooltip" />
 <button className='skills-button-about-me' data-tooltip-id="tooltip" data-tooltip-content="Skills" onClick={navigatetoSkills}>Skills</button>
<Tooltip place="top" id="tooltip" />
  <button className='projects-button-about-me' data-tooltip-id="tooltip" data-tooltip-content="Official-Projects" onClick={navigateToOfficialProjects}>Projects</button>
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
<div className='contact-information'>
Contact information : 
</div>
<div className='phone-number'>phone number : 7904120693</div>
<div className='email-id'>Email ID : sailesh.developer2001@gmail.com</div>

 <span className='resume-download-text'>you can download my resume by clicking this button.</span>   
 <button
      onMouseEnter={() => setDownloadResumeHovered(true)}
      onMouseLeave={() => setDownloadResumeHovered(false)}
      style={{
        backgroundColor: downloadResumeHovered ? "black" : "#F5F900",
        transition: "all 0.3s ease",
        borderRadius: "20%",
        border: "none",
        cursor : "pointer",
        position: "absolute",
        top : "89%",
        left : "37%",
        height : "40px",
        width : "40px",
        paddingLeft : '8px'
      }}
      onClick={handleResumeDownload}
       data-tooltip-id="tooltip" data-tooltip-content="Download resume"
    >
      <img
        src={downloadResumeHovered  ?  downloadIconHovered : downloadIcon}
        alt="icon"
        style={{ width: "24px", height: "24px" }}
      />
    </button>
   <Tooltip place="top" id="tooltip"/>
    </div>
  )
}

export default AboutMe