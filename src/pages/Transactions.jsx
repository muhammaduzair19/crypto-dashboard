import { useNavigate } from 'react-router-dom'
import Table from '../components/Table'
import React, { useEffect } from 'react'
import { useToken } from '../Hooks/useRequest'

const Transactions = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = useToken();
        if (token == null || token == undefined) {
            navigate('/login')
        }

    }, [])

    return (
        <main className='w-full h-full text-white px-3 xs:px-4 sm:px-5 md:px-6 py-3 xs:py-4 sm:py-6 flex flex-col gap-4'>
            <header>
                <h1 className='text-4xl text-center sm:text-start font-bold text-darker-600'>
                    All Transactions
                </h1>
            </header>
            <section className='w-full bg-darker-900 rounded-2xl flex flex-col gap-5 px-4 py-2'>
                <h2 className='text-2xl font-semibold text-white'>Recent Transactions</h2>
                <Table />
            </section>
        </main>
    )
}

export default Transactions