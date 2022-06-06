import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"

import { CartContext } from '../../context/CartContext'
// use react-router Link or NavLink
//const Link = <a />;

export const Navbar = () => {
  const { count } = useContext(CartContext)
  const { isAuth, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  console.log(count)
  const handleLoginClick = () => {

    if (isAuth) {
      logout();

    }
     else
      {
      navigate("/login");
    }

  }


  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Logo</Link>
      <span data-cy="navbar-cart-items-count">Cart:{count}</span>
      <button onClick={handleLoginClick} data-cy="navbar-login-logout-button">{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;