import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Blog from './Components/Blog'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import AddBlog from './Components/AddBlog'
import Product from './Components/Product'
import Footer from './Components/Footer'

function App() {

  const [count, setCount] = useState(0)

  
  return (
    <>
      <Nav/>
      <Routes>

        <Route path='/' element={<Product/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/AddBlog' element={<AddBlog/>} />

        
      </Routes>
      <Footer/>

      {/* <Blog/> */}
      

    </>
  )
}

export default App
