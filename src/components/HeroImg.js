import "./HeroImgStyle.css"
import Typewriter from "typewriter-effect";
import Type from "./Type"
import React from 'react'
import {Link} from 'react-router-dom'
import cv from '../assets/Vidushi Gandhi CV.pdf'

const Heroimg = () => {
  return (
    <div className="hero1-img">
       
       <div className="heading">
       <p >
                Hi There!👋🏻 I'M
        </p>
       <h1> <strong > Harsh Mriduhash</strong></h1>
         <h3 >
               I'm a <Type />
              </h3>
      
       <a href={cv} className="btn">Download CV</a>
       </div>
       
    </div>
  )
}

export default Heroimg