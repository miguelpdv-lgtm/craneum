import { motion } from 'motion/react';
import { useState } from 'react';

interface EscapeRoomCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export function EscapeRoomCard({ title, description, image, index }: EscapeRoomCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer overflow-hidden rounded-lg border border-red-950/50"
    >
      {/* Image with dark overlay */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-10" />
        <motion.img
          src={image}
          alt={title}
          className="w-full h-[500px] object-cover"
          animate={{
            scale: isHovered ? 1.15 : 1,
            filter: isHovered ? 'brightness(0.6) contrast(1.2)' : 'brightness(0.5) contrast(1)',
          }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Red glitch effect on hover */}
        <motion.div
          className="absolute inset-0 bg-red-900/30 mix-blend-multiply z-[5]"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? [0, 0.6, 0, 0.4, 0] : 0,
          }}
          transition={{ 
            duration: 0.8,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 0.3
          }}
        />

        {/* Mysterious red vignette */}
        <motion.div
          className="absolute inset-0 z-[6]"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(139, 0, 0, 0.4) 100%)',
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <motion.div
          animate={{
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-2 text-white relative"
            animate={{
              textShadow: isHovered 
                ? ['0 0 10px rgba(220, 38, 38, 0.8)', '0 0 20px rgba(220, 38, 38, 1)', '0 0 10px rgba(220, 38, 38, 0.8)']
                : '0 0 0px rgba(220, 38, 38, 0)',
            }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-gray-300 text-sm"
            animate={{
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Animated border glow on hover */}
      <motion.div
        className="absolute inset-0 border-2 border-red-600 z-30 pointer-events-none rounded-lg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? [0, 0.6, 0] : 0,
          boxShadow: isHovered 
            ? ['0 0 20px rgba(220, 38, 38, 0.5)', '0 0 40px rgba(220, 38, 38, 0.8)', '0 0 20px rgba(220, 38, 38, 0.5)']
            : '0 0 0px rgba(220, 38, 38, 0)',
        }}
        transition={{ 
          duration: 1.5, 
          repeat: isHovered ? Infinity : 0 
        }}
      />

      {/* Corner accents */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-500 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-500 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </>
      )}
    </motion.div>
  );
}
