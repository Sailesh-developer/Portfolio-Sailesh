import React from 'react'
import '../stylesheets/OfficialProjects.css'
import { useState } from 'react';
import arrowBlack from '../assets/arrowBlack.png'

const OfficialProjects = () => {

  const [showOptiusInfo, setShowOptiusInfo] = useState(false);
  const [showDevopsInfo, setShowDevopsInfo] = useState(false);
  const [showCopilotInfo, setShowCopilotInfo] = useState(false);

  const handleShowOptiusInfo = () => {
    setShowOptiusInfo(!showOptiusInfo);
  };

  const handleShowDevopsInfo = () => {
    setShowDevopsInfo(!showDevopsInfo);
  };

  const handleShowCopilotInfo = () => {
    setShowCopilotInfo(!showCopilotInfo);
  }



  return (
    <div className='official-projects-background'>
    <div className='off-title-text'>Official projects:</div>
    <div class="card-container">
  <div class="card">Optius Order removal tool<button className='button-1' onClick={handleShowOptiusInfo}><img  className='arrow-1'/></button></div>
  <div class="card">Devops Automation<button className='button-2' onClick={handleShowDevopsInfo}><img className='arrow-2'/></button></div>
  <div class="card">Copilot<button className='button-3'onClick={handleShowCopilotInfo}><img className='arrow-3'/></button></div>
</div>
<div className='slanted-div-projects'>
 
</div>
     {showOptiusInfo && (
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
     )
     }
    </div>
  )
}

export default OfficialProjects