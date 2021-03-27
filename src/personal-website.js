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
import element1 from './element1.jpeg'

import React, { useEffect, useState, keyPress} from 'react';
import './personal-website.css';

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
  var name = ['c','l','a','i','r','e']
  const scrollDownArrow = () => {
    company.current.scrollIntoView({
      behavior: "smooth",
    });
  }
 
  addEvent(document, "keypress", function (e) {
    e = e || window.event;
    if (e.key == name[0]) {
      name.shift();
    }
    else{
      name = name = ['c','l','a','i','r','e']
    }
    if (name.length === 0){
      console.log("hit")
      var x = document.getElementById("element1");
      x.style.display = "block";
      x.style.animation = "fadeIn ease 10s";

    }
    console.log(name)
  });

function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, callback);
    } else {
        element["on" + eventName] = callback;
    }
}
  
  const openNavButtons = () => {
    var x = document.getElementById("drop-down");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.animation = "slideInRight ease-in 0.4s";
    } else {
      x.style.animation= "slideOutRight ease-in 0.4s";
      setTimeout(() => {  x.style.display = "none"; }, 400);
    }
  }

  const [height, setHeight] = useState(7.5);
  const [transform, setFontSize] = useState(1.9);
  const [display, setDisplay] = useState('content');
  useEffect( () => { 
      if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        console.log(currentScrollPos)
        if (currentScrollPos > 40 && currentScrollPos < maxScroll) {
          setHeight(4.5);
          setFontSize(1.5)
          setDisplay('none')
        } 
        if (currentScrollPos <= 40 ) {
          setHeight(7.5)
          setFontSize(1.9)
        }
      }
    }
  });
  
  return (
    <div className="App">
      <div id="element1" style = {{display: `${'none'}`}}><img id="element2" src={element1} /></div>
      <header className="App-header" style = {{height: `${height}rem`}}>
        <div id="spacer1" style = {{height: `${height}rem`}}></div>
        <div className="title-container">
          <div id="title" style = {{transform: `scale(${transform})`}}>| Claire Rhoda</div>
          <div id="subtitle" style = {{transform: `scale(${transform/1.8})`}}>Software Developer</div>
        </div>
        <button id="drop-down-btn" onClick={openNavButtons}>
          <div id="btn-line"></div>
          <div id="btn-line"></div>
          <div id="btn-line"></div>
        </button>
        <div id="drop-down" style = {{display: `${'none'}`}}> 
          <button onClick={executeScroll1} id="about-me-nav" className="btn-nav" type="button">About Me</button>
          <button onClick={executeScroll2} style={{marginTop: `3px`,marginBottom: `0px`}}id="skills-nav" className="btn-nav" type="button">Skills</button>
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
              <div id="white-slash">///////////////////////////////</div>
              <img src={profile} className="profile-photo" alt="profile photo"/>
            </div>
            <div className="script">
              <div id="opening" >Hello,</div>
              <div id="line-decoration"></div>
              <div id="opening1">I'm Claire Rhoda.</div>
              <div id="opening2">I am a Software Developer and current intern</div>
              <div id="opening2">at Apartment 304.</div>
              <br></br>
              <div id="about-me-description"><i class='fas fa-map-marker-alt'></i> &nbsp; Orange County, California</div>
              <div id="about-me-description">Front-end</div>
              <div id="about-me-description">App Devloper</div>
              <div id="about-me-description">Website Devloper</div>
              <div id="about-me-description">Cal State Fullerton Student</div>
            </div>
            <div ref={company}></div>
          </div>
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
                <img src={company_pic} className="work-photo" alt="team photo"/>
              </div>
          </div>
          </div>
          <div className="center">
            <div ref={skills} style={{marginBottom: '8em'}}></div>
            <div id="skills">
            <div className="skills-box">
                <div className="skills-title-container">
                  <div id="white-slash1">//////////////////////</div>
                  <div className="skills-title">Languages</div>
                </div>
                <div className="img-row">
                  <div><img id="code-img" src={html5} alt="html5 photo"/>
                  <div id="icon-titles">HTML</div>
                  </div>
                  <div><img id="code-img" src={css} alt="css photo"/>
                  <div id="icon-titles">CSS</div>
                  </div>
                  <div><img id="code-img" src={javascript} alt="javascript photo"/>
                    <div id="icon-titles">JavaScript</div>
                  </div>
                  <div><img id="code-img" src={cplusplus} alt="c plus plus photo"/>
                    <div id="icon-titles">C++</div>
                  </div>
                  <div><img id="code-img" src={flutter} alt="flutter photo"/>
                    <div id="icon-titles">Flutter</div>
                  </div>
                  <div><img id="code-img" src={dart} alt="dart photo"/>
                    <div id="icon-titles">Dart</div>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
          <div className="center">
              <div className="github-box">
                <div id="decoration4">||||||||||||||||||||||||||||||||||||||||||||</div>
                <a href="https://github.com/clairerhoda">
                <img id="arc-text" src={arcText}/>
                <img id="arc-text1" src={arcText1}/>
                  <img id="github" src={github}  alt="github photo" />
                </a>
              </div>
          </div>
          <div className="center">
            <div ref={contact} id="contact">
              <div className="contact-me-box">
                <div className="contact-me-title">Contact Me</div>
                  <a href="mailto:clairehrhoda@gmail.com">
                    <button id="email-button" type="button"> 
                      <i class="fa fa-envelope" id="email-icon"></i>
                      Email
                    </button>
                  </a>
                  <div id="email-caption">clairehrhoda@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="center">
              <div className="rights-box">
              © Claire Rhoda. All rights reserved.
              </div>
          </div>
    </div>
  );
}

export default App;

