import { NavLink } from "react-router-dom";

function Navbar({cart}){

    const navStyle = ({ isActive }) => ({
    color: isActive ? "red" : "blue"
});

    return(
        <nav>
            <NavLink to="/" style={navStyle}>Home</NavLink>
            {" | "}
            <NavLink to="/products" style={navStyle}>Products</NavLink>
            {" | "}
            <NavLink to="/cart" style={navStyle}>🛒Cart{cart.length > 0 && `(${cart.length})`}</NavLink>
        </nav>
    )
}

export default Navbar