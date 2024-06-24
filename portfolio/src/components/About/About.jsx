import React  from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About=()=>{

    return(
        <div id='about' className="about">
            <div className="about-title">
                <h1>
                    About me
                </h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an  FullStack Developer with experience over 6 Months. </p>
                        <p>My passion for fullStack development is not only reflected in my experience but also in the enthusiasm & dedication i bring to each project. </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr  style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr  style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr  style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>DataBase</p><hr  style={{width:"50%"}}/></div>
                    </div>

                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>
                        6+
                    </h1>
                    <p>Months of experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>
                        5+
                    </h1>
                    <a className="my-project" href="https://github.com/sangmesh-18/Porjects" target="_blank"><p>Projects Completed</p></a>
                </div>
                
            </div>

        </div>
    )}

    export default About;