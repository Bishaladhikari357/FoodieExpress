// add item to cart and notification

import React, { useState } from 'react';
import { cartData, additionalData } from '../../assets/dummydata';
import { useCart } from '../../CartContext/CartContext';
import { FaStar, FaPlus, FaFire } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { BiMinus as MiMinus } from 'react-icons/bi';
import FloatingParticle from '../FloatingParticle/FloatingParticle';

const SpecialOffer = () => {
  const [showAll, setShowAll] = useState(false);

  const initialData = [...cartData, ...additionalData];
  const { addToCart, updateQuantity, removeFromCart, cartItems } = useCart();

  const toggleShowAll = () => setShowAll(!showAll);

  // ✅ Fix: Define button base classes
  const addButtonBase =
    'relative flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600 text-white font-semibold';
  const addButtonHover =
    'hover:bg-amber-700 hover:scale-105 hover:shadow-lg';
  const commonTransition = 'transition-all duration-300';

  return (
    <div className="bg-gradient-to-b from-[#1a1212] to-[#2a1e1e] text-white py-20 px-5 font-[poppins]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 transform transition-all bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent font-[playfair_display] italic hover:scale-105">
            Today's <span className="text-stroke-gold-500">Special</span> Offer
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto tracking-wide leading-relaxed">
            Savor the flavor of our exclusive daily specials, crafted to delight your taste buds
            and elevate your dining experience. Each dish is a masterpiece, combining fresh
            ingredients and bold flavors to create unforgettable meals.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {(showAll ? initialData : initialData.slice(0, 4)).map((item) => {
            const cartItem = cartItems.find((ci) => ci.id === item.id);
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div
                key={item.id}
                className="relative group bg-[#4b3b3b] rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-4 transition-all duration-500 hover:shadow-red-900/40 border-2 border-transparent hover:border-amber-500/20 before:absolute before:inset-0 hover:before:opacity-20"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="flex items-center gap-2 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      <p className="ml-1 text-sm">({item.rating})</p>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent font-[Playfair_Display] italic">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-5 text-sm leading-relaxed tracking-wide">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-2xl font-bold text-amber-400 flex-1">
                      RS. {item.price}
                    </span>

                    {cartItem ? (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            quantity > 1
                              ? updateQuantity(item.id, quantity - 1)
                              : removeFromCart(item.id);
                          }}
                          className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-all duration-200 active:scale-95"
                        >
                          <MiMinus className="w-4 h-4 text-amber-100" />
                        </button>
                        <span className="w-8 text-center text-amber-100 font-cinzel">
                          {quantity}
                        </span>
                        <button
                          onClick={() => {
                            updateQuantity(item.id, quantity + 1);
                          }}
                          className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-all duration-200 active:scale-95"
                        >
                          <HiPlus className="w-4 h-4 text-amber-100" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() =>
                          addToCart(
                            { ...item, name: item.title, price: parseFloat(item.price) },
                            1
                          )
                        }
                        className={`${addButtonBase} ${addButtonHover} ${commonTransition}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        <FaPlus className="text-lg transition-transform" />
                        <span className="relative z-10">Add</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-amber-500/30 transition-all duration-500" />
                <div className="opacity-0 group-hover:opacity-100">
                  <FloatingParticle />
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle ShowAll */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 bg-gradient-to-r from-red-700 to-amber-700 text-white px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wider hover:gap-4 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 group border-2 border-amber-400/overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FaFire className="text-xl animate-pulse" />
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
