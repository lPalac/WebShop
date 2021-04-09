import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./css/dropdown.css";
import { CartContext } from "./context/CartContext";

export default function Header() {

  const [cart] = useContext(CartContext);

  return (
    <div className="header">
      <Link to="/" >
        <button >Login</button>
      </Link>
      <Link to="/getWether" >
        <button >Temperatura Split</button>
      </Link>
      <Link to="/shop" >
        <button >View Products</button>
      </Link>
      <Link to="/cart"  >
        <button  >Go to Cart({cart.length})</button>
      </Link>

    </div>
  )
}
