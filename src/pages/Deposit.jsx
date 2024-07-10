import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import SnackbarAlert from '../components/SnackbarAlert'
import copy from '../assets/copy.svg'
import { BsCurrencyDollar } from '../utils/Icons.js'
import { useGetRequest, useToken } from '../Hooks/useRequest.js'
import { useNavigate } from 'react-router-dom'
import { QRCode } from 'react-qrcode-logo'

const Deposit = () => {
  const [coin, setCoin] = useState('')
  const [networkData, setNetworkData] = useState([])
  const [address, setAddress] = useState()
  const [open, setOpen] = useState(false);
  const [coinData, setCoinData] = useState()
  const navigate = useNavigate()


  const getAssets = async () => {
    const { data, code } = await useGetRequest('funding/assets')
    if (data != null && code == 200) {
      setCoinData(data)
    }
    else {
      setCoinData([])
    }
  }


  const getNetwork = async (asset) => {
    setAddress('')
    if (asset != 'not selected') {
      setCoin(asset)
      const { data, code } = await useGetRequest(`funding/deposit-methods?asset=${asset}`)
      if (data != null && code == 200) {
        setNetworkData(data)
      }
      else {
        setNetworkData([])
      }
    }
  }

  const getAddress = (blockchain) => {
    const updatedNetwork = networkData?.filter((i) => i.blockchain === blockchain)
    setAddress(updatedNetwork[0].address)
  }




  useEffect(() => {
    const token = useToken();
    if (token == null || token == undefined) {
      navigate('/login')
    }
    else {
      getAssets();

    }

  }, [])



  const handleClick = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  return (
    <main className='w-full h-full text-white px-3 xs:px-4 sm:px-5 md:px-6 py-3 xs:py-4 sm:py-6 flex flex-col gap-3 '>
      <SnackbarAlert message={'Address has been copied'} open={open} handleClose={handleClose} />
      <header>
        <h1 className='text-4xl font-bold text-darker-600'>
          Deposit Crypto
        </h1>
      </header>
      <div className='w-full md:w-[70%] lg:w-1/2 px-1 sm:px-2 flex flex-col gap-3'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl text-darker-600 font-bold'>Deposity Address</h2>
          <form className='flex flex-col gap-3'>
            <div className='w-full'>
              <p className='font-semibold mb-1 text-md'>Select Coin</p>
              <label className='w-full flex gap-3 h-12 bg-darker-900 rounded-lg items-center overflow-hidden pl-4'>
                <span className='w-8 h-8 flex items-center justify-center bg-primary-shadow text-white rounded-full'>
                  <BsCurrencyDollar />
                </span>
                •
                <select onChange={(e) => getNetwork(e.target.value)} name="coin" className=' w-full  flex bg-darker-900 h-full outline-none'>
                  <option value={'not selected'}>Select Coin</option>
                  {
                    // coinData[0] &&
                    coinData?.map(({ altname }, idx) => (<option key={idx + altname} value={altname}>{altname}</option>))
                  }

                </select>
              </label>
            </div>
            <div className='w-full'>
              <p className='font-semibold mb-1 text-md'>Select Network</p>
              <label className='w-full flex gap-3 h-12 bg-darker-900 rounded-lg items-center overflow-hidden pl-4'>
                <span className='w-8 h-8 flex items-center justify-center bg-primary-shadow text-white rounded-full'>
                  <BsCurrencyDollar />
                </span>
                •
                <select onChange={(e) => getAddress(e.target.value)} name="network" className=' w-full  flex bg-darker-900 h-full outline-none'>

                  {
                    !networkData[0] ? (<option value={'no method'}>No deposit method found</option>) : (
                      <option value={'not selected'}>Select nework</option>

                    )
                  }

                  {
                    networkData[0] &&
                    networkData.map(({ blockchain }, idx) => (
                      <option key={idx + blockchain} value={blockchain}>{blockchain}</option>)
                    )
                  }

                </select>
              </label>
            </div>
          </form>
        </div>

        <div className='w-full flex flex-col gap-5'>
          <h2 className='text-2xl text-darker-600 font-bold'>Deposit Address</h2>
          <div className='w-full h-32 px-3 bg-darker-900 rounded-md flex gap-4 items-center'>
            <span className='h-30 w-30 flex justify-center items-center overflow-hidden'>
              {address && <QRCode value={address} size={90} qrStyle='fluid' />}
            </span>

            {
              address ? (
                <div className='flex flex-col'>

                  <p className='text-sm items-start font-light text-darker-400'>Address</p>
                  <div className='flex gap-2'>
                    <p>{address}</p>
                    <CopyToClipboard text={address}>
                      <img
                        onClick={handleClick}
                        className='cursor-pointer'
                        src={copy} alt="" />
                    </CopyToClipboard>
                  </div>
                </div>
              ) : (
                <div className='flex flex-col'>
                  <p className='text-sm items-start font-light text-darker-400'>Address</p>
                  <div className='flex gap-2'>
                    <p>NO ADDRESS FOUND</p>
                  </div>
                </div>
              )
            }

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