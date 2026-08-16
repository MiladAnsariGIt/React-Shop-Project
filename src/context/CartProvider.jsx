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
    <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity
    }}>
        {children}
    </CartContext.Provider>
)

}