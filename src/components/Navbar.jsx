import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar(){

    const {cart} = useContext(CartContext);

    const cartCount = cart.reduce((sum, item) => sum + item.quantity,0);

    const navStyle = ({ isActive }) => ({
    color: isActive ? "red" : "blue"
});

    return(
        <header className="navbar">
            <div className="navbar-inner">

            <NavLink className="logo">🛒 MyStore</NavLink>

        <nav className="nav-links">
            <NavLink to="/" style={navStyle}>Home</NavLink>
            {" | "}
            <NavLink to="/products" style={navStyle}>Products</NavLink>
            {" | "}
            <NavLink to="/cart" style={navStyle} className="cart-link">🛒Cart{cart.length > 0 &&
             <span className="cart-badge">{cartCount}</span>}</NavLink>
        </nav>

            </div>
        </header>
    )
}

export default Navbar