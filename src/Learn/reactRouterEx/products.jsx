import { Link } from "react-router-dom";

const products = [
    {id:1 , name:'کامپیوتر'},
    {id: 2 , name:'ماشین'},
    {id:3 , name:'کتاب'},
    {id:4 , name:'بازی'}
]

function ProductsList (){

    return (
        <div>
            <h1>لیست محصولات</h1>
            <ul>
             {products.map(p => (
                <li key={p.id}>
                <Link to={`/products/${p.id}`}>{p.name}</Link>
                </li>
             ))}
            </ul>
        </div>
    )

}

export default ProductsList