import React from 'react'
import '../stylesheets/OfficialProjects.css'
import { useState } from 'react';

const OfficialProjects = () => {

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };


  return (
    <div className='official-projects-background'>
    <div className='off-title-text'>Official projects:</div>
    <div className="container">
      <div className={`triangle-card ${expanded ? 'expanded' : ''}`}>
        <button onClick={handleToggle} className="view-more-btn">
          View More
        </button>
      </div>
      {expanded && (
        <div className="content-panel">
          <h3>Expanded Content</h3>
          <p>This is the detailed content of the card.</p>
          <button onClick={handleToggle} className="close-btn">
            Close
          </button>
        </div>
      )}
    </div>
    </div>
  )
}

export default OfficialProjects