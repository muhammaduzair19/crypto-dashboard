import React, { useState } from 'react'
import Logo from '../assets/logo.svg';
import { BsSpeedometer2 } from "react-icons/bs";


const Sidemenu = () => {

    const [active, setActive] = useState('dashboard')

    return (
        <section className='w-full h-screen bg-tranparent text-white flex flex-col justify-between py-2'>
            <div className='flex flex-col gap-5'>
                <div className='w-full flex justify-center items-center py-3 lg:py-2 px-2 lg:px-6'>
                    <img src={Logo} alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='w-full px-2 lg:px-6 flex flex-col text-sm md:text-lg'>
                        Hello, Welcome Back,
                        <span className='font-bold text-md md:text-xl'>Samwell</span>
                    </span>
                    <div className="flex flex-col gap-3 md:gap-4">
                        <MenuItem title="dashboard" active={active} setActive={setActive} />
                        <MenuItem title="market" active={active} setActive={setActive} />
                        <MenuItem title="wallet" active={active} setActive={setActive} />
                        <MenuItem title="history" active={active} setActive={setActive} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col  gap-5'>
                <div className="flex flex-col gap-2 md:gap-4">
                    <MenuItem title="support" active={active} setActive={setActive} />
                    <MenuItem title="preferences" active={active} setActive={setActive} />

                </div>
                <span className='w-full px-2 lg:px-6 flex flex-col text-xs md:text-sm text-darker-600'>
                    Crypto Corporation © 2024
                    <span>
                        Privacy Policy - Terms & Conditions
                    </span>
                </span>
            </div>
        </section>
    )
}

export default Sidemenu



const MenuItem = ({ title, active, setActive }) => (
    <div
        onClick={() => setActive(title)}
        className="flex gap-2 cursor-pointer items-center  w-full justify-center lg:justify-start lg:px-6 relative">
        <BsSpeedometer2 className={`${active === title ? 'text-primary-light' : 'text-darker-800'} text-3xl md:text-2xl`}/>
        <p className={`${active === title ? 'text-white' : 'text-darker-600'} text-lg hidden lg:block capitalize`}>{title}</p>
    </div>

)