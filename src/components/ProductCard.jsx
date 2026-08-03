import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"

function ProductCard({product}){

    const addToCart = useContext(CartContext);

    return(
         <div>
             <Link to={`/products/${product.id}`}>
            <h2>{product.image}</h2>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>⭐{product.rating}</p>
            {product.rating >= 4.5 && <h3>🏆 Best Seller</h3>}
            </Link>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
         </div>
        
    )

}

export default ProductCard