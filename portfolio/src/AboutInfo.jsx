import React from 'react'
import './component.css'
import './App.css';
import resume from './rajendra.pdf'
export const AboutInfo = () => {
  return (
    <div className="a" style={{width:"50%"}}>
        <div className='intro'>
        <h2>About me</h2>
        <p>my introduction</p></div>
       <div className='aa'>
       <div className="bx-border"><i className="uil uil-brain "></i><h5>experience</h5><p>fresher</p></div>
       <div className="bx-border"><i className="uil uil-presentation-play "></i><h5>projects</h5><p>15+projects</p></div>
       <div className="bx-border"><i className="uil uil-database"></i><h5>DSA</h5><p>700+problem solved</p></div></div>
       <p className='aboutME'>Frontend Web Developer with expertise in HTML, CSS, JavaScript, and ReactJS,
        I have developed a strong foundation in creating responsive and dynamic web applications. 
My proficiency in data structures and algorithms has enabled me to solve over 300 problems on LeetCode and 350 on GeeksforGeeks.  </p>
       <button className='btn'><a download href={resume}>download resume <i className="uil uil-file-download"></i></a></button>
       </div>
  )
}
