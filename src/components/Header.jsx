import React from "react";
import { Link, NavLink } from "react-router-dom"

import logo from '../assets/logo.png'

function Header() {
  return (
		<header>

      <Link to="/" className="logo">
				<img src={logo} alt="" />
			</Link>

			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/products">Products</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</nav>
			
		</header>
  );
}
export default Header