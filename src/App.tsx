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
      color: "from-blue-400 to-blue-600"
    },
    {
      emoji: "🎵",
      title: "Music",
      description: "Sing and dance along!",
      color: "from-pink-400 to-pink-600"
    },
    {
      emoji: "🎨",
      title: "Art",
      description: "Create masterpieces!",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <div className="py-10 px-4 relative z-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`bg-gradient-to-br ${activity.color} rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all h-full relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl text-center mb-4 z-10 relative"
              >
                {activity.emoji}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-center mb-2 text-white z-10 relative">{activity.title}</h3>
              <p className="text-center mb-4 text-white/80 z-10 relative">{activity.description}</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-6 rounded-full font-bold bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all z-10 relative"
              >
                Play Now
              </motion.button>
              
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl opacity-50"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 360],
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 1
                    }}
                  >
                    {['✨', '🌟', '🎈'][i % 3]}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
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

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] dark:from-gray-900 dark:to-gray-800 font-sans overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            initial={{
              y: Math.random() * 100,
              x: Math.random() * 100,
              rotate: Math.random() * 360
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${24 + Math.random() * 16}px`
            }}
          >
            {['🎈', '🎨', '🎵', '🎮', '🌟'][i % 5]}
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <header className="relative pt-8 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <motion.h1 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-4xl font-bold text-white drop-shadow-lg"
            >
              WATOTO.FUN
            </motion.h1>
            
            <div className="flex gap-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                ☰
              </button>
            </div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="text-6xl md:text-8xl font-bold text-white mb-8"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉 LET'S PLAY!
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <PlayfulActivityCard />

        {/* Rest of your sections (keep existing videos/songs sections) */}
        {/* ... */}

      </main>

      <footer className="bg-white/10 backdrop-blur-sm text-white py-6 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Watoto Fun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
