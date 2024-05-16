import React, { useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { IoCheckmark } from "react-icons/io5";


const Withdraw = () => {
  const [coin, setCoin] = useState('BTC')
  const [activeTab, setActiveTab] = useState('BSC')
  return (
    <main className='w-full h-full flex flex-col gap-3'>
      <header>

        <h1 className='text-4xl font-bold text-darker-600'>
          Withdraw Crypto
        </h1>
      </header>

      <div className='flex w-full flex-col'>
        <div className='flex w-full flex-wrap gap-3'>
          <div className='w-[54%] h-44 flex-col flex gap-4'>
            <h2 className='text-2xl text-darker-600 font-bold'>Deposity Address</h2>
            <p className='text-darker-400'>SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</p>
            <div className='w-full text-white'>
              <p className='font-semibold mb-1 text-md'>Select Coin</p>
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
          </div>
          <div className='w-[44%] flex flex-col gap-4 h-44 justify-between pb-4'>
            <h2 className='text-2xl text-darker-600 font-bold'>Wallet Info</h2>
            <h4 className='font-semibold text-darker-400'>Bitcon (BTC)</h4>
            <h4 className='font-semibold text-darker-400'>Current Balance</h4>
            <h2 className='font-semibold text-3xl text-darker-400'>0,18974635 </h2>
          </div>
        </div>
        <div className='w-[54%] h-full bg-transparent flex flex-col gap-2'>
          <h2 className='text-2xl text-darker-600 font-bold'>Transfer Network</h2>
          <p className='font-semibold text-white mb-1 text-md'>Select Coin</p>

          <div
            onClick={() => setActiveTab('BSC')}
            className='w-full flex py-2 px-4 gap-2 rounded-lg border border-[#23273F] items-center'>
            <span className={`w-11 h-11 ${activeTab === 'BSC' ? 'bg-gradient-to-b from-[#5F27CD] to-[#341F97]' : 'bg-darker-800'} rounded-full flex justify-center items-center text-white`}>
              {activeTab === 'BSC' && <IoCheckmark size={22} />}
            </span>
            <div className='flex justify-between items-end w-full'>
              <div className='flex flex-col justify-center'>
                <p className='text-white text-lg font-bold'> BSC</p>
                <p className='text-darker-400 text-md'>BNB Smart Chain (BEP20)</p>
              </div>
              <p className='text-darker-400 text-md'>Fee: <span className='font-bold'> 1.47%</span></p>
            </div>

          </div>
          <div
            onClick={() => setActiveTab('Tether')}
            className='w-full flex py-2 px-4 gap-2 rounded-lg border border-[#23273F] items-center'>
            <span className={`w-11 h-11 ${activeTab === 'Tether' ? 'bg-gradient-to-b from-[#5F27CD] to-[#341F97]' : 'bg-darker-800'} rounded-full flex justify-center items-center text-white`}>
              {activeTab === 'Tether' && <IoCheckmark size={22} />}
            </span>
            <div className='flex justify-between items-end w-full'>
              <div className='flex flex-col justify-center'>
                <p className='text-white text-lg font-bold'> Tether</p>
                <p className='text-darker-400 text-md'>OMNI</p>
              </div>
              <p className='text-darker-400 text-md'>Fee: <span className='font-bold'> 1.47%</span></p>
            </div>

          </div>
          <div
            onClick={() => setActiveTab('Tron')}
            className='w-full flex py-2 px-4 gap-2 rounded-lg border border-[#23273F] items-center'>
            <span className={`w-11 h-11 ${activeTab === 'Tron' ? 'bg-gradient-to-b from-[#5F27CD] to-[#341F97]' : 'bg-darker-800'} rounded-full flex justify-center items-center text-white`}>
              {activeTab === 'Tron' && <IoCheckmark size={22} />}
            </span>
            <div className='flex justify-between items-end w-full'>
              <div className='flex flex-col justify-center'>
                <p className='text-white text-lg font-bold'> Tron</p>
                <p className='text-darker-400 text-md'>TRC20 (TRX)</p>
              </div>
              <p className='text-darker-400 text-md'>Fee: <span className='font-bold'> 1.47%</span></p>
            </div>

          </div>
          <button className='w-full  bg-gradient-to-b from-[#5F27CD] to-[#341F97] py-3 rounded-md font-semibold text-white'>
            Confirm
          </button>
        </div>
      </div>
    </main>
  )
}

export default Withdraw