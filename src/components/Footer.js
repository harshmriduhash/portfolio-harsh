import './FooterStyle.css'
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaYoutube,FaLinkedin,FaInstagram,FaHeart, FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-container">
        <div className="left">
        <h3 style={{color:"#fff"}}>
            Have a Question?
        </h3>
            <div className="location">
             <FaHome size={20} style={{color:'#fff',margin:'2rem'}}/>
            <div>
                <p>NOIDA,India</p>
            </div>
            </div>
            <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:'#fff',margin:'2rem'}}/>
             Harshsahay2709@gmail.com
                </h4>
            
            </div>
        </div>
        
        <div className="right">
        <h3 style={{color:"#fff"}}>
            Reach me out here
        </h3>
        <p>Feel free to ping me for volunteering, discussing your ideas or grabbing a cup of coffee.</p>
        <div className="social">

       <a href="https://github.com/VGandhi27"><FaGithub size={30} style={{color:'#fff',margin:'2rem'}}/></a> 
       <a href="https://www.linkedin.com/in/vidushi-gandhi27/"><FaLinkedin size={30} style={{color:'#fff',margin:'2rem'}}/></a>

        </div>
        </div>
        
     </div>
     <center style={{color:"#fff" }}>
          <h2 className='foot'>Made with <FaHeart size={25} style={{color:'red',margin:'0rem'}} className="heart"/> Harsh Mriduhash</h2>  
        </center> 
    </div>
  )
}

export default Footer