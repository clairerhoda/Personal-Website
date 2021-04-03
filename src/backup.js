import company_pic from './company_pic.jpg'
import profile from './profile.jpg'
import html5 from './html5.png'
import css from './css.png'
import javascript from './javascript.png'
import cplusplus from './c-plus-plus.png'
import dart from './dart.png'
import flutter from './flutter.png'
import github from './github.png'
import arcText from './troygram.png'
import arcText1 from './troygram1.png'
import profile1 from './profile1.png'
import linkedin from'./linkedin.png'
import { ParallaxProvider, Parallax, ParallaxBanner} from 'react-scroll-parallax';

import React, { useEffect, useState} from 'react';
import './personal-website.css';
import {elementGet, addEvent} from './personal-website-animate.js';

function App() {
  const info = useState(null)
  const company = useState(null)
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
  const scrollDownArrow = () => {
    company.current.scrollIntoView({
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

  const [height, setHeight] = useState(7.5);
  const [margin1, setMargin] = useState(7.5);
  const [transform, setSize] = useState(1);
  const [display, setDisplay] = useState('content');
  useEffect( () => { 
      if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        if (currentScrollPos > 40 && currentScrollPos < maxScroll) {
          setHeight(4.5);
          setMargin(4.5)
          setSize(0.75)
          setDisplay('none')
        } 
        if (currentScrollPos <= 40 ) {
          setHeight(7.5)
          setMargin(7.5)
          setSize(1)
        }
      }
    }
  });
  
  return (
    <ParallaxProvider>

    <div className="App">
      <div id="profile1" style = {{display: `${'none'}`}}><img id="profile2" src={profile1} alt="profile1"/></div>
      <header className="App-header" style = {{height: `${height}rem`}}>
        <div id="spacer1" style = {{height: `${height}rem`}}></div>
        <div className="title-container" style = {{transform: `scale(${transform})`}}>
          <div id="title">Claire Rhoda</div>
          <div id="subtitle">Software Developer</div>
        </div>
        <button id="drop-down-btn" style = {{transform: `scale(${transform})`}} onClick={openNavButtons}>
          <div id="btn-line"></div>
          <div id="btn-line"></div>
          <div id="btn-line"></div>
        </button>
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
        <div id="spacer1" style = {{height: `${height*3}rem`}}></div>
      </header> 
      <div className="center">
      <div onClick={scrollDownArrow} style ={{display: `${display}`}} className="arrow">^</div>
      <div ref={info} style={{marginBottom: '10rem'}}></div>
          <div className="info-box">
            <div className="profile-container">
              <div id="decoration"></div>
              <img src={profile} className="profile-photo" alt="profile"/>
            </div>
            <div className="script">
              <div id="opening" >Hello,</div>
              <div id="opening1">I'm Claire Rhoda.</div>
              <div id="opening2">I am a Software Developer and current intern at Apartment 304.</div>
              <br></br>
              <div id="about-me-description"><i class='fas fa-map-marker-alt'></i> &nbsp; Orange County, California</div>
              <div id="about-me-description">Front-end</div>
              <div id="about-me-description">App Devloper</div>
              <div id="about-me-description">Website Devloper</div>
              <div id="about-me-description">Cal State Fullerton Student</div>
            </div>
            <div ref={company}></div>
          </div>
          <ParallaxBanner
                className="banner"
                layers={[
                    {
                        image: 'https://images.unsplash.com/photo-1584476037416-2c251d2b0bda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
                        amount: 0.5,
                    },
                ]}
                style={{
                    height: '150px',
                    width: '60%',
                    opacity: '20%',
                }}
              >
]            </ParallaxBanner>
          <div id="company-info">
            <div id="decoration2"></div>
            <div id="decoration1"></div>
              <div className="logo-descrip-container">
                <div id="company-description">
                  Since 2019, Apartment 304 has given me the oppurtunity to work under the guidance of experienced software engineers. 
                </div>
                <div id="logo-container">
                  <a href="https://www.apartment304.com/">
                    <img id="work-logo" src="https://uploads-ssl.webflow.com/5e0524b00aa52925697c1521/5e0524b00aa529d3c47c1587_apt204_logo_footer.png" alt="work logo" />
                  </a>
                </div>
              </div>
              <div id="img-pic-container">
                <img src={company_pic} className="work-photo" alt="team"/>
              </div>
          </div>
          </div>
          <div className="center">
            <div ref={skills} style={{marginTop: '4rem'}}></div>
            <div id="skills">
            <div className="skills-box">
                <div className="skills-title-container">
                  <div id="white-slash1">//////////////////////</div>
                  <div className="skills-title">Languages</div>
                </div>
                <div className="img-row">
                  <Parallax x={['-50%', '0%']}>
                  <div><img id="code-img" src={html5} alt="html5"/>
                  <div id="icon-titles">HTML</div>
                  </div>
                  </Parallax>
                  <Parallax  x={['-30%', '0%']}>
                  <div><img id="code-img" src={css} alt="css"/>
                  <div id="icon-titles">CSS</div>
                  </div>
                  </Parallax>
                  <Parallax x={['-10%', '0%']}>
                  <div><img id="code-img" src={javascript} alt="javascript"/>
                    <div id="icon-titles">JavaScript</div>
                  </div>
                  </Parallax>
                  <Parallax x={['10%', '0%']}>
                  <div><img id="code-img" src={cplusplus} alt="c plus plus"/>
                    <div id="icon-titles">C++</div>
                  </div>
                  </Parallax>
                  <Parallax x={['30%', '0%']}>
                  <div><img id="code-img" src={flutter} alt="flutter"/>
                    <div id="icon-titles">Flutter</div>
                  </div>
                  </Parallax>
                  <Parallax x={['50%', '0%']}>
                  <div><img id="code-img" src={dart} alt="dart "/>
                    <div id="icon-titles">Dart</div>
                  </div>  
                  </Parallax>                
                </div>
              </div>
            </div>
          </div>
          <div className="center">
              <div className="github-box">
                <div id="decoration3">||||||||||||||||||||||||||||||||||||||||||||</div>
                <a href="https://github.com/clairerhoda">
                <img id="arc-text" src={arcText} alt="arc text"/>
                <img id="arc-text1" src={arcText1} alt="arc text"/>
                  <img id="github" src={github}  alt="github" />
                </a>
              </div>
          </div>
          {/* <div className="center">
            <div className="resume">
                <i class="far fa-sticky-note"></i>
                &nbsp; Resume
            </div>

          </div> */}
          <div className="center">
            <div ref={contact} id="contact">
              <div className="contact-me-box">
                <div className="contact-me-title">Contact Me</div>
                <div id="row">
                  <div className="email-contents">
                    <a href="mailto:clairehrhoda@gmail.com">
                      <button id="email-button" type="button"> 
                        <i class="fa fa-envelope" id="email-icon"></i>
                        Email
                      </button>
                    </a>
                  <div id="email-caption">clairehrhoda@gmail.com</div>
                </div>
                <div style={{width: `10%`}}></div>
                <div className="linkedin-contents">
                <a style={{display:`flex`, flexDirection:`column`, alignItems: `center`}}href="https://www.linkedin.com/in/claire-rhoda-96aa1211a/">
                  <img id="linkedin" src={linkedin} alt="linkedin"/>
                  <div id="email-caption">Linkedin Account</div>
                </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center">
              <div className="rights-box">
              © Claire Rhoda. All rights reserved.
              </div>
          </div>
    </div>
    </ParallaxProvider>

  );
}

export default App;

