export type Trip = {
  id: string;
  origin: string;
  destination: string;
  departureTime: string; // ISO datetime
  price: number;
  seats: number;
  driverName: string;
  driverInitials: string;
  rating: number | null;
};

type PublicSearchApiTrip = {
  tripId: string;
  departureTime: string;
  arrivalTime: string | null;
  availableSeats: number;
  pricePerSeat: number;
  origin: { city: string; department: string };
  destination: { city: string; department: string };
  driver: {
    firstName: string;
    lastInitial: string | null;
    rating: number | null;
    completedTrips: number;
  } | null;
  vehicle: { brand: string; model: string } | null;
};

/**
 * Consulta el buscador público de viajes (Trayko-api: GET /public/trips/search).
 * Esa ruta nunca devuelve foto ni apellido completo del conductor — ver
 * Trayko-api/src/public-search/public-search.service.ts.
 */
export async function searchTrips(origin: string, destination: string, date: string): Promise<Trip[]> {
  const apiUrl = import.meta.env.PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error('missing_api_url');
  }

  const params = new URLSearchParams({ origin, destination });
  if (date) params.set('date', date);

  const response = await fetch(`${apiUrl}/public/trips/search?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`search_failed_${response.status}`);
  }

  const json: { data?: PublicSearchApiTrip[] } = await response.json();
  return (json.data ?? []).map((trip) => {
    const firstName = trip.driver?.firstName?.trim() || 'Conductor';
    const lastInitial = trip.driver?.lastInitial ?? '';
    return {
      id: trip.tripId,
      origin: trip.origin.city,
      destination: trip.destination.city,
      departureTime: trip.departureTime,
      price: trip.pricePerSeat,
      seats: trip.availableSeats,
      driverName: lastInitial ? `${firstName} ${lastInitial}.` : firstName,
      driverInitials: `${firstName.charAt(0)}${lastInitial}`.toUpperCase(),
      rating: trip.driver?.rating ?? null,
    };
  });
}

export type CityOption = {
  id: string;
  cityName: string;
  departmentName: string;
};

let citiesCache: CityOption[] | null = null;
let citiesPromise: Promise<CityOption[]> | null = null;

/**
 * Trae el catálogo de ciudades reales de Trayko-api (GET /cities) una sola vez
 * y lo cachea en memoria para alimentar el autocompletado de origen/destino.
 */
export function fetchCities(): Promise<CityOption[]> {
  if (citiesCache) return Promise.resolve(citiesCache);
  if (citiesPromise) return citiesPromise;

  const apiUrl = import.meta.env.PUBLIC_API_URL;
  if (!apiUrl) return Promise.resolve([]);

  citiesPromise = fetch(`${apiUrl}/cities`)
    .then((response) => (response.ok ? response.json() : { cities: [] }))
    .then((json: { cities?: CityOption[] }) => {
      citiesCache = json.cities ?? [];
      return citiesCache;
    })
    .catch(() => []);

  return citiesPromise;
}

function normalizeCityQuery(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim();
}

export async function matchCities(query: string, limit = 6): Promise<CityOption[]> {
  const cities = await fetchCities();
  const normalizedQuery = normalizeCityQuery(query);
  const matches = normalizedQuery
    ? cities.filter((city) => normalizeCityQuery(city.cityName).includes(normalizedQuery))
    : cities;
  return matches.slice(0, limit);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatTripDate(iso: string) {
  return new Intl.DateTimeFormat('es-CO', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    timeZone: 'America/Bogota',
  }).format(new Date(iso));
}

export function formatTripTime(iso: string) {
  return new Intl.DateTimeFormat('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Bogota',
  }).format(new Date(iso));
}
