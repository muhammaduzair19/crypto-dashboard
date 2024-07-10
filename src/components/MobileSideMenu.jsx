import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoMenuOutline } from 'react-icons/io5';
import MenuItem from './MenuItem';
import Logo from '../assets/logo.svg';
import { useState } from 'react';
import MobileMenuItem from './MobileMenuItem';




export default function MobileSideMenu() {
    const [open, setOpen] = useState(false);
    
const [show, setShow] = useState(false)
const [active, setActive] = useState('dashboard')


    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box className='bg-darker-950' sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <section className='w-full h-screen bg-tranparent text-white flex flex-col justify-between py-2'>
                <div className='flex flex-col gap-5'>
                    <div className='w-36 px-2 py-3'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='px-2 flex flex-col gap-4'>
                        <span className='w-full text-sm flex flex-col'>
                            Hello, Welcome Back,
                            <span className='font-bold text-md'>Samwell</span>
                        </span>
                        <div className="flex flex-col gap-3">
                            <MobileMenuItem link={'/'} title="dashboard" active={active} setActive={setActive} setShow={setShow} show={show} />
                            <MobileMenuItem link={'/'} title="market" active={active} setActive={setActive} setShow={setShow} show={show} />
                            <MobileMenuItem link={'/wallet'} title="wallet" active={active} setActive={setActive} setShow={setShow} show={show} />
                            <MobileMenuItem link={'/'} title="history" active={active} setActive={setActive} setShow={setShow} show={show} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  gap-4'>
                    <div className="flex flex-col gap-2 md:gap-4">
                        <MobileMenuItem title="support" active={active} setActive={setActive} setShow={setShow} show={show} />
                        <MobileMenuItem title="settings" active={active} setActive={setActive} setShow={setShow} show={show} />

                    </div>
                    <span className='w-full px-2 flex flex-col text-xs  text-darker-600'>
                        Crypto Corporation © 2024
                        <span>
                            Privacy Policy - Terms & Conditions
                        </span>
                    </span>
                </div>
            </section>
        </Box>
    );

    return (
        <div>
            <IoMenuOutline onClick={toggleDrawer(true)} size={30} className='text-darker-400 block lg:hidden' />

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}


