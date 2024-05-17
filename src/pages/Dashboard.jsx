import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa6";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { IoArrowForwardOutline } from "react-icons/io5";
import { BsCurrencyBitcoin } from "react-icons/bs";

import { MdKeyboardArrowLeft } from "react-icons/md";
import TinyLineChart from '../components/Linechart';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
import CurrencyCard from '../components/CurrencyCard';
import BalanceCard from '../components/BalanceCard';


const Dashboard = () => {
  const [activeBadge, setActiveBadge] = useState('24H')
  const changeBadge = (title) => {
    setActiveBadge(title)
  }
  return (
    <main className='w-full h-full px-2 py-2 flex flex-col gap-5'>


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
      <section className='w-full h-56 bg-darker-900 rounded-2xl flex flex-col'>
        <div className='w-full flex justify-between px-5 py-3'>
          <h1 className='text-2xl text-white font-semibold'>
            Overview
          </h1>
          <div className='flex gap-2'>
            {
              ['24H', '1M', '3M', '6M', '1Y'].map((i, idx) => (
                <span
                  key={i + idx}
                  onClick={() => setActiveBadge(i)}
                  className={`w-16 h-8 flex justify-center items-center ${activeBadge === i ? 'bg-gradient-to-b from-[#5F27CD] to-[#341F97]' : 'border border-[#34395C]'} px-4 py-1.5 rounded-md cursor-pointer text-white`}>
                  {i}
                </span>
              ))
            }
          </div>
        </div>
        <div className='w-full'>
          <TinyLineChart />
        </div>

      </section>
      <section className='w-full bg-darker-900 rounded-2xl flex flex-col gap-5 px-4 py-2'>
        <h2 className='text-2xl font-semibold text-white'>Recent Transactions</h2>
        <Table />
        <Link to={'/recent-transaction'} className='flex items-center text-sm font-bold gap-3  text-primary-light'>
          View all transaction <IoArrowForwardOutline />
        </Link>
      </section>
    </main>
  )
}

export default Dashboard


