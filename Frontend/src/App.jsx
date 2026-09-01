import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from '../src/pages/Home'
import Users from '../src/pages/User'
import Update from './pages/Update';

export default function App() {
  return (
    <>
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/update/:id" element={<Update />} />
       
      </Routes>
    </BrowserRouter>
    
    </>
  )
}
