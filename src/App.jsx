import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Wallet from './pages/Wallet'
import Exchange from './pages/Exchange'
import Withdraw from './pages/Withdraw'
import Deposit from './pages/Deposit'
import Layout from './layout/Layout'
import Login from './pages/Login'
import Transactions from './pages/Transactions'
import PrivateRoute from './utils/PrivateRoute'
import { useToken } from './Hooks/useRequest'

const App = () => {



  return (
    <Router>
      <Routes>
        <Route path='/login' element={<PrivateRoute><Login /></PrivateRoute>} />

        <Route path='/' element={<PrivateRoute><Layout /></PrivateRoute>} >
          <Route path='/' index element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/recent-transaction' element={<PrivateRoute><Transactions /></PrivateRoute>} />
          <Route path='/wallet' element={<PrivateRoute><Wallet /></PrivateRoute>} />
          <Route path='/wallet/exchange' element={<PrivateRoute><Exchange /></PrivateRoute>} />
          <Route path='/wallet/withdraw' element={<PrivateRoute><Withdraw /></PrivateRoute>} />
          <Route path='/wallet/deposit' element={<PrivateRoute><Deposit /></PrivateRoute>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App


