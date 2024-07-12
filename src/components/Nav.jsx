import React, { useEffect, useState } from 'react'
import { IoEyeOffOutline, IoMenuOutline, IoEyeOutline, HiOutlineBell, HiMiniMagnifyingGlass, FaRegCircleUser } from '../utils/Icons.js';
import DropDown from './DropDown.jsx';
import { useGetRequest, useToken } from '../Hooks/useRequest.js';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import MobileSideMenu from './MobileSideMenu.jsx';



const Nav = () => {
    const [showBalance, setShowBalance] = useState(false)
    const [balance, setBalance] = useState();
    const navigate = useNavigate()

    const getBalance = async () => {
        const { data, code } = await useGetRequest('balance')
        if (data != null && code == 200) {
            setBalance(data)
        }
        else {
            setBalance([])
        }
    }





    useEffect(() => {
        const token = useToken();
        if (token == null || token == undefined) {
            navigate('/login')
        }
        else {
            getBalance();
        }

    }, [])






    return (
        <nav className='w-full h-full px-2 bg-transparent flex  py-2 items-center gap-2 border-b  border-[#34395C]'>
            <div className='flex items-center justify-center'>
                <MobileSideMenu />
            </div>
            <div className='bg-[#34395C] rounded-2xl w-full md:w-2/3 px-2 flex items-center'>
                <HiMiniMagnifyingGlass color='#575979' size={25} />
                <input type="text" placeholder='Search' className='w-full text-white p-2 outline-none bg-transparent placeholder:text-white' />
            </div>
            <div className='xs:flex hidden w-full gap-5 justify-end '>
                <div className="items-end gap-2 hidden sm:flex">

                    {
                        showBalance ? (
                            <IoEyeOutline
                                onClick={() => setShowBalance(!showBalance)}
                                size={20}
                                className='text-[#575979] cursor-pointer' />) :
                            (<IoEyeOffOutline
                                onClick={() => setShowBalance(!showBalance)}
                                size={20}
                                className='text-[#575979] cursor-pointer' />)
                    }

                    <div className='flex flex-col items-end'>
                        <span className='text-[#575979] text-sm'>Total Balance</span>

                        <span className='font-bold text-white'>{showBalance ? `$ ${balance ? balance : '0'}` : '*******'}</span>
                    </div>

                </div>
                <div
                    className="hidden xs:flex w-10 h-10 md:w-12 md:h-12 rounded-xl cursor-pointer text-white bg-[#34395C]    items-center justify-center">
                    <HiOutlineBell size={25} />
                </div>
                <div className="hidden xs:flex w-10 h-10 md:w-12 md:h-12 rounded-xl text-white bg-[#34395C]  items-center justify-center overflow-hidden">
                    <FaRegCircleUser size={25} />
                </div>
            </div>
            <DropDown />
        </nav>
    )
}

export default Nav