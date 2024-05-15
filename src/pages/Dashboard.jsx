import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa6";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

import { MdKeyboardArrowLeft } from "react-icons/md";


const Dashboard = () => {
  return (
    <main className='w-full h-full px-2 py-2'>


      <section className="w-full h-24 md:h-28 flex gap-2">
        <div className="w-[50%] h-full sm:w-[30%] md:w-[35%]  flex justify-between items-center sm:items-center">

          <div className="w-[80%] flex flex-col gap-2">
            <div className='text-white'>
              <h2 className='text-xl md:text-2xl'>Wallets</h2>
              <p className='text-[9px] sm:text-xs md:text-sm'>Start investing, earn
                crypto and stack tokens.
              </p>
            </div>
            <span className='text-primary-light text-xs font-bold'>
              View all wallets
            </span>
          </div>


          {/* <div className='flex flex-col sm:flex-row w-[30%] items-end gap-4'>
            <button className='w-8 h-8 border-opacity-60 rounded-full flex items-center justify-center border-[#23273F] border text-darker-950 active:text-white active:border-opacity-5'>
              <MdKeyboardArrowLeft />
            </button>
            <button className='w-8 h-8 border-opacity-60 rounded-full flex items-center justify-center border-[#23273F] border text-darker-950 active:text-white active:border-opacity-50'>
              <MdKeyboardArrowRight />
            </button>
          </div> */}
        </div>


        <div className="w-[70%] flex gap-2 flex-wrap">
          <BalanceCard />
          <CurrencyCard title='Ethereum' amount='173.978' tag='ETC' trend='up' percent='1.24%' />
          <CurrencyCard title='Bitcoin' amount='98.403,38' tag='BTC' trend='down' percent='2.25%' />

        </div>
      </section>
    </main>
  )
}

export default Dashboard



const BalanceCard = () => {
  return (
    <div className='w-44 md:w-48 h-full rounded-2xl bg-gradient-to-b from-[#5F27CD] to-[#341F97] px-3 py-2 flex flex-col justify-between'>
      <div className='flex gap-2 items-center text-white'>
        <span className='w-8 h-8 flex items-center justify-center bg-primary-shadow text-white rounded-full'>
          <BsCurrencyDollar />
        </span>
        Dollar
      </div>
      <div className='flex flex-col text-white'>
        <p className='text-sm'>Total Balance</p>
        <h2 className='font-semibold'>$ 11.827,42</h2>
      </div>
    </div>
  )
}
const CurrencyCard = ({ title, amount, trend, tag, percent }) => {
  return (
    <div className='w-44 md:w-48 h-full  rounded-2xl border border-[#34395C]  px-3 py-2 flex flex-col justify-between'>
      <div className='flex gap-2 items-center text-white'>
        <span className='w-8 h-8 flex items-center justify-center bg-primary-shadow text-white rounded-full'>
          <FaEthereum />
        </span>
        {title}
      </div>
      <div className='flex flex-col text-white'>
        <h2 className='font-semibold'>{amount} <span className=' font-light'>{tag}</span> </h2>
        <div className='flex items-center gap-2'>
          <span className={`w-3 h-3 text-darker-950 font-bold bg-${trend === 'up' ? 'green' : 'red'}-600 flex items-center justify-center rounded-full`}>
            {
              trend === "up" ? <BsArrowUpShort /> : <BsArrowDownShort />
            }
          </span>
          <span className='text-xs'>
            {percent}
          </span>
        </div>

      </div>
    </div>
  )
}