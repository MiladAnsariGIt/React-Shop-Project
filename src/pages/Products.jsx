import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({addToCart}){

    return(
        <div>
            <h2>Products</h2>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </div>
    )

}

export default Products