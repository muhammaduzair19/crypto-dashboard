import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Table from '../components/Table';
import BalanceCard from '../components/BalanceCard';
import WalletCard from '../components/WalletCard';
import { IoArrowForwardOutline } from '../utils/Icons';
import { useGetRequest, useToken } from '../Hooks/useRequest';
import Chart from '../components/Chart';

const Dashboard = () => {
  const navigate = useNavigate();
  const [wallets, setWallets] = useState([]);
  const [balance, setBalance] = useState();
  const [activeBadge, setActiveBadge] = useState('24H');

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



  useEffect(() => {
    const token = useToken();
    if (token) {
      getWallets();
      getBalance();
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <main className="w-full h-full px-3 xs:px-4 sm:px-5 md:px-6 py-3 xs:py-4 sm:py-6 flex flex-col gap-4">

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

      <section className="w-full h-56 bg-darker-900 rounded-2xl flex flex-col">
        <div className="w-full flex justify-between gap-2 p-2 md:px-3">
          <h1 className="text-2xl text-white font-semibold">Overview</h1>
          <div className="flex gap-2 flex-wrap">
            {
              ['24H', '1M', '3M', '6M', '1Y']?.map((period) => (
                <span
                  key={period}
                  onClick={() => setActiveBadge(period)}
                  className={`w-14 h-6 flex text-xs  justify-center items-center ${activeBadge === period
                    ? 'bg-gradient-to-b from-[#5F27CD] to-[#341F97]'
                    : 'border border-[#34395C]'
                    } py-1.5 rounded-md cursor-pointer text-white`}
                >
                  {period}
                </span>
              ))}
          </div>
        </div>
        
        <div className="w-full overflow-hidden">
          <Chart />sd
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
  );
};

export default Dashboard;
