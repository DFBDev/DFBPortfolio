import {AnimatePresence, motion} from "framer-motion";

export const AboutReturn = ({props}) => {
    let choice = props;

    const defaultCheck = (param) => {
        if (param == "default") {
            return true;
        }
        else {
            return false;
        }
    }

    const ssCheck = (param) => {
        if (param == "techSkills") {
            return true;
        }
        else {
            return false;
        }
    }

    const whCheck = (param) => {
        if (param == "workHist") {
            return true;
        }
        else {
            return false;
        }
    }

    const persCheck = (params) => {
        if (params == "personal"){
            return true;
        }
        else {
            return false;
        }
    }
    
    const educCheck = (params) => {
        if (params == "education") {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <AnimatePresence mode="wait">
            {defaultCheck(choice) && (
                <motion.header className="flex flex-auto h-full justify-center items-center" 
                key={props} initial={{opacity: 0, scale: 0.1}} 
                animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.1}}
                transition={{duration: 0.4}}>
                <div className="headNum sm:text-5xl text-2xl mr-3 ml-4">3. </div>
                    <div className="headCont flex flex-col text-neutral-400 md:text-2xl 2xl:text-2xl text-sm">
                        About Me
                        <h1 className=" w-fit font-thin text-left text-neutral-400 2xl:text-lg text-xs">Use the dots!</h1>
                    </div>
                </motion.header>
            )}
            {ssCheck(choice) && (
                <motion.div className="flex flex-auto h-full justify-center items-center" 
                key={props} initial={{opacity: 0, scale:0.1}} 
                animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.1}}
                transition={{duration: 0.4}}>
                <div className="abtContent flex justify-center items-center flex-col h-5/6 w-3/4 mb-6">
                    <h2 className="sm:text-xl text-lg sm:mt-auto w-36">General Skills</h2>
                    <ul className="abtL font-thin list-disc sm:mb-auto sm:my-auto sm:text-sm text-xs text-gray-400">
                        <li>Problem Solving & Analysis</li>
                        <li>Cooperation/Teamwork</li>
                        <li>Articulation & Mentoring</li>
                        <li>Attention to detail</li>
                        <li>Persistence & Integrity</li>
                        <li>Extremely strong work ethic</li>
                        <li>Adaptation and Flexibility</li>
                    </ul>
                    <h2 className="sm:text-xl sm:mt-12 mt-2 text-lg w-36">Specific Skills</h2>
                    <ul className="abtL font-thin list-disc sm:mb-auto my-auto sm:text-sm text-xs text-gray-400">
                        <li>MacOS/WindowOS experience</li> 
                        <li>95th+ Percentile Average Typing Speed</li>
                        <li>Experienced with IDE's/Code Editors</li>
                        <li>Software Development Life Cycle Familiarity</li>
                        <li>Experienced with OOP Principles/Fundamentals</li>
                        <li>Familiarity with frameworks, libraries, dependencies, etc</li>
                    </ul>
                </div>  
            </motion.div>
            )}
            {whCheck(choice) && (
                <motion.div className="flex flex-auto h-full justify-center items-center" 
                key={props} initial={{opacity: 0, scale: 0.1}} 
                animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.1}}
                transition={{duration: 0.4}}>
                <div className="abtContent flex justify-center items-center flex-col h-5/6 w-3/4">
                    <h2 className="sm:text-xl text-lg mt-auto w-36 text-center">Previous Jobs</h2>
                    <ul className="abtL font-thin list-disc mt-4 mb-auto 2xl:text-sm text-sm text-gray-400">
                        <li>Busser/Server/Host/Trainer at Olive Garden <br></br>// <span className="font-normal">2021-2022</span></li>
                        <li>Math Tutor at North Central Texas College <br></br>// <span className="font-normal">2023-Present</span></li>
                    </ul>
                    <h2 className="sm:text-xl sm:mt-24 mt-6 text-lg w-36 text-center">Required Skills</h2>
                    <p className="abtP font-thin mb-12 sm:mb-auto mt-4 text-xs text-center text-gray-400 2xl:text-sm">
                        Given my past work experiences, I'm very familiar with exercising positive and effective communication with others,
                        on the spot problem solving, multitasking, cooperation/teamwork, articulation AND analysis. Equally as important,
                        I've also been flexible and tenacious, ready for any new challenges to come my way. Any challenge is an opportunity to learn!
                    </p>
                </div>  
            </motion.div>
            )}
            {persCheck(choice) && (
                <motion.div className="flex flex-auto h-full justify-center items-center" 
                key={props} initial={{opacity: 0, scale: 0.1}} 
                animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.1}}
                transition={{duration: 0.4}}>
                <div className="abtContent flex justify-center items-center flex-col h-5/6 w-3/4">
                    <h2 className="sm:text-xl text-lg">Overview</h2>
                    <p className="abtP font-thin mb-6 lg:mb-48 mt-2 2xl:text-sm text-xs text-center text-gray-400">
                        I started tinkering with coding as far back as 13 years old, making ROBLOX games with Lua. Over the years I messed
                        with various languages, such as C++ and Python, and even built my own PC (which is still going strong)!
                        Sometime in my freshman year of college, I decided I also wanted to pursue a career in Web Development, ultimately
                        dedicating myself to Software/Web Development, Computer Science and, consequentially, Mathematics!
                    </p>
                    <h2 className="sm:text-xl mb-2 text-lg">Fun Facts</h2>
                    <ul className="abtL font-thin list-disc mb-12 2xl:text-sm text-xs text-gray-400">
                        <li>I studied Real Estate for a few months.</li>
                        <li>I've still never tried crab.</li>
                        <li>I could live solely off asian cuisine my entire life.</li>
                        <li>I've lost over 70 pounds.</li>
                        <li>I average over 100 WPM typing speed.</li>
                    </ul>
                </div>  
            </motion.div>
            )}
            {educCheck(choice) && (
                <motion.div className="flex flex-auto h-full justify-center items-center" 
                key={props} initial={{opacity: 0, scale:0.1}} 
                animate={{opacity: 1, scale:1}} exit={{opacity: 0, scale:0.1}}
                transition={{duration: 0.4}}>
                <div className="flex justify-center items-center flex-col h-5/6 w-3/4">
                    <h2 className="sm:text-xl text-lg">Background</h2>
                    <p className="abtP font-thin mb-6 lg:mb-52 mt-2 text-xs 2xl:text-sm text-center text-gray-400">
                        Attended Lonestar College as a CompSci major from 2021-2022 then transferred to North Central Texas College, 
                        where I am currently completing my Associates in Computer Science.
                    </p>
                    <h2 className="sm:text-xl text-lg">Achievements</h2>
                    <ul className="abtL font-thin list-disc mt-2 text-xs 2xl:text-sm sm:mb-2 mb-12 text-gray-400">
                        <li>Transferred to NCTC with a cumulative 3.7 GPA from Lonestar.</li>
                        <li>Offered and accepted membership from Phi Theta Kappa, an International Honors Society.</li>
                        <li>Offered and accepted job for a college-level Math Tutor as a sophmore.</li>
                    </ul>
                </div>  
            </motion.div>
            )}
        </AnimatePresence>
    )

}