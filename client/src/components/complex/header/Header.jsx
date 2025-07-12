import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css"
import {LayoutGroup, AnimatePresence} from 'framer-motion'
import { useLocation } from "react-router-dom";
import Line from "./subcomponents/Line";
import { useSelector, useDispatch } from "react-redux";
import { AiFillBulb } from "react-icons/ai";
import getUserName from "../../../helpers/getUserName";


                        /*<NavLink to="/dashboard" className={styles.navItemLink}>
                            <AnimatePresence>
                                {activeCurrentIndex === 2 && <Line />}
                            </AnimatePresence>
                            <div onClick={() => handleClick(2)} className={styles.navItem}>Dashboard</div>
                        </NavLink>
                        
                        
                        <NavLink to="/dashboard" onClick={() => handleClick(2)} className={styles.navSideItem}>Dashboard</NavLink>
                        */


const Header = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [username, setUsername] = useState(null);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const store_username = useSelector(state => state.main.username)
    const dispatch = useDispatch()

    const handleClick = (ind) => {
        setActiveIndex(ind);
        setMenuOpen(false);
    };

    const location = useLocation();
    const activeCurrentIndex = (() => {
        switch (location.pathname) {
            case "/": return 0;
            case "/create": return 1;
            // case "/dashboard": return 2;
            case "/cabinet": return 3;
            default: return -1;
        }
    })();

    useEffect(()=>{
        const fetchUsername = async () => {
            const username_buf = await getUserName(dispatch)
            setUsername(username_buf || store_username || "Log in")
        }
        fetchUsername()
    }, [store_username])
    return (
        <>
            <div className={styles.wrapper}>
                <Link to="/" onClick={() => handleClick(-1)}>
                    <div className={styles.headerBlock}>
                        <AiFillBulb className={styles.logo}/>
                        <div className={styles.textContainer}>
                            <div className={styles.title}>Habit builder</div>
                            <div className={styles.caption}>Consistency is the key</div>
                        </div>
                    </div>
                </Link>

                <LayoutGroup>
                    <div className={styles.navigation}>
                        <NavLink to="/" className={styles.navItemLink}>
                            <AnimatePresence>
                                {activeCurrentIndex === 0 && <Line />}
                            </AnimatePresence>
                            <div onClick={() => handleClick(0)} className={styles.navItem}>Home</div>
                        </NavLink>
                        <NavLink to="/create" className={styles.navItemLink}>
                            <AnimatePresence>
                                {activeCurrentIndex === 1 && <Line />}
                            </AnimatePresence>
                            <div onClick={() => handleClick(1)} className={styles.navItem}>Create</div>
                        </NavLink>






                        <NavLink to="/cabinet" className={styles.navItemLink}>
                            <AnimatePresence>
                                {activeCurrentIndex === 3 && <Line />}
                            </AnimatePresence>
                            <div onClick={() => handleClick(3)} className={styles.navItem}>{username || store_username || "Log in"}</div>
                        </NavLink>
                    </div>
                </LayoutGroup>


                <div className={styles.burger} onClick={() => setMenuOpen(prev => !prev)}>
                    <button className={styles.burger__menu + " " + (isMenuOpen ? styles.burger_menu__active : '')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>


            <div className={`${styles.sideMenu} ${isMenuOpen ? styles.sideMenuOpen : ""}`}>
                <NavLink to="/" onClick={() => handleClick(0)} className={styles.navSideItem}>Home</NavLink>
                <NavLink to="/create" onClick={() => handleClick(1)} className={styles.navSideItem}>Create</NavLink>



                <NavLink to="/cabinet" onClick={() => handleClick(3)} className={styles.navSideItem}>{username || store_username || "Log in"}</NavLink>
            </div>
        </>
    );
};

export default Header;