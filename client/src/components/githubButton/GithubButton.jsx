import { FaGithub } from "react-icons/fa";
import styles from "./GithubButton.module.css";
import { BASE_URL } from "../../../config";

const GithubButton = ({ text = "Login via GitHub", redirectUrl }) => {
    const handleClick = () => {
        window.location.href = redirectUrl ?? BASE_URL+"auth/github/";
    };

    return (
        <button onClick={handleClick} className={styles.githubButton}>
        <FaGithub className={styles.icon} />
        {text}
        </button>
    );
};

export default GithubButton;