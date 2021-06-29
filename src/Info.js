import React, {useEffect, useState} from "react"
import Background from"./Background";
import Resume from "./Resume"
import './resume.pdf'
import './info.css';

let aState = true
function click(){
  
  if (aState === true){
    aState = false
  }
    
  else (
    aState = true)
  
  console.log(aState)
}

function Info() {
    return (
      
      <div>
          <header>
            
            <h1>Blaine Love</h1>
         
              <a onClick={click}href="./resume.pdf">Resume</a>
             
              <a href="https://github.com/blainelove" class>Github</a>
              <a href="https://www.linkedin.com/in/blaine-love/">Linkedin</a>
              
           
              <a onclick={click} href="About">About</a>
           
          </header>
          <body>
            

          </body>
         
          
      </div>
      
    );
  }
export default Info 