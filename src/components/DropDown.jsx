import React, { useEffect, useState } from 'react';
import { AiOutlineLogout, HiOutlineBell, BsThreeDotsVertical, FaRegCircleUser } from '../utils/Icons'
import { useNavigate } from 'react-router-dom';
import { useToken } from '../Hooks/useRequest';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [trigger, setTrigger] = useState(false)
    const navigate = useNavigate()

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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
        <div className="relative inline-block text-left">
            <button
                className="flex items-center justify-center w-full p-2 text-white hover:text-darker-500 focus:outline-none"
                onClick={toggleDropdown}>
                <BsThreeDotsVertical size={24} />
            </button>
            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 overflow-hidden rounded-xl shadow-lg">
                    <button
                        className="xs:hidden cursor-pointer flex items-center gap-2 w-full  px-4 py-2 text-left text-lg  text-white  bg-darker-800">
                        <FaRegCircleUser />
                        <span className='hover:text-darker-500'>Profile</span>
                    </button>
                    <button className="xs:hidden cursor-pointer flex items-center gap-2 w-full  px-4 py-2 text-left text-lg  text-white  bg-darker-800">
                        <HiOutlineBell />
                        <span className='hover:text-darker-500'>Notifications</span>
                    </button>
                    <button
                        className="cursor-pointer flex items-center gap-2 w-full  px-4 py-2 text-left text-lg  text-white  bg-darker-800"
                        onClick={logoutHandler}>
                        <AiOutlineLogout />
                        <span className='hover:text-darker-500'>Logout</span>
                    </button>

                </div>
            )}
        </div>
    );
};

export default DropDown;
