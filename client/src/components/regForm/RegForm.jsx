import style from "./regForm.module.css"
import ActionButton from "./../UI/actionButton/ActionButton";
import { MdOutlineCancel } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import EyeIcon from "./../eyeIcon/EyeIcon";
const RegisterForm = ({initialOpen = true}) => {
    const [regError, setRegError] = useState("");
    const [input1Type, changeInput1Type] = useState(false);
    const [input2Type, changeInput2Type] = useState(false);
    const [open, setOpen] = useState(initialOpen);
    const {
        register,
        formState: {
            errors,
            isSubmitting,
        },
        reset,
        handleSubmit,
        watch,
    } = useForm({mode: "all",})

    const onSubmit = async (data)=> {
        //console.log("Отправили вот это", data)
        try{
            await HandleRegisterUser(data.email, data.password)
            setOpen(false);
            reset();
            handleRedirect();
        }
        catch(error){
            //console.log("Popalsa")
            if (error.response?.status == 409) {
                setRegError("User with this email already exists");
            } else {
                setRegError("Registration error. Try again later");
            }
            console.error(error);
        }
    }

    const location = useLocation();
    const navigate = useNavigate();
    let fromPage = location.state?.from?.pathname || "/";
    if(fromPage=="/login"){
        fromPage = "/"
    }
    const handleClose = () => {
        setOpen(false)
        navigate(fromPage)
    }

    const handleRedirect = ()=>{
        navigate("/login", { state: { from: location } });
    }


    const password = watch('password');

    return (
        <>
            {open && <div className={style.background}>
                <div className={style.wrapper}>
                    <MdOutlineCancel className={style.cancel} onClick={()=>{handleClose()}} />
                    <div className={style.title}>Регистрация</div>
                    <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
                        <input 
                        className={errors.email ? style.input_err : style.input} 
                        type="email" 
                        placeholder="Enter your email..."
                        {...register('email', {
                            required: "This field in necessary",
                            minLength: {
                                value: 5,
                                message: "Too short email"
                            },
                            maxLength: {
                                value: 100,
                                message: "Too long email"
                            },
                            pattern: {
                                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "Incorrect email format"
                            },
                            
                        })}
                        />
                        {errors.email && <div className={style.error_warning}>{errors.email.message}</div>}
                        <input 
                        className={errors.telegram ? style.input_err : style.input} 
                        type="telegram" 
                        placeholder="Enter your TG: @..."
                        {...register('email', {
                            required: false,
                            pattern: {
                                value: /^@[\w]{5,32}$/,
                                message: "Incorrect telegram ID format"
                            },
                            
                        })}
                        />
                        {errors.telegram && <div className={style.error_warning}>{errors.telegram.message}</div>}
                        <div className={style.inputContainer}>
                            <input 
                            style={{width:"100%"}}
                            className={errors.password ? style.input_err : style.input} 
                            placeholder="Create new password..."
                            type={input1Type ? "text" : "password"}
                            {...register('password', {
                                required: "This field in necessary",
                                minLength: {
                                    value: 8,
                                    message: "Too short password"
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Too long password"
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
                                    message: "Incorrect password format"
                                },
                            })}
                            />
                            <EyeIcon handleVisible={changeInput1Type}/>
                        </div>
                        {errors.password && <div className={style.error_warning}>{errors.password.message}</div>}
                        <div className={style.inputContainer}>
                            <input 
                            style={{width:"100%"}}
                            className={errors.confirm ? style.input_err : style.input} 
                            type={input2Type ? "text" : "password"}
                            placeholder="Confirm your password..." 
                            {...register('confirm', {
                                required: "This field is necessary",
                                minLength: {
                                    value: 8,
                                    message: "Too short password"
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Too long password"
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
                                    message: "Incorrect password format"
                                },
                                validate: (value) =>
                                    value === password || "Passwords do not match"
                            })}
                            />
                            <EyeIcon handleVisible={changeInput2Type} />
                        </div>
                        {errors.confirm && <div className={style.error_warning}>{errors.confirm.message}</div>}
                        <div className={style.checkboxContainer}>
                            <input 
                            className={style.check} 
                            type="checkbox" 
                            id="myCheckbox"
                            {...register('joke', {
                                required: "This checkbox is necessary",
                            })}
                            />
                            <label className={style.checkboxCaption} htmlFor="myCheckbox">I understand and agree with the privacy terms of use</label>
                        </div>
                        {errors.joke && <div className={style.error_warning}>{errors.joke.message}</div>}
                        {regError && <div className={style.error_warning}>{regError}</div>}
                        <ActionButton disabled={Object.keys(errors).length > 0 || isSubmitting} type="submit">{isSubmitting ? "Loading..." : "Submit"}</ActionButton>
                            <div className={style.regCaption} onClick={()=> handleRedirect()}>
                                Already have an account?<br />
                                <span className={style.regMainCaption}>Log in</span>
                            </div>
                    </form>
                </div>
            </div>}
        </>
    );
}
export default RegisterForm;