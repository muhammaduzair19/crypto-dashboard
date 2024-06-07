import React, { useEffect, useState } from 'react'
import { IoCheckmark, BsCurrencyDollar } from "../utils/Icons.js";
import { useGetRequest, usePostRequest, useToken } from '../Hooks/useRequest';
import copy from '../assets/copy.svg'
import CopyToClipboard from 'react-copy-to-clipboard';
import SnackbarAlert from '../components/SnackbarAlert.jsx';
import { useNavigate } from 'react-router-dom';




const Withdraw = () => {
  const [open, setOpen] = useState(false)
  const [network, setNetwork] = useState()
  const [currency, setCurrency] = useState()
  const [networkData, setNetworkData] = useState([])
  const [address, setAddress] = useState([])
  const [activeTab, setActiveTab] = useState('BSC');
  const [coinData, setCoinData] = useState([])
  const [balance, setBalance] = useState()
  const navigate = useNavigate()


  const getAssets = async () => {
    setAddress('')
    setBalance({})
    const { data, code } = await useGetRequest('funding/assets')
    if (data != null && code == 200) {
      setCoinData(data)
    }
    else {
      setCoinData([])
    }
  }


  const getNetwork = async (asset) => {
    setCurrency(asset)
    setAddress('')
    setBalance({})
    if (asset != 'not selected') {
      const { data, code } = await useGetRequest(`funding/withdrawal-methods?asset=${asset}`)
      if (data != null && code == 200) {
        setNetworkData(data)
      }
      else {
        setNetworkData([])
      }
    }
  }

  const getAddress = (blockchain) => {
    setNetwork(blockchain)
    setActiveTab(blockchain)
    const updatedNetwork = networkData?.filter((i) => i.blockchain === blockchain)
    setAddress(updatedNetwork[0].address)
    getWallet(blockchain)
  }



  const getWallet = async (blockchain) => {
    if (blockchain != '') {
      const { data, code } = await useGetRequest(`wallets?blockchain=${blockchain}`)
      if (data != null && code == 200) {
        const { balance: walletBalance } = data[0];
        setBalance(walletBalance);
      }
      else {
        setNetworkData([])
      }
    }
  }

  const submitWithdraw = async (currency, network, address, amount) => {
    const body = { currency, network, address, amount: 0 }
    const result = await usePostRequest('funding/withdraw', body)
    setNetwork('')
    setAddress('')
    setCurrency('')
  }


  const handleClick = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };



  useEffect(() => {
    const token = useToken();
    if (token == null || token == undefined) {
      navigate('/login')
    } else {
      getAssets();

    }

  }, [])


  return (
    <main className='w-full h-full flex flex-col gap-3'>
      <SnackbarAlert message={'Text has been copied'} open={open} handleClose={handleClose} />

      <header>

        <h1 className='text-4xl font-bold text-darker-600'>
          Withdraw Crypto
        </h1>
      </header>

      <div className='flex w-full flex-col'>
        <div className=' flex flex-col md:flex-row w-full gap-3'>
          <div className='w-full md:w-[70%] lg:w-1/2 px-3 h-44 flex-col flex gap-4'>
            <h2 className='text-2xl text-darker-600 font-bold'>Deposity Address</h2>
            <div className='flex gap-2'>
              <p className='text-darker-400'>{address != '' ? address : 'No address found'}</p>
              {
                address && (
                  <CopyToClipboard text={address}>
                    <img
                      onClick={handleClick}
                      className='cursor-pointer'
                      src={copy} alt="" />
                  </CopyToClipboard>
                )
              }

            </div>
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

          <div className='w-full md:w-[70%] lg:w-1/2 px-3 flex flex-col gap-4 h-44 justify-between pb-4'>
            <h2 className='text-2xl text-darker-600 font-bold'>Wallet Info</h2>
            <h4 className='font-semibold text-darker-400'>{balance?.blockchain}  {balance?.symbol && `(${balance?.symbol})`}</h4>
            <h4 className='font-semibold text-darker-400'>Current Balance</h4>
            <h2 className='font-semibold text-3xl text-darker-400'>{balance?.tokens} </h2>
          </div>
        </div>
        <div className='w-full md:w-[70%] lg:w-1/2 px-3 h-full bg-transparent flex flex-col gap-2'>
          <h2 className='text-2xl text-darker-600 font-bold'>Transfer Network</h2>
          <p className='font-semibold text-white mb-1 text-md'>Select Network</p>

          {
            !networkData[0] && (<div className='text-1xl font-bold text-white text-center'>NO METHOD FOUND</div>)
          }

          {
            networkData[0] && networkData.map(({ blockchain, name }, idx) => (
              <div

                key={name + idx}
                onClick={() => getAddress(blockchain)}
                className='w-full cursor-pointer flex py-2 px-4 gap-2 rounded-lg border border-[#23273F] items-center'>
                <span className={`w-11 h-11 ${activeTab === blockchain ? 'bg-gradient-to-b from-[#5F27CD] to-[#341F97]' : 'bg-darker-800'} rounded-full flex justify-center items-center text-white`}>
                  {activeTab === blockchain && <IoCheckmark size={22} />}
                </span>

                <div className='flex justify-between items-end w-full'>
                  <div className='flex flex-col justify-center'>
                    <p className='text-white text-lg font-bold'>{blockchain}</p>
                    <p className='text-darker-400 text-md'>{name}</p>
                  </div>
                  <p className='text-darker-400 text-md'>Fee: <span className='font-bold'> 1.47%</span></p>
                </div>

              </div>
            ))
          }

          <button onClick={() => submitWithdraw(currency, network, address)} className='w-full  bg-gradient-to-b from-[#5F27CD] to-[#341F97] py-3 rounded-md font-semibold text-white'>
            Confirm
          </button>
        </div>
      </div>
    </main>
  )
}

export default Withdraw