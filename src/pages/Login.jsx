import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";
import Logo from '../assets/logo.svg';
import { IoKeyOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";




const Login = () => {
    const [showPassword, setShowPassword] = useState(false)


    return (
        <main className='w-full px-9 sm:px-0 min-h-screen bg-[#191C2F] flex justify-center items-center'>
            <div className='w-[500px] min-h-[550px] rounded-2xl px-10 py-8 flex flex-col gap-6 bg-[#23273F]'>
                <div className='w-44'>
                    <img src={Logo} alt="" />
                </div>
                <div className='flex flex-col'>
                    <span className='text-white'>Welcome to</span>
                    <p className='text-[#6A74CC] font-extrabold text-2xl'>Crypto Platform</p>
                </div>

                <form className='w-full flex flex-col gap-5'>
                    <div className='w-full px-4 py-2 rounded-2xl flex items-center gap-3 bg-[#34395C] '>
                        <CiMail className='text-white' size={40} />
                        <div className='flex flex-col text-white w-full'>
                            <span className='text-sm'>E-mail</span>
                            <input type="text" placeholder='enter email' className='w-full bg-transparent outline-none font-bold' />
                        </div>
                    </div>
                    <div className='w-full px-4 py-2 rounded-2xl flex items-center gap-3 bg-[#34395C] '>
                        <IoKeyOutline className='text-white' size={40} />
                        <div className='flex flex-col text-white w-full'>
                            <span className='text-sm'>E-mail</span>
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
                            <input type="checkbox" name="" id="" />
                            <span>Remember me</span>
                        </div>
                        <p className='text-sm text-[#6A74CC]'>
                            Forgot password?
                        </p>
                    </div>
                    <button className='w-full  bg-gradient-to-b from-[#5F27CD] to-[#341F97] py-3 rounded-md font-semibold text-white' type='submit'>
                        Login
                    </button>
                </form>

                <div className='flex text-white justify-center'>
                    <p>Dont have an Account?</p>
                    Register
                </div>
            </div>
        </main>
    )
}

export default Login