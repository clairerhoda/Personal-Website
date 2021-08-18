import company_pic from './images/company_pic.jpg'
import location_icon from './images/location_icon.png'
import email_icon from './images/email_icon.png'
import profile from './images/profile.jpg'
import project1 from'./images/project1.png'
import project2a from'./images/project2a.png'
import project2b from'./images/project2b.png'
import github from './images/github.png'
import arcText2 from './images/troygram2.png'
import arcText from './images/troygram.png'
import arcText1 from './images/troygram1.png'
import background from './images/background.jpg'
import linkedin from'./images/linkedin.png'

import { ParallaxProvider, ParallaxBanner} from 'react-scroll-parallax';
import React, { useEffect, useState} from 'react';
import './personal-website.css';
import {elementGet, addEvent} from './personal-website-animate.js';

function App() {
  const info = useState(null)
  const skills = useState(null)
  const contact = useState(null)
  const executeScroll1 = () => {
    info.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  const executeScroll2 = () => {
    skills.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  const executeScroll3 = () => {
    contact.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  var element = elementGet();

  addEvent(document, "keypress", function (e) {
    e = e || window.event;
    if (e.key === element[0]) {
      element.shift();
    }
    else{
      element = elementGet()
    }
    if (element.length === 0){
      var x = document.getElementById("profile1");
      x.style.display = "block";
      x.style.animation = "fadeIn ease 15s";
    }
  });

  const openNavButtons = () => {
    var x = document.getElementById("drop-down");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.animation = "slideInLeft1 ease 0.4s";
    } else {
      x.style.animation= "slideOutLeft ease 0.4s";
      setTimeout(() => {x.style.display = "none";}, 400);
    }
  }
  const [display, setDisplay] = useState('none');
  const [margin1, setMargin] = useState(8.7);
  useEffect( () => { 
      if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        if (currentScrollPos > 120 && currentScrollPos < maxScroll) {
          setDisplay('flex')
          setMargin(3.1)
        } 
        if (currentScrollPos <= 120 ) {
          setDisplay('none')
          setMargin(8.7)
        }
      }
    }
  });
  
  return (
    <ParallaxProvider>
      <div className="App">
      <header className="App-header">
        <button id="drop-down-btn" onClick={openNavButtons}>
          <div id="btn-line"></div>
          <div id="btn-line"></div>
          <div id="btn-line"></div>
        </button>
        <div id="name-container">
          <div style={{display: `${display}`}} id="name">Claire Rhoda</div>
          </div>
        <div id="drop-down" style = {{display: `${'none'}`, marginTop: `${margin1}rem`}}> 
          <button onClick={executeScroll1} id="about-me-nav" className="btn-nav" type="button">About Me</button>
          <button onClick={executeScroll2} id="skills-nav" className="btn-nav" type="button">Skills</button>
          <button onClick={executeScroll3} style={{borderBottom: `none`}}id="contact-me-nav" className="btn-nav" type="button">Contact Me</button>
        </div>
        <div className="button-nav" >
          <button onClick={executeScroll1} id="about-me-nav" className="btn-nav" type="button">About Me</button>
          <button onClick={executeScroll2} id="skills-nav" className="btn-nav" type="button">Skills</button>
          <button onClick={executeScroll3} id="contact-me-nav" className="btn-nav" type="button">Contact Me</button>
        </div>
      </header> 
      <div id="intro-box">
        <div id="opening">Claire Rhoda</div>
        <div id="opening1">Software Developer</div>
      </div>
      <div ref={info}></div>
      <ParallaxBanner
          className="background1"
          layers={[
              {
                image: background,
                amount: 1,
              },
          ]}
          style={{
              height: '550px',
          }}>
        <div id="about-me-box">
          <div className="profile-container">
            <img src={profile} id="profile-photo" alt="profile"/>
          </div>
          <div className="about-me-container">
              <div id="description1" >Hello, I'm a Software Developer and current intern at Apartment 304.</div>
              <br></br>
              <br></br>
              <div id="about-me-description">Mobile Applications Developer</div>
              <div id="about-me-description">Website Developer</div>
              <br></br>
              <div id="about-me-description"><img src={location_icon} id="location" alt="location icon"/> Orange County, California</div>
              <div id="about-me-description">California State University Student</div>

          </div>
        </div>
      </ParallaxBanner>
      <ParallaxBanner
          className="background2"
          layers={[
              {
                image: background,
                amount: 0.5,
              },
          ]}
          style={{
              height: 'auto',
              padding: '4rem 0 4rem 0',
          }}>
        <div id="about-me-box">
          <div className="profile-container">
            <img src={profile} id="profile-photo" alt="profile"/>
          </div>
          <div className="about-me-container">
          <div id="description1" >Hello, I'm a Software Developer and current intern at Apartment 304.</div>
              <br></br>
              <br></br>
              <div id="about-me-description">Mobile Applications Developer</div>
              <div id="about-me-description">Website Developer</div>
              <br></br>
              <div id="about-me-description"><img src={location_icon} id="location" alt="location icon"/>Orange County, California</div>
              <div id="about-me-description">California State University Student</div>

          </div>
        </div>
      </ParallaxBanner>
      <ParallaxBanner
          className="background3"
          layers={[
              {
                amount: 0.5,
              },
          ]}
          style={{
              height: 'auto',
              padding: '2rem 0 3rem 0',
          }}>
        <div id="company-info-box">
          <div className="logo-descrip-container">
            <div id="company-description">
              Since 2019, Apartment 304 has given me the opportunity to work under the guidance of experienced software engineers. 
            </div>
            <div className="logo-container">
              <a href="https://www.apartment304.com/">
              <img id="arc-text2" src={arcText2} alt="click to learn more"/>
                <img id="work-logo" src="https://uploads-ssl.webflow.com/5e0524b00aa52925697c1521/5e0524b00aa529d3c47c1587_apt204_logo_footer.png" alt="work logo" />
              </a>
            </div>
          </div>
          <div className="img-pic-container">
            <img src={company_pic} className="work-photo" alt="team"/>
          </div>
        </div>   
      </ParallaxBanner> 
      <div ref={skills}></div>
      <ParallaxBanner
          className="background3a"
          layers={[
              {
                amount: 0.5,
              },
          ]}
          style={{
              height: 'auto',
              padding: '2rem 0 3rem 0',
          }}>
        <div id="skills-box">
          <div className="skills-title-container">
            <div id="skills-title">PROJECTS</div>
          </div>
          <div className="card-box">
            <div id="card">
              <div id="card-contents">
                <div id="project-title">PORTFOLIO WEBSITE</div>
                <img id="project1" src={project1} alt="projectJacquelineWebsite"/>
                <div id="row-tags">
                  <div id="lang-tag">HTML</div>
                  <div id="lang-tag">|</div>
                  <div id="lang-tag">CSS</div>
                  <div id="lang-tag">|</div>
                  <div id="lang-tag">JavaScript</div>
                  <div id="lang-tag">|</div>
                  <div id="lang-tag">ReactJS</div>
                </div>
              </div>
            </div>
            <div id="card">
              <div id="card-contents">
              <div id="project-title">TEXTRSVP MOBILE APPLICATION</div>
                <div id="row">
                  <img id="project2" src={project2a} alt="projectTEXTRSVP"/>
                  <img id="project2" src={project2b} alt="projectTEXTRSVP"/>
                </div>
                <div id="row-tags">
                  <div id="lang-tag">Flutter</div>
                  <div id="lang-tag">|</div>
                  <div id="lang-tag">Dart</div>
                  <div id="lang-tag">|</div>
                  <div id="lang-tag">Golang</div>
                  <div id="lang-tag">|</div>
                  <div id="lang-tag">PostgreSQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </ParallaxBanner> 
      <ParallaxBanner
          className="background4"
          layers={[
              {
                amount: 0.5,
              },
          ]}
          style={{
              height: 'auto',
              padding: '2rem 0 2rem 0',
          }}>
      <div className="skills-box">
          <div className="skills-title-container">
            <div id="skills-title">SKILLS</div>
          </div>
          <div className="img-row">
            <div id="code-tab">HTML</div>
            <div id="code-tab">CSS</div>
            <div id="code-tab">JavaScript</div>
            <div id="code-tab">C++</div>
            <div id="code-tab">Dart</div>
            <div id="code-tab">Flutter</div>
            <div id="code-tab">ReactJS</div>
            <div id="code-tab">PostgreSQL</div>
            <div id="code-tab">Golang</div>
            <div id="code-tab">Python</div>
          </div>
          <div className="github-box">
            <a href="https://github.com/clairerhoda">
              <img id="arc-text" src={arcText} alt="arc text"/>
              <img id="arc-text1" src={arcText1} alt="arc text"/>
              <img id="github" src={github}  alt="github" />
            </a>
          </div>
      </div>
      </ParallaxBanner> 
      <div ref={contact}></div>
      <ParallaxBanner
          className="background5"
          layers={[
              {
                amount: 0.5,
              },
          ]}
          style={{
              height: 'auto',
              padding: '1rem 0 1rem 0'
          }}>
              <div id="contact-me-box">
                <div className="contact-title-container">
                  <div id="contact-me-title">CONTACT ME</div>
                </div>
                <div id="contact-row">
                  <div className="email-contents">
                    <a href="mailto:claire@apt304.io">
                      <button id="email-button" type="button"> 
                      <img src={email_icon} id="email-icon" alt="email icon"/>
                       email
                      </button>
                    </a>
                    <div id="email-caption">claire@apt304.io</div>
                  </div>
                  <div className="linkedin-contents">
                    <a style={{display:`flex`, flexDirection:`column`, alignItems: `center`, height: `5rem`, justifyContent: `space-between`}}href="https://www.linkedin.com/in/claire-rhoda-96aa1211a/">
                      <img id="linkedin" src={linkedin} alt="linkedin"/>
                      <div id="linkedin-caption">Linkedin Profile</div>
                    </a>
                  </div>
                </div>
            </div>
      </ParallaxBanner> 
      <ParallaxBanner
          className="background6"
          layers={[
              {
                amount: 0.5,
              },
          ]}
          style={{
              height: '50px',
          }}>
        <div className="rights-box">
              © Claire Rhoda. All rights reserved.
              </div>
      </ParallaxBanner> 
      </div>
    </ParallaxProvider>
  );
}

export default App;

