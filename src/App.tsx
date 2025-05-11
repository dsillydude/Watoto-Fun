import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import './KidCampStyles.css';

const PlayfulActivityCard = () => {
  const activities = [
    {
      emoji: "📖",
      title: "Hadithi",
      description: "Hadithii mbalimbali za watoto",
      color: "bg-blue-100"
    },
    {
      emoji: "🎵",
      title: "Nyimbo Za Watoto",
      description: "Imba na Kucheza Nasi!",
      color: "bg-pink-100"
    },
    {
      emoji: "📺",
      title: "Video",
      description: "Tazama Video Na Ucheze!",
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
      <div className="w-full max-w-screen-2xl mx-auto px-4 bg-white dark:bg-gray-800 rounded-container shadow-soft p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-soft-hover overflow-hidden">

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

      

          <h1 className="header-title text-3xl sm:text-4xl md:text-5xl">Watoto Fun</h1>

          {/* Explore Button */}
<div className="flex justify-center mt-40 mb-0"> {/* Added mt-8 and mb-4 */}
  <div className="explore-button-container">
    <motion.a
      href="#"
      className="explore-button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>KaRIBU!</span>
      <div className="sparkles">✨✨</div>
    </motion.a>
  </div>
</div>
        </header>

      
        <PlayfulActivityCard />

        <section id="videos" className="w-full px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                onClick={() => handleVideoClick(item)}
                className="group bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className={`relative w-full aspect-video rounded-lg mb-4 overflow-hidden ${
                  item === 1 ? 'bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-700 dark:to-blue-900' : 
                  item === 2 ? 'bg-gradient-to-br from-pink-200 to-pink-400 dark:from-pink-700 dark:to-pink-900' : 
                  'bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-700 dark:to-purple-900'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
                  <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="songs" className="w-full px-4 py-16 bg-gray-50 dark:bg-gray-700/30 transition-colors duration-500 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Songs</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center">Song section coming soon!</p>
        </section>

        <section className="event-schedule-section w-full px-4 py-16 text-white rounded-xl overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center drop-shadow-md">EVENT SCHEDULE</h2>
            <div className="schedule-buttons-container">
              {scheduleItems.map((item, index) => (
                <button key={index} className="schedule-button">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center my-12">
          <button className="cta-button dark:bg-orange-700 dark:hover:bg-orange-800">
             Karibu Ufurahi!
          </button>
        </div>

        <footer className="bg-gray-800 dark:bg-black text-white dark:text-gray-400 text-center py-6 mt-12 rounded-b-[1.25rem]">
          <p>&copy; 2025 Watoto.Fun. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
