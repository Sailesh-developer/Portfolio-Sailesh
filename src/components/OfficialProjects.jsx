import React from 'react'
import '../stylesheets/OfficialProjects.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const OfficialProjects = () => {

  const [showOptiusInfo, setShowOptiusInfo] = useState(false);
  const [showDevopsInfo, setShowDevopsInfo] = useState(false);
  const [showCopilotInfo, setShowCopilotInfo] = useState(false);


  const navigate = useNavigate(); 

  const navigateToHome = () => {
    navigate("/")
  }


  return (
    <div className='official-projects-background'>
       <button className='home-button' data-tooltip-id="tooltip" data-tooltip-content="Home" onClick={navigateToHome}><img className='home-icon' alt=''/></button>
       <Tooltip place="top" id="tooltip" />
        <button className='skills-button' data-tooltip-id="tooltip" data-tooltip-content="Skills"><img className='skills-icon' alt=''/></button>
        <Tooltip place="top" id="tooltip" />
           <button className='aboutme-button-official' data-tooltip-id="tooltip" data-tooltip-content="About me"><img className='aboutme-icon-official' alt=''/></button>
          <Tooltip place="top" id="tooltip" />
    <div className='off-title-text'>Official projects:</div>
    <div class="card-container">
  <div class="card" onMouseEnter={() => setShowOptiusInfo(true)}>Optius Order removal tool</div>
  <div class="card" onMouseEnter={() => setShowDevopsInfo(true)}>Devops Automation</div>
  <div class="card" onMouseEnter={() => setShowCopilotInfo(true)}>Copilot</div>
</div>
<div className='slanted-div-projects'>
 
{showOptiusInfo && (
  //  <div className='project-details-card'>
      <>
      <div className='optius-project-title'> Project title : </div>
      
        <div className='optius-order-removal-tool-text'>Optius Order Removal Tool</div>
        
      <div className='optius-project-description'>A web app made for Lumen to optimize order disconnection and cancellation processes, reducing paperwork by 70%. </div>
      <div className='optius-project-technologies'>
       
        <div className='technologies-used'>Technologies used : </div>
        <ol className='technologies-list'>
        <li>Front end : React.js</li>
        <li>Back end : Spring boot</li>
        <li>Database : MySQL</li>
        <li>Others : GCP.</li>
        </ol>
      </div>
      
      </>
      // </div>
     )
     }
     
</div>
 
     </div>
  )
}

export default OfficialProjects