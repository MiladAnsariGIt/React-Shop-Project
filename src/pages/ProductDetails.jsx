import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

function ProductDetails(){
    const {id} = useParams();
    const {data,loading,error} = useFetch(`http://localhost:3000/products/${id}`);

    if(loading)
        return <h2>درحال دریافت اطلاعات...</h2>
    if(error)
        return <h2>{error}</h2>

    return (
        <div>
            <h1>{data.name}</h1>
            <p>💰price: {data.price}</p>
            <p>📂category: {data.category}</p>
            <p>⭐rating: {data.rating}</p>
        </div>
    )

}

export default ProductDetails