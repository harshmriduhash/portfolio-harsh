import "./AboutContentStyle.css";
import React from "react";
import dsc from "../assets/dsc_logo.png";

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>About Me</h1>
        <p>
           Hi Everyone, I am Harsh Mriduhash from Delhi NCR, India. </p>
<p> I am a Graduated from Techno India University, & I have 5 years of experience.</p>

<p>Apart from coding, some other activities that I love to do!</p>
<ul typeof="dots">
  <li>Watching Podcast </li>
  <li>Writing Tech Blogs</li>
  <li>Travelling</li>
</ul>

 
 
       
        <h3>LIFE PHILOSOPHY</h3>
        <button>
          <span className="translate">Aut inveniam viam aut faciam</span>
          <span className="toeng"> I shall either find a way or make one</span>
        </button>
        <div className="left-img">
          <img
            src={dsc}
            alt="gdsc"
            width="30%"
            height="50%"
          />
          <h3>Google DSC Member</h3>
        </div>
      </div>
      {/* <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src="https://images.unsplash.com/photo-1633366446553-8adb7236f4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt="about img "
              width="100%"
              height="80%"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Aboutcontent;
