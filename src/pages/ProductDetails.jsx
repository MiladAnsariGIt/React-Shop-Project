import { useParams } from "react-router-dom"

function ProductDetails(){
    const {id} = useParams();

    return <h2>Product id: {id}</h2>

}

export default ProductDetails