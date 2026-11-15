import { useState } from "react";
import { useEffect } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    rating: number;
    inStock: boolean;
}

function ProductManager() {

    const [products, setProducts] = useState<Product[]>([]);

    function addProduct(value: Product) {
        setProducts(prev => [...prev, value]);
    }

    const testProduct: Product = {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.8,
    inStock: true
}

useEffect(() => {fetch("https://example.com/products")
    .then(response => response.json())
    .then(data => {
       setProducts(data);
    })},[])


    return(
        <div>
            <p>{products.length}</p>
            <button onClick={() => addProduct(testProduct)}>add product</button>
        </div>
    )
}

