import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Hymns from './components/Pages/Hymns'
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Beliefs from './components/Pages/Beliefs';
import Prayer from './components/Pages/Prayer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route 
        path='/'
        element={<Home/>}
        />

        <Route 
        path='/about'
        element={<About />}
        />

        <Route 
        path='/hymns'
        element={<Hymns />}
        />

        <Route 
        path='/prayer'
        element={<Prayer />}
        />

        <Route 
        path='/beliefs'
        element={<Beliefs />}
        />
      </Routes>
      <div id='bottomnav_about'>
        <h5 style={{textAlign:'center',padding:'7px'}}>Kiganjo SDA Church</h5>
        <div><a href='#'>Facebook</a></div>
        <div><a href='#'>Twitter</a></div>
        <div><a href='#'>Instagram</a></div>
        <div><a href='#'>Email</a></div>
        <p style={{marginLeft:'10px'}}>&copy; 2024 Kiganjo SDA Church</p>
        <p style={{marginLeft:'10px'}}>Njabini Road. Opp Kiganjo secondary School Olkalou</p>
      </div>
    </>
  )
}

export default App;
