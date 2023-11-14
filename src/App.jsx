import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/Navbar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'





function App() {
  



  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer />}/>
          <Route path="/category/:cid" element={ <ItemListContainer />}/>
          <Route path="/detail/:pid" element={ <ItemDetailContainer />}/>  
          <Route path="*" element={ <Navigate to="/" />} />
        </Routes>
        
        
      </div>
    </BrowserRouter>
  )
}

export default App
