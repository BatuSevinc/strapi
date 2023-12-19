import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
      </Routes>
    </Router>
  )
}

export default App