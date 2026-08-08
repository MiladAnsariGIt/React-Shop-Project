import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar(){

    const {cart} = useContext(CartContext);

    const navStyle = ({ isActive }) => ({
    color: isActive ? "red" : "blue"
});

    return(
        <nav>
            <NavLink to="/" style={navStyle}>Home</NavLink>
            {" | "}
            <NavLink to="/products" style={navStyle}>Products</NavLink>
            {" | "}
            <NavLink to="/cart" style={navStyle}>🛒Cart{cart.length > 0 && `(${cart.reduce((sum,item)=>{
                return sum + item.quantity;
            },0)})`}</NavLink>
        </nav>
    )
}

export default Navbar