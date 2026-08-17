//import products from "../data/products";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";

function Products(){

    const {data,loading,error} = useFetch("http://localhost:3000/products");
    const [search,setSearch] = useState("");
    const [category,setCategory] = useState("all");
    const [sort,setSort] = useState("default");
    const [currentPage,setCurrentPage] = useState(1);
    const productsPerPage = 6;

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

    const sortedData = [...filteredData].sort((a,b) => {
        if(sort === "price-low")
            return a.price - b.price;
        if(sort === "price-high")
            return b.price - a.price;
        if(sort === "rating-high")
            return b.rating - a.rating
        return 0;
    })

    // pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = sortedData.slice(startIndex,endIndex);

    const totalPages = Math.ceil(sortedData.length / productsPerPage);

    return(
        <div>
            <input type="text"
             value={search} 
             onChange={e => {setSearch(e.target.value);
                setCurrentPage(1);
             }}
             placeholder="Search product..."
             />
             <select value={category} onChange={e => { setCategory(e.target.value);
                setCurrentPage(1);
             }}>
                <option value="all">All</option>
                <option value="keyboard">Keyboard</option>
                <option value="mouse">Mouse</option>
                <option value="headphone">Headphone</option>
             </select>
             <select value={sort} onChange={e => { setSort(e.target.value);
                setCurrentPage(1);
             }}>
                <option value="default">Default</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="rating-high">Rating: High → Low</option>
             </select>
            <br />
            <h2>Products</h2>
           {currentProducts.length === 0 ? <h3>no products found!</h3> : currentProducts.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
            <div>
            {Array.from({length: totalPages}).map((_,index) => (
                <button key={index} onClick={() => setCurrentPage(index+1)}>{index+1}</button>
            ))}
           </div>
        </div>
    )

}

export default Products