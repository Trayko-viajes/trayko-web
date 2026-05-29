import { motion } from 'framer-motion';
import type { Trip } from './types';
import { formatPrice, formatTripDate } from './mockTrips';

type Props = {
  trip: Trip;
  index: number;
  onSelect: (trip: Trip) => void;
};

export function TripResultCard({ trip, index, onSelect }: Props) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(trip)}
      className="w-full text-left bg-white rounded-2xl border border-outline-variant/25 p-5 sm:p-6 hover:border-primary/30 hover:shadow-[0_12px_40px_-16px_rgba(232,83,10,0.25)] transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex-1 min-w-0">
          <p className="text-lg font-extrabold text-on-surface">
            {trip.origin} → {trip.destination}
          </p>
          <p className="text-sm text-on-surface-variant mt-1">
            {formatTripDate(trip.date)} · Salida {trip.departureTime}
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary font-bold text-xs flex items-center justify-center">
              {trip.driverInitials}
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface">{trip.driverName}</p>
              <p className="text-xs text-on-surface-variant">★ {trip.rating.toFixed(1)}</p>
            </div>
          </div>

          <div className="text-right sm:pl-6 sm:border-l border-outline-variant/25">
            <p className="text-xl font-extrabold text-on-surface">{formatPrice(trip.price)}</p>
            <p className="text-xs font-semibold text-tertiary mt-0.5">
              {trip.seats} {trip.seats === 1 ? 'cupo' : 'cupos'}
            </p>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
