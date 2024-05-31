import { useNavigate } from 'react-router-dom'
import Table from '../components/Table'
import React from 'react'
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
        <main className='w-full h-full'>
            <section className='w-full bg-darker-900 rounded-2xl flex flex-col gap-5 px-4 py-2'>
                <h2 className='text-2xl font-semibold text-white'>Recent Transactions</h2>
                <Table />
            </section>
        </main>
    )
}

export default Transactions