import { useState,useEffect } from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

import Products from "./pages/Products";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {

  const [cart,setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  function addToCart(product){
    const existingProduct = cart.find(item => item.id === product.id);

    if(!existingProduct){
      setCart(prev => [...prev,{...product
                                ,quantity:1
      }])
    } else {
      setCart(prev => prev.map(item => item.id === product.id ? {...item,quantity:item.quantity+1} : item))
    }
  }

  function removeFromCart(id){
    setCart(prevCart => prevCart.filter(product => product.id !== id));
  }

useEffect(() => {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}, [cart]);

  return(
    <div>
      <Navbar
        cart={cart}
      />

      <Routes>
      <Route
          path='/products'
         element={<Products
                    addToCart={addToCart}  
                />}
       />
       <Route
        path='/products/:id'
        element={<ProductDetails/>}
       />
       <Route
        path='/cart'
        element={<Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                />}
       />
      </Routes>
    </div>
  )
}

export default App