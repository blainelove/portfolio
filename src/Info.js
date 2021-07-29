import React, {useState} from "react";
import './info.css';
import About from "./About";
import Resume from "./Resume"


function Info() {
  const [displayAbout, setDisplayAbout] = useState(false)

  function click(){
    setDisplayAbout(!displayAbout)
      }

    return (
      
      <div>
          <header>
            
            <h1>Blaine Love</h1>
           
              
              <a href="https://github.com/blainelove" target="_blank">Github</a>
              <a href="https://www.linkedin.com/in/blaine-love/" target="_blank">Linkedin</a>
              
          
    
     
        
    
      
         
              <button onClick={click}>{displayAbout} About / Resume</button>
                {displayAbout ? (
                <Resume></Resume>
                    ) : (
                <About> </About>
                  )}
          </header>
          
      </div>
            
        
    )     
};

export default Info
