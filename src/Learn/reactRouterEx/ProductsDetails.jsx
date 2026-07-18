import { useParams , Link} from "react-router-dom";

const products = [
    {id:1 , name:'کامپیوتر',price:'10'},
    {id: 2 , name:'ماشین',price:'2'},
    {id:3 , name:'کتاب',price:'4'},
    {id:4 , name:'بازی',price:'7'}
]
function ProductsDetails () {
    const {id} = useParams();
    const product = products.find(p => p.id === Number(id))
    
    if(!product) return <h2>محصولی پیدا نشد</h2>

    return(
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link to="/">بازگشت به خانه</Link>
        </div>
    )
}

export default ProductsDetails