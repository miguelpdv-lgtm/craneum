import { motion } from 'motion/react';

interface EscapeRoomCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export function EscapeRoomCard({
  title,
  description,
  image,
  index,
}: EscapeRoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative overflow-hidden rounded-xl border border-red-950/40 bg-black/40"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-red-900/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <h3
          className="mb-3 text-2xl font-bold text-white"
          style={{ fontFamily: 'Creepster, cursive' }}
        >
          {title}
        </h3>

        <p className="text-sm leading-6 text-gray-300">
          {description}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-red-800/0 transition duration-300 group-hover:ring-red-700/40" />
    </motion.div>
  );
}