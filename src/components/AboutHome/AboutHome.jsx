import React from 'react'
import { Link } from 'react-router-dom'
import { aboutfeature } from '../../assets/dummydata'
import { FaInfoCircle } from 'react-icons/fa'
import FloatingParticle from '../FloatingParticle/FloatingParticle'
import AboutImg from '../../Images/AboutImg.png'
import './AboutHome.css'
const AboutHome = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#0f0a0a] via-[#1a1212] to-[#2a1e1e] text-white 
                 py-10 sm:py-20 relative overflow-hidden'>
      {/* Background Blurs */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
        <div className='absolute top-1/4 left-20  bg-amber-400/20 
                   blur-3xl mix-blend-soft-light'/>
        <div className='absolute bottom-0 right-0 w-80 h-80 bg-orange-600/18 rounded-full
                   blur-3xl mix-blend-soft-light'/>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:gap-8 xl:gap-16 relative'>
        <div className='w-full order-1 lg:order-2 space-y-8 sm:space-y-12 relative'>
          
          {/* Heading */}
          <div className='space-y-4 sm:space-y-8 px-4 sm:px-0'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold leading-tight'>
              <span className='font-cursive text-3xl sm:text-5xl md:text-5xl bg-gradient-to-r from-amber-400
              to-orange-500 bg-clip-text text-transparent'>
                Epicurean Elegance
              </span>
              <br />
              <span className='inline-block mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl opacity-90 font-light'>
                Where Flavors Dance &amp; Memories Bloom
              </span>
            </h2>

            <p className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-sm sm:text-base md:text-lg lg:text-xl 
              opacity-90 leading-relaxed max-w-3xl font-serif italic border-4 bg-amber-500/60 
              pl-3 sm:pl-4 md:pl-6 py-2 bg-gradient-to-r from-white/5 to-transparent'>
              "in our kitchen, passion meets precision. we craft not just meals, 
              but culinary journeys that linger on the palate and in the heart."
            </p>
          </div>

          {/* Features */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 px-4 sm:px-0'>
            {aboutfeature.map((item, i) => (
              <div
                key={i}
                className='w-40 h-40 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center 
                 gap-2 sm:gap-3 transition-transform duration-300 p-4 sm:p-5 hover:scale-105 mx-auto
                 bg-gradient-to-br from-white/5 to-transparent shadow-lg'
              >
                <div
                  className={`p-4 sm:p-5 rounded-full bg-gradient-to-br ${item.color}
                  transition-transform duration-300 group-hover:scale-110`}
                >
                  <item.icon className='text-2xl sm:text-3xl text-white' />
                </div>

                <div className='text-center'>
                  <h3 className='text-base sm:text-lg font-bold font-cursive'>
                    {item.title}
                  </h3>
                  <p className='opacity-80 text-xs sm:text-sm'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className='flex flex-wrap gap-4 items-center mt-6 sm:mt-8 px-4 sm:px-0'>
            <Link 
              to='/about' 
              className='px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-600
              rounded-xl font-bold hover:scale-[1.02] transition-transform duration-300 flex items-center gap-2 sm:gap-3
              shadow-xl hover:shadow-amber-500/20 group relative overflow-hidden'
            >
              <span className='absolute inset-0 bg-gradient-to-r from-amber-600/30 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              
              <FaInfoCircle className='text-lg sm:text-xl animate-pulse'/>
              <span className='font-cursive text-lg sm:text-xl'>
                Unveil Our Legacy
              </span>
            </Link>
          </div>
        </div>

<div className='w-full order-2 lg:order-1 md:max-w-md lg:max-w-none lg:w-7/12 mt-12 mb-10 lg:mb-0 relative
group transform hover:scale-[1.01] transition-all duration-500'>
  <div className='relative rounded-[4rem] overflow-hidden border-4 border-amber-900/30 hover:border-amber-600/40 transition-all
  duration-500 shadow-2x1 shadow-black/50'>
    <div className='absolute inset-0 bg-gradient-to-br from-amber-400/15 via-transparent to-amber-600/10
    mix-blend-soft-light'/>
<img src={AboutImg} alt="Restaurant"
className='w-full h-auto object-cover aspect-[3/4] transform
-rotate-1 hover:rotate-0 transition-all duration-500'/>

<div className='absolute -bottom-12 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-amber-900/30 blur-3x1 z-0'/>
  </div>

  <div className='absolute -top-6 -right-6 bg-amber-500/10 rounded-full blur-x1'/>
</div>

      </div>
      <FloatingParticle/>
    </div>
  )
}

export default AboutHome
