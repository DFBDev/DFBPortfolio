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
    <main className="App flex flex-col">
      <nav className="flex w-screen h-16">
        {/* Navigation Bar Content */}
        <h1 className="my-auto lg:ml-4 w-24 font-thin text-center text-white sm:text-xl 2xl:text-3xl text-neutral-400"><span className="dfb font-normal text-white">DFB</span>Dev</h1>
        <ul className="navOpts flex justify-center justify-between items-center max-w-2xl w-8/12 ml-auto mr-5 my-auto font-thin text-white sm:text-xl 2xl:text-3xl">
          <li className="opt" onClick={clickScroll2}><span className="navNum font-normal">1.</span> Skills</li>
          <li className="opt" onClick={clickScroll3}><span className="navNum font-normal">2.</span> Projects</li>
          <li className="opt" onClick={clickScroll}><span className="navNum font-normal">3.</span> About</li>
          <li className="opt"><span className="navNum font-normal">4.</span> Contact</li>
        </ul>
      </nav>
      <section className="section1 flex w-screen">
        {/* Introduction Section */}
        <figure className="flex w-3/4"><img className="personalImg my-auto" src={require("./Images/Personalmain.jpg")}/></figure>
        <article className="flex w-3/4 justify-center items-center flex-col">
          <p className="introText">
            <span className="font-thin">I'm Donathan Brown.</span>
            Front-end React Developer.
            <span className="introP font-thin">
              I'm a 21 year old, self-taught Web Developer with a background in college-level Computer Science. 
              From coordinating Backend processes through a BaaS, to creating a dynamic Front-end 
              architecture; I'm passionate about all things tech and web!
              </span>
          </p>
          <ul className="persLinks flex w-3/4 h-1/4 justify-center items-center justify-between">
            <li className="indvLinks il1">
              <a href="https://www.linkedin.com/in/donathan-brown-929255248/" target="_blank">
                <img className="ilIMG" src={require("./Images/2329259_linkedin_linkedin logo_logo_icon.png")}></img>
              </a>
            </li>
            <li className="indvLinks il2">
              <a href="https://github.com/DFBDev" target="_blank">
                <img className="ilIMG w-8/12 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img>
              </a>
            </li>
            <li className="indvLinks il3">
              <a>
                <img className="ilIMG w-1/2 m-auto" src={require("./Images/resume-and-cv.png")}></img>
              </a>
            </li>
          </ul>
        </article>
      </section>
      <section className="section2 flex flex-col justify-center w-screen" ref={skillRef}>
        {/* Skills Section */}
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
                <figure><img className="ssImg" src={require("./Images/html.png")}></img></figure>
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
                <figure><img className="ssImg" src={require("./Images/css-3.png")}></img></figure>
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
                <figure><img className="ssImg" src={require("./Images/js.png")}></img></figure>
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
                <figure><img className="ssImg" src={require("./Images/1174949_js_react js_logo_react_react native_icon.png")}></img></figure>
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
                <figure><img className="ssImg" src={require("./Images/node-js.png")}></img></figure>
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
                <figure><img className="ssImg" src={require("./Images/server (1).png")}></img></figure>
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
                <figure><img className="ssImg" src={require("./Images/figma.png")}></img></figure>
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
                <figure><img className="ssImg" src={require("./Images/tailwind-css-icon.png")}></img></figure>
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
      </section>
      <section className="sec3 flex justify-center items-center flex-col" ref={projRef}>
        {/* Projects Section */}
        <header className="projHead md:text-xl 2xl:text-3xl w-100 font-normal">
          <div className="headAcc mr-4" data-aos="zoom-in-right" data-aos-duration="800"></div>
          <div className="headNum sm:text-5xl text-4xl mr-3" data-aos="fade">2. </div>
          <div className="headCont flex flex-col text-neutral-400 text-base md:text-xl" data-aos="fade">
            Recent Projects
            <h1 className="font-thin text-white md:text-lg 2xl:text-xl text-xs text-neutral-400">Click for site demo!</h1>
          </div>
          <div className="headAcc ml-4" data-aos="zoom-in-left" data-aos-duration="800"></div>
        </header>
        <article className="psContainer w-full flex">
        <div className="projSec">
          <div className="projHolderUno mt-auto" data-aos="fade">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/Messaging-App" target="_blank"><img className="projImg" src={require("./Images/ss1.png")}></img></a></figure>
          </div>
          <div className="projTitleHolder mt-2 rounded-tl-lg rounded-tr-lg" data-aos="fade-up">
            <div className="projTitle">
              <h1 className="pT text-neutral-400">Messaging App</h1>
              <ul className="toolsList text-neutral-400">
                <li className="tlSlot">HTML</li>
                <li className="tlSlot">CSS</li>
                <li className="tlSlot">React</li>
                <li className="tlSlot">Node.js</li>
                <li className="tlSlot">Firebase/API</li>
              </ul>
            </div>
            <div className="repoLink">
              <a href="https://github.com/DFBDev/Messaging-App" target="_blank">
                <img className="w-1/2 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="projSec">
          <div className="projHolder mt-auto" data-aos="fade">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/SignUpForm" target="_blank"><img className="projImg" src={require("./Images/ss2.png")}></img></a></figure>
          </div>
          <div className="projTitleHolder mt-2 rounded-tl-lg rounded-tr-lg" data-aos="fade-up">
            <div className="projTitle">
            <h1 className="pT text-neutral-400">Sign-Up Form</h1>
              <ul className="toolsList text-neutral-400">
                <li className="tlSlot">HTML</li>
                <li className="tlSlot">CSS</li>
                <li className="tlSlot">Template Showcase</li>
              </ul>
            </div>
            <div className="repoLink">
              <a href="https://github.com/DFBDev/SignUpForm" target="_blank">
                <img className="w-1/2 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="projSec">
          <div className="projHolder mt-auto" data-aos="fade">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/React-Calculator" target="_blank"><img className="projImg" src={require("./Images/ss3.png")}></img></a></figure>
          </div>
          <div className="projTitleHolder mt-2 rounded-tl-lg rounded-tr-lg" data-aos="fade-up">
            <div className="projTitle">
            <h1 className="pT text-neutral-400">Calculator</h1>
              <ul className="toolsList text-neutral-400">
                <li className="tlSlot">HTML</li>
                <li className="tlSlot">CSS</li>
                <li className="tlSlot">React</li>
                <li className="tlSlot">Node.js</li>
              </ul>
            </div>
            <div className="repoLink">
              <a href="https://github.com/DFBDev/React-Calculator" target="_blank">
                <img className="w-1/2 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="projSec">
          <div className="projHolder mt-auto" data-aos="fade">
              <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/eCommerce/#/" target="_blank"><img className="projImg" src={require("./Images/ec.png")}></img></a></figure>
          </div>
          <div className="projTitleHolder mt-2 rounded-tl-lg rounded-tr-lg" data-aos="fade-up">
            <div className="projTitle">
            <h1 className="pT text-neutral-400">EmissaryConnect</h1>
              <ul className="toolsList text-neutral-400">
                <li className="tlSlot">HTML</li>
                <li className="tlSlot">CSS</li>
                <li className="tlSlot">React</li>
                <li className="tlSlot">Node.js</li>
                <li className="tlSlot">In Progress</li>
              </ul>
            </div>
            <div className="repoLink">
              <a href="https://github.com/DFBDev/eCommerce" target="_blank">
                <img className="w-1/2 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img>
              </a>
            </div>
          </div>
        </div>
        </article>
      </section>
      <section className="aboutSec flex justify-center items-center text-white" ref={aboutRef}>
        <article className="flex flex-auto h-full justify-center items-center flex-col justify-around">
          <div className="aboutBox ml-auto" data-aos="fade">
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
          <div className="aboutBox ml-auto" data-aos="fade">
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
          <div className="headNum sm:text-5xl text-2xl mr-3 ml-4">3. </div>
          <div className="headCont flex flex-col text-neutral-400 md:text-2xl 2xl:text-xl text-sm">
            About Me
            <h1 className=" w-24 font-thin text-left text-neutral-400 2xl:text-xl text-xs">Use the dots!</h1>
          </div>
        </header>
        <article className="flex flex-auto h-full justify-center items-center justify-around flex-col">
          <div className="aboutBox mr-auto" data-aos="fade">
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
          <div className="aboutBox mr-auto" data-aos="fade">
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
