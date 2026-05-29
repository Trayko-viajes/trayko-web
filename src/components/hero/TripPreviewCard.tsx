import { motion } from 'framer-motion';
import { formatPrice } from './mockTrips';

export function TripPreviewCard() {
  return (
    <motion.div
      className="relative w-full max-w-[22rem] lg:max-w-none lg:w-[28rem] xl:w-[32rem] lg:ml-auto"
      initial={{ opacity: 0, y: 24, x: 12 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ y: -4, scale: 1.01 }}
        className="relative bg-white rounded-3xl border border-outline-variant/20 p-6 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.14)]"
      >
        <div className="pb-5">
          <p className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase mb-2">
            Vista previa
          </p>
          <h2 className="text-2xl font-extrabold text-on-surface leading-tight">
            Barranquilla —<br />
            Cartagena
          </h2>
        </div>

        <div className="mb-5 rounded-2xl overflow-hidden h-[150px] xl:h-[165px] bg-gradient-to-br from-[#f0ebe4] to-[#e4ddd4] relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 130" preserveAspectRatio="none" aria-hidden>
            <line x1="0" y1="65" x2="360" y2="65" stroke="#d0c9c0" strokeWidth="2" />
            <line x1="80" y1="0" x2="80" y2="130" stroke="#d0c9c0" strokeWidth="1.5" />
            <line x1="200" y1="0" x2="200" y2="130" stroke="#d0c9c0" strokeWidth="1.5" />
            <path
              d="M 55 65 Q 120 40 200 58 Q 270 72 310 65"
              stroke="#E8530A"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="55" cy="65" r="7" fill="#222" />
            <circle cx="55" cy="65" r="4" fill="white" />
            <circle cx="310" cy="65" r="7" fill="#E8530A" />
            <circle cx="310" cy="65" r="4" fill="white" />
          </svg>
          <motion.div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-outline-variant/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
              Ruta confirmada
            </span>
          </motion.div>
        </div>

        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8c4a8] to-[#c49a6c] flex items-center justify-center text-white font-bold text-sm">
              CM
            </div>
            <div>
              <p className="text-base font-bold text-on-surface">Carlos M.</p>
              <p className="text-xs text-on-surface-variant">★ 4.9 · Conductor verificado</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold tracking-wider text-on-surface-variant uppercase mb-0.5">
              Por silla
            </p>
            <p className="text-2xl font-extrabold text-on-surface">{formatPrice(28000)}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-on-surface-variant bg-surface-container-low rounded-2xl px-4 py-3">
          <span>Salida 07:30</span>
          <span className="font-semibold text-tertiary">2 cupos</span>
        </div>
      </motion.div>

      <div className="absolute -z-10 -inset-4 bg-primary/5 rounded-[2rem] blur-2xl" aria-hidden />
    </motion.div>
  );
}
