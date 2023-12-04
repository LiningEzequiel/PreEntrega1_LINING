import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/Navbar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContainer } from './components/CartContainer/CartContainer'
import { CartContextProvider } from './context/CartContext'







function App() {
  



  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <div className="container">
          <NavBar />
          <Routes>
           <Route path="/" element={ <ItemListContainer greeting="Bienvenidos a la librería más completa..." />}/>
           <Route path="/category/:cid" element={ <ItemListContainer greeting="Bienvenidos a la librería más completa..." />}/>
           <Route path="/detail/:pid" element={ <ItemDetailContainer />}/>  
           <Route path="*" element={ <Navigate to="/" />} />
           <Route path="/cart" element={ <CartContainer /> } />
          
          </Routes> 
        </div>
      </CartContextProvider>
    </BrowserRouter>
    
    

  )
}

export default App
