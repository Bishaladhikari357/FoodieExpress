import React, { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const AwesomeToast = ({ message, icon }) => (
  <div className='animated-slide-in fixed bottom-6 right-6 flex items-center bg-gradient-to-r from-amber-500 to-amber-700 px-4 py-2 rounded-lg shadow-lg border-2 border-amber-300/20'>
    <span className='text-2xl mr-3 text-[#2D1B0E]'>{icon}</span>
    <span className='font-semibold text-[#2D1B0E]'>{message}</span>
  </div>
)

const Signup = () => {
  const [showToast, setShowToast] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  // Toast auto-hide + navigate
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
        navigate('/login')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [showToast, navigate])

  const toggleShowPassword = () => setShowPassword((prev) => !prev)

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sign Up Data:', formData)
    setShowToast(true)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#1a120b] p-4'>
      {showToast && (
        <AwesomeToast message='Signup Successful' icon={<FaCheckCircle />} />
      )}

      <div className='w-full max-w-md bg-gradient-to-br from-[#2D1B0E] to-[#4a372a] p-8 
        rounded-xl shadow-lg border-2 border-amber-300/20 transform hover:scale-105 
        transition-all duration-300 hover:shadow-2xl'>
            
        <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-amber-500 
        to-amber-700 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform'>
          Create Account
        </h1>
            
        <form onSubmit={handleSubmit} className='space-y-6'>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            className='w-full px-4 py-3 bg-[#2D1B0E] text-amber-500 placeholder-amber-400 
            focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300
            hover:scale-[1.02]'
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-3 bg-[#2D1B0E] text-amber-500 placeholder-amber-400 
            focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300
            hover:scale-[1.02]'
            required
          />

          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className='w-full px-4 py-3 bg-[#2D1B0E] text-amber-500 placeholder-amber-400 
              focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300
              hover:scale-[1.02]'
              required
            />

            <button
              type='button'
              onClick={toggleShowPassword}
              className='absolute inset-y-0 right-4 flex items-center text-amber-400 hover:text-amber-600
              transition-all transform hover:scale-125'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type='submit'
            className='w-full py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-[#2D1B0E] 
            font-bold rounded-lg shadow-md hover:scale-105 transition-all duration-300 
            border-2 border-amber-300/30'
          >
            Sign Up
          </button>
        </form>
        <div className='mt-6 text-center'>
            <Link to='/login'
            className='group inline-flex items-center text-amber-400 hover:text-amber-600 transition-all duration-300'>
                <FaArrowLeft className='mr-2 transform -translate-x-2 opacity-0 group-hover:translate-x-0
                 group-hover:opacity-100 transition-all duration-300'/>
                 <span className='transform group=hover:-translate-x-1 transition-all duration-300'>
                    Back to Login
                 </span>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
