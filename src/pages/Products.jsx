import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products(){
    return(
        <div>
            <h2>Products</h2>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )

}

export default Products