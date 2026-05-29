export type Trip = {
  id: string;
  origin: string;
  destination: string;
  date: string;
  price: number;
  seats: number;
  driverName: string;
  driverInitials: string;
  departureTime: string;
  rating: number;
};

export type SearchForm = {
  origin: string;
  destination: string;
  date: string;
};
