import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/Logo.svg';
import toast from 'react-hot-toast';

const CartIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);

const Navbar = ({ isloggedIn, setIsLoggedIn }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex justify-evenly items-center p-4 bg-slate-950 text-white">

      <Link to="/"><img src={logo} alt="Logo" width={160} height={32} loading="lazy" /></Link>

      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4 mr-6">

        {/* Cart Icon */}
        <Link to="/cart" className="relative p-2 hover:text-emerald-400 transition-colors">
          <CartIcon />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none">
              {cart.length}
            </span>
          )}
        </Link>

        {!isloggedIn && (
          <Link to="/Login">
            <button className="px-4 py-2 rounded-md bg-slate-900 hover:text-gray-300">
              Login
            </button>
          </Link>
        )}

        {!isloggedIn && (
          <Link to="/Signup">
            <button className="px-4 py-2 rounded-md bg-slate-900 hover:text-gray-300">
              SignUp
            </button>
          </Link>
        )}

        {isloggedIn && (
          <Link to="/">
            <button onClick={() => { setIsLoggedIn(false); toast.success("Logged Out"); }}
              className="px-4 py-2 rounded-md bg-slate-900 hover:text-gray-300">
              LogOut
            </button>
          </Link>
        )}

        {isloggedIn && (
          <Link to="/Dashboard">
            <button className="px-4 py-2 rounded-md bg-slate-900 hover:text-gray-300">
              Dashboard
            </button>
          </Link>
        )}

      </div>
    </div>
  );
};

export default Navbar;