import React from 'react'
import '../stylesheets/OfficialProjects.css'
import { useState } from 'react';
import arrowBlack from '../assets/arrowBlack.png'

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
  <div class="card">Optius Order removal tool UI<button className='button-1'><img  className='arrow-1'/></button></div>
  <div class="card">Devops Automation UI<button className='button-2'><img className='arrow-2'/></button></div>
  <div class="card">Copilot UI<button className='button-3'><img className='arrow-3'/></button></div>
</div>
<div className='slanted-div-projects'>
 
</div>
     
    </div>
  )
}

export default OfficialProjects