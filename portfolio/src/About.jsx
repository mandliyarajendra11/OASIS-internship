import React, { useState } from "react";
import profile from './raj2.jpg'
import { AboutInfo } from './AboutInfo';
import Services from "./Services";


export const About = () => {
    const [istrue,setTrue]=useState(true);
  return (
        <div className="grid">
        <img src={profile} alt="raju" className='background-2' />
        {
          istrue?<AboutInfo/>:<Services/> }
          <i className="uil uil-arrow-circle-right" style={{fontSize:50}} onClick={()=>istrue?setTrue(false):setTrue(true)}></i> 
          </div>
    
  )
}

