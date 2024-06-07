import React from 'react'
import { BsCurrencyDollar } from '../utils/Icons.js'

const BalanceCard = ({ balance  }) => {
    return (
        <div className='w-44 md:w-48 h-28 rounded-2xl bg-gradient-to-b from-[#5F27CD] to-[#341F97] px-3 py-2 flex flex-col justify-between'>
            <div className='flex gap-2 items-center text-white'>
                <span className='w-8 h-8 flex items-center justify-center bg-primary-shadow text-white rounded-full'>
                    <BsCurrencyDollar />
                </span>
                Dollar
            </div>
            <div className='flex flex-col text-white'>
                <p className='text-sm'>Total Balance</p>
                <h2 className='font-semibold'>{balance ? balance : 0}</h2>
            </div>
        </div>
    )
}

export default BalanceCard