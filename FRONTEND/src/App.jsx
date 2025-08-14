import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import ShopPage from './Pages/ShopPage'
import MyContextProvider from './Context/MyContextProvider'
import FormPage from './Pages/FormPage'
import Protect from './Pages/Protect'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyContextProvider>
          <Routes>
            <Route path='/' element={<FormPage />} />
            <Route path='/home' element={<Protect> <HomePage /> </Protect>}/>
            <Route path='/shop' element={<Protect> <ShopPage /> </Protect>}/>
            <Route path='/product/:id' element={<Protect> <ProductPage /> </Protect>}/>
          </Routes>
        </MyContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App