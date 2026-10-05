import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/api";

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);
  const [isSubmiting,setIsSubmitting] = useState(false);
  const [submitError,setSubmitError] = useState("");

  const total = cart.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0,
  );

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newError = validate();
    setErrors(newError);

    if (Object.keys(newError).length > 0) return;

    const order = {
      customer: formData,
      items: cart,
      total: total,
      createdAt: new Date().toISOString(),
    };

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const createdOrder = await createOrder(order);
      
      console.log(createdOrder);

      clearCart();
      navigate("/order-success");
    } catch (error) {
      console.log(error);
      setSubmitError("Failed to place order. Please try again.")
    } finally{
      setIsSubmitting(false);
    }
  }

  function validate() {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is empty";
    if (!formData.email.includes("@")) newErrors.email = "Email is not true";
    if (!formData.phone.trim()) newErrors.phone = "phone is empty";
    if (!formData.address.trim()) newErrors.address = "address is empty";
    if (!formData.city.trim()) newErrors.city = "city is empty";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "postalCode is empty";

    return newErrors;
  }

  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="fullName"
            type="text"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="error-message">{errors.fullName}</p>
          )}
        </div>
        <div className="form-group">
          <label>ٍEmail</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            name="city"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="error-message">{errors.city}</p>}
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input
            name="postalCode"
            type="text"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && (
            <p className="error-message">{errors.postalCode}</p>
          )}
        </div>
        <button type="submit" disabled={isSubmiting}>{isSubmiting ? "Placing order..." : "Place Oreder"}</button>
        {submitError && <p className="error-message">{submitError}</p>}
      </form>

      <div className="order-summary">
        <h2>Order Summary</h2>

        {cart.map((product) => (
          <div className="order-item" key={product.id}>
            <div>
              <strong>{product.name}</strong>
              <p>
                {product.quantity} × ${product.price}
              </p>
            </div>

            <strong>${product.price * product.quantity}</strong>
          </div>
        ))}

        <hr />

        <div className="order-total">
          <span>Total</span>
          <strong>${total}</strong>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
