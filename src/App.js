
//Main body application, components can be found in comps.js.
//Elements are stylized by a mixture of Tailwind and Vanilla CSS.

function App() {
  return (
    <body className="App flex flex-col">
      <nav className="flex w-full h-16">
        {/* Navigation Bar Content */}
        <h1 className="my-auto w-24 font-thin text-center text-white text-xl"><span className="font-normal text-white">DFB</span>Dev</h1>
        <ul className="navOpts flex justify-center justify-between items-center max-w-xlg w-3/5 ml-auto mr-5 font-thin text-white sm:text-xl">
          <li className="opt">About me</li>
          <li className="opt">Skills</li>
          <li className="opt">Projects</li>
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
          <ul className="persLinks flex w-3/4 h-1/4 justify-center items-center justify-between">
            <li className="indvLinks"><img src={require("./Images/2329259_linkedin_linkedin logo_logo_icon.png")}></img></li>
            <li className="indvLinks"><img className="w-1/2 m-auto" src={require("./Images/GitHub-Mark-Light-64px.png")}></img></li>
            <li className="indvLinks"><img className="w-1/2 m-auto" src={require("./Images/resume-and-cv.png")}></img></li>
          </ul>
        </article>
      </section>
      <section className="section2 flex flex-col justify-center w-screen">
        {/* Skills Section */}
        <header className="skillsHeader flex flex-col text-white my-5">
          <span className="font-normal md:text-xl">Skills/Expertise</span>
          <span className="font-thin md:text-lg">Click for Photo Credits</span>
        </header>
        <article className="ssHolder flex flex-wrap justify-center items-center justify-around mb-5">
          <div className="skillSlot">
            <figure><img className="ssImg" src={require("./Images/html.png")}></img></figure>
            <figcaption className="ssCap">HTML</figcaption>
          </div>
          <div className="skillSlot">
            <figure><img className="ssImg" src={require("./Images/css-3.png")}></img></figure>
            <figcaption className="ssCap">CSS</figcaption>
          </div>
          <div className="skillSlot">
            <figure><img className="ssImg" src={require("./Images/js.png")}></img></figure>
            <figcaption className="ssCap">Javascript</figcaption>
          </div>
          <div className="skillSlot">
            <figure><img className="ssImg" src={require("./Images/1174949_js_react js_logo_react_react native_icon.png")}></img></figure>
            <figcaption className="ssCap">React.js</figcaption>
          </div>
          <div className="skillSlot">
            <figure><img className="ssImg" src={require("./Images/node-js.png")}></img></figure>
            <figcaption className="ssCap">Node.js</figcaption>
          </div>
          <div className="skillSlot">
            <figure><img className="ssImg" src={require("./Images/server (1).png")}></img></figure>
            <figcaption className="ssCap">Firebase/BaaS</figcaption>
          </div>
          <div className="skillSlot">
            <figure><img className="ssImg" src={require("./Images/figma.png")}></img></figure>
            <figcaption className="ssCap">Figma/UI Design</figcaption>
          </div>
          <div className="skillSlot">
            <figure><img className="imgSpec" src={require("./Images/tailwind-css-icon.png")}></img></figure>
            <figcaption className="ssCap">Tailwind</figcaption> 
          </div>
        </article>
      </section>
      <section className="flex justify-center items-center">
        {/* Projects Section */}
        <article className="psContainer w-full flex">
        <div className="projSec">
          <header className="projHead md:text-xl text-sm font-normal">Recent Projects</header>
          <div className="projHolderUno mr-auto">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/Messaging-App"><img className="projImg" src={require("./Images/ss1.png")}></img></a></figure>
          </div>
        </div>
        <div className="projSec pt-6">
          <div className="projHolder mb-auto">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/SignUpForm"><img className="projImg" src={require("./Images/ss2.png")}></img></a></figure>
          </div>
          <div className="projTitleHolder bg-orange-100 mt-5 rounded-tl-lg rounded-tr-lg">
            <div className="projTitle border-solid border-r-violet-600 border-r-2">Messaging<br></br>App</div>
            <div className="projTitle">Calculator</div>
          </div>
        </div>
        <div className="projSec pb-6">
          <div className="projTitleHolder bg-orange-100 mb-auto rounded-bl-lg rounded-br-lg">
            <div className="projTitle border-solid border-r-violet-600 border-r-2">SignUp<br></br>Form</div>
            <div className="projTitle">Emissary<br></br>Connect</div>
          </div>
          <div className="projHolder mt-3">
            <figure className="piHolder"><a className="piHolder2" href="https://dfbdev.github.io/React-Calculator"><img className="projImg" src={require("./Images/ss3.png")}></img></a></figure>
          </div>
        </div>
        <div className="projSec pt-3">
          <div className="projHolder mb-auto mt-3">
              <figure className="piHolder"><img className="projImg"></img></figure>
          </div>
        </div>
        </article>
      </section>
      <section className="aboutSec flex justify-center items-center text-white">About Me section</section>
      <footer className="flex justify-center items-center py-3 text-sm">Developed/Designed by © DFBDev</footer>
    </body>
  );
}

export default App;
