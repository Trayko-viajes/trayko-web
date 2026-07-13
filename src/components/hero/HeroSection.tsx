import { useState } from 'react';
import { motion } from 'framer-motion';
import type { SearchForm, Trip } from './types';
import { filterTrips } from './mockTrips';
import { HeroSearchBar } from './HeroSearchBar';
import { TripPreviewCard } from './TripPreviewCard';
import { TripResultCard } from './TripResultCard';
import { AppContinueModal } from './AppContinueModal';

const defaultSearch: SearchForm = {
  origin: '',
  destination: '',
  date: '',
};

export function HeroSection() {
  const [search, setSearch] = useState<SearchForm>(defaultSearch);
  const [results, setResults] = useState<Trip[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  const handleChange = (field: keyof SearchForm, value: string) => {
    setSearch((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    setIsLoading(true);
    window.setTimeout(() => {
      const filtered = filterTrips(search.origin, search.destination, search.date);
      setResults(filtered);
      setIsLoading(false);
      document.getElementById('hero-results')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 450);
  };

  return (
    <>
      <section className="hero-section relative overflow-hidden bg-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 90% 20%, rgba(232, 83, 10, 0.06), transparent),
              radial-gradient(ellipse 60% 40% at 10% 80%, rgba(34, 34, 34, 0.03), transparent)
            `,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5d2cf' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-40 md:pb-16 lg:pt-44">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12 xl:gap-16">
            <div className="flex-1 min-w-0 max-w-xl">
              <motion.h1
                className="text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold tracking-tight text-on-surface leading-[1.08] mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                ¿Viajas solo?{' '}
                <span className="text-primary">Comparte</span> tu ruta y ahorra
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-on-surface-variant font-normal leading-relaxed max-w-md mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                Únete a nuestra comunidad de viajes compartidos. Reduce costos, conoce gente nueva y
                disminuye tu huella de carbono mientras viajas por la región.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                <HeroSearchBar
                  value={search}
                  onChange={handleChange}
                  onSubmit={handleSearch}
                  isLoading={isLoading}
                />
              </motion.div>
            </div>

            <TripPreviewCard />
          </div>

          {results !== null && (
            <motion.div
              id="hero-results"
              className="mt-14 sm:mt-16 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-end justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-lg font-extrabold text-on-surface">
                    {results.length > 0 ? 'Viajes disponibles' : 'Sin resultados'}
                  </h2>
                  <p className="text-sm text-on-surface-variant mt-1">
                    {results.length > 0
                      ? 'Selecciona un viaje para continuar en la app'
                      : 'Prueba otras ciudades o fechas'}
                  </p>
                </div>
                {results.length > 0 && (
                  <span className="text-xs font-bold text-primary bg-primary-fixed px-3 py-1 rounded-full">
                    {results.length} {results.length === 1 ? 'ruta' : 'rutas'}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                {results.length > 0 ? (
                  results.map((trip, i) => (
                    <TripResultCard
                      key={trip.id}
                      trip={trip}
                      index={i}
                      onSelect={setSelectedTrip}
                    />
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-outline-variant/40 bg-white/80 px-6 py-10 text-center text-sm text-on-surface-variant">
                    No encontramos viajes con esos criterios. Ejemplo: Barranquilla → Cartagena.
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <AppContinueModal trip={selectedTrip} onClose={() => setSelectedTrip(null)} />
    </>
  );
}
