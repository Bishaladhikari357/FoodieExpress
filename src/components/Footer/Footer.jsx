// src/components/Footer/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-[#1a1212] to-[#2a1e1e] text-white py-16 px-6 font-[poppins]  shadow-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h1 className="text-2xl font-bold text-amber-400">FoodieExpress</h1>
          <p className="text-gray-300">
            Fresh meals delivered fast, bringing joy and flavor to your doorstep every day.
          </p>
          <div className="flex gap-4 mt-4">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-amber-400 transition"><FaFacebookF /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-amber-400 transition"><FaInstagram /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-amber-400 transition"><FaTwitter /></motion.a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-xl font-semibold mb-4 text-amber-400">Quick Links</h3>
          <ul className="space-y-2">
            <motion.li whileHover={{ x: 5 }}><a href="/" className="text-gray-300 hover:text-amber-400 transition">Home</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="/about" className="text-gray-300 hover:text-amber-400 transition">About</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="/menu" className="text-gray-300 hover:text-amber-400 transition">Menu</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="/contact" className="text-gray-300 hover:text-amber-400 transition">Contact</a></motion.li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-xl font-semibold mb-4 text-amber-400">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2"><FaPhoneAlt /> +977 9812345678</motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2"><FaEnvelope /> support@foodieexpress.com</motion.li>
            <motion.li whileHover={{ x: 5 }}>Kathmandu, Nepal</motion.li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-xl font-semibold mb-4 text-amber-400">Newsletter</h3>
          <p className="text-gray-300 mb-4">Subscribe for latest updates & offers</p>
          <motion.form whileHover={{ scale: 1.02 }} className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-4 py-2 rounded-l-xl bg-[#2a1e1e] text-white border border-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-400" 
            />
            <button 
              type="submit" 
              className="px-4 py-2 bg-gradient-to-r from-amber-400 to-red-500 rounded-r-xl font-semibold hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </motion.form>
        </motion.div>

      </div>

      <motion.div 
        variants={fadeInUp} 
        className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-6"
      >
        &copy; {new Date().getFullYear()} FoodieExpress. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
