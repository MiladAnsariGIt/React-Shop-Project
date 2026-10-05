import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getProduct } from "../services/api";
import { CartContext } from "../context/CartContext";
import { useContext,useCallback } from "react";
import Loading from "../components/Loading";

function ProductDetails() {

  const { id } = useParams();

  const fetchProduct = useCallback(() => {
    return  getProduct(id);
  },[id])

  const { data, loading, error } = useFetch(fetchProduct);

  const {addToCart} = useContext(CartContext);

  if (loading) return <Loading />;

  if (error) return <h2>{error}</h2>;

  return (
    <div className="product-details">
      <div className="details-image">{data.image}</div>
      <div className="details-info">
        <h1>{data.name}</h1>
        <p className="details-price">💰price: {data.price}</p>
        <p className="details-category">📂category: {data.category}</p>
        <p className="details-rating">⭐rating: {data.rating}</p>
        <p className="details-description">{data.description}</p>
        <button className="add-cart-button" onClick={() => addToCart(data)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
