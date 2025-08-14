import React from 'react'
import Form from './Pages/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider'
import Products from './Pages/Products'
import User from './Pages/User'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/product' element={<Products />} />
            <Route path='/user' element={<User />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App