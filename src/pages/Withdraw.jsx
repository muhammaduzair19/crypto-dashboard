import React, { useEffect, useState } from 'react'
import { IoCheckmark, BsCurrencyDollar} from "../utils/Icons.js";
import { BaseUrl, useToken } from '../Hooks/useRequest';


const Withdraw = () => {
  const [coin, setCoin] = useState('BTC')
  const [coinData, setCoinData] = useState([])
  const [networkData, setNetworkData] = useState([])
  const [activeTab, setActiveTab] = useState('BSC');


  const getAssets = async () => {
    const url = `${BaseUrl}/spotMarketData/assets`;
    const token = useToken()

    const results = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const resultData = await results.json();

    console.log(resultData);
    const { data, code } = resultData;


    if (data != null && code == 200) {
      setCoinData(data)
    }
    else {
      setCoinData([])
    }
  }



  const getNetwork = async (asset) => {
    const token = useToken();
    if (asset != 'not selected') {
      setCoin(asset)
      const results = await fetch(`${BaseUrl}/funding/withdrawal-methods`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ asset })
      })
      const { code, data } = await results.json()
      if (data !== null && code == 200) {
        setNetworkData(data)
      } else {
        setNetworkData([])
      }

    }
  }

  const getBalance = async () => {
    const url = `${BaseUrl}/accountData/balance`;
    const token = useToken();

    const results = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await results.json();
    console.log(data);
    if (data != null && code == 200) {
      console.log(data)
    }
    else {
      console.log([])
    }
  }



  useEffect(() => {
    getAssets();
    getBalance()
  }, [])


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
                <span className='w-8 h-8 flex items-center justify-center bg-primary-shadow text-white rounded-full'>
                  <BsCurrencyDollar />
                </span>
                •
                <select onChange={(e) => getNetwork(e.target.value)} name="coin" className=' w-full  flex bg-darker-900 h-full outline-none'>
                  <option value={'not selected'}>Select Coin</option>
                  {
                    coinData[0] &&
                    coinData?.map(({ altname }, idx) => (<option key={idx + altname} value={altname}>{altname}</option>))
                  }

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
          <p className='font-semibold text-white mb-1 text-md'>Select Network</p>

          {
            !networkData[0] && (<div className='text-1xl font-bold text-white text-center'>NO METHOD FOUND</div>)
          }

          {
            networkData[0] && networkData.map(({ asset, method }, idx) => (
              <div
                onClick={() => setActiveTab(method)}
                className='w-full flex py-2 px-4 gap-2 rounded-lg border border-[#23273F] items-center'>
                <span className={`w-11 h-11 ${activeTab === method ? 'bg-gradient-to-b from-[#5F27CD] to-[#341F97]' : 'bg-darker-800'} rounded-full flex justify-center items-center text-white`}>
                  {activeTab === method && <IoCheckmark size={22} />}
                </span>

                <div className='flex justify-between items-end w-full'>
                  <div className='flex flex-col justify-center'>
                    <p className='text-white text-lg font-bold'>{asset}</p>
                    <p className='text-darker-400 text-md'>{method}</p>
                  </div>
                  <p className='text-darker-400 text-md'>Fee: <span className='font-bold'> 1.47%</span></p>
                </div>

              </div>
            ))
          }

          <button disabled={true} className='w-full  bg-gradient-to-b from-[#5F27CD] to-[#341F97] py-3 rounded-md font-semibold text-white'>
            Confirm
          </button>
        </div>
      </div>
    </main>
  )
}

export default Withdraw