import type { Trip } from './types';

export const MOCK_TRIPS: Trip[] = [
  {
    id: '1',
    origin: 'Barranquilla',
    destination: 'Cartagena',
    date: '2026-05-30',
    price: 28000,
    seats: 2,
    driverName: 'Carlos M.',
    driverInitials: 'CM',
    departureTime: '07:30',
    rating: 4.9,
  },
  {
    id: '2',
    origin: 'Barranquilla',
    destination: 'Cartagena',
    date: '2026-05-30',
    price: 32000,
    seats: 1,
    driverName: 'Laura P.',
    driverInitials: 'LP',
    departureTime: '09:15',
    rating: 4.8,
  },
  {
    id: '3',
    origin: 'Medellín',
    destination: 'Bogotá',
    date: '2026-05-31',
    price: 45000,
    seats: 3,
    driverName: 'Andrés R.',
    driverInitials: 'AR',
    departureTime: '06:00',
    rating: 5,
  },
  {
    id: '4',
    origin: 'Cali',
    destination: 'Pereira',
    date: '2026-06-01',
    price: 38000,
    seats: 2,
    driverName: 'María G.',
    driverInitials: 'MG',
    departureTime: '14:45',
    rating: 4.7,
  },
  {
    id: '5',
    origin: 'Bucaramanga',
    destination: 'Santa Marta',
    date: '2026-05-30',
    price: 52000,
    seats: 1,
    driverName: 'Diego V.',
    driverInitials: 'DV',
    departureTime: '11:00',
    rating: 4.9,
  },
];

export function filterTrips(
  origin: string,
  destination: string,
  date: string,
): Trip[] {
  const o = origin.trim().toLowerCase();
  const d = destination.trim().toLowerCase();

  return MOCK_TRIPS.filter((trip) => {
    const matchOrigin = !o || trip.origin.toLowerCase().includes(o);
    const matchDest = !d || trip.destination.toLowerCase().includes(d);
    const matchDate = !date || trip.date === date;
    return matchOrigin && matchDest && matchDate;
  });
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
  }).format(new Date(iso + 'T12:00:00'));
}
