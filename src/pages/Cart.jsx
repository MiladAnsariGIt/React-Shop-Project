import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty.</h2>
      </div>
    );
  }

  const subtotal = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>

      <div className="cart-items">
        {cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <div className="cart-item-image">{product.image}</div>

            <div className="cart-item-info">
              <h2>{product.name}</h2>

              <p>{product.category}</p>

              <p>⭐ {product.rating}</p>
            </div>

            <div className="cart-item-price">
              <strong>${product.price * product.quantity}</strong>

              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(product.id)}>−</button>

                <span>{product.quantity}</span>

                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>

              <button
                className="remove-button"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <strong>${subtotal}</strong>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <hr />

        <div className="summary-total">
          <span>Total</span>
          <strong>${subtotal}</strong>
        </div>

        <div className="cart-actions">
          <button onClick={clearCart} className="clear-cart-button">
            Clear Cart
          </button>

          <button className="checkout-button" onClick={() => navigate('/checkout')}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
