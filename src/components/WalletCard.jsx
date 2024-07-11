import React from 'react'
import { BsCurrencyDollar } from '../utils/Icons.js'


const WalletCard = ({ title, tokens, amount, tag, setCurrentBlockchain, currentBlockchain }) => {
    return (
        <div
            onClick={() => setCurrentBlockchain(title)}
            className={`w-full h-28  rounded-2xl px-3 py-2 flex flex-col justify-between cursor-pointer ${currentBlockchain === title ? 'bg-gradient-to-b from-[#5F27CD] to-[#341F97]' : 'border border-[#34395C]'} `}>

            <div className='flex gap-2 items-center capitalize text-white'>
                <span className='w-8 h-8  flex items-center justify-center bg-primary-shadow text-white rounded-full'>
                    <BsCurrencyDollar />
                </span>
                {title}
            </div>
            
            <div className='flex flex-col text-white'>
                <h2 className='font-semibold'>{amount} <span className=' font-light'>{tag}</span> </h2>
                <div className='flex items-center gap-2'>
                    {tokens}
                </div>

            </div>
        </div>
    )
}

export default WalletCard