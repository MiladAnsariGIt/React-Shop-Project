//import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";

function Products(){

    const {data,loading,error} = useFetch("http://localhost:3000/products");

    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }

    return(
        <div>
            <h2>Products</h2>
            {data.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )

}

export default Products