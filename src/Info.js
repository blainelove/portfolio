import React, {useEffect, useState} from "react"
import Background from"./Background"
import './info.css';
function Info() {
    return (
      <div>
          <header>
            
            <h1>Blaine Love's Portfolio</h1>
         
              <button onclick="location.href= 'https://github.com/blainelove';">This is a button for resume</button>
           
              <button>Github</button>
           
              <button>About</button>
           
          </header>
         
          
      </div>
    );
  }
export default Info 