import React from 'react'
import './Resume.css';
import './resume.pdf'; 

const resume = () => {
    return (
        <div>
            <object data="./resume.pdf" type="application/pdf" width="800" height="400"></object>
        </div>
    )
}

export default resume
