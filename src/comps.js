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
                <div className="">testing3testing3testing3testing3</div>
            </motion.div>
            )}
            {educCheck(choice) && (
                <motion.div className="flex flex-auto h-full justify-center items-center" 
                key={props} initial={{opacity: 0, y: "50%"}} 
                animate={{opacity: 1, y: "0%"}} exit={{opacity: 0, y:"-50%"}}
                transition={{duration: 0.4}}>
                <div className="">testing4testing4testing4testing4</div>
            </motion.div>
            )}
        </AnimatePresence>
    )

}