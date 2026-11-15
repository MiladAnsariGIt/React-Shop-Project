import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: "Gaming" | "Office" | "Accessories";
};
type CategoryFilter = "All" | Product["category"];


type StockStatus = "available" | "out-of-stock" | "coming-soon";

type ProductCardProps = {
  product: Product;
  isBestSeller?: boolean;
  discount?: number;
};

function ProductCard({ product, isBestSeller = false, discount = 0 }: ProductCardProps) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {isBestSeller && <p>Best seller</p>}
      {discount !== 0 && <p>Discount is: {discount}%</p>}
    </div>
  );
}

function getStockMessage(stockStatus: StockStatus) {
  if (stockStatus === "available") {
    return "In Stock";
  }
  else if (stockStatus === "out-of-stock") {
    return "Not Available";
  }
  else {
    return "Coming Soon";
  }
}

function Cart() {
  const [cart, setCart] = useState<Product[]>([]);

  const newProduct: Product = {
    id: Date.now(),
    name: "Gaming Mouse",
    price: 50,
    category: "Gaming",
  };



  function addToCart() {
    setCart(prev => [...prev, newProduct]);
  }

  function removeFromCart(id: Product["id"]) {
    setCart(prev => prev.filter(product => product.id !== id));
  }

  return (
    <div>
      <p>Cart: {cart.length}</p>
      <button onClick={addToCart}>Add to cart</button>

      {cart.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => removeFromCart(product.id)}>Remove from cart</button>
        </div>
      ))}
    </div>
  );
}

type SearchBoxProps = {
  onSearch: (text: string) => void;
};

function SearchBox({ onSearch }: SearchBoxProps) {
  const [text, setText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <button onClick={() => onSearch(text)}>Search</button>
    </div>
  );
}

function Products() {
  const products: Product[] = [
    { id: 1, name: "Gaming Mouse", price: 50, category: "Gaming" },
    { id: 2, name: "Office Keyboard", price: 30, category: "Office" },
    { id: 3, name: "Gaming Headset", price: 80, category: "Gaming" },
  ];
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchText, setSearchText] = useState<string>("");
  const [category, setCategory] = useState<CategoryFilter>("All");

  function handleSearch(text: string) {
    setSearchText(text);
    filterProducts(text,category);
  }

  function filterProducts(text: string,selectCategory: CategoryFilter) {
    setFilteredProducts(products.filter
      (product => product.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        && (selectCategory === "All" || product.category === selectCategory))
    )
  }

  function filterByCategory(value: CategoryFilter) {
    setCategory(value);
    filterProducts(searchText,value);
  }

  return (
    <div>
      <SearchBox onSearch={handleSearch}></SearchBox>
      <select value={category} onChange={(event) => filterByCategory(event.target.value as Product["category"])}>
            <option value="All">All</option>
            <option value="Gaming">Gaming</option>
            <option value="Office">Office</option>
            <option value="Accessories">Accessories</option>
          </select>
      {filteredProducts.map(product => (
        <div key={product.id}>
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
        </div>

      ))}
    </div>
  )
}