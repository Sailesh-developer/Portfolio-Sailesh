import React from 'react'
import '../stylesheets/OfficialProjects.css'
import { useState } from 'react';


const OfficialProjects = () => {

  const [expandedCard1, setExpanded1] = useState(false);
  const [expandedCard2, setExpanded2] = useState(false);

  const handleToggle1 = () => {
    setExpanded1(!expandedCard1);
    // setExpanded2(!expandedCard2);
  };

  const handleToggle2 = () => {
    setExpanded2(!expandedCard2);
    // setExpanded1(!expandedCard1)
  };



  return (
    <div className='official-projects-background'>
    <div className='off-title-text'>Official projects:</div>
    <div class="card-container">
  <div class="card">Optius Order removal tool UI</div>
  <div class="card">Devops Automation UI</div>
  <div class="card">Copilot UI</div>
</div>
<div className='slanted-div-projects'>
 
</div>
     
    </div>
  )
}

export default OfficialProjects