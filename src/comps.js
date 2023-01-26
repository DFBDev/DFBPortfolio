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
                key={props} initial={{opacity: 0, y: "50%"}} 
                animate={{opacity: 1, y: "0%"}} exit={{opacity: 0, y: "-50%"}}
                transition={{duration: 0.4}}>
                <div className="headNum sm:text-5xl text-2xl mr-3 ml-4">3. </div>
                    <div className="headCont flex flex-col text-neutral-400 md:text-2xl 2xl:text-xl text-sm">
                        About Me
                        <h1 className=" w-24 font-thin text-left text-neutral-400 2xl:text-xl text-xs">Use the dots!</h1>
                    </div>
                </motion.header>
            )}
            {ssCheck(choice) && (
                <motion.div className="flex flex-auto h-full justify-center items-center" 
                key={props} initial={{opacity: 0, y: "50%"}} 
                animate={{opacity: 1, y: "0%"}} exit={{opacity: 0, y:"-50%"}}
                transition={{duration: 0.4}}>
                <div className="">testing1testing1testing1testing1</div>
            </motion.div>
            )}
            {whCheck(choice) && (
                <motion.div className="flex flex-auto h-full justify-center items-center" 
                key={props} initial={{opacity: 0, y: "50%"}} 
                animate={{opacity: 1, y: "0%"}} exit={{opacity: 0, y:"-50%"}}
                transition={{duration: 0.4}}>
                <div className="">testing2testing2testing2testing2</div>
            </motion.div>
            )}
            {persCheck(choice) && (
                <motion.div className="flex flex-auto h-full justify-center items-center" 
                key={props} initial={{opacity: 0, y: "50%"}} 
                animate={{opacity: 1, y: "0%"}} exit={{opacity: 0, y:"-50%"}}
                transition={{duration: 0.4}}>
                <div className="abtContent flex justify-center items-center flex-col h-5/6 w-3/4">
                    <h2 className="sm:text-xl text-lg">Overview</h2>
                    <p className="abtP font-thin mb-12 lg:mb-48 mt-2 text-xs text-center">
                        I started tinkering with coding as far back as 13 years old, making ROBLOX games with Lua. Over the years I tinkered
                        with various languages, ranging from C++ to Python, and even built my own PC (which is still going strong)!
                        Sometime in my freshman year of college, I decided I also wanted to pursue a career in Web Development, ultimately
                        dedicating myself to Software/Web Development, Computer Science and, consequentially, Mathematics!
                    </p>
                    <h2 className="sm:text-xl mb-2 text-lg">Fun Facts</h2>
                    <ul className="abtL font-thin list-disc mb-12 text-xs">
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
                key={props} initial={{opacity: 0, y: "50%"}} 
                animate={{opacity: 1, y: "0%"}} exit={{opacity: 0, y:"-50%"}}
                transition={{duration: 0.4}}>
                <div className="flex justify-center items-center flex-col h-5/6 w-3/4">
                    <h2 className="sm:text-xl text-lg">Background</h2>
                    <p className="font-thin mb-12 lg:mb-52 mt-2 text-xs text-center">
                        Attended Lonestar College as a CompSci major from 2021-2022 then transferred to North Central Texas College, 
                        where I am currently completing my Associates in Computer Science.
                    </p>
                    <h2 className="sm:text-xl text-lg">Achievements</h2>
                    <ul className="font-thin list-disc mt-2 text-xs">
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