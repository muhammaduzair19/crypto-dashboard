import React, { useRef, useState } from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import SnackbarAlert from '../components/SnackbarAlert.jsx';
import { CiMail } from "../utils/Icons.js";



const ForgotPassword = () => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const emailRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
        };
        console.log(formData);
    };
    

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <main className='w-full px-9 sm:px-0 min-h-screen bg-[#191C2F] flex justify-center items-center'>
            <SnackbarAlert handleClose={handleClose} open={open} message={message} severity={severity} />
            <div className='w-[500px] min-h-[400px] rounded-2xl px-10 py-8 flex flex-col gap-6 bg-[#23273F]'>
                <div className='w-44'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='flex flex-col'>
                    <span className='text-white'>Forgot Password</span>
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
                    <button className='w-full bg-gradient-to-b from-[#5F27CD] to-[#341F97] py-3 rounded-md font-semibold text-white' type='submit'>
                        Submit
                    </button>
                </form>

                <Link to={'/login'} className='text-[#6A74CC] text-center font-bold'>
                    Back to Login
                </Link>
            </div>
        </main>
    );
};

export default ForgotPassword;
