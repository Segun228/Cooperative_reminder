import styles from "./actionButton.module.css";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const ActionButton = forwardRef(
    ({ onClick = () => {}, reload = false, children, type }, ref) => {
        const handleClick = (e) => {
            if (type !== "submit") {
                e.preventDefault();
                onClick(e);
                if (reload) window.location.reload();
            }
        };

        return (
        <button
            ref={ref}
            onClick={handleClick}
            className={styles.actionButton}
            type={type || "button"}
        >
            {children || "Submit"}
        </button>
        );
    }
);

ActionButton.displayName = "ActionButton";
export const MActionButton = motion(ActionButton);
export default ActionButton;