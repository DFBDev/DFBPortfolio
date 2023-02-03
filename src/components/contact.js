import {AnimatePresence, motion} from "framer-motion";

export const ContactPopup = ({props}) => {

    const openCheck = (args) => {
        if (args == "open"){
            return true;
        }
        else if (args != "open"){
            return false;
        }
    }

    return (
        <AnimatePresence mode="wait">
            {openCheck(props) && (
                <motion.div className="contactPopup" key={props} initial={{opacity: 0}} 
                animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.4}}>
                    <div className="contactWindow">
                        <h1 className="contactHeader text-xl mt-6 mb-16"><div className="headNum sm:text-5xl text-4xl mr-3">4. </div>Contact me!</h1>
                        <p className="font-thin text-sm w-3/4 text-center mb-auto">
                            You can reach me at either my personal email <a className="contactRef" href="mailto:browndon962@gmail.com">(browndon962@gmail.com)</a>
                            or <a className="contactRef" href="mailto:dbdevbusiness@gmail.com">(dbdevbusiness@gmail.com)</a>.
                            Feel free to also reach out to me on <a className="contactRef" href="https://www.linkedin.com/in/donathan-brown-929255248/">LinkedIn!</a>  
                            <br></br>
                            Whether you're just wanting to chat or pick my brain, I'm always down for a chat!
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        )
}