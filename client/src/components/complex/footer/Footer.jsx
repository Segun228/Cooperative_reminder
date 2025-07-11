import styles from "./footer.module.css"
import {motion} from "framer-motion"
import { useRef, useState } from "react";
import { IoLogoGithub } from "react-icons/io";
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
    <motion.footer 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        custom={0}
        variants={middleTextAnimation}
        className={styles.wrapper}
    >   
        <section className={styles.section} style={{width:"50%"}}>
            <div className={styles.title} >Habit builder<span className={styles.caption}>©</span></div>
            <div className={styles.caption} style={{width:"80%", wordBreak:"break-word"}}>
                It is believed, that it takes 21 day to buld a habit,
                however,it is all about consistency, not fixed time.
                No habits will stay with you for long, unless you build strong discipline
            </div>
        </section>
        <section className={styles.section} style={{width:"30%"}}>
            <div className={styles.title} >Developers</div>
            <div className={styles.devblock}>
                <div className={styles.container}>
                    <IoLogoGithub className={styles.logo}/>
                    <div className={styles.namecaption}>
                        Mattwix
                    </div>
                </div>
                <div className={styles.container}>
                    <IoLogoGithub className={styles.logo}/>
                    <div className={styles.namecaption}>
                        Segun228
                    </div>
                </div>
            </div>
            <div className={styles.caption} >Check out our other projects</div>
        </section>

    </motion.footer>);
}

export default Footer;