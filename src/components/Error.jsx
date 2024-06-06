import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({ code, text, link }) => {
    return (
        <main className='w-full px-9 sm:px-0 min-h-screen bg-[#191C2F] flex flex-col gap-3 justify-center items-center'>
            <p className='text-darker-400 text-8xl font-bold'>{code}</p>
            <p className='text-darker-500 text-2xl font-semibold'>{text}</p>
            <Link to={'/login'} className='text-darker-900 p-2 mt-4 rounded-md bg-darker-400 text-center font-bold'>
                {link}
            </Link>
        </main>
    )
}

export default Error