import { useState,useEffect } from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

import Products from "./pages/Products";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

import { CartContext } from './context/CartContext';

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
    //setCart(prevCart => prevCart.filter(product => product.id !== id));
    const productToRemove = cart.find(item => item.id === id);

    if(productToRemove.quantity === 1)
      setCart(prev => prev.filter(item => item.id !== id))

    else{
      if(productToRemove.quantity > 1)
        setCart(prev => prev.map(item => (
          item.id === id ? {...item,quantity:item.quantity-1} : item
      )))
    }
   

  }

  function clearCart(){
    setCart([]);
  }

useEffect(() => {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
    console.log(cart);
}, [cart]);

  return(
    <div>
      <CartContext.Provider value={
        {
          cart,
          addToCart,
          removeFromCart,
          clearCart
        }
      }>

      <Navbar/>

      <Routes>
      <Route
          path='/products'
         element={<Products/>}
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
      <button onClick={clearCart}>Clear Cart</button>

      </CartContext.Provider>
    </div>
  )
}

export default App