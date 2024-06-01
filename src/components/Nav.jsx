import React, { useEffect, useState } from 'react'
import { IoEyeOffOutline, AiOutlineLogout, IoEyeOutline, HiOutlineBell, HiMiniMagnifyingGlass } from '../utils/Icons.js';
import { useToken } from '../Hooks/useRequest.js';
import { useNavigate } from 'react-router-dom';



const Nav = () => {
    const [showBalance, setShowBalance] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const navigate = useNavigate()
    const logoutHandler = () => {
        setTrigger(true)
        localStorage.removeItem('token1fx')
    }

    useEffect(() => {
        const token = useToken();
        if (token == null || token == undefined) {
            navigate('/login')
        }
    }, [trigger])



    return (
        <nav className='w-full h-full px-2 bg-transparent flex justify-between py-5'>
            <div className='bg-[#34395C] rounded-2xl w-[50%] sm:w-[35%] px-2 flex items-center'>
                <HiMiniMagnifyingGlass color='#575979' size={25} />
                <input type="text" placeholder='Search' className='w-full text-white p-2 outline-none bg-transparent placeholder:text-white' />
            </div>
            <div className='flex gap-5 items-center'>
                <div className=" items-end gap-2 hidden sm:flex">

                    {
                        showBalance ? (<IoEyeOutline
                            onClick={() => setShowBalance(!showBalance)} size={25} className='text-[#575979]' />) : (<IoEyeOffOutline
                                onClick={() => setShowBalance(!showBalance)} size={25} className='text-[#575979]' />

                        )
                    }
                    <div className='flex flex-col items-end'>
                        <span className='text-[#575979] text-sm'>Total Balance</span>

                        <span className='font-bold text-white'>{showBalance ? '$ 0' : '*******'}</span>
                    </div>

                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl text-white bg-[#34395C] flex items-center justify-center overflow-hidden">
                    <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" alt="profile img" className='w-full h-full object-cover' />
                </div>
                <div
                    onClick={logoutHandler}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl cursor-pointer text-white bg-[#34395C] flex items-center justify-center">
                    <AiOutlineLogout size={25} />
                </div>
            </div>
        </nav>
    )
}

export default Nav