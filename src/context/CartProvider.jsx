import { useState,useEffect } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({children}){

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

  function increaseQuantity(id){
    setCart(prevCart => prevCart.map(product => 
      product.id === id ? {...product,quantity:product.quantity+1} : product
    )
  )
  }

  function removeFromCart(id){
    const productToRemove = cart.find(item => item.id === id);
    if (!productToRemove) return;
    
      setCart(prev => prev.filter(item => item.id !== id))
    }

  function decreaseQuantity(id){
    setCart(prev => prev.map(item => (
      item.id === id ? {...item,quantity:item.quantity-1} : item
    )).filter(product => product.quantity >0))
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
    <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity
    }}>
        {children}
    </CartContext.Provider>
)

}