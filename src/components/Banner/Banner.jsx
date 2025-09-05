import React, { useState } from 'react'
import { FaDownload, FaPlay, FaSearch, FaTimes } from "react-icons/fa";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showVideo, SetShowVido] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  }

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-amber-900 to-amber-500 
        h-auto md:h-[450px] lg:h-[500px] w-full relative overflow-hidden 
        py-12 px-4 sm:px-6 lg:px-12">

        {/* Background image */}
        <div
          className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] 
          bg-cover bg-center opacity-50'
        ></div>

        {/* Content wrapper */}
        <div className="max-w-7xl mx-auto h-full flex flex-col-reverse md:flex-row items-center relative text-white gap-10 md:gap-6">
          
          {/* LEFT SECTION */}
          <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left px-2 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif drop-shadow-md">
              We're Here <br />
              <span className="text-amber-400 bg-gradient-to-r from-amber-900 to-amber-500 bg-clip-text  
                font-extrabold block md:inline-block mt-2">
                For Food & Delivery
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-playfair italic text-amber-100 max-w-xl opacity-90 mx-auto md:mx-0">
              Best cooks and best delivery guys all at your service. <br />
              Hot tasty food will reach you within 30 minutes.
            </p>

            {/* Search form */}
            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto md:mx-0">
              <div className="relative flex items-center bg-amber-900/30 rounded-xl border-2 border-amber-500 shadow-xl 
                hover:bg-amber-400/50 transition-all duration-300 w-full">
                
                <div className="pl-4 sm:pl-6 pr-3 py-3 sm:py-4">
                  <FaSearch className="text-lg sm:text-xl text-amber-400/70" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Discover your next favorite meal..."
                  className="w-full py-3 sm:py-4 pr-24 bg-transparent outline-none placeholder-amber-200/60 
                    text-sm sm:text-base md:text-lg font-medium tracking-wide"
                />
                <button
                  type="submit"
                  className="absolute right-2 sm:right-1 top-1/2 transform -translate-y-1/2 
                    bg-amber-500 hover:bg-amber-600 text-white font-semibold px-3 sm:px-4 py-2 rounded-lg  
                    text-sm sm:text-base transition-colors duration-300">
                  Search
                </button>
              </div>
            </form>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm sm:text-base font-medium text-amber-100/90">
              <button className="group flex items-center gap-2 sm:gap-3 bg-amber-900/30 hover:bg-amber-400/50 border-2 border-amber-500 rounded-full px-3 sm:px-4 py-2 transition-all duration-300">
                <FaDownload className="text-lg sm:text-xl text-amber-400/70 group-hover:animate-bounce" />
                <span className="text-sm sm:text-lg">Download App</span>
              </button>

              <button onClick={() => SetShowVido(true)}
                className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-900 to-amber-500
                  hover:from-amber-800 hover:to-amber-600 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 
                  shadow-lg hover:shadow-amber-700/50 border-2">
                <FaPlay className="text-lg sm:text-xl text-amber-900" />
                <span className="text-sm sm:text-lg text-amber-100 font-semibold">Watch Video</span>
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative rounded-full p-1 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-400 
              shadow-2xl w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                className="w-full h-full object-cover rounded-full object-top"
                alt="Delicious Food"
              />
            </div>
          </div>
        </div>
      </div>
      {/* VIDEO MODEL */}
      {showVideo && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'>
          <button
            onClick={() => SetShowVido(false)}
            className='absolute top-4 right-4 text-amber-300 hover:text-amber-500 text-3xl z-10 transition-all'>
              <FaTimes/>
            </button>

            <div className='w-full aspect-video object-contain rounded-lg overflow-hidden shadow-2xl'>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              <video 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
                autoPlay
                className='w-auto h-full object-cover'
              > Your browser does not support the video tag.</video>
            </div>
          </div>
      )}
    </div>
  )
}

export default Banner
