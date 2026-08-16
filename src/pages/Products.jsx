//import products from "../data/products";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";

function Products(){

    const {data,loading,error} = useFetch("http://localhost:3000/products");
    const [search,setSearch] = useState("");
    const [category,setCategory] = useState("all");

    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }

    const filteredData = data.filter(product => {

    const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
        category === "all" ||
        product.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
    });

    return(
        <div>
            <input type="text"
             value={search} 
             onChange={e => setSearch(e.target.value)}
             placeholder="Search product..."
             />
             <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="keyboard">Keyboard</option>
                <option value="mouse">Mouse</option>
                <option value="headphone">Headphone</option>
             </select>
            <br />
            <h2>Products</h2>
           { filteredData.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )

}

export default Products