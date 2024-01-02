import { Route, Routes } from 'react-router-dom'

import Dashboard from '@/features/dashboard'
import Responsives from '@/features/responsives'
import Login from '@/features/auth/login'
import Employees from '@/features/employees'
import SignUp from '@/features/auth/sign-up'
import Settings from '@/features/settings'
import NewResponsive from '@/features/new-responsive'
import NotFound from '@/features/not-found'
import ResponsiveType from '@/features/responsive'
import Devices from '@/features/devices'

function App () {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/' element={<Dashboard />}>
        <Route path='responsives' element={<Responsives />} />
        <Route path='employees' element={<Employees />} />
        <Route path='settings' element={<Settings />} />
        <Route path='devices' element={<Devices />} />
        <Route path='new-responsive' element={<NewResponsive />} />
        <Route path='responsive/:id' element={<ResponsiveType />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
