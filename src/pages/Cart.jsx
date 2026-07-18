
function Cart({removeFromCart,cart}){
    
    if(cart.length === 0){
        return <h2>Your cart is empty.</h2>;
    }

    return(
        cart.map((product,index) => (
            <div key={`${product.id}-${index}`}>
                <h2>{product.name}</h2>
                <h3>💰{product.price}</h3>
                <p>📂{product.category}</p>
                <p>⭐{product.rating}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove product</button>
            </div>
        ))
    )

}

export default Cart