import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/logo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoKeyOutline, IoEyeOutline, IoEyeOffOutline, CiMail } from "../utils/Icons.js";
import SnackbarAlert from '../components/SnackbarAlert.jsx';
import { useConfirmPasswordValidation } from '../Hooks/useValidation.js';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [token, setToken] = useState('');
    const location = useLocation();
    const confirmPasswordRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value,
        };

        console.log(formData);
        const validationErrors = useConfirmPasswordValidation(formData);
        setErrors(validationErrors);
        console.log(validationErrors);
        console.log(token);

        // if (Object.keys(validationErrors).length === 0) {
        //     const result = await usePostRequest('login', formData);
        //     console.log(result);
        //     const { data, code } = result;
        //     if (code === 200 && data) {
        //         localStorage.setItem('token1fx', JSON.stringify(data));
        //         setOpen(true);
        //         setMessage('Login Successful');
        //         setSeverity('success');
        //         navigate('/');
        //     } else {
        //         setOpen(true);
        //         setMessage('Login Failed');
        //         setSeverity('error');
        //     }
        // }
    };


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        setToken(token);
    }, [location.search]);


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <main className='w-full px-9 sm:px-0 min-h-screen bg-[#191C2F] flex justify-center items-center'>
            <SnackbarAlert handleClose={handleClose} open={open} message={message} severity={severity} />
            <div className='w-[500px] rounded-2xl px-10 py-8 flex flex-col gap-6 bg-[#23273F]'>
                <div className='w-44'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='flex flex-col'>
                    <span className='text-white'>Reset Password</span>
                    <p className='text-[#6A74CC] font-extrabold text-xl sm:text-2xl'>Crypto Platform</p>
                </div>

                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                    <div className='w-full px-4 py-2 rounded-2xl flex items-center gap-3 bg-[#34395C]'>
                        <IoKeyOutline className='text-white' size={35} />
                        <div className='flex flex-col text-white w-full'>
                            <span className='text-xs sm:text-sm'>New Password</span>
                            <input ref={passwordRef} required type={showPassword ? 'text' : 'password'} placeholder='enter new password' className='w-full bg-transparent outline-none font-bold' />
                        </div>
                        <span
                            className='text-lg text-[#6A74CC] cursor-pointer'
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}
                        </span>
                    </div>
                    <div className='w-full px-4 py-2 rounded-2xl flex items-center gap-3 bg-[#34395C]'>
                        <IoKeyOutline className='text-white' size={35} />
                        <div className='flex flex-col text-white w-full'>
                            <span className='text-xs sm:text-sm'>Confirm New Password</span>
                            <input ref={confirmPasswordRef} required type={showConfirmPassword ? 'text' : 'password'} placeholder='confirm new password' className='w-full bg-transparent outline-none font-bold' />
                        </div>
                        <span
                            className='text-lg text-[#6A74CC] cursor-pointer'
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}
                        </span>
                    </div>
                    <button className='w-full bg-gradient-to-b from-[#5F27CD] to-[#341F97] py-3 rounded-md font-semibold text-white' type='submit'>
                        Reset
                    </button>
                </form>

                <Link to={'/login'} className='text-[#6A74CC] text-center font-bold'>
                    Back to Login
                </Link>
            </div>
        </main>
    );
};

export default ResetPassword;
