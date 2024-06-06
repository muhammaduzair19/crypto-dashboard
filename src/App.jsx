import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import PrivateRoute from './utils/PrivateRoute'
import Loading from './pages/Loading'

// import ResetPassword from './pages/ResetPassword'
// import Dashboard from './pages/Dashboard'
// import Wallet from './pages/Wallet'
// import Exchange from './pages/Exchange'
// import Withdraw from './pages/Withdraw'
// import Deposit from './pages/Deposit'
// import Layout from './layout/Layout'
// import Login from './pages/Login'
// import Transactions from './pages/Transactions'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Wallet = lazy(() => import('./pages/Wallet'))
const Exchange = lazy(() => import('./pages/Exchange'))
const Withdraw = lazy(() => import('./pages/Withdraw'))
const Deposit = lazy(() => import('./pages/Deposit'))
const Layout = lazy(() => import('./layout/Layout'))
const Login = lazy(() => import('./pages/Login'))
const Forget = lazy(() => import('./pages/ForgetPassword'))
const Reset = lazy(() => import('./pages/ResetPassword'))
const Transactions = lazy(() => import('./pages/Transactions'))

const App = () => {



  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/login' element={<PrivateRoute><Login /></PrivateRoute>} />
          <Route path='/forget-password' element={<PrivateRoute><Forget /></PrivateRoute>} />
          <Route path='/reset-password' element={<PrivateRoute><Reset /></PrivateRoute>} />

          <Route path='/' element={<PrivateRoute><Layout /></PrivateRoute>} >
            <Route path='/' index element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='/recent-transaction' element={<PrivateRoute><Transactions /></PrivateRoute>} />
            <Route path='/wallet' element={<PrivateRoute><Wallet /></PrivateRoute>} />
            <Route path='/wallet/exchange' element={<PrivateRoute><Exchange /></PrivateRoute>} />
            <Route path='/wallet/withdraw' element={<PrivateRoute><Withdraw /></PrivateRoute>} />
            <Route path='/wallet/deposit' element={<PrivateRoute><Deposit /></PrivateRoute>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App


