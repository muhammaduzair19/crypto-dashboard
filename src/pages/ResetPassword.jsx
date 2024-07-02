import { useEffect, useRef, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoKeyOutline, IoEyeOutline, IoEyeOffOutline } from "../utils/Icons.js";
import { useConfirmPasswordValidation } from '../Hooks/useValidation.js';
import { useResetPasswordRequest } from '../Hooks/useRequest.js';
import Logo from '../assets/logo.svg';
import SnackbarAlert from '../components/SnackbarAlert.jsx';

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

        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        const validationErrors = useConfirmPasswordValidation(password, confirmPassword);
        setErrors(validationErrors);

        if (!Object.keys(validationErrors).length) {
            const { message, code } = await useResetPasswordRequest('reset-password', token, { password });

            setOpen(true);
            setMessage(code === 200 ? 'Password Reset Successfully' : message);
            setSeverity(code === 200 ? 'success' : 'error');
            if (code === 200) {
                setTimeout(() => navigate('/login'), 2000);
            }

            setMessage(code === 404 ? 'Link has been expired, Resend the email' : message);
            setSeverity(code === 404 ? 'error' : 'error');
            if (code === 404) {
                setTimeout(() => navigate('/forget-password'), 3000);
            }
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        if (!token) {
            return navigate('/login')
        }
        tokenExpiration(token);
        setToken(token)

    }, [location.search]);


    const handleClose = () => {
        setOpen(false);
        if (severity === 'success') { navigate('/login') }
        if (severity === 'error') { navigate('/forget-password') }

    };

    const tokenExpiration = (token) => {
        const decoded = jwtDecode(token);
        const exp = decoded.exp;
        const currentTime = Math.floor(Date.now() / 1000);
        const diffInSeconds = exp - currentTime;
        const diffInMilliseconds = diffInSeconds * 1000;
        setTimeout(() => {
            setOpen(true)
            setMessage('Link has been expired, Resend thewqdhwd email');
            setSeverity('error');
            setTimeout(() => navigate('/forget-password'), 3000);
        }, diffInMilliseconds);
    }

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
                    {errors.password && <p className='text-xs text-red-600 -mt-4'>{errors.password}</p>}
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
                    {errors.confirmPassword && <p className='text-xs text-red-600 -mt-4'>{errors.confirmPassword}</p>}
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
