import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-amber-800 flex items-center"
        >
          <span className="bg-amber-800 text-white px-2 border border-none rounded-full">
            T
          </span>
          <span className="ml-2">Takshvi Bakery</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-500 font-medium">
          <Link to="/" className="hover:text-amber-700">
            Home
          </Link>
          <Link to="/products" className="hover:text-amber-700">
            Products
          </Link>
          <Link to="/about" className="hover:text-amber-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-amber-700">
            Contact
          </Link>
          
        </nav>

        {/* Desktop Cart & Login */}
        <div className="hidden md:flex space-x-6 text-amber-800 font-medium">
           <Link
            to="/cart"
            className="text-xl text-amber-800 hover:text-amber-700"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <Link to="/auth/login" className="hover:text-amber-700">
            Login
          </Link>
        </div>

        {/* Toggle + Cart - Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          
          <Link
            to="/cart"
            className="text-xl text-amber-800 hover:text-amber-700"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-amber-800 focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-gray-700 font-medium">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-amber-700"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-amber-700"
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-amber-700"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-amber-700"
          >
            Contact
          </Link>
         
          <hr />
          <Link
            to="/auth/login"
            onClick={() => setMenuOpen(false)}
            className="block text-amber-800 hover:text-amber-700"
          >
            Login
          </Link>
           <Link
            to="/auth/signup"
            onClick={() => setMenuOpen(false)}
            className="block text-amber-800 hover:text-amber-700"
          >
            sign up
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
