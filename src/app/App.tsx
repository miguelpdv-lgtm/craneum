import { motion } from 'motion/react';
import { Clock, Users, ChevronDown } from 'lucide-react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { SmokeEffect } from './components/SmokeEffect';
import { EscapeRoomCard } from './components/EscapeRoomCard';

// Import escape room images
import orientExpressImg from 'figma:asset/51975ac110037abc6d45a28bff268bb98b6b33a5.png';
import strangerThingsImg from 'figma:asset/d0663baae9a821e044b5de11ac7e5ce3f37499eb.png';
import juegosMacabrosImg from 'figma:asset/55fbc3cd9ca2bf356479a53b77e73459465340bc.png';

// Import logo and mascot
import logoImg from 'figma:asset/38aa533e23e08e4784387692bd71083918f9f3d7.png';
import mascotKeyImg from 'figma:asset/110cbc8352dd80512ebe019511f0cfbed98e30d4.png';
import mascotPointingImg from 'figma:asset/03aacb5acfa2769d46c6053fc830a2d600818df6.png';

export default function App() {
  const escapeRooms = [
    {
      title: 'Enigma en el Orient Express',
      description: 'En la noche más oscura de los Alpes Suizos, un hombre es asesinado mientras viaja en el Orient Express. ¿Podrá tu grupo analizar las evidencias y resolver el crimen antes de 60 minutos?',
      image: orientExpressImg
    },
    {
      title: 'Stranger Things - Luces del Más Allá',
      description: 'Algo se abrió... ¿te atreves a cruzar? Sumérgete en el mundo del revés y descubre los misterios que acechan en la oscuridad.',
      image: strangerThingsImg
    },
    {
      title: 'Juegos Macabros',
      description: '¿Podrás sobrevivir a la mente del asesino? Un juego donde cada decisión puede ser la última. El tiempo corre y el terror aumenta.',
      image: juegosMacabrosImg
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Particles background effect */}
      <ParticlesBackground />
      
      {/* Smoke effect - much more visible */}
      <SmokeEffect />

      {/* Dark red gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-red-950/20 via-black to-black pointer-events-none z-0" />

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 py-6 px-8"
      >
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <nav className="flex gap-8">
            <motion.a 
              href="#rooms" 
              className="text-gray-400 hover:text-red-500 transition-colors relative group"
              whileHover={{ scale: 1.05 }}
            >
              Salas
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-gray-400 hover:text-red-500 transition-colors relative group"
              whileHover={{ scale: 1.05 }}
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300" />
            </motion.a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 pt-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-6xl relative"
        >
          {/* Logo with floating animation */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="mb-8 relative inline-block"
          >
            <motion.img 
              src={logoImg}
              alt="Craneum Logo"
              className="h-64 w-auto mx-auto"
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(220, 38, 38, 0.6))',
                  'drop-shadow(0 0 40px rgba(220, 38, 38, 0.9))',
                  'drop-shadow(0 0 20px rgba(220, 38, 38, 0.6))'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Main title - all together */}
          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-8 leading-tight tracking-wider"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  '0 0 30px rgba(220, 38, 38, 0.6)',
                  '0 0 60px rgba(220, 38, 38, 0.9)',
                  '0 0 30px rgba(220, 38, 38, 0.6)'
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.5))',
              }}
            >
              CRANEUM
            </motion.span>
            <br />
            <motion.span 
              className="inline-block text-white"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ESCAPE GAMES
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Adéntrate en la oscuridad. Resuelve los enigmas. Escapa antes de que sea demasiado tarde.
          </motion.p>

          <motion.div
            className="flex gap-12 justify-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.1 }}
            >
              <Clock className="w-7 h-7 text-red-500" />
              <span className="text-gray-300 text-lg">60 minutos</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.1 }}
            >
              <Users className="w-7 h-7 text-red-500" />
              <span className="text-gray-300 text-lg">2-6 jugadores</span>
            </motion.div>
          </motion.div>

          <motion.a
            href="#rooms"
            className="inline-block relative group"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-gradient-to-r from-red-600 to-red-700 px-10 py-5 rounded-lg text-xl font-semibold border border-red-500/50">
              Descubre Nuestras Salas
            </div>
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-10 h-10 text-red-600 opacity-70" />
        </motion.div>
      </section>

      {/* Divider with blood effect */}
      <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent my-20" />

      {/* Escape Rooms Section */}
      <section id="rooms" className="relative z-10 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            <motion.h2 
              className="text-6xl font-bold mb-4"
              style={{ fontFamily: 'Creepster, cursive' }}
              animate={{
                textShadow: [
                  '0 0 20px rgba(220, 38, 38, 0.3)',
                  '0 0 40px rgba(220, 38, 38, 0.5)',
                  '0 0 20px rgba(220, 38, 38, 0.3)'
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Nuestras Experiencias
              </span>
            </motion.h2>
            <p className="text-gray-500 text-lg mb-12">
              Tres mundos de misterio y terror te esperan
            </p>
          </motion.div>

          {/* Layout with mascot presenting the games */}
          <div className="relative">
            {/* Mascot on the left presenting */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute -left-32 top-1/2 -translate-y-1/2 hidden xl:block z-20"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotateZ: [0, 3, -3, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.img 
                  src={mascotKeyImg}
                  alt="Craneum Mascot"
                  className="h-96 w-auto"
                  animate={{
                    filter: [
                      'drop-shadow(0 0 15px rgba(220, 38, 38, 0.5))',
                      'drop-shadow(0 0 30px rgba(220, 38, 38, 0.8))',
                      'drop-shadow(0 0 15px rgba(220, 38, 38, 0.5))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Games grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {escapeRooms.map((room, index) => (
                <EscapeRoomCard
                  key={room.title}
                  title={room.title}
                  description={room.description}
                  image={room.image}
                  index={index}
                />
              ))}
            </div>

            {/* Mobile mascot - appears centered on small screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="xl:hidden flex justify-center mt-12"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotateZ: [0, 3, -3, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.img 
                  src={mascotKeyImg}
                  alt="Craneum Mascot"
                  className="h-64 w-auto"
                  animate={{
                    filter: [
                      'drop-shadow(0 0 15px rgba(220, 38, 38, 0.5))',
                      'drop-shadow(0 0 30px rgba(220, 38, 38, 0.8))',
                      'drop-shadow(0 0 15px rgba(220, 38, 38, 0.5))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA with pointing mascot */}
      <section className="relative z-10 py-20 px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-red-950/40 to-black/60 border border-red-900/50 rounded-2xl p-12 backdrop-blur-sm overflow-hidden">
            {/* Animated red glow inside */}
            <motion.div
              className="absolute inset-0 bg-red-600/10"
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10 flex items-center justify-between gap-8">
              <div className="flex-1 text-left">
                <h3 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Creepster, cursive' }}>¿Te Atreves a Entrar?</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Reserva tu experiencia y descubre si tienes lo necesario para escapar
                </p>
                <motion.button
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-red-600 to-red-700 px-12 py-5 rounded-lg text-xl font-semibold border border-red-500/50">
                    Reservar Ahora
                  </div>
                </motion.button>
              </div>

              {/* Pointing mascot */}
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="hidden lg:block"
              >
                <motion.img 
                  src={mascotPointingImg}
                  alt="Craneum Mascot"
                  className="h-64 w-auto"
                  animate={{
                    filter: [
                      'drop-shadow(0 0 15px rgba(220, 38, 38, 0.5))',
                      'drop-shadow(0 0 30px rgba(220, 38, 38, 0.8))',
                      'drop-shadow(0 0 15px rgba(220, 38, 38, 0.5))'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom fog effect */}
      <div className="fixed bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-red-950/20 to-transparent pointer-events-none z-0" />
    </div>
  );
}