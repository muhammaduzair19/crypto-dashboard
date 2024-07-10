import React, { useEffect, useState } from 'react'
import { IoArrowForwardOutline } from "../utils/Icons.js";

import Table from '../components/Table';
import { Link, useNavigate } from 'react-router-dom';
import BalanceCard from '../components/BalanceCard';
import { useGetRequest, useToken } from '../Hooks/useRequest';
import WalletCard from '../components/WalletCard.jsx';

const Wallet = () => {

  const navigate = useNavigate()
  const [wallets, setWallets] = useState([]);
  const [balance, setBalance] = useState();

  useEffect(() => {
    const getWallets = async () => {
      const { data, code } = await useGetRequest('wallets');
      if (code === 200 && data) {
        setWallets(data);
      } else {
        setWallets([]);
      }
    };

    const getBalance = async () => {
      const { data, code } = await useGetRequest('balance')
      if (data != null && code == 200) {
        setBalance(data)
      }
      else {
        setBalance([])
      }
    }




    const token = useToken();
    if (!token) {
      navigate('/login');
    } else {
      getWallets();
      getBalance();
    }
  }, [navigate]);




  return (
    <main className='w-full h-full px-3 xs:px-4 sm:px-5 md:px-6 py-3 xs:py-4 sm:py-6 flex flex-col gap-4 '>

      <section className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full md:w-1/3 flex flex-col  items-start">
          <div className="text-white">
            <h2 className="text-2xl font-bold md:text-4xl">Wallets</h2>
            <p className="text-xs md:text-sm">
              Start investing, earn crypto and stack tokens.
            </p>
          </div>
          <Link to={'/wallet'} className="text-primary-light text-xs font-bold">
            View all wallets
          </Link>
        </div>


        <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <BalanceCard balance={balance} />
          {
            wallets[0] && wallets?.map((wallet, idx) => (
              <WalletCard
                key={wallet?.address}
                title={wallet?.blockchain}
                amount={wallet?.balance?.balance}
                tag={wallet?.balance?.symbol}
                tokens={wallet?.balance?.tokens}
              />
            ))}
        </div>
      </section>


      <section className="w-full bg-darker-900 rounded-2xl flex flex-col gap-2 px-3 sm:px-4 py-2">
        <h2 className="text-2xl font-semibold text-white">Recent Transactions</h2>
        <Table limit={2} />
        <Link
          to="/recent-transaction"
          className="flex items-center text-sm font-bold gap-2 text-primary-light"
        >
          View all transactions <IoArrowForwardOutline />
        </Link>
      </section>
    </main>
  )
}

export default Wallet