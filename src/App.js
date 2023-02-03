import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";
import { AboutReturn } from "./components/aboutSection";
import { ContactPopup } from "./components/contact";

//Main body application, components can be found in comps.js.
//Elements are stylized by a mixture of Tailwind and Vanilla CSS (whichever is circumstantially easier).

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projRef = useRef(null);
  const [abtState, setAS] = useState("default");
  const [contactState, setCS] = useState("closed");

  const clickScroll = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
    {/* About Section auto-scroll trigger */}
  }

  const clickScroll2 = () => {
    skillRef.current?.scrollIntoView({behavior: 'smooth'});
    {/* Skill Section auto-scroll trigger */}
  }

  const clickScroll3 = () => {
    projRef.current?.scrollIntoView({behavior: 'smooth'});
    {/* Project Section auto-scroll trigger */}
  }

  const abtClickHandle = (choice) => {
    if (choice != abtState){
      setAS(choice);
    }
    else {
      setAS("default");
    }
    {/* About Section auto-scroll trigger */}
  } 

  const contactClickHandle = () => {
    if (contactState == "closed"){
      setCS("open");
    }
    else if (contactState == "open") {
      setCS("closed");
    }
  }

  useEffect(() => {
    AOS.init({duration: 1000})
    /* Animation initializer for scrolling animations using AOS library */
  }, []);

  return (
    <main className="App flex flex-col">
      <ContactPopup props ={contactState}/>

      {/* Navigation Bar Content */}

      <nav className="flex w-screen h-16 2xl:h-20">
        <h1 className="my-auto lg:ml-4 w-24 font-thin text-center text-white sm:text-xl 2xl:text-3xl text-neutral-400"><span className="dfb font-normal text-white">DFB</span>Dev</h1>
        <ul className="navOpts flex justify-center justify-between items-center max-w-2xl w-8/12 ml-auto mr-5 my-auto font-thin text-white sm:text-xl 2xl:text-3xl">
          <li className="opt" onClick={clickScroll2}><span className="navNum font-normal">1.</span> Skills</li>
          <li className="opt" onClick={clickScroll3}><span className="navNum font-normal">2.</span> Projects</li>
          <li className="opt" onClick={clickScroll}><span className="navNum font-normal">3.</span> About</li>
          <li className="opt mr-6" onClick={() => contactClickHandle()}><span className="navNum font-normal">4.</span> Contact</li>
        </ul>
      </nav>

      {/* Introduction Section */}

      <section className="section1 flex w-screen">
        <figure className="flex w-3/4"><img className="personalImg my-auto" src={require("./Images/Personalmain.jpg")}/></figure>
        <article className="flex w-3/4 justify-center items-center flex-col">
          <p className="introText">
            <span className="sm:font-thin font-normal">I'm Donathan Brown.</span>
            <span className="mb-1.5 text-pink-800">Front-end React Developer.</span>
            <span className="introP font-thin">
              I'm a 21 year old, self-taught Web Developer with a background in college-level Computer Science. 
              From coordinating Backend processes within a BaaS, to creating a dynamic Front-end 
              architecture; I'm passionate about all things tech and web!
            </span>
          </p>
          <ul className="persLinks flex w-3/4 h-1/4 justify-center items-center justify-between">
            <li className="indvLinks il1">
              <a href="https://www.linkedin.com/in/donathan-brown-929255248/" target="_blank">
                <img className="ilIMG" src={require("./Images/2329259_linkedin_linkedin logo_logo_icon.png")} alt="LinkedIn Profile"></img>
              </a>
            </li>
            <li className="indvLinks il2">
              <a href="https://github.com/DFBDev" target="_blank">
                <img className="ilIMG w-8/12 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")} alt="GitHub Profile"></img>
              </a>
            </li>
            <li className="indvLinks il3">
              <a>
                <img className="ilIMG w-1/2 m-auto" src={require("./Images/resume-and-cv.png")} alt="Resume"></img>
              </a>
            </li>
          </ul>
        </article>
      </section>

      {/* Skills Section */}

      <section className="section2 flex flex-col justify-center w-screen" ref={skillRef}>
        <header className="skillsHeader flex justify-center items center text-white my-5 text-neutral-400" data-aos="fade">
          <div className="headAcc mr-4" data-aos="zoom-in-right" data-aos-duration="800"></div>
          <div className="headNum sm:text-5xl text-4xl mr-3">1. </div>
          <div className="headCont flex flex-col">
            <span className="font-normal md:text-xl 2xl:text-3xl">Skills/Expertise</span>
            <span className="font-thin md:text-lg 2xl:text-xl text-xs">Hover for Photo Credits</span>
          </div>
          <div className="headAcc ml-4" data-aos="zoom-in-left" data-aos-duration="800"></div>
        </header>
        <article className="ssHolder flex flex-wrap justify-center items-center justify-around mb-5">
          <div className="skillSlot" data-aos="fade-right" data-aos-duration="1000">
            <div className="cardInner border-t-pink-900 border-t-2">
              <div className="cardFront">
                <figure><img className="ssImg" src={require("./Images/html.png")} alt="HTML Icon"></img></figure>
                <figcaption className="ssCap flex justify-center">HTML</figcaption>
              </div>
              <div className="cardBack md:text-base text-xs">
                <h2 className="pb-1">Image by Freepik</h2>
                <a className="text-pink-700 font-thin" href="https://www.flaticon.com/free-icon/html_1051277?term=html&page=1&position=2&origin=search&related_id=1051277">
                  View Source
                </a>
              </div>
            </div>
          </div>
          <div className="skillSlot" data-aos="fade-right" data-aos-duration="1250">
          <div className="cardInner border-t-pink-900 border-t-2">
              <div className="cardFront">
                <figure><img className="ssImg" src={require("./Images/css-3.png")} alt="CSS Icon"></img></figure>
                <figcaption className="ssCap flex justify-center">CSS</figcaption>
              </div>
              <div className="cardBack md:text-base text-xs">
                <h2 className="pb-1">Image by Pixel Perfect</h2>
                <a className="text-pink-700 font-thin" href="https://www.flaticon.com/free-icon/css-3_732190?term=css&page=1&position=2&origin=search&related_id=732190">
                  View Source
                </a>
              </div>
            </div>
          </div>
          <div className="skillSlot" data-aos="fade-right" data-aos-duration="1500">
          <div className="cardInner border-t-pink-900 border-t-2">
              <div className="cardFront">
                <figure><img className="ssImg" src={require("./Images/js.png")} alt="Javascript Icon"></img></figure>
                <figcaption className="ssCap flex justify-center">Javascript</figcaption>
              </div>
              <div className="cardBack md:text-base text-xs">
                <h2 className="pb-1">Image by Freepik</h2>
                <a className="text-pink-700 font-thin" href="https://www.flaticon.com/free-icon/js_5968292?term=javascript&page=1&position=4&origin=search&related_id=5968292" target="_blank">
                  View Source
                </a>
              </div>
            </div>
          </div>
          <div className="skillSlot" data-aos="fade-right" data-aos-duration="1750">
          <div className="cardInner border-t-pink-900 border-t-2">
              <div className="cardFront">
                <figure><img className="ssImg" src={require("./Images/1174949_js_react js_logo_react_react native_icon.png")} alt="React.js Icon"></img></figure>
                <figcaption className="ssCap flex justify-center">React.js</figcaption>
              </div>
              <div className="cardBack md:text-base text-xs">
                <h2 className="pb-1">Image by Samat O.</h2>
                <a className="text-pink-700 font-thin" href="https://www.iconfinder.com/icons/1174949/js_react_js_logo_react_react_native_icon">
                  View Source
                </a>
              </div>
            </div>
          </div>
          <div className="skillSlot" data-aos="fade-left" data-aos-duration="1000">
          <div className="cardInner border-b-pink-900 border-b-2">
              <div className="cardFront">
                <figure><img className="ssImg" src={require("./Images/node-js.png")} alt="Node.js Icon"></img></figure>
                <figcaption className="ssCap flex justify-center">Node.js</figcaption>
              </div>
              <div className="cardBack md:text-base text-xs">
                <h2 className="pb-1">Image by Freepik</h2>
                <a className="text-pink-700 font-thin" href="https://www.flaticon.com/free-icon/node-js_5968322?term=node&page=1&position=1&origin=search&related_id=5968322">
                  View Source
                </a>
              </div>
            </div>
          </div>
          <div className="skillSlot" data-aos="fade-left" data-aos-duration="1250">
          <div className="cardInner border-b-pink-900 border-b-2">
              <div className="cardFront">
                <figure><img className="ssImg" src={require("./Images/server (1).png")} alt="Database/BaaS Icon"></img></figure>
                <figcaption className="ssCap flex justify-center">Firebase/BaaS</figcaption>
              </div>
              <div className="cardBack md:text-base text-xs">
                <h2 className="pb-1">Image by Freepik</h2>
                <a className="text-pink-700 font-thin" href="https://www.flaticon.com/free-icon/server_689319?term=database&page=1&position=13&origin=search&related_id=689319">
                  View Source
                </a>
              </div>
            </div>
          </div>
          <div className="skillSlot" data-aos="fade-left" data-aos-duration="1500">
          <div className="cardInner border-b-pink-900 border-b-2">
              <div className="cardFront">
                <figure><img className="ssImg" src={require("./Images/figma.png")} alt="Figma Icon"></img></figure>
                <figcaption className="ssCap flex justify-center">Figma</figcaption>
              </div>
              <div className="cardBack md:text-base text-xs">
                <h2 className="pb-1">Image by Freepik</h2>
                <a className="text-pink-700 font-thin" href="https://www.flaticon.com/free-icon/figma_5968705?term=figma&page=1&position=2&origin=search&related_id=5968705">
                  View Source
                </a>
              </div>
            </div>
          </div>
          <div className="skillSlot" data-aos="fade-left" data-aos-duration="1750">
          <div className="cardInner border-b-pink-900 border-b-2">
              <div className="cardFront">
                <figure><img className="ssImg" src={require("./Images/tailwind-css-icon.png")} alt="Tailwind Icon"></img></figure>
                <figcaption className="ssCap flex justify-center">Tailwind</figcaption>
              </div>
              <div className="cardBack md:text-base text-xs">
                <h2 className="pb-1">Image by UXWing</h2>
                <a className="text-pink-700 font-thin" href="https://uxwing.com/tailwind-css-icon/" target="_blank">
                  View Source
                </a>
              </div>
            </div>
          </div>
        </article>
        <h2 className="skillFoot flex text-gray-500 font-thin justify-center text-center" data-aos="fade-up">
          Not to mention VSCode, Boostrap, prior experience with <br></br> C++ & Python, RESTful API, JSON analysis/application and, of course, Git!
        </h2>
      </section>

      {/* Projects Section */}

      <section className="sec3 flex items-center flex-col" ref={projRef}>
        <header className="projHead md:text-xl 2xl:text-3xl w-100 font-normal">
          <div className="headAcc mr-4" data-aos="zoom-in-right" data-aos-duration="800"></div>
          <div className="headNum sm:text-5xl text-4xl mr-3" data-aos="fade">2. </div>
          <div className="headCont flex flex-col text-neutral-400 text-base md:text-xl" data-aos="fade">
            Recent Projects
            <h1 className="font-thin text-white md:text-lg 2xl:text-xl text-xs text-neutral-400">Hover over the image!</h1>
          </div>
          <div className="headAcc ml-4" data-aos="zoom-in-left" data-aos-duration="800"></div>
        </header>
        <article className="psContainer w-full flex">
        <div className="projSec ps1">
          <div className="projHolderUno ph1 mt-auto" data-aos="fade-right">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/Messaging-App" target="_blank"><img className="projImg" src={require("./Images/ss1.png")} alt="Picture of Messaging App website"></img></a></figure>
          </div>
          <div className="projTitleHolder pth1 mt-2 rounded-tl-lg rounded-tr-lg">
            <div className="projTitle">
              <h1 className="pT text-neutral-400">Messaging App</h1>
            </div>
            <p className="mb-auto text-gray-500 text-xs text-center w-3/4">
              CRUD oriented Messaging Application made with Firebase's Firestore/Google account authentication SDK and NPM. Some features include real-time message updates, 
              mini profiles, and special admin features. 
            </p>
          </div>
          <ul className="toolsList tlr1 text-neutral-400">
                <li className="tlSlot" data-aos="fade-left">HTML<div className="bulletPoint"><div className="bpInner"></div></div></li>
                <li className="tlSlot" data-aos="fade-left">CSS<div className="bulletPoint"><div className="bpInner"></div></div></li>
                <li className="tlSlot" data-aos="fade-left">React<div className="bulletPoint"><div className="bpInner"></div></div></li>
                <li className="tlSlot" data-aos="fade-left">Node.js<div className="bulletPoint"><div className="bpInner"></div></div></li>
                <li className="tlSlot" data-aos="fade-left">Firebase<div className="bulletPoint"><div className="bpInner"></div></div></li>
          </ul>
          <div className="repoLink rlr1">
                <a href="https://github.com/DFBDev/Messaging-App" target="_blank">
                  <img className="w-1/2 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img>
                </a>
            </div>
        </div>
        <div className="projSec ps2">
          <div className="projHolder ph2 mt-auto" data-aos="fade-left">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/SignUpForm" target="_blank"><img className="projImg" src={require("./Images/ss2.png")} alt="Picture of SignUp Form website"></img></a></figure>
          </div>
          <div className="projTitleHolder pth2 mt-2 rounded-tl-lg rounded-tr-lg">
            <div className="projTitle">
              <h1 className="pT2 text-neutral-400">Sign-Up Form</h1>
            </div>
            <p className="mb-auto text-gray-500 text-xs text-center w-3/4">
              Simple Sign-up Form with automatic form validation, made purely with HTML and CSS. Made largely as a useful display of practical
              knowledge of modern design, HTML semantics/attributes, and common CSS practices.
            </p>
          </div>
          <ul className="toolsList tll1 text-neutral-400">
                <li className="tlSlot tlsl" data-aos="fade-right"><div className="bulletPoint bpl"><div className="bpInner"></div></div>HTML</li>
                <li className="tlSlot tlsl" data-aos="fade-right"><div className="bulletPoint bpl"><div className="bpInner"></div></div>CSS</li>
                <li className="tlSlot tlsl" data-aos="fade-right"><div className="bulletPoint bpl"><div className="bpInner"></div></div>Template</li>
          </ul>
          <div className="repoLink rll1">
              <a href="https://github.com/DFBDev/SignUpForm" target="_blank">
                <img className="w-1/2 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img>
              </a>
          </div>
        </div>
        <div className="projSec ps3">
          <div className="projHolder ph3 mt-auto" data-aos="fade-right">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/React-Calculator" target="_blank"><img className="projImg" src={require("./Images/ss3.png")} alt="Picture of Calculator website"></img></a></figure>
          </div>
          <div className="projTitleHolder pth3 mt-2 rounded-tl-lg rounded-tr-lg">
            <div className="projTitle">
            <h1 className="pT text-neutral-400">Calculator</h1>
            </div>
            <p className="mb-auto text-gray-500 text-xs text-center w-3/4">
              Basic React-powered calculator, initially intended to be hands-on lesson to better understand state/prop management,
              the component lifecycle, functional vs class components, component rendering, NPM, etc.
            </p>
          </div>
          <ul className="toolsList tlr2 text-neutral-400">
                <li className="tlSlot" data-aos="fade-left">HTML<div className="bulletPoint"><div className="bpInner"></div></div></li>
                <li className="tlSlot" data-aos="fade-left">CSS<div className="bulletPoint"><div className="bpInner"></div></div></li>
                <li className="tlSlot" data-aos="fade-left">React<div className="bulletPoint"><div className="bpInner"></div></div></li>
                <li className="tlSlot" data-aos="fade-left">Node.js<div className="bulletPoint"><div className="bpInner"></div></div></li>
          </ul>
          <div className="repoLink rlr2">
              <a href="https://github.com/DFBDev/React-Calculator" target="_blank">
                <img className="w-1/2 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img>
              </a>
          </div>  
        </div>
        <div className="projSec ps4">
          <div className="projHolder ph4 mt-auto" data-aos="fade-left">
              <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/eCommerce/#/" target="_blank"><img className="projImg" src={require("./Images/ec.png")} alt="Picture of EmissaryConnect website"></img></a></figure>
          </div>
          <div className="projTitleHolder pth4 mt-2 rounded-tl-lg rounded-tr-lg"> 
            <div className="projTitle">
            <h1 className="pT2 text-neutral-400">EC</h1>
            </div>
            <p className="mb-auto text-gray-500 text-xs text-center w-3/4">
              SPA, work-in-progress Real Estate Agent platform for a personal client, using CRA, Hash routing and NPM. Plans are to implement 
              Google Drive API, downloadable content, WhatsApp API, FramerMotion animations and Next.js.
            </p>
          </div>
          <ul className="toolsList tll2 text-neutral-400">
                <li className="tlSlot tlsl" data-aos="fade-right"><div className="bulletPoint bpl"><div className="bpInner"></div></div>HTML</li>
                <li className="tlSlot tlsl" data-aos="fade-right"><div className="bulletPoint bpl"><div className="bpInner"></div></div>CSS</li>
                <li className="tlSlot tlsl" data-aos="fade-right"><div className="bulletPoint bpl"><div className="bpInner"></div></div>React</li>
                <li className="tlSlot tlsl" data-aos="fade-right"><div className="bulletPoint bpl"><div className="bpInner"></div></div>Node.js</li>
                <li className="tlSlot tlsl" data-aos="fade-right"><div className="bulletPoint bpl"><div className="bpInner"></div></div>WIP</li>
          </ul>
          <div className="repoLink rll2">
              <a href="https://github.com/DFBDev/eCommerce" target="_blank">
                <img className="w-1/2 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img>
              </a>
            </div>
        </div>
        </article>
      </section>

      {/* About Me Section */}

      <section className="aboutSec flex justify-center items-center text-white" ref={aboutRef}>
        <article className="indvAS flex flex-auto h-full justify-center items-center flex-col justify-around my-auto">
          <div className="aboutBox ml-auto" data-aos="fade">
            <div className="abTopHalf">
              <div className="abName md:text-lg text-sm">
                Other Skills
              </div>
              <div className="dots" onClick={() => abtClickHandle("techSkills")}>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
              </div>
            </div>
            <div className="abBotHalf">
              <div className="abDesc md:text-sm text-xs">
                General & Specific
              </div>
            </div>
            </div>
          <div className="aboutBox ml-auto" data-aos="fade">
          <div className="abTopHalf">
              <div className="abName md:text-lg text-sm">
                Education
              </div>
              <div className="dots" onClick={() => abtClickHandle("education")}>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
              </div>
            </div>
            <div className="abBotHalf">
              <div className="abDesc md:text-sm text-xs">
                History & Achievements
              </div>
            </div>
          </div>
        </article>
        <div className="flex w-2/6 h-full flex-col">
          <AboutReturn props = {abtState}/>
        </div>
        <article className="indvAS flex flex-auto h-full justify-center items-center justify-around flex-col ">
          <div className="aboutBox mr-auto" data-aos="fade">
          <div className="abTopHalf">
              <div className="abName md:text-lg text-sm">
                Work History
              </div>
              <div className="dots" onClick={() => abtClickHandle("workHist")}>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
              </div>
            </div>
            <div className="abBotHalf">
              <div className="abDesc md:text-sm text-xs">
                Previous & Skills
              </div>
            </div>
          </div>
          <div className="aboutBox mr-auto" data-aos="fade">
          <div className="abTopHalf">
              <div className="abName md:text-lg text-sm">
                Personal
              </div>
              <div className="dots" onClick={() => abtClickHandle("personal")}>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
                <div className="indvDot"></div>
              </div>
            </div>
            <div className="abBotHalf">
              <div className="abDesc md:text-sm text-xs">
                Overview & Fun Facts
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Footer */}

      <footer className="flex justify-center items-center md:text-lg text-sm flex-col">
        <div className="footExtension md:text-sm text-xs">
          Made with ReactJS, Tailwind and AOS {"(michalsnik)"}. Hosted by GitHub Pages.
        </div>
        <p className="footCredits md:text-lg text-sm">
          <a className="hover:text-sky-600 transition ease-in-out" href="https://www.iconfinder.com/icons/2329259/linkedin_linkedin_logo_logo_icon" target="_blank">LinkedIn Photo</a> · <a className="hover:text-sky-600 transition ease-in-out" href="https://github.com/logos" target="_blank">GitHub Photo</a> · <a className="hover:text-sky-600 transition ease-in-out" href="https://www.flaticon.com/free-icon/resume-and-cv_3415056?term=resume+and+cv&page=1&position=32&origin=search&related_id=3415056" target="_blank">Document Photo</a>
        </p>
        <p className="flex-auto md:text-sm text-xs">Developed/Designed by © DFBDev</p>
      </footer>
    </main>
  );
}

export default App;
