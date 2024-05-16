import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidemenu from '../components/Sidemenu'
import Nav from '../components/Nav'

const Layout = () => {
    return (
        <div className='w-full min-h-screen bg-[#191C2F] flex'>
            <div className="w-20 md:w-24 lg:flex-1">
                <Sidemenu />
            </div>
            <div className="main h-screen  flex-[3] lg:flex-[4] flex flex-col">
                <div className="h-20 sm:h-24">
                    <Nav />
                </div>
                <main className='w-full h-screen overflow-scroll'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout