
import '../stylesheets/AboutMe.css'
import myPortrait from "../assets/myPortrait.png"
import { motion } from 'framer-motion';
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

  const handleResumeDownload = () => {
    const saileshResume = "/My-resume.pdf";
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
        y: [0, -20, 0], 
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity, 
        repeatType: "loop",
      }}
      style={{ display: 'flex' }} 
    >
   <img src = {myPortrait} className='portrait-image' alt = ''/>
   </motion.div>
</div>
<button className='home-button-about-me' onClick={navigateToHome}>Home</button>

 <button className='skills-button-about-me' onClick={navigatetoSkills}>Skills</button>

  <button className='projects-button-about-me' onClick={navigateToOfficialProjects}>Projects</button>


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
<div className='email-id'>Email ID : sailesh.developer2001@gmail.com</div>

 <span className='resume-download-text'>you can download my resume by clicking this button.</span>   
 <button
      onClick={handleResumeDownload}
      className='download-resume-button'
    >
     Download
    </button>
    </div>
  )
}

export default AboutMe