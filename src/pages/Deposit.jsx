import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { BsCurrencyDollar } from 'react-icons/bs'
import copy from '../assets/copy.svg'

const Deposit = () => {
  const [coin, setCoin] = useState('BTC')
  const [network, setNetwork] = useState('BSC')
  return (
    <main className='w-full h-full text-white flex flex-col gap-3'>
      <header>
        <h1 className='text-4xl font-bold text-darker-600'>
          Deposit Crypto
        </h1>
      </header>
      <div className='w-1/2 flex flex-col gap-5'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl text-darker-600 font-bold'>Deposity Address</h2>
          <form className='flex flex-col gap-3'>
            <div className='w-full'>
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
            <div className='w-full'>
              <p className='font-semibold mb-1 text-md'>Select Coin</p>
              <label className='w-full flex gap-3 h-12 bg-darker-900 rounded-lg items-center overflow-hidden pl-4'>
                <div className='flex items-center gap-4'>
                  <span className='w-8 h-8 flex items-center justify-center bg-primary-shadow text-white rounded-full'>
                    <BsCurrencyDollar />
                  </span>
                  {network}
                </div>
                •
                <select onChange={(e) => setNetwork(e.target.value)} name="network" className=' w-full  flex bg-darker-900 h-full outline-none'>
                  <option value="BSC">BNB Smart Chain</option>
                  <option value="OMNI">Tether</option>
                  <option value="TRX">Tron</option>
                </select>
              </label>
            </div>
          </form>
        </div>

        <div className='w-full flex flex-col gap-5'>
          <h2 className='text-2xl text-darker-600 font-bold'>Deposit Address</h2>
          <div className='w-full h-28 px-3 bg-darker-900 rounded-md flex gap-4 items-center'>
            <span className='h-24 w-24 bg-red-900'>
              <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5qlxYcLGzeqia7ukJ2EgXFhHrkHrMRnaIVcRS7nGOA&s" alt="" />
            </span>
            <div className='flex flex-col'>
              <p className='text-sm items-start font-light text-darker-400'>Address</p>
              <div className='flex gap-2'>
                <p>SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</p>
                <CopyToClipboard text={'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'}                >
                  <img className='cursor-pointer ' src={copy} alt="" />
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div className='text-darker-400 flex justify-between px-3'>

            <p className='font-light -mt-3 text-md'>Minimun Deposit</p>
            <p className='font-light -mt-3 text-md'>0.000001 BTC</p>
          </div>
        </div>
        <hr className=' opacity-10' />
        <div className='px-4'>
          <ul className='list-disc text-darker-400 text-sm'>
            <li>Select wallet</li>
            <li>Check out the deposit address before confirm</li>
            <li>Expected arrival after 15 network confirmations</li>
            <li>Do not send NFT’s to this address. <span>Learn how to deposit NFT’s</span></li>
          </ul>
        </div>

      </div>

    </main>
  )
}

export default Deposit