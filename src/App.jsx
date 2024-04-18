
import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import { Home } from './Home'
import { Navbar } from './Navbar'
import { Cart } from './Cart'
import "bootstrap/dist/css/bootstrap.css" 



export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([])

  return (
    <cartContext.Provider value={{ cart, setCart }}>

      <BrowserRouter>
        <Navbar cart={cart}/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
        </Routes><br/><br/>
      </BrowserRouter>
    </cartContext.Provider>

  )
}

export default App
