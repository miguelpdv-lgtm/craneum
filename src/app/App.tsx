import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  Users,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { EscapeRoomCard } from './components/EscapeRoomCard';

// Public images
const orientExpressImg = '/img/oriente.png';
const strangerThingsImg = '/img/stranger.png';
const juegosMacabrosImg = '/img/macabros.png';

const logoImg = '/img/logo.png';
const mascotKeyImg = '/img/mascota1.png';
const mascotPointingImg = '/img/mascota2.png';

export default function App() {
  const escapeRooms = [
    {
      title: 'Enigma en el Orient Express',
      description:
        'En la noche más oscura de los Alpes Suizos, un hombre es asesinado mientras viaja en el Orient Express. ¿Podrá tu grupo analizar las evidencias y resolver el crimen antes de 60 minutos?',
      image: orientExpressImg,
    },
    {
      title: 'Stranger Things - Luces del Más Allá',
      description:
        'Algo se abrió... ¿te atreves a cruzar? Sumérgete en el mundo del revés y descubre los misterios que acechan en la oscuridad.',
      image: strangerThingsImg,
    },
    {
      title: 'Juegos Macabros',
      description:
        '¿Podrás sobrevivir a la mente del asesino? Un juego donde cada decisión puede ser la última. El tiempo corre y el terror aumenta.',
      image: juegosMacabrosImg,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % escapeRooms.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [escapeRooms.length]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + escapeRooms.length) % escapeRooms.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % escapeRooms.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <ParticlesBackground />
      <div className="glitch-overlay" />
      <div className="vhs-noise-bars" />

      <div className="fixed inset-0 bg-gradient-radial from-red-950/20 via-black to-black pointer-events-none z-0" />

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 py-6 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <nav className="flex gap-6 sm:gap-8">
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

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 pt-20 vhs-panel">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-6xl relative z-10"
        >
          <motion.div
            animate={{ y: [0, -12, 0], opacity: [0.92, 1, 0.92] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-8 relative inline-block"
            style={{ willChange: 'transform, opacity' }}
          >
            <img
              src={logoImg}
              alt="Craneum Logo"
              className="h-40 sm:h-52 md:h-64 w-auto mx-auto"
              style={{ filter: 'drop-shadow(0 0 18px rgba(220, 38, 38, 0.6))' }}
            />
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-wider"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ fontFamily: 'Creepster, cursive' }}
          >
            <span className="vhs-title-semi inline-block bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(220,38,38,0.55)]">
              CRANEUM
            </span>
            <br />
            <motion.span
              className="inline-block text-white vhs-title-semi"
              animate={{ opacity: [0.92, 1, 0.92] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              ESCAPE GAMES
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Adéntrate en la oscuridad. Resuelve los enigmas. Escapa antes de que sea demasiado tarde.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div className="flex items-center justify-center gap-3" whileHover={{ scale: 1.05 }}>
              <Clock className="w-7 h-7 text-red-500" />
              <span className="text-gray-300 text-lg">60 minutos</span>
            </motion.div>

            <motion.div className="flex items-center justify-center gap-3" whileHover={{ scale: 1.05 }}>
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
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-gradient-to-r from-red-600 to-red-700 px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-semibold border border-red-500/50">
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

      <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent my-20" />

      {/* Escape Rooms */}
      <section id="rooms" className="relative z-10 py-20 px-4 sm:px-8 vhs-panel">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative z-10"
          >
            <h2
              className="vhs-title-semi text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-red-500 drop-shadow-[0_0_18px_rgba(220,38,38,0.7)]"
              style={{ fontFamily: 'Creepster, cursive' }}
            >
              Nuestras Experiencias
            </h2>

            <p className="text-gray-500 text-base sm:text-lg mb-12">
              Tres mundos de misterio y terror te esperan
            </p>
          </motion.div>

          {/* Mobile carousel */}
          <div className="lg:hidden relative">
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute left-[-40px] bottom-24 z-30 pointer-events-none"
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
                <img
                  src={mascotKeyImg}
                  alt="Craneum Mascot"
                  className="h-56 sm:h-64 w-auto drop-shadow-[0_0_28px_rgba(220,38,38,0.85)]"
                />
              </motion.div>

              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="relative z-10 vhs-card-glitch"
              >
                <EscapeRoomCard
                  title={escapeRooms[currentSlide].title}
                  description={escapeRooms[currentSlide].description}
                  image={escapeRooms[currentSlide].image}
                  index={currentSlide}
                />
              </motion.div>

              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-40 rounded-full bg-black/70 border border-red-900/50 p-2 text-white"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-40 rounded-full bg-black/70 border border-red-900/50 p-2 text-white"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-5">
              {escapeRooms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index ? 'w-8 bg-red-600' : 'w-2.5 bg-red-900/60'
                  }`}
                  aria-label={`Ir a la sala ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute -left-32 top-1/2 -translate-y-1/2 z-20"
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
                <img
                  src={mascotKeyImg}
                  alt="Craneum Mascot"
                  className="h-96 w-auto drop-shadow-[0_0_22px_rgba(220,38,38,0.7)]"
                />
              </motion.div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {escapeRooms.map((room, index) => (
                <div key={room.title} className="vhs-card-glitch">
                  <EscapeRoomCard
                    title={room.title}
                    description={room.description}
                    image={room.image}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="relative z-10 py-20 px-4 sm:px-8 mt-20 vhs-panel">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-red-950/40 to-black/60 border border-red-900/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-red-600/10"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10 flex flex-col items-center text-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:text-left">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="order-1 flex justify-center lg:order-2 lg:justify-end"
              >
                <img
                  src={mascotPointingImg}
                  alt="Craneum Mascot"
                  className="h-64 w-auto sm:h-72 md:h-52 lg:h-64"
                  style={{
                    filter: 'drop-shadow(0 0 18px rgba(220, 38, 38, 0.6))',
                  }}
                />
              </motion.div>

              <div className="order-2 flex-1 text-center lg:order-1 lg:text-left">
                <h3
                  className="vhs-title-semi text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                  style={{ fontFamily: 'Creepster, cursive' }}
                >
                  ¿Te Atreves a Entrar?
                </h3>

                <p className="text-gray-400 mb-8 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                  Reserva tu experiencia y descubre si tienes lo necesario para escapar
                </p>

                <motion.button
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-red-600 to-red-700 px-8 sm:px-12 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-semibold border border-red-500/50">
                    Reservar Ahora
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-red-950/20 to-transparent pointer-events-none z-0" />
    </div>
  );
}