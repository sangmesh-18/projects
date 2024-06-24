import React from "react";
import "./Hero.css"
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import pdf from '../../resume.pdf'
const Hero=()=>{
   
    return(
        
        <div id='home' className="hero">
        <img src={profile_img} alt="" />
        <h1> <span>I'm Sangmesh Garibe </span> FullStack developer !</h1>
        <p> I am a fullsatck developer from India.</p>
        <div className="hero-action">
            <div className="hero-connect" ><AnchorLink className="anchor-link" offset={50} href="#contact"> Connect With Me</AnchorLink></div>
            <div className="hero-resume"> <a   href={pdf} target="_blank" >My Resume</a></div>
        </div>

        </div>
    )
}
export default Hero
