import React, { Suspense, lazy, useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import Sidemenu from '../components/Sidemenu'
import Nav from '../components/Nav'
import { useToken } from '../Hooks/useRequest'
import Loading from '../pages/Loading'

const Layout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = useToken();
        if (token == null || token == undefined) {
            navigate('/login')
        }

    }, [])



    return (
        <div className='w-full min-h-screen bg-darker-950 lg:flex'>
            <div className="w-20 overflow-scroll min-h-screen md:w-24 lg:flex-1 lg:block hidden">
                <Sidemenu />
            </div>

            <div className="main h-screen pb-3  flex-[3] lg:flex-[4] flex flex-col">
                <div className="h-20 sm:h-24">
                    <Nav />
                </div>
                <main className='w-full h-screen overflow-scroll'>
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </div>
    )
}

export default Layout