import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from "../context/CartContext";

const Header = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <header className="header">
      <h1>Hockey Town</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">
        <FaCartShopping />{" "}
        {cartCount > 0 && <span className="counter">{cartCount}</span>}
      </Link>
    </header>
  );
};

export default Header;
