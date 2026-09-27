import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"

function ProductCard({product}){

    const {addToCart} = useContext(CartContext);

    return(
         <div className="product-card">
             <Link to={`/products/${product.id}`} className="product-link">
            <h2 className="product-image">{product.image}</h2>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-category">{product.category}</p>
            <p className="product-rating">⭐{product.rating}</p>
            {product.rating >= 4.5 && <h3 className="best-seller">🏆 Best Seller</h3>}
            </Link>
            <button onClick={() => addToCart(product)} className="add-cart-button">Add To Cart</button>
         </div>
        
    )

}

export default ProductCard