// src/pages/CartPage/CartPage.jsx
import React, { useEffect } from 'react';
import { useCart } from '../../CartContext/CartContext';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1212] to-[#2a1e1e] text-white py-12 px-6 font-[poppins]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent font-[Playfair_Display] italic">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-300 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-[#3b2f2f] p-5 rounded-2xl shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl border-2 border-amber-500/30"
                />

                {/* Item details */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-amber-300">{item.name}</h2>
                  <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                  <p className="text-amber-400 font-semibold">
                    Rs. {item.price} × {item.quantity} = Rs. {item.price * item.quantity}
                  </p>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      item.quantity > 1
                        ? updateQuantity(item.id, item.quantity - 1)
                        : removeFromCart(item.id)
                    }
                    className="w-8 h-8 flex items-center justify-center bg-amber-900/40 rounded-full hover:bg-amber-800/50 transition-all"
                  >
                    <FaMinus className="text-sm text-white" />
                  </button>

                  <span className="px-3 text-lg font-semibold text-amber-100">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-amber-900/40 rounded-full hover:bg-amber-800/50 transition-all"
                  >
                    <FaPlus className="text-sm text-white" />
                  </button>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 p-2 text-red-500 hover:text-red-700 transition-colors"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            ))}

            {/* Total Price */}
            <div className="mt-10 flex justify-between items-center bg-[#4b3b3b] p-6 rounded-2xl shadow-xl border-t border-amber-500/30">
              <h2 className="text-2xl font-bold text-amber-300">Total:</h2>
              <span className="text-3xl font-extrabold text-amber-400">
                Rs. {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
