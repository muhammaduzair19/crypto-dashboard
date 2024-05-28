import React from 'react'
import { BsCurrencyDollar } from '../utils/Icons.js'


const CurrencyCard = ({ title, tokens, amount, tag }) => {
    return (
        <div className='w-44 md:w-48 h-28  rounded-2xl border border-[#34395C]  px-3 py-2 flex flex-col justify-between'>
            <div className='flex gap-2 items-center capitalize text-white'>
                <span className='w-8 h-8  flex items-center justify-center bg-primary-shadow text-white rounded-full'>
                    <BsCurrencyDollar />
                </span>
                {title}
            </div>
            <div className='flex flex-col text-white'>
                <h2 className='font-semibold'>{amount} <span className=' font-light'>{tag}</span> </h2>
                <div className='flex items-center gap-2'>
                    {/* <span className={`w-3 h-3 text-darker-950 font-bold bg-${trend === 'up' ? 'green' : 'red'}-600 flex items-center justify-center rounded-full`}>
                        {
                            trend === "up" ? <BsArrowUpShort /> : <BsArrowDownShort />
                        }
                    </span> */}
                    <span className='text-xs'>
                        {tokens}
                    </span>
                </div>

            </div>
        </div>
    )
}

export default CurrencyCard