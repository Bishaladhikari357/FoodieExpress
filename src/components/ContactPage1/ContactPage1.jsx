// src/pages/ContactPage/ContactPage1.jsx
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactPage1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "Service_afOiqrk", // replace with your EmailJS service ID
        "template_x8y5afg", // replace with your EmailJS template ID
        formData,
        "ODI2IvrM6wd1D_8Pz" // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Your suggestion has been sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1212] to-[#2a1e1e] text-white py-12 px-6 font-[poppins]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent font-[Playfair_Display] italic">
          Send Us Your Suggestion
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#3b2f2f] p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-amber-300 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#2a1e1e] border border-amber-500/40 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-amber-300 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#2a1e1e] border border-amber-500/40 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-amber-300 font-semibold mb-2">Suggestion</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your suggestion here..."
              className="w-full px-4 py-3 rounded-xl bg-[#2a1e1e] border border-amber-500/40 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>
          </div>

          {/* Status */}
          {status && (
            <p className="text-center text-sm text-gray-300">{status}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-400 to-red-500 text-white rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            Send Suggestion
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage1;
