import styles from "./footer.module.css"
import {motion} from "framer-motion"
import { useRef, useState } from "react";
const Footer = () => {
    const middleTextAnimation = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: custom => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.3,
                duration: 0.4, 
                ease: "easeOut",
            }
        }),
    }


    return (
    <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        custom={0}
        variants={middleTextAnimation}
        className={styles.wrapper}
    >
        
    </motion.div>);
}

export default Footer;