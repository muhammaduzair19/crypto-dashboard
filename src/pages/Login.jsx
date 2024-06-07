import React, { useRef, useState } from 'react';
import Logo from '../assets/logo.svg';
import { usePostRequest } from '../Hooks/useRequest';
import { Link, useNavigate } from 'react-router-dom';
import { IoKeyOutline, IoEyeOutline, IoEyeOffOutline, CiMail } from "../utils/Icons.js";
import SnackbarAlert from '../components/SnackbarAlert.jsx';
import { useLoginValidation } from '../Hooks/useValidation.js';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const rememberMeRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            rememberMe: rememberMeRef.current.checked,
        };

        const validationErrors = useLoginValidation(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const result = await usePostRequest('login', formData);
            const { data, code } = result;
            if (code === 200 && data) {
                localStorage.setItem('token1fx', JSON.stringify(data));
                setOpen(true);
                setMessage('Login Successful');
                setSeverity('success');
                setTimeout(() => {
                    navigate('/');
                }, 2000)
            } else {
                setOpen(true);
                setMessage('Login Failed');
                setSeverity('error');
            }
        }
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/');
    };

    return (
        <main className='w-full px-9 sm:px-0 min-h-screen bg-[#191C2F] flex justify-center items-center'>
            <SnackbarAlert handleClose={handleClose} open={open} message={message} severity={severity} />
            <div className='w-[500px] min-h-[550px] rounded-2xl px-10 py-8 flex flex-col gap-6 bg-[#23273F]'>
                <div className='w-44'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='flex flex-col'>
                    <span className='text-white'>Welcome to</span>
                    <p className='text-[#6A74CC] font-extrabold text-xl sm:text-2xl'>Crypto Platform</p>
                </div>

                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                    <div className='w-full px-4 py-2 rounded-2xl flex items-center gap-3 bg-[#34395C]'>
                        <CiMail className='text-white' size={35} />
                        <div className='flex flex-col text-white w-full'>
                            <span className='text-xs sm:text-sm'>E-mail</span>
                            <input ref={emailRef} required type="email" placeholder='Enter email' className='w-full bg-transparent outline-none font-bold' />
                        </div>
                    </div>
                    {errors.email && <p className='text-xs text-red-600 -mt-4'>{errors.email}</p>}
                    <div className='w-full px-4 py-2 rounded-2xl flex items-center gap-3 bg-[#34395C]'>
                        <IoKeyOutline className='text-white' size={35} />
                        <div className='flex flex-col text-white w-full'>
                            <span className='text-xs sm:text-sm'>Password</span>
                            <input ref={passwordRef} required type={showPassword ? 'text' : 'password'} placeholder='Enter password' className='w-full bg-transparent outline-none font-bold' />
                        </div>
                        <span
                            className='text-lg text-[#6A74CC] cursor-pointer'
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}
                        </span>
                    </div>
                    {errors.password && <p className='text-xs text-red-600 -mt-4'>{errors.password}</p>}
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 text-white'>
                            <input type="checkbox" name="remember" className='cursor-pointer' ref={rememberMeRef} />
                            <span className='text-xs sm:text-sm'>Remember me</span>
                        </div>
                        <Link to={'/forget-password'} className='text-xs sm:text-sm text-[#6A74CC]'>
                            Forgot password?
                        </Link>
                    </div>
                    <button className='w-full bg-gradient-to-b from-[#5F27CD] to-[#341F97] py-3 rounded-md font-semibold text-white' type='submit'>
                        Login
                    </button>
                </form>

                <div className='flex text-white justify-center text-sm sm:text-md'>
                    <p>Don't have an Account?</p>
                    <Link to={'/login'} className='text-[#6A74CC] ml-1 font-bold'>
                        Register
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Login;
