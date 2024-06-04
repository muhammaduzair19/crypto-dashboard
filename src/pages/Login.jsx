import React, { useRef, useState } from 'react'
import Logo from '../assets/logo.svg';
import { usePostRequest } from '../Hooks/useRequest';
import { useNavigate } from 'react-router-dom';
import { IoKeyOutline, IoEyeOutline, IoEyeOffOutline, CiMail } from "../utils/Icons.js";
import SnackbarAlert from '../components/SnackbarAlert.jsx';




const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const rememberMeRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const validate = ({ email, password }) => {
        console.log(email, "email");
        console.log(password, "password");
        const errors = {};

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }

        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        console.log(errors);

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            rememberMe: rememberMeRef.current.checked,
        };
        console.log("formData ==>", formData)

        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const { code, data } = await usePostRequest('login', formData)
            if (code === 200 && data) {
                localStorage.setItem('token1fx', JSON.stringify(data))
                setOpen(true)
                setMessage('Login Successfull')
                setSeverity('success')
                navigate('/')
            }
        }
    };


    const handleClose = () => {
        setOpen(false)
    };



    return (
        <main className='w-full px-9 sm:px-0 min-h-screen bg-[#191C2F] flex justify-center items-center'>
            <SnackbarAlert handleClose={handleClose} open={open} message={message} severity={severity} />
            <div className='w-[500px] min-h-[550px] rounded-2xl px-10 py-8 flex flex-col gap-6 bg-[#23273F]'>
                <div className='w-44'>
                    <img src={Logo} alt="" />
                </div>
                <div className='flex flex-col'>
                    <span className='text-white'>Welcome to</span>
                    <p className='text-[#6A74CC] font-extrabold text-xl sm:text-2xl'>Crypto Platform</p>
                </div>

                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                    <div className='w-full px-4 py-2 rounded-2xl flex items-center gap-3 bg-[#34395C] '>
                        <CiMail className='text-white' size={35} />
                        <div className='flex flex-col text-white w-full'>
                            <span className='text-xs sm:text-sm'>E-mail</span>
                            <input ref={emailRef} required type="email" placeholder='enter email' className='w-full bg-transparent outline-none font-bold' />
                        </div>

                    </div>
                    {errors.email && <p className='text-xs text-red-600 -mt-4'>{errors.email}</p>}
                    <div className='w-full px-4 py-2 rounded-2xl flex items-center gap-3 bg-[#34395C] '>
                        <IoKeyOutline className='text-white' size={35} />
                        <div className='flex flex-col text-white w-full'>
                            <span className='text-xs sm:text-sm'>Password</span>
                            <input ref={passwordRef} required type={showPassword ? 'text' : 'password'} placeholder='enter password' className='w-full bg-transparent outline-none font-bold' />
                        </div>
                        {
                            showPassword ? (<IoEyeOutline
                                onClick={() => setShowPassword(!showPassword)} size={25} className='text-[#6A74CC]' />) : (<IoEyeOffOutline
                                    onClick={() => setShowPassword(!showPassword)} size={25} className='text-[#6A74CC]' />

                            )
                        }
                    </div>
                    {errors.password && <p className='text-xs text-red-600 -mt-4'>{errors.password}</p>}
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 text-white'>
                            <input defaultChecked type="checkbox" name="remember" className='cursor-pointer' ref={rememberMeRef} />
                            <span className='text-xs sm:text-sm'>Remember me</span>
                        </div>
                        <p className='text-xs sm:text-sm text-[#6A74CC]'>
                            Forgot password?
                        </p>
                    </div>
                    <button className='w-full  bg-gradient-to-b from-[#5F27CD] to-[#341F97] py-3 rounded-md font-semibold text-white' type='submit'>
                        Login
                    </button>
                </form>

                <div className='flex text-white justify-center text-sm sm:text-md'>
                    <p >Dont have an Account?</p>
                    Register
                </div>
            </div>
        </main>
    )
}

export default Login