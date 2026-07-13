import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Trip } from './types';

type Props = {
  trip: Trip | null;
  onClose: () => void;
};

const APP_STORE = 'https://apps.apple.com/';
const PLAY_STORE = 'https://play.google.com/store';

export function AppContinueModal({ trip, onClose }: Props) {
  useEffect(() => {
    if (!trip) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [trip, onClose]);

  return (
    <AnimatePresence>
      {trip && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-secondary/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="app-modal-title"
            className="fixed z-[101] left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-trayko-xl border border-outline-variant/20 overflow-hidden"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-6 sm:p-8">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-surface-container transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
                Reserva en la app
              </p>
              <h2 id="app-modal-title" className="text-xl font-extrabold text-on-surface pr-8 leading-snug">
                Continúa la reserva en la app de Trayko
              </h2>
              <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                {trip.origin} → {trip.destination} · Salida {trip.departureTime}
              </p>
              <p className="text-xs text-on-surface-variant mt-3">
                Pagos protegidos, conductores verificados y seguimiento en vivo.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={APP_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-white font-bold text-sm px-4 py-3.5 min-h-[48px] rounded-xl hover:opacity-90 transition-opacity"
                >
                  App Store
                </a>
                <a
                  href={PLAY_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary font-bold text-sm px-4 py-3.5 min-h-[48px] rounded-xl hover:bg-primary transition-colors"
                >
                  Google Play
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/15">
                <div
                  className="w-20 h-20 shrink-0 rounded-xl bg-white border border-outline-variant/20 flex items-center justify-center p-2"
                  aria-hidden
                >
                  <svg viewBox="0 0 80 80" className="w-full h-full text-on-surface">
                    <rect x="8" y="8" width="18" height="18" fill="currentColor" />
                    <rect x="32" y="8" width="6" height="6" fill="currentColor" />
                    <rect x="44" y="8" width="6" height="6" fill="currentColor" />
                    <rect x="56" y="8" width="6" height="6" fill="currentColor" />
                    <rect x="8" y="32" width="6" height="6" fill="currentColor" />
                    <rect x="20" y="32" width="6" height="6" fill="currentColor" />
                    <rect x="32" y="32" width="18" height="6" fill="currentColor" />
                    <rect x="56" y="32" width="6" height="6" fill="currentColor" />
                    <rect x="8" y="44" width="6" height="6" fill="currentColor" />
                    <rect x="32" y="44" width="6" height="6" fill="currentColor" />
                    <rect x="44" y="44" width="6" height="6" fill="currentColor" />
                    <rect x="56" y="44" width="18" height="6" fill="currentColor" />
                    <rect x="8" y="56" width="18" height="6" fill="currentColor" />
                    <rect x="32" y="56" width="6" height="6" fill="currentColor" />
                    <rect x="44" y="56" width="6" height="18" fill="currentColor" />
                    <rect x="56" y="56" width="6" height="6" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Escanea el código QR con tu celular para abrir Trayko y completar tu reserva en segundos.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
