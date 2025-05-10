import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleVideoClick = (videoId) => {
    alert(`Video ${videoId} clicked! Placeholder action.`);
    // In a real app, this would navigate to a video player or open a modal
  };

  const handleWatchNowClick = () => {
    alert('Watch Now clicked! Placeholder action.');
    // In a real app, this might navigate to the main video/content area
  };

  return (
    <div className="min-h-screen bg-sky-100 dark:bg-gray-900 font-sans transition-colors duration-500 overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative">
        <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 animate-pulse">KIDS</div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#videos" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Videos</a>
          <a href="#songs" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Songs</a>
        </nav>
        <div className="flex items-center">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-4 transition-transform transform hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 md:hidden shadow-lg rounded-b-lg p-4 z-10">
            <a href="#videos" onClick={toggleMobileMenu} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400">Videos</a>
            <a href="#songs" onClick={toggleMobileMenu} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400">Songs</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-10 pb-20 text-center bg-gradient-to-b from-sky-300 to-sky-400 dark:from-sky-800 dark:to-sky-900 rounded-b-[50px] relative overflow-hidden transition-colors duration-500 shadow-xl">
        {/* Animated Clouds/Balloons - Example placeholders */}
        <div className="absolute top-10 left-10 w-16 h-10 bg-white dark:bg-gray-400 rounded-full opacity-80 animate-bounce delay-100"></div>
        <div className="absolute top-20 right-10 w-12 h-12 bg-red-400 dark:bg-red-600 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-5 right-20 w-8 h-8 bg-yellow-300 dark:bg-yellow-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-5 left-5 w-10 h-10 bg-white dark:bg-gray-400 rounded-full opacity-60 animate-pulse delay-500"></div>


        <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-gray-100 mb-4 drop-shadow-lg">Welcome to Kids Site</h1>
        <p className="text-lg md:text-xl text-white dark:text-gray-200 mb-8 drop-shadow-md">Watch videos, sing along to songs, and enjoy fun animations!</p>
        <button 
          onClick={handleWatchNowClick}
          className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Watch Now
        </button>

        {/* Placeholder for characters - could be replaced with actual images/SVGs */}
        <div className="absolute bottom-[-20px] left-[15%] transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 bg-yellow-400 dark:bg-yellow-600 rounded-full border-4 border-white dark:border-gray-300 shadow-lg animate-bounce delay-200"></div> {/* Bunny */} 
        <div className="absolute bottom-[-15px] right-[15%] transform translate-x-1/2 w-24 h-24 md:w-32 md:h-32 bg-pink-400 dark:bg-pink-600 rounded-full border-4 border-white dark:border-gray-300 shadow-lg animate-bounce delay-400"></div> {/* Girl */}
      </section>

      {/* Videos Section */}
      <section id="videos" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Interactive Video Thumbnails */}
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              onClick={() => handleVideoClick(item)}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
            >
              <div className={`relative w-full h-40 rounded-md mb-4 flex items-center justify-center overflow-hidden ${item === 1 ? 'bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-700 dark:to-blue-900' : item === 2 ? 'bg-gradient-to-br from-pink-200 to-pink-400 dark:from-pink-700 dark:to-pink-900' : 'bg-gradient-to-br from-red-200 to-red-400 dark:from-red-700 dark:to-red-900'}`}>
                {/* Placeholder image/icon - replace with actual thumbnails */}
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-red-500 dark:bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L9 8.414V13.5a1 1 0 102 0V8.414l2.293 2.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                     <path fillRule="evenodd" d="M6.646 8.146a.5.5 0 0 1 .708 0L10 10.793l2.646-2.647a.5.5 0 0 1 .708.708L10.707 11.5l2.647 2.646a.5.5 0 0 1-.708.708L10 12.207l-2.646 2.647a.5.5 0 0 1-.708-.708L9.293 11.5 6.646 8.854a.5.5 0 0 1 0-.708z" clipRule="evenodd"/>
                     <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto mt-2"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Video Title {item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder for Songs Section */}
      <section id="songs" className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-500 rounded-t-lg">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Songs</h2>
        {/* Add song content here */}
        <p className="text-gray-600 dark:text-gray-400 text-center">Song section coming soon! Add interactive song elements here.</p>
        {/* Example: Simple song list item */}
        <div className="max-w-md mx-auto mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
          <p className="text-gray-800 dark:text-gray-200 font-semibold">Twinkle Twinkle Little Star</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Click to play (placeholder)</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-black text-white dark:text-gray-400 text-center py-6 mt-0">
        <p>&copy; 2025 Kids Site. Designed with fun!</p>
      </footer>
    </div>
  );
}

export default App;

