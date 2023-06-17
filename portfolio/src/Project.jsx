import React from "react";
import projectApi from "./projectApi";

const Project = () => {
    
     
   
  return (
    <div className="project">
       <h3 className="headline">my work</h3>
       <div className="fea">
         {
          projectApi.map((item,i)=>{
         return(   
        <div key={i} className="div bx-border">
        <figure className="fig">
        <img src={item.img} alt={"project"+i} />
        <figcaption className="caption" style={{backgroundColor: item.cat==="major"?"red":"black"}}>{item.cat}</figcaption>
        </figure>
        <h4>{item.headline}</h4>
        <p>{item.des}</p>
        <div className="flex">
        <button className="btn"><a href={item.url} target="_blank" rel="noreferrer"><i className="uil uil-github"></i>  github</a></button>
      { 
      item.yt? <button className="btn"><a href={item.yturl} target="_blank" rel="noreferrer" > deploy</a></button>
      :null}</div>
        </div>
          )})
        }
        </div>
      </div>
  );
};

export default Project;
