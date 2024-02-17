import React from 'react'

import Home from './components/Home';
import Dsa from './components/Dsa';
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/DSA' element={<Dsa />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App