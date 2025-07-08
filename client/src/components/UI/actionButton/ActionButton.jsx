import styles from "./actionButton.module.css";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const ActionButton = forwardRef(
    ({ onClick = () => {}, reload = false, children }, ref) => {
        const handleClick = (e) => {
        onClick(e);
        console.log(children)
        if (reload) {
            window.location.reload();
        }
        };

        return (
        <button
            ref={ref}
            onClick={handleClick}
            className={styles.actionButton}
        >
            {children || "Submit"}
        </button>
        );
    }
);

ActionButton.displayName = "ActionButton";
export const MActionButton = motion(ActionButton);
export default ActionButton;