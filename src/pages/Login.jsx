import React, { useState } from 'react'
import Logo from '../assets/logo.svg';
import { BaseUrl, usePostRequest } from '../Hooks/useRequest';
import { useNavigate } from 'react-router-dom';
import { IoKeyOutline, IoEyeOutline, IoEyeOffOutline, CiMail } from "../utils/Icons.js";
import SnackbarAlert from '../components/SnackbarAlert.jsx';




const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [message, setMessage] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value
        const password = e.target[1].value
        const checked = e.target[2];
        const { code, data } = await usePostRequest('login', { email, password })
        if (code === 200 && data.token) {
            localStorage.setItem('token1fx', JSON.stringify(data.token))
            setOpen(true)
            setMessage('Login Successfull')
            setSeverity('success')
            navigate('/')
        }
    }

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
                            <input type="email" placeholder='enter email' className='w-full bg-transparent outline-none font-bold' />
                        </div>
                    </div>
                    <div className='w-full px-4 py-2 rounded-2xl flex items-center gap-3 bg-[#34395C] '>
                        <IoKeyOutline className='text-white' size={35} />
                        <div className='flex flex-col text-white w-full'>
                            <span className='text-xs sm:text-sm'>Password</span>
                            <input type={showPassword ? 'text' : 'password'} placeholder='enter password' className='w-full bg-transparent outline-none font-bold' />
                        </div>
                        {
                            showPassword ? (<IoEyeOutline
                                onClick={() => setShowPassword(!showPassword)} size={25} className='text-[#6A74CC]' />) : (<IoEyeOffOutline
                                    onClick={() => setShowPassword(!showPassword)} size={25} className='text-[#6A74CC]' />

                            )
                        }

                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 text-white'>
                            <input type="checkbox" name="remember" value={true} />
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