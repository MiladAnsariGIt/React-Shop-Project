import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: "Gaming" | "Office" | "Accessories";
};

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

function SearchBox() {
  const [text, setText] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function clearInput(){
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <p>{text}</p>
      <button onClick={clearInput}>Clear Input</button>
    </div>
  );
}