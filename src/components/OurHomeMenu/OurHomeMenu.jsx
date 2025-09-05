import React, { useState, useEffect } from 'react';
import { useCart } from '../../CartContext/CartContext';
import { dummyMenuData } from '../../assets/OurHomeMenuDummydata';
import { FaMinus, FaPlus } from 'react-icons/fa';

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Mexican', 'Italian', 'Desserts', 'Drinks'];

const OurHomeMenu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [notification, setNotification] = useState(null);

  const displayItems = (dummyMenuData[activeCategory] || []).slice(0, 4);
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();

  const getQuantity = (id) => cartItems.find(i => i.id === id)?.quantity || 0;

  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Show notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-[#1a120b] via-[#2a1e14] to-[#3e2b1d] min-h-screen py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200">
          <span className="font-dancing-script block text-4xl sm:text-6xl md:text-7xl mb-2">
            Our Exquisite Menu
          </span>
          <span className="block text-lg sm:text-2xl md:text-3xl font-cinzel mt-4 text-amber-100/80">
            A Symphony of Flavours
          </span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-6 py-2 rounded-full border-2 transition-all duration-300 transform font-cinzel text-xs sm:text-base md:text-lg tracking-widest backdrop-blur-sm 
                ${activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-900/80 to-amber-700/80 border-amber-800 scale-105 shadow-lg shadow-amber-900/30'
                  : 'bg-amber-900/20 border-amber-800/30 text-amber-100/80 hover:bg-amber-800/40 hover:scale-95'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {displayItems.map((item, i) => {
            const quantity = getQuantity(item.id);

            return (
              <div
                key={item.id}
                className="relative bg-amber-900/20 rounded-2xl overflow-hidden border border-amber-800/30 backdrop-blur-sm flex flex-col transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 lg:h-56 flex items-center justify-center bg-black/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl md:text-2xl mb-2 font-dancing-script text-amber-100">
                    {item.name}
                  </h3>
                  <p className="text-amber-100/80 text-xs sm:text-sm md:text-base mb-4 font-cinzel leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center gap-4 justify-between">
                    <div className="bg-amber-100/10 backdrop-blur-sm px-3 py-1 rounded-2xl shadow-lg">
                      <span className="text-base sm:text-lg font-bold text-amber-300 font-dancing-script">
                        Rs. {item.price}
                      </span>
                    </div>

                    {/* Cart Controls */}
                    <div className="flex items-center gap-2">
                      {quantity > 0 ? (
                        <>
                          <button
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-colors"
                            onClick={() =>
                              quantity > 1
                                ? updateQuantity(item.id, quantity - 1)
                                : removeFromCart(item.id)
                            }
                          >
                            <FaMinus className="text-amber-100 text-sm sm:text-base" />
                          </button>

                          <span className="w-8 text-center text-amber-100 text-sm sm:text-base">
                            {quantity}
                          </span>

                          <button
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-colors"
                            onClick={() => {
                              addToCart(item, 1);
                              showNotification(`${item.name} added to cart`);
                            }}
                          >
                            <FaPlus className="text-amber-100 text-sm sm:text-base" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            addToCart(item, 1);
                            showNotification(`${item.name} added to cart`);
                          }}
                          className="bg-amber-900/40 px-3 sm:px-4 py-1.5 rounded-full font-cinzel text-xs sm:text-sm uppercase tracking-wider transition-transform duration hover:scale-110 hover:shadow-md border border-amber-800/50"
                        >
                          <span className="text-black">Add to cart</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ✅ Notification */}
        {notification && (
          <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-amber-800 text-amber-100 px-3 sm:px-4 py-2 rounded-lg shadow-lg animate-bounce text-sm sm:text-base">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurHomeMenu;
