import React from 'react'
import '../stylesheets/OfficialProjects.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import OORTFlow from '../assets/OORT flow.png';
import DevAutoFlow from '../assets/devops-automation-flow.png';
import copilotFlow from '../assets/copilot-flow.png';
import project_img_before_hover from '../assets/projects_image.png'
 
const OfficialProjects = () => {

  const [showOptiusInfo, setShowOptiusInfo] = useState(false);
  const [showDevopsInfo, setShowDevopsInfo] = useState(false);
  const [showCopilotInfo, setShowCopilotInfo] = useState(false);


  const navigate = useNavigate(); 

  const navigateToHome = () => {
    navigate("/")
  }

  const navigatetoSkills = () => {
    navigate("/Skills")
  }

  const navigatetoAboutme = () => {
    navigate("/Aboutme")
  }

  return (
    <div className='official-projects-background'>
       <button className='home-button-official' data-tooltip-id="tooltip" data-tooltip-content="Home" onClick={navigateToHome}>Home</button>
       <Tooltip place="top" id="tooltip" />
        <button className='skills-button-official' data-tooltip-id="tooltip" data-tooltip-content="Skills" onClick={navigatetoSkills}>Skills</button>
        <Tooltip place="top" id="tooltip" />
           <button className='aboutme-button-official' data-tooltip-id="tooltip" data-tooltip-content="About me" onClick={navigatetoAboutme}>About me</button>
          <Tooltip place="top" id="tooltip" />
    <div className='off-title-text'>Official projects:</div>
    <div class="card-container">
  <div class="card" onMouseEnter={() => [setShowOptiusInfo(true), setShowCopilotInfo(false), setShowDevopsInfo(false)]}>Optius Order removal tool</div>
  <div class="card" onMouseEnter={() => [setShowDevopsInfo(true),setShowOptiusInfo(false), setShowCopilotInfo(false)]}>Devops Automation (POC)</div>
  <div class="card" onMouseEnter={() => [setShowCopilotInfo(true) , setShowDevopsInfo(false) , setShowOptiusInfo(false)]}>Copilot (POC)</div>
</div>
<button className='next-button-projects' onClick={navigatetoAboutme}>next</button>
<div className='slanted-div-projects'>

  { !showOptiusInfo && !showDevopsInfo && !showCopilotInfo && (
    <>
    <img src = {project_img_before_hover} alt='' className='img-before-hover'/>
    </>
  )

  }
 
{showOptiusInfo && (
  //  <div className='project-details-card'>
      <>
      <div className='optius-project-title'> Project title : </div>
      
        <div className='optius-order-removal-tool-text'>Optius Order Removal Tool</div>
        
      <div className='optius-project-description'>A web app made for Lumen to optimize order disconnection and cancellation processes, reducing paperwork by 70%. </div>
      <div className='optius-project-technologies'>
       
        <div className='technologies-used'>Technologies used : </div>
        <div  className='technologies-list'>
        <ol>
        <li>Front end : React.js</li>
        <li>Back end : Spring boot</li>
        <li>Database : MySQL</li>
        <li>Others : GCP.</li>
        </ol>
        </div>
      </div>
  
      <div className='flow-title'>
       Project flow:
      </div>
      <img src={OORTFlow} alt='' className='oort-flow'/>
  
      </>
      // </div>
     )
     }

     {
      showDevopsInfo && (
        <>
        <div className='devops-project-title'> Project title : </div>
        <div className='devops-automation-text'>Devops automation</div>
        <div className='devops-automation-description'>A chatbot created with an intention to simplify and expedite the project deployment process for new users. </div>
        <div className='devops-automation-technologies'>
        <div className='devops-technologies-used'>Technologies used : </div>
        <div  className='technologies-list'>
        <ol>
        <li>Front end : React.js</li>
        <li>Back end : python(fast API)</li>
        <li>Model used : gemini pro</li>
        <li>Deployed service: GCP.</li>
        </ol>
        </div>
        </div>
        <div className='devops-automation-flow-title'>
       Project flow:
      </div>
      <img src={DevAutoFlow} alt='' className='devops-automation-flow'/>
        </>
      )
     }
     { showCopilotInfo && (
      <>
 <div className='copilot-project-title'> Project title : </div>
 <div className='copilot-text'>Co-pilot</div>
 <div className='copilot-description'>A chatbot made to provide insights about the financial information of several clients and also to commit and push code changes into github repositories. </div>
 <div className='copilot-technologies'>
        <div className='copilot-technologies-used'>Technologies used : </div>
        <div  className='technologies-list'>
        <ol>
        <li>Front end : React.js</li>
        <li>Back end : python(websockets)</li>
        <li>Model used : gemini pro, code bison, text bison</li>
        <li>Deployed service: GCP.</li>
        </ol>
        </div>
        </div>
        <div className='copilot-flow-title'>
       Project flow:
      </div>
      <img src={copilotFlow} alt='' className='copilot-flow'/>
      </>
     )

     }
     
</div>
 
     </div>
  )
}

export default OfficialProjects