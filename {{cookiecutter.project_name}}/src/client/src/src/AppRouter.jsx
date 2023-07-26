import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { AboutPage, CustomerPage, LongWeekendsPage,ExamplePage } from './pages'

export function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<LongWeekendsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/example' element={<ExamplePage />} />
        <Route path='/customer' element={<CustomerPage />} />
    </Routes>
  )
}
