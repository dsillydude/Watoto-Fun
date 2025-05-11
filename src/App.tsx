import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import './KidCampStyles.css';

const PlayfulActivityCard = () => {
  const activities = [
    {
      emoji: "🎮",
      title: "Games",
      description: "Fun learning adventures!",
      color: "bg-blue-100"
    },
    {
      emoji: "🎵",
      title: "Music",
      description: "Sing and dance along!",
      color: "bg-pink-100"
    },
    {
      emoji: "🎨",
      title: "Art",
      description: "Create masterpieces!",
      color: "bg-purple-100"
    }
  ];

  return (
    <div className="sm:py-8 sm:px-2"> {/* Mobile: no padding, Desktop: py-8 px-2 */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:mb-6 text-gray-800 dark:text-white">
        Let's Play Together!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 w-full">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`${activity.color} rounded-3xl sm:p-6 shadow-lg hover:shadow-xl transition-shadow h-full dark:bg-opacity-20`}>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl text-center sm:mb-4"
              >
                {activity.emoji}
              </motion.div>
              <h3 className="text-xl font-bold text-center sm:mb-2 dark:text-white">{activity.title}</h3>
              <p className="text-center sm:mb-4 dark:text-gray-200">{activity.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 px-4 rounded-full font-bold ${
                  index === 0 ? "bg-blue-400 hover:bg-blue-500" :
                  index === 1 ? "bg-pink-400 hover:bg-pink-500" :
                  "bg-purple-400 hover:bg-purple-500"
                } text-white`}
              >
                Play Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="sm:mt-12 flex justify-center">
        <motion.img
          src="/assets/kid-mascot.png"
          alt="Friendly Robot"
          className="h-32 sm:h-40" {/* Mobile: smaller size */}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 font-sans transition-colors duration-500 overflow-x-hidden w-full flex justify-center items-start sm:py-4">
      {/* Mobile: no padding, Desktop: py-4 */}
      <div className="w-full mx-auto px-0 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 rounded-[1.25rem] shadow-lg sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl overflow-hidden">
        {/* Mobile: px-0, Desktop: px-6 */}

        <header className="kidcamp-header relative">
          <i className="fas fa-cloud cloud" style={{ top: '20%', left: '10%' }}></i>
          <i className="fas fa-cloud cloud" style={{ top: '15%', right: '15%', animationDuration: '18s', animationDirection: 'reverse' }}></i>

          <button
            onClick={toggleTheme}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-md bg-white/30 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 z-50 transition-transform transform hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden absolute top-2 left-2 sm:top-4 sm:left-4 text-white p-2 rounded-md hover:bg-white/20 z-50"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>

          <h1 className="header-title text-2xl sm:text-4xl md:text-5xl">Watoto Fun</h1>
          <div className="logo-circle">
            <div className="logo-text">PLAY</div>
          </div>
        </header>

        {mobileMenuOpen && (
          <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg p-4 z-50 mt-[120px] sm:mt-[200px]">
            {/* Mobile: smaller top margin */}
            <a href="#videos" onClick={toggleMobileMenu} className="block py-2">Videos</a>
            <a href="#songs" onClick={toggleMobileMenu} className="block py-2">Songs</a>
            <a href="#activities" onClick={toggleMobileMenu} className="block py-2">Activities</a>
          </nav>
        )}

        <PlayfulActivityCard />

        <footer className="bg-gray-800 text-white text-center py-4 sm:py-6 sm:mt-12 rounded-b-[1.25rem]">
          {/* Mobile: smaller padding */}
          <p>&copy; 2025 Watoto Fun. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
