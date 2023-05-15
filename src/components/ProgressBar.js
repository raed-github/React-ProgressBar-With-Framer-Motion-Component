import {motion, animate} from 'framer-motion';
import { useEffect, useRef } from "react";

function ProgressBar({className, value}) {
    const progressText = useRef(null);
    useEffect(() => {
        const progressVar = progressText.current?.textContent;
        if(progressVar != null) {
            animate(parseInt(progressVar),value, {
                duration: 2,
                onUpdate : (cv) => {
                    progressText.current.textContent = cv.toFixed(0)
                }
            });
        }
    }, [value]);
    return(
        <div className="progressbar-container">
            <div className="progressbar">
                <motion.div 
                className="bar"
                animate={{
                    width: `${value}%`
                }}
                transition={{
                    duration: 2
                }}
                />
            </div>
            <div className="progressbar-text-container">
                <p ref={progressText}>0</p>
                <p>%</p>
            </div>
        </div>
    );
}

export default ProgressBar;