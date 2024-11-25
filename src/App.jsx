import { lazy, Suspense, useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router'
import RoleManager from './components/RoleManager'
import NavBar from './components/NavBar'
import UserTableSk from './shared/skeletons/UserTableSk'
import DashboardSk from './shared/skeletons/DashboardSk'

const LazyDashboard = lazy(() => import('./components/Dashboard') )
const LazyUsersTable = lazy(() => import('./components/UsersTable') )



function App() {

  return (
    <>
   <NavBar />
   
    <Routes>
      <Route path='/' element={
        <div className='flex flex-col gap-4'>
        {/* <Dashboard />
        <UsersTable /> */}
        <Suspense fallback={<DashboardSk />}>
        <LazyDashboard />
      </Suspense>
        <Suspense fallback={<UserTableSk />}>
        <LazyUsersTable />
      </Suspense>
        </div>
        
        } />
      <Route path='/roles' element={<RoleManager />}  />
    </Routes>
    {/* <Dashboard />
     
  <UsersTable /> */}
    </>
  )
}

export default App
