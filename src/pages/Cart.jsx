import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Cart(){
    
    const {removeFromCart , cart , increaseQuantity} = useContext(CartContext)

    if(cart.length === 0){
        return <h2>Your cart is empty.</h2>;
    }

    const totalPrice = cart.reduce((sum,product) =>{
            return(sum+(product.price * product.quantity))
        },0)

    return( <div>
        {cart.map((product) => (
            <div key={`${product.id}`}>
                <h2>{product.name}</h2>
                {product.quantity > 1 ? <h3>📦 Quantity: {product.quantity}</h3> : null}
                <h3>💰price: {product.price * product.quantity}</h3>
                <p>📂{product.category}</p>
                <p>⭐{product.rating}</p>
                <button onClick={() => increaseQuantity(product.id)}>+</button>
                <button onClick={() => removeFromCart(product.id)}>Remove product</button>
            </div>
        ))}
        <h3>total price: {totalPrice}</h3> 
        
        </div>
    )

}

export default Cart