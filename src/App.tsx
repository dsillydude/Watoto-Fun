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
    <div className="py-8 px-2">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Let's Play Together!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`${activity.color} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full dark:bg-opacity-20`}>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl text-center mb-4"
              >
                {activity.emoji}
              </motion.div>

              <h3 className="text-xl font-bold text-center mb-2 dark:text-white">{activity.title}</h3>
              <p className="text-center mb-4 dark:text-gray-200">{activity.description}</p>

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

      <div className="mt-12 flex justify-center">
        <motion.img
          src="/assets/kid-mascot.png"
          alt="Friendly Robot"
          className="h-40"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
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

  const handleVideoClick = (videoId: number) => {
    alert(`Video ${videoId} clicked! Placeholder action.`);
  };

  const scheduleItems = [
    "READY JULY 5",
    "SATURDAY JULY 6",
    "JUNE 7",
    "BEST SALES",
    "FREE DAYS",
    "HOURS 9AM-4PM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 font-sans transition-colors duration-500 overflow-x-hidden w-full flex justify-center items-start py-4">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-800 rounded-container shadow-soft p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-soft-hover overflow-hidden">

        <header className="kidcamp-header relative">
          <i className="fas fa-cloud cloud" style={{ top: '20%', left: '10%' }}></i>
          <i className="fas fa-cloud cloud" style={{
            top: '15%',
            right: '15%',
            animationDuration: '18s',
            animationDirection: 'reverse'
          }}></i>

          <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 p-2 rounded-md bg-white/30 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 z-50 transition-transform transform hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden absolute top-4 left-4 text-white p-2 rounded-md hover:bg-white/20 z-50"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>

          <h1 className="header-title text-3xl sm:text-4xl md:text-5xl">Watoto Fun</h1>

          <div className="logo-circle">
            <div className="logo-text">PLAY</div>
          </div>
        </header>

        {mobileMenuOpen && (
          <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg p-4 z-50 mt-[200px]">
            <a href="#videos" onClick={toggleMobileMenu} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400">Videos</a>
            <a href="#songs" onClick={toggleMobileMenu} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400">Songs</a>
            <a href="#activities" onClick={toggleMobileMenu} className="block
