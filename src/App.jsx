import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/Navbar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  



  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a mi e-commerce de libros" />
      </div>
      
    </>
  )
}

export default App
