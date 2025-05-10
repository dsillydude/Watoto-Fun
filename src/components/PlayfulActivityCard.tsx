import { motion } from "framer-motion";
import { FaGamepad, FaMusic, FaPalette } from "react-icons/fa";

interface ActivityCardProps {
  icon: JSX.Element; // Changed from emoji to icon
  title: string;
  description: string;
  color: string;
}

const PlayfulActivityCard = () => {
  // Updated activities data with icons
  const activities: ActivityCardProps[] = [
    {
      icon: <FaGamepad className="inline-block" />,
      title: "Games",
      description: "Fun learning adventures!",
      color: "bg-blue-100"
    },
    {
      icon: <FaMusic className="inline-block" />,
      title: "Music",
      description: "Sing and dance along!",
      color: "bg-pink-100"
    },
    {
      icon: <FaPalette className="inline-block" />,
      title: "Art",
      description: "Create masterpieces!",
      color: "bg-purple-100"
    }
  ];

  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Let's Play Together!
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`${activity.color} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full`}>
              {/* Animated Icon */}
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
                className="text-6xl text-center mb-4 flex justify-center"
              >
                {activity.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-center mb-2">{activity.title}</h3>
              <p className="text-center mb-4">{activity.description}</p>
              
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
      
      {/* Friendly 3D Character */}
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

export default PlayfulActivityCard;