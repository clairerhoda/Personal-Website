import company_pic from './company_pic.jpg'
import profile from './profile.jpg'
import html5 from './html5.png'
import css from './css.png'
import javascript from './javascript.png'
import cplusplus from './c-plus-plus.png'
import dart from './dart.png'
import flutter from './flutter.png'
import github from './github.png'
import arcText2 from './troygram2.png'
import arcText from './troygram.png'
import arcText1 from './troygram1.png'
import profile1 from './profile1.png'
import background from './background.jpg'

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
  const [display, setDisplay] = useState('none');
  const [margin1, setMargin] = useState(10.95);
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
          setMargin(10.95)

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
      <ParallaxBanner
          className="background"
          layers={[
              {
                amount: 0.5,
              },
          ]}
          style={{
              height: '175px',
          }}
      >
          <div id="intro-box">
            <div id="opening">Claire Rhoda</div>
            <div id="opening1">Software Developer</div>
          </div>
      </ParallaxBanner>
      <div ref={info}></div>
      <ParallaxBanner
          className="background1"
          layers={[
              {
                image: background,
                amount: 0.5,
                
              },
          ]}
          style={{
              height: '600px',
          }}
      >
        <div id="about-me-box">
          <div className="profile-container">
            <img src={profile} id="profile-photo" alt="profile"/>
          </div>
          <div className="about-me-container">
              <div id="description1" >Hello, I'm Claire.</div>
              <div id="description2">I am a Software Developer and current intern at Apartment 304.</div>
              <br></br>
              <div id="about-me-description"><i class='fas fa-map-marker-alt'></i> &nbsp; Orange County, California</div>
              <div id="about-me-description">Front-end</div>
              <div id="about-me-description">App Developer</div>
              <div id="about-me-description">Website Developer</div>
              <div id="about-me-description">Cal State Fullerton Student</div>
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
          }}
      >
        <div id="about-me-box">
          <div className="profile-container">
            <img src={profile} id="profile-photo" alt="profile"/>
          </div>
          <div className="about-me-container">
              <div id="description1" >Hello, I'm Claire.</div>
              <div id="description2">I am a Software Developer and current intern at Apartment 304.</div>
              <br></br>
              <div id="about-me-description"><i class='fas fa-map-marker-alt'></i> &nbsp; Orange County, California</div>
              <div id="about-me-description">Front-end</div>
              <div id="about-me-description">App Developer</div>
              <div id="about-me-description">Website Developer</div>
              <div id="about-me-description">Cal State Fullerton Student</div>
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
          }}
      >
        <div id="company-info-box">
          <div className="logo-descrip-container">
            <div id="company-description">
              Since 2019, Apartment 304 has given me the oppurtunity to work under the guidance of experienced software engineers. 
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
        <ParallaxBanner
          className="divider"
          layers={[
              {
                amount: 0.5,
              },
          ]}
          style={{
              height: '6px',
          }}
      >
      </ParallaxBanner>
      <div ref={skills}></div>
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
          }}
      >
      <div className="skills-box">
          <div className="skills-title-container">
            <div id="skills-title">Languages</div>
          </div>
          <div className="img-row">
            <Parallax x={['-40%', '0%']}>
            <div><img id="code-img" src={html5} alt="html5"/>
            <div id="icon-titles">HTML</div>
            </div>
            </Parallax>
            <Parallax  x={['-20%', '0%']}>
            <div><img id="code-img" src={css} alt="css"/>
            <div id="icon-titles">CSS</div>
            </div>
            </Parallax>
            <Parallax x={['-5%', '0%']}>
            <div><img id="code-img" src={javascript} alt="javascript"/>
              <div id="icon-titles">JavaScript</div>
            </div>
            </Parallax>
            <Parallax x={['5%', '0%']}>
            <div><img id="code-img" src={cplusplus} alt="c plus plus"/>
              <div id="icon-titles">C++</div>
            </div>
            </Parallax>
            <Parallax x={['20%', '0%']}>
            <div><img id="code-img" src={flutter} alt="flutter"/>
              <div id="icon-titles">Flutter</div>
            </div>
            </Parallax>
            <Parallax x={['40%', '0%']}>
            <div><img id="code-img" src={dart} alt="dart "/>
              <div id="icon-titles">Dart</div>
            </div>  
            </Parallax>                
          </div>
          
          <div id="divider"></div>
          <div className="github-box">
            <a href="https://github.com/clairerhoda">
              <img id="arc-text" src={arcText} alt="arc text"/>
              <img id="arc-text1" src={arcText1} alt="arc text"/>
              <img id="github" src={github}  alt="github" />
            </a>
          </div>
      </div>
      </ParallaxBanner> 
      <ParallaxBanner
          className="background4a"
          layers={[
              {
                amount: 0.5,
              },
          ]}
          style={{
              height: 'auto',
              padding: '1rem 0 1rem 0',
          }}
      >
      <div className="skills-box">
          <div className="skills-title-container">
            <div id="skills-title">Languages</div>
          </div>
          <div className="img-row">
            <div><img id="code-img" src={html5} alt="html5"/>
            <div id="icon-titles">HTML</div>
            </div>
            <div><img id="code-img" src={css} alt="css"/>
            <div id="icon-titles">CSS</div>
            </div>
            <div><img id="code-img" src={javascript} alt="javascript"/>
              <div id="icon-titles">JavaScript</div>
            </div>
            <div><img id="code-img" src={cplusplus} alt="c plus plus"/>
              <div id="icon-titles">C++</div>
            </div>
            <div><img id="code-img" src={flutter} alt="flutter"/>
              <div id="icon-titles">Flutter</div>
            </div>
            <div><img id="code-img" src={dart} alt="dart "/>
              <div id="icon-titles">Dart</div>
            </div>  
          </div>
          <div id="divider"></div>
          <div className="github-box">
            <a href="https://github.com/clairerhoda">
              <img id="arc-text" src={arcText} alt="arc text"/>
              <img id="arc-text1" src={arcText1} alt="arc text"/>
              <img id="github" src={github}  alt="github" />
            </a>
          </div>
      </div>
      </ParallaxBanner> 
      <ParallaxBanner
          className="divider1"
          layers={[
              {
                amount: 0.5,
              },
          ]}
          style={{
              height: '6px',
          }}
      >
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
          }}
      >
              <div id="contact-me-box">
                <div className="contact-title-container">
                  <div id="contact-me-title">Contact Me</div>
                </div>
                <div id="contact-row">
                  <div className="email-contents">
                    <a href="mailto:clairehrhoda@gmail.com">
                      <button id="email-button" type="button"> 
                        <i class="fa fa-envelope" id="email-icon"></i>
                        &nbsp;&nbsp;Email
                      </button>
                    </a>
                    <div id="email-caption">clairehrhoda@gmail.com</div>
                  </div>
                  <div className="linkedin-contents">
                    <a style={{display:`flex`, flexDirection:`column`, alignItems: `center`, height: `5rem`, justifyContent: `space-between`}}href="https://www.linkedin.com/in/claire-rhoda-96aa1211a/">
                      <img id="linkedin" src={linkedin} alt="linkedin"/>
                      <div id="linkedin-caption">Linkedin Account</div>
                    </a>
                  </div>
                </div>
            </div>
      </ParallaxBanner> 
      <ParallaxBanner
          className="divider"
          layers={[
              {
                amount: 0.5,
              },
          ]}
          style={{
              height: '6px',
          }}
      >
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
          }}
      >
        <div className="rights-box">
              © Claire Rhoda. All rights reserved.
              </div>
      </ParallaxBanner> 
      </div>
    </ParallaxProvider>

  );
}

export default App;

