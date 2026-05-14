import { NavLink } from "react-router";

function Navbar() {
    return (
        <div className="d-flex justify-content-center">
            <NavLink
                to=""
                className="nav-btn"
            >
                HOME
            </NavLink>
            <NavLink
                to="about"
                className="nav-btn"
            >
                ABOUT US
            </NavLink>
            <NavLink
                to="products"
                className="nav-btn"
            >
                OUR PRODUCTS
            </NavLink>
            <NavLink
                to="*"
                className="nav-btn"
            >
                LOSE YOURSELF
            </NavLink>
        </div>
    )
};

export default Navbar;