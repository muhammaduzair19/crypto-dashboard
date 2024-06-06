import React, { useEffect, useRef, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Logo from '../assets/logo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoKeyOutline, IoEyeOutline, IoEyeOffOutline, CiMail } from "../utils/Icons.js";
import SnackbarAlert from '../components/SnackbarAlert.jsx';
import { useConfirmPasswordValidation } from '../Hooks/useValidation.js';
import { usePostRequest, useResetPasswordRequest } from '../Hooks/useRequest.js';
import Error from '../components/Error.jsx';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [tokenExpire, setTokenExpire] = useState(false)
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

        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        const validationErrors = useConfirmPasswordValidation(password, confirmPassword);
        setErrors(validationErrors);
        console.log(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const result = await useResetPasswordRequest('reset-password ', token, { password });
            const { message, code } = result;
            console.log(result);
            if (code === 200) {
                setOpen(true);
                setMessage('Password Reset Successfully');
                setSeverity('success');
                setTimeout(() => {
                    navigate('/login');
                }, 2000)
            } else {
                setOpen(true);
                setMessage(message);
                setSeverity('error');
            }
        }
    };


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        if (!token) {
            return navigate('/login')
        }
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            setTokenExpire(true)
        }
        else {
            setToken(token)
        }
    }, [location.search]);


    const handleClose = () => {
        setOpen(false);
        if (severity === 'success') { navigate('/login') }

    };

    return (
        <main className='w-full px-9 sm:px-0 min-h-screen bg-[#191C2F] flex justify-center items-center'>
            {
                tokenExpire ? (<Error code={404} text={'Your Link Has Been Expired. Please generate new one'} link={'Back to login'} />) : (<>
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
                </>)
            }
        </main>

    );
};

export default ResetPassword;
