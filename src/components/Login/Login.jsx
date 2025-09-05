import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaEye, FaEyeSlash, FaUser, FaLock, FaArrowRight, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = ({ onLoginSuccess, onClose }) => {
  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  useEffect(() => {
    const stored = localStorage.getItem('loginData');
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.rememberMe) {
      localStorage.setItem('loginData', JSON.stringify(formData));
    } else {
      localStorage.removeItem('loginData');
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    if (onLoginSuccess) onLoginSuccess();
  };

  const handleChange = ({ target: { name, value, type, checked } }) =>
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const inputClass =
    'w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none';
  const iconClass =
    'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400';

  return (
    <div className="space-y-6 relative">
      {/* Toast */}
      <div
        className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
          showToast ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <div className="bg-green-600 text-white px-4 py-2 rounded-md shadow-lg flex items-center gap-2 text-sm">
          <FaCheckCircle className="flex-shrink-0" />
          <span>Login Successful</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div className="relative">
          <FaUser className={iconClass} />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className={`${inputClass} pl-10 pr-4 py-3`}
          />
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className={iconClass} />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`${inputClass} pl-10 pr-4 py-3`}
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Remember Me */}
        <div className="flex items-center space-x-2">
          <label htmlFor="rememberMe" className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className='form-checkbox h-4 w-4 text-amber-600 focus:ring-amber-500
             bg-[#2D1B0E] border-amber-300 rounded focus:ring-amber-500'
          />
           <span className='ml-2 text-amber-500'>Remember Me</span>
          </label>
        </div>

        {/* Signup */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-[#2D1B0E] font-bold rounded-lg
           hover:from-amber-600 hover:to-amber-800 flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          Signup <FaArrowRight/>
        </button>
      </form>

<div className='text-center'>
  <Link to={'/signup'} onClick={onClose} 
  className='inline-flex items-center gap-2 text-amber-500 hover:text-amber-700 transition-colors text-sm'>
<FaUserPlus/> create New account
  </Link>
</div>

    </div>
  );
};

export default Login;
