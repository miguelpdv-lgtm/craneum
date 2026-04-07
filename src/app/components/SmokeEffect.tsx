import { motion } from 'motion/react';

export function SmokeEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Dense smoke layers - much more visible */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1200px] h-[1200px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(40, 40, 40, ${0.6 - i * 0.03}) 0%, rgba(20, 20, 20, ${0.4 - i * 0.02}) 50%, transparent 80%)`,
            filter: 'blur(50px)',
            left: `${(i * 20) % 120 - 10}%`,
            top: `${(i * 15) % 100 - 10}%`,
          }}
          animate={{
            x: [0, (i % 2 ? 150 : -150), 0],
            y: [0, (i % 3 ? 100 : -100), 0],
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        />
      ))}
      
      {/* Heavy red smoke/fog at the bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[800px]"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(100, 0, 0, 0.4) 0%, rgba(60, 0, 0, 0.25) 40%, transparent 80%)',
          filter: 'blur(80px)',
        }}
        animate={{
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Thick vertical smoke columns */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`column-${i}`}
          className="absolute w-[400px] h-full"
          style={{
            background: `linear-gradient(to top, rgba(30, 30, 30, 0.7) 0%, rgba(20, 20, 20, 0.5) 50%, transparent 80%)`,
            filter: 'blur(40px)',
            left: `${i * 25}%`,
          }}
          animate={{
            x: [0, 50, -50, 0],
            opacity: [0.5, 0.75, 0.5],
          }}
          transition={{
            duration: 20 + i * 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Dense floating smoke patches */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`patch-${i}`}
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(50, 50, 50, 0.7) 0%, rgba(30, 30, 30, 0.4) 60%, transparent 100%)',
            filter: 'blur(60px)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.4, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 18 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}

      {/* Swirling dark smoke effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(20, 20, 20, 0.6) 100%)',
          filter: 'blur(100px)',
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Red tinted smoke near top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[600px]"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(80, 0, 0, 0.3) 0%, transparent 60%)',
          filter: 'blur(90px)',
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
