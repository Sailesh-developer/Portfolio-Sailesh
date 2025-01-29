import React from 'react'
import '../stylesheets/OfficialProjects.css'
import { useState } from 'react';
import arrowBlack from '../assets/arrowBlack.png'
import { div } from 'framer-motion/client';

const OfficialProjects = () => {

  const [showOptiusInfo, setShowOptiusInfo] = useState(false);
  const [showDevopsInfo, setShowDevopsInfo] = useState(false);
  const [showCopilotInfo, setShowCopilotInfo] = useState(false);





  return (
    <div className='official-projects-background'>
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
      <div className='optius-project-title'> Project title : Optius Order Removal Tool</div>
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