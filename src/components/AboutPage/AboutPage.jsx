// src/pages/AboutPage/AboutPage.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1212] to-[#2a1e1e] text-white py-12 px-6 font-[poppins]">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="md:w-1/2 space-y-4" variants={fadeInUp}>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent font-[Playfair_Display] italic">
              Welcome to FoodieExpress 
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your go-to food delivery platform, bringing delicious meals
              straight to your doorstep. Fresh, fast, and full of flavor!
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-amber-400 to-red-500 rounded-xl font-semibold text-[#2a1e1e] hover:opacity-90 transition"
            >
              Send Us Your Suggestion
            </a>
          </motion.div>
          <motion.div className="md:w-1/2" variants={fadeInUp}>
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              alt="Delicious Food"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="bg-[#3b2f2f] p-6 rounded-2xl text-center hover:shadow-lg transition" variants={fadeInUp}>
            <img
              src="https://img.freepik.com/premium-photo/chef-masterfully-preparing-fancy-gourmet-meal_507704-6568.jpg"
              alt="Fresh Meals"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Fresh & Tasty Meals</h3>
            <p className="text-gray-300">
              Delicious meals made fresh daily, crafted with the finest ingredients.
            </p>
          </motion.div>

          <motion.div className="bg-[#3b2f2f] p-6 rounded-2xl text-center hover:shadow-lg transition" variants={fadeInUp}>
            <img
              src="https://th.bing.com/th/id/R.c095ec02e02ce50754e0a663d78aa5a0?rik=KohjBC%2bLaeM3Mw&pid=ImgRaw&r=0"
              alt="Fast Delivery"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-300">
              Hot and fresh meals delivered quickly right to your doorstep.
            </p>
          </motion.div>

          <motion.div className="bg-[#3b2f2f] p-6 rounded-2xl text-center hover:shadow-lg transition" variants={fadeInUp}>
            <img
              src="https://thf.bing.com/th/id/OIP.0bnWCg2ajg6qohVbxRkLbgHaE7?w=298&h=199&c=7&r=0&o=5&cb=thfc1&pid=1.7"
              alt="Happy Customers"
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Customer Happiness</h3>
            <p className="text-gray-300">
              We value our customers and ensure a delightful experience every time.
            </p>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="bg-[#3b2f2f] p-8 rounded-2xl shadow-lg text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } }}
        >
          <h2 className="text-3xl font-bold mb-4 text-amber-400">Our Mission </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            FoodieExpress is committed to bringing joy through delicious meals.
            We strive to deliver fresh, tasty food with speed and care,
            making every dining experience memorable.
          </p>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div className="mb-16" initial="hidden" animate="visible" variants={staggerContainer}>
          <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rohan", feedback: "The food was amazing! Quick delivery and fresh meals.", img: "https://randomuser.me/api/portraits/men/52.jpg" },
              { name: "Priya", feedback: "I love FoodieExpress! Every meal tastes like a restaurant.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
              { name: "Suresh", feedback: "Great service and delicious food. Highly recommend!", img: "https://randomuser.me/api/portraits/men/67.jpg" },
            ].map((customer, i) => (
              <motion.div key={i} className="bg-[#3b2f2f] p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                <img
                  src={customer.img}
                  alt={customer.name}
                  className="mx-auto mb-4 w-20 h-20 rounded-full object-cover border-2 border-amber-400"
                />
                <p className="text-gray-300 mb-2">"{customer.feedback}"</p>
                <h4 className="font-semibold text-amber-400">{customer.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meet Our Team Section */}
        <motion.div className="mb-16" initial="hidden" animate="visible" variants={staggerContainer}>
          <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Bishal", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Sita", role: "Head Chef", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Anil", role: "Delivery Manager", img: "https://randomuser.me/api/portraits/men/45.jpg" },
              { name: "Anita", role: "Customer Support", img: "https://randomuser.me/api/portraits/women/47.jpg" },
            ].map((member, i) => (
              <motion.div key={i} className="bg-[#3b2f2f] p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="mx-auto mb-4 w-24 h-24 rounded-full object-cover border-2 border-amber-400"
                />
                <h4 className="font-semibold text-amber-400">{member.name}</h4>
                <p className="text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;
