import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react";

//Main body application, components can be found in comps.js.
//Elements are stylized by a mixture of Tailwind and Vanilla CSS (whichever is circumstantially easier).

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projRef = useRef(null);

  const clickScroll = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const clickScroll2 = () => {
    skillRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const clickScroll3 = () => {
    projRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  {/* Animation initializer for scrolling animations using AOS library */}

  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);

  return (
    <body className="App flex flex-col">
      <nav className="flex w-full h-16">
        {/* Navigation Bar Content */}
        <h1 className="my-auto w-24 font-thin text-center text-white sm:text-xl 2xl:text-3xl"><span className="font-normal text-white">DFB</span>Dev</h1>
        <ul className="navOpts flex justify-center justify-between items-center max-w-xlg w-3/5 ml-auto mr-5 font-thin text-white sm:text-xl 2xl:text-3xl">
          <li className="opt" onClick={clickScroll}>About me</li>
          <li className="opt" onClick={clickScroll2}>Skills</li>
          <li className="opt" onClick={clickScroll3}>Projects</li>
          <li className="opt">Contact</li>
        </ul>
      </nav>
      <section className="section1 flex w-screen">
        {/* Introduction Section */}
        <figure className="flex w-3/4"><img className="personalImg mt-auto mx-auto" src={require("./Images/Personal.png")}/></figure>
        <article className="flex w-3/4 justify-center items-center flex-col">
          <p className="introText">
            <span className="font-thin">Hello! My name is...</span>
            Donathan Brown.
            <span className="font-thin">I also go by DFBDev or DemDB.</span>
            I'm a Front-end Developer!
          </p>
          <ul className="persLinks flex w-3/4 h-1/4 justify-center items-center justify-between" ref={skillRef}>
            <li className="indvLinks il1"><a href="https://www.linkedin.com/in/donathan-brown-929255248/" target="_blank"><img src={require("./Images/2329259_linkedin_linkedin logo_logo_icon.png")}></img></a></li>
            <li className="indvLinks il2"><a href="https://github.com/DFBDev" target="_blank"><img className="w-8/12 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img></a></li>
            <li className="indvLinks il3"><a><img className="w-1/2 m-auto" src={require("./Images/resume-and-cv.png")}></img></a></li>
          </ul>
        </article>
      </section>
      <section className="section2 flex flex-col justify-center w-screen">
        {/* Skills Section */}
        <header className="skillsHeader flex flex-col text-white my-5">
          <span className="font-normal md:text-xl 2xl:text-3xl">Skills/Expertise</span>
          <span className="font-thin md:text-lg 2xl:text-xl">Click for Photo Credits</span>
        </header>
        <article className="ssHolder flex flex-wrap justify-center items-center justify-around mb-5">
          <div className="skillSlot" data-aos="fade-right" data-aos-duration="1000">
            <figure><img className="ssImg" src={require("./Images/html.png")}></img></figure>
            <figcaption className="ssCap">HTML</figcaption>
          </div>
          <div className="skillSlot" data-aos="fade-right" data-aos-duration="1250">
            <figure><img className="ssImg" src={require("./Images/css-3.png")}></img></figure>
            <figcaption className="ssCap">CSS</figcaption>
          </div>
          <div className="skillSlot" data-aos="fade-right" data-aos-duration="1500">
            <figure><img className="ssImg" src={require("./Images/js.png")}></img></figure>
            <figcaption className="ssCap">Javascript</figcaption>
          </div>
          <div className="skillSlot" data-aos="fade-right" data-aos-duration="1750">
            <figure><img className="ssImg" src={require("./Images/1174949_js_react js_logo_react_react native_icon.png")}></img></figure>
            <figcaption className="ssCap">React.js</figcaption>
          </div>
          <div className="skillSlot" data-aos="fade-left" data-aos-duration="1000">
            <figure><img className="ssImg" src={require("./Images/node-js.png")}></img></figure>
            <figcaption className="ssCap">Node.js</figcaption>
          </div>
          <div className="skillSlot" data-aos="fade-left" data-aos-duration="1250">
            <figure><img className="ssImg" src={require("./Images/server (1).png")}></img></figure>
            <figcaption className="ssCap">Firebase/BaaS</figcaption>
          </div>
          <div className="skillSlot" data-aos="fade-left" data-aos-duration="1500">
            <figure><img className="ssImg" src={require("./Images/figma.png")}></img></figure>
            <figcaption className="ssCap">Figma/UI Design</figcaption>
          </div>
          <div className="skillSlot" data-aos="fade-left" data-aos-duration="1750">
            <figure><img className="imgSpec" src={require("./Images/tailwind-css-icon.png")}></img></figure>
            <figcaption className="ssCap">Tailwind</figcaption> 
          </div>
        </article>
      </section>
      <section className="sec3 flex justify-center items-center flex-col" ref={projRef}>
        {/* Projects Section */}
        <header className="projHead md:text-xl 2xl:text-3xl w-100 font-normal" data-aos="fade-right">
          Recent Projects
          <h1 className=" w-36 font-thin text-white md:text-lg 2xl:text-xl text-left">Click to view!</h1>
          </header>
        <article className="psContainer w-full flex">
        <div className="projSec">
          <div className="projHolderUno mt-auto">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/Messaging-App" target="_blank"><img className="projImg" src={require("./Images/ss1.png")}></img></a></figure>
          </div>
          <div className="projTitleHolder mt-2 rounded-tl-lg rounded-tr-lg" data-aos="fade-up">
            <div className="projTitle">
              <h1 className="pT">Messaging App</h1>
              <ul className="toolsList">
                <li className="tlSlot">HTML</li>
                <li className="tlSlot">CSS</li>
                <li className="tlSlot">React</li>
                <li className="tlSlot">Node.js</li>
                <li className="tlSlot">Firebase/API</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projSec">
          <div className="projHolder mt-auto">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/SignUpForm" target="_blank"><img className="projImg" src={require("./Images/ss2.png")}></img></a></figure>
          </div>
          <div className="projTitleHolder mt-2 rounded-tl-lg rounded-tr-lg" data-aos="fade-up">
            <div className="projTitle">
            <h1 className="pT">Sign-Up Form</h1>
              <ul className="toolsList">
                <li className="tlSlot">HTML</li>
                <li className="tlSlot">CSS</li>
                <li className="tlSlot">Template Showcase</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projSec">
          <div className="projHolder mt-auto">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/React-Calculator" target="_blank"><img className="projImg" src={require("./Images/ss3.png")}></img></a></figure>
          </div>
          <div className="projTitleHolder mt-2 rounded-tl-lg rounded-tr-lg" data-aos="fade-up">
            <div className="projTitle">
            <h1 className="pT">Calculator</h1>
              <ul className="toolsList">
                <li className="tlSlot">HTML</li>
                <li className="tlSlot">CSS</li>
                <li className="tlSlot">React</li>
                <li className="tlSlot">Node.js</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projSec">
          <div className="projHolder mt-auto">
              <figure className="piHolder"><img className="projImgg"></img></figure>
          </div>
          <div className="projTitleHolder mt-2 rounded-tl-lg rounded-tr-lg" data-aos="fade-up">
            <div className="projTitle">
            <h1 className="pT">EmissaryConnect</h1>
              <ul className="toolsList">
                <li className="tlSlot">HTML</li>
                <li className="tlSlot">CSS</li>
                <li className="tlSlot">React</li>
                <li className="tlSlot">Node.js</li>
                <li className="tlSlot">Firebase/API</li>
              </ul>
            </div>
          </div>
        </div>
        </article>
      </section>
      <section className="aboutSec flex justify-center items-center text-white" ref={aboutRef}>
        <article className="flex flex-auto h-full justify-center items-center flex-col justify-around">
          <div className="aboutBox ml-auto" data-aos="fade-up-left">
            <div className="abTopHalf">
              <div className="abName md:text-lg text-sm">
                Other Skills
              </div>
              <div className="dots">
                <div className="indvDot"></div>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
              </div>
            </div>
            <div className="abBotHalf">
              <div className="abDesc md:text-sm text-xs">
                Soft skills, technical, etc.
              </div>
            </div>
            </div>
          <div className="aboutBox ml-auto" data-aos="fade-down-left">
          <div className="abTopHalf">
              <div className="abName md:text-lg text-sm">
                Education
              </div>
              <div className="dots">
                <div className="indvDot"></div>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
              </div>
            </div>
            <div className="abBotHalf">
              <div className="abDesc md:text-sm text-xs">
                Soft skills, technical, etc.
              </div>
            </div>
          </div>
        </article>
        <header className="flex flex-auto h-full justify-center items-center">
          <div className="aboutCircle">
            <h1 className="aboutHeader font-thin md:text-lg text-xs">A bit more about me...</h1>
          </div>
        </header>
        <article className="flex flex-auto h-full justify-center items-center justify-around flex-col">
          <div className="aboutBox mr-auto" data-aos="fade-up-right">
          <div className="abTopHalf">
              <div className="abName md:text-lg text-sm">
                Work History
              </div>
              <div className="dots">
                <div className="indvDot"></div>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
              </div>
            </div>
            <div className="abBotHalf">
              <div className="abDesc md:text-sm text-xs">
                Soft skills, technical, etc.
              </div>
            </div>
          </div>
          <div className="aboutBox mr-auto" data-aos="fade-down-right">
          <div className="abTopHalf">
              <div className="abName md:text-lg text-sm">
                Personal
              </div>
              <div className="dots">
                <div className="indvDot"></div>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
              </div>
            </div>
            <div className="abBotHalf">
              <div className="abDesc md:text-sm text-xs">
                Softskills, technical, etc.
              </div>
            </div>
          </div>
        </article>
      </section>
      <footer className="flex justify-center items-center md:text-lg text-sm flex-col">
        <div className="footExtension">
          Made with<span className="hover:text-purple-500 transition ease-in-out">&nbsp;ReactJS</span>, 
          <span className="hover:text-purple-500 transition ease-in-out">&nbsp;Tailwind</span>, 
          and <span className="hover:text-purple-500 transition ease-in-out">&nbsp;AOS {"(michalsnik)"}</span>. 
          Hosted by <span className="hover:text-purple-500 transition ease-in-out">&nbsp;GitHub Pages</span>.
        </div>
        <p className="flex-auto py-3">Developed/Designed by © DFBDev</p>
      </footer>
    </body>
  );
}

export default App;
