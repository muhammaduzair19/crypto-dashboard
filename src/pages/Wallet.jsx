import React, { useEffect, useState } from 'react'
import { IoArrowForwardOutline } from "../utils/Icons.js";

import Table from '../components/Table';
import { Link } from 'react-router-dom';
import CurrencyCard from '../components/CurrencyCard';
import BalanceCard from '../components/BalanceCard';
import { BaseUrl, useGetRequest, useToken } from '../Hooks/useRequest';

const Wallet = () => {

  const [balance, setBalance] = useState([])


  // const getLedger = async () => {
  //   const url = `${BaseUrl}/accountData/ledgers`;
  //   const token = useToken();

  //   const results = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //     },
  //   });
  //   const data = await results.json();
  //   console.log(data);
  // }



  const getBalance = async () => {

    const { data, code } = await useGetRequest('wallets')
    console.log('data=>', data);
    if (data != null && code == 200) {
      setBalance(data)
    }
    else {
      setBalance([])
    }
  }

  const getTransactions = async () => {
    console.log('in trans');
    const result = await useGetRequest('transactions');
    console.log(result);
}


  useEffect(() => {
    getBalance();
    getTransactions();
  }, [])





  return (
    <main className='w-full min-h-full px-2 py-2 flex flex-col gap-5 '>


      <section className="w-full flex gap-4 flex-col md:flex-row">

        <div className="flex flex-col gap-2 w-[50%] h-full sm:w-[30%] md:w-[35%] justify-between items-center sm:items-center">
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



        <div className="w-full md:w-[70%] flex-wrap sm:flex-nowrap flex gap-2">
          <BalanceCard />
          {
            balance[0] && balance?.map(({ balance }, idx) => (
              <CurrencyCard key={idx + balance?.address} title={balance?.blockchain} amount={balance?.balance} tag={balance?.symbol} tokens={balance?.tokens} />
            ))
          }
        </div>
      </section>



      <section className='w-full bg-darker-900 rounded-2xl flex flex-col gap-5 px-4 py-2'>
        <h2 className='text-2xl font-semibold text-white'>Recent Transactions</h2>
        <Table/>
        <Link to={'/recent-transaction'} className='flex items-center text-sm font-bold gap-3  text-primary-light'>
          View all transaction <IoArrowForwardOutline />
        </Link>
      </section>
    </main>
  )
}

export default Wallet