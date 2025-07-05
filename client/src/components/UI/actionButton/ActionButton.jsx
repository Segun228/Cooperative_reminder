import styles from "./actionButton.module.css";
import { motion } from "framer-motion";
import { forwardRef, children } from "react";

const ActionButton = forwardRef(({ onClick = () => {}, reload = false, children}, ref) => {
    const handleClick = (e) => {
        onClick(e)
        if(reload){
            window.location.reload();
        }
    }
    return (
        <button
            ref={ref}
            onClick={(e)=>handleClick(e)}
            className={styles.actionButton}
        >
            {children || "Submit"}
        </button>
    );
});

export const MActionButton = motion.create(ActionButton);
export default ActionButton;