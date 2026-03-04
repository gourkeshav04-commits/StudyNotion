import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../Redux/cartSlice";
import toast from "react-hot-toast";

const TrashIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
    <path d="M10 11v6M14 11v6"/>
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
  </svg>
);

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  function handleRemove(id, name) {
    dispatch(remove(id));
    toast.error(`"${name}" removed from cart`);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-10 px-4 pb-16">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <div className="mb-10">
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Your Cart</p>
          <h1 className="text-4xl font-extrabold text-white">
            {cart.length > 0 ? `${cart.length} Course${cart.length > 1 ? "s" : ""} Added` : "Your Cart"}
          </h1>
        </div>

        {cart.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Column — Cart Items */}
            <div className="w-full lg:w-[60%] flex flex-col gap-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-slate-800 rounded-2xl p-4 border border-slate-700 hover:border-slate-500 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-20 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      {item.tag && (
                        <span className="text-xs font-bold bg-yellow-400 text-slate-900 px-2 py-0.5 rounded-full mb-1 inline-block">
                          {item.tag}
                        </span>
                      )}
                      <h3 className="font-bold text-white text-base leading-tight">{item.name}</h3>
                      <p className="text-slate-400 text-xs mt-1 line-clamp-2">{item.info}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-emerald-400 font-bold text-lg">
                        ₹ {item.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => handleRemove(item.id, item.name)}
                        className="flex items-center gap-1.5 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 hover:border-red-500 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                      >
                        <TrashIcon /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column — Order Summary */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 sticky top-24">
                <p className="text-emerald-400 font-semibold text-base mb-1">Your Cart</p>
                <h2 className="text-5xl font-extrabold text-emerald-400 mb-6">Summary</h2>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex justify-between text-slate-300 text-sm">
                    <span>Total Courses</span>
                    <span className="font-bold text-white">{cart.length}</span>
                  </div>
                  <div className="flex justify-between text-slate-300 text-sm">
                    <span>Original Price</span>
                    <span className="font-bold text-white">₹ {totalAmount.toLocaleString()}</span>
                  </div>
                  
                </div>

                <hr className="border-slate-600 mb-4" />

                <div className="flex justify-between items-center mb-6">
                  <span className="text-white font-bold text-lg">Total Amount</span>
                  <span className="text-white font-extrabold text-xl">₹ {totalAmount.toLocaleString()}</span>
                </div>

                <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 rounded-xl text-lg transition-colors duration-200 shadow-lg shadow-emerald-900/30">
                  Checkout Now
                </button>

                <Link to="/">
                  <button className="w-full mt-3 border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white font-semibold py-2.5 rounded-xl text-sm transition-colors duration-200">
                    ← Continue Browsing
                  </button>
                </Link>
              </div>
            </div>

          </div>
        ) : (
          /* Empty State */
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty!</h2>
            <p className="text-slate-400 mb-8 max-w-sm">
              Looks like you haven't added any courses yet. Explore our catalog and start learning!
            </p>
            <Link to="/">
              <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold rounded-xl uppercase tracking-wider transition-colors text-sm">
                Explore Courses
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;