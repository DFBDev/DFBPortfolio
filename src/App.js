
function App() {
  return (
    <body className="App flex flex-col">
      <nav className="flex w-full h-16">
        <h1 className="my-auto w-24 font-thin text-center text-white"><span className="font-normal text-white">DFB</span>Dev</h1>
        <ul className="navOpts flex justify-center justify-between items-center max-w-xlg w-3/5 ml-auto mr-5 font-thin text-white">
          <li className="">About me</li>
          <li className="">Skills</li>
          <li className="">Projects</li>
          <li className="">Contact</li>
        </ul>
      </nav>
      <section className="section1 flex w-screen">
        <figure className="flex w-3/4"><img className="personalImg mt-auto" src={require("./Images/Personal.png")}/></figure>
        <article className="flex w-3/4 justify-center items-center flex-col">
          <p className="introText">
            <span className="font-thin">Hello! My name is...</span>
            Donathan Brown.
            <span className="font-thin">I also go by DFBDev or DemDB.</span>
            I’m a Front-end Developer!
            </p>
        </article>
      </section>
      <section className="section2 flex flex-col justify-center w-screen">
        <header className="skillsHeader flex flex-col text-white my-5">
          <span className="font-normal text-xl">Skills/Expertise</span>
          <span className="font-thin">Photo Credits</span>
        </header>
        <article className="flex flex-wrap justify-center justify-around mb-5">
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
            <figure><img className="ssImg" src={require("./Images/html.png")}></img></figure>
            <figcaption className="ssCap">Tailwind</figcaption> 
          </div>
        </article>
      </section>
    </body>
  );
}

export default App;
