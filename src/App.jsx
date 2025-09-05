import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import Signup from './components/Signup/Signup'
import ContactPage from './pages/ContactPage/ContactPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element ={<Home/>}/>
      <Route path='/signup' element ={<Signup/>}/>
    </Routes>
  )
}

export default App