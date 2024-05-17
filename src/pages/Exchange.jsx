import React, { useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { TbArrowsExchange2 } from "react-icons/tb";


const Exchange = () => {
  const [coin, setCoin] = useState('BTC')
  return (
    <main className='w-full h-full flex flex-col gap-5
pr-2 lg:pr-20
    '>
      <header>

        <h1 className='text-4xl font-bold text-darker-600'>
          Exchanges
        </h1>
      </header>
      <div className='flex flex-col gap-6'>
        <h2 className='text-2xl text-darker-600 font-bold'>Operation  </h2>
        <div className='flex justify-between gap-5  items-center flex-col sm:flex-row'>
          <div className='w-full sm:w-1/2 flex flex-col gap-4'>
            <div className='w-full text-white'>
              <p className='font-semibold mb-1 text-md text-white'>Select Coin</p>
              <label className='w-full flex gap-3 h-12 bg-darker-900 rounded-lg items-center overflow-hidden pl-4'>
                <div className='flex items-center gap-4'>
                  <span className='w-8 h-8 flex items-center justify-center bg-primary-shadow text-white rounded-full'>
                    <BsCurrencyDollar />
                  </span>
                  {coin}
                </div>
                •
                <select onChange={(e) => setCoin(e.target.value)} name="coin" className=' w-full  flex bg-darker-900 h-full outline-none'>
                  <option value="BTC">Bitcoin</option>
                  <option value="DGC">Dogecoin</option>
                </select>
              </label>
            </div>
            <div className='w-full text-white'>
              <label className='w-full flex gap-3 h-12 bg-darker-900 rounded-lg items-center overflow-hidden p-2'>
                <input type="number"  className='w-full px-2 h-full bg-transparent outline-none text-darker-400' />
              </label>
            </div>
          </div>
          <span className={`w-11 h-11 bg-gradient-to-b from-[#5F27CD] to-[#341F97] rounded-full flex justify-center items-center text-white`}>
            <TbArrowsExchange2 size={22} />
          </span>
          <div className='w-full sm:w-1/2 flex flex-col gap-4'>
            <div className='w-full text-white'>
              <p className='font-semibold mb-1 text-md text-white'>Select Coin</p>
              <label className='w-full flex gap-3 h-12 bg-darker-900 rounded-lg items-center overflow-hidden pl-4'>
                <div className='flex items-center gap-4'>
                  <span className='w-8 h-8 flex items-center justify-center bg-primary-shadow text-white rounded-full'>
                    <BsCurrencyDollar />
                  </span>
                  {coin}
                </div>
                •
                <select onChange={(e) => setCoin(e.target.value)} name="coin" className=' w-full  flex bg-darker-900 h-full outline-none'>
                  <option value="BTC">Bitcoin</option>
                  <option value="DGC">Dogecoin</option>
                </select>
              </label>
            </div>
            <div className='w-full text-white'>
              <label className='w-full flex gap-3 h-12 bg-darker-900 rounded-lg items-center overflow-hidden p-2'>
                <input type="number" className='w-full px-2 h-full bg-transparent outline-none text-darker-400' />
              </label>
            </div>
          </div>
        </div>
        <div className='w-[44%] flex flex-col justify-between gap-1'>
          <h2 className='text-2xl text-darker-600 font-bold mb-3'>Wallet Info</h2>
          <p className=' text-darker-400'> Available: $107,508,37</p>
          <p className=' text-darker-400'>Rate: 1.00 = 3.23</p>
          <p className=' text-darker-400'>Fee: 1317</p>
        </div>
        <button className='w-full  bg-gradient-to-b from-[#5F27CD] to-[#341F97] py-3 rounded-md font-semibold text-white'>
          Exchange
        </button>
      </div>

    </main>
  )
}

export default Exchange