
import { useState, useEffect } from "react";

function ProductSearch() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:3000/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        if (!cancelled) {
          setProducts(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredProducts = products.filter(product =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search products..."
      />

      <p>Products found: {filteredProducts.length}</p>

      {filteredProducts.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}

export default ProductSearch;
