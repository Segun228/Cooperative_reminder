import style from "./loginForm.module.css"
import ActionButton from "../UI/actionButton/ActionButton.jsx";
import { MdOutlineCancel } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EyeIcon from "../eyeIcon/EyeIcon.jsx";
import GithubButton from "../githubButton/GithubButton.jsx";
const LoginForm = ({isOpen = true}) => {
    const [open, setOpen] = useState(isOpen);
    const location = useLocation();
    const navigate = useNavigate();


    const handleClose = () => {
        setOpen(false)
        navigate("/")
    }


    return (
        <>
            {open && <div className={style.background}>
                <div className={style.wrapper}>
                    <MdOutlineCancel className={style.cancel} onClick={()=>{handleClose()}} />
                    <div className={style.title}>Log in</div>
                    <GithubButton />
                </div>
            </div>}
        </>
    );
}
export default LoginForm;