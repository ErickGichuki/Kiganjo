import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Pages/Contact'
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
        path='/contact'
        element={<Contact />}
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
    </>
  )
}

export default App;
