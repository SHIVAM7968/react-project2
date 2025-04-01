import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './components/Footer'
function App() {
  return (
   
    <div>
   
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
    <Route path='/home' element={<Home/>}/> 
     <Route path='/about' element={<About/>}/>
     <Route path='/service' element={<Service/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App