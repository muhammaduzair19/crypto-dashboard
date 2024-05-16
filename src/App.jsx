import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Wallet from './pages/Wallet'
import Exchange from './pages/Exchange'
import Withdraw from './pages/Withdraw'
import Deposit from './pages/Deposit'
import Layout from './layout/Layout'
import Login from './pages/Login'
import Transactions from './pages/Transactions'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Layout />} >
          <Route path='/' index element={<Dashboard />} />
          <Route path='/recent-transaction' element={<Transactions />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/wallet/exchange' element={<Exchange />} />
          <Route path='/wallet/withdraw' element={<Withdraw />} />
          <Route path='/wallet/deposit' element={<Deposit />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App