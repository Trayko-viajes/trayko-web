export interface RouteInfo {
  slug: string;
  origin: string;
  destination: string;
  title: string;
  metaDescription: string;
  distance: string;
  estimatedDuration: string;
  priceFrom: number;
  busPriceEstimate: string;
  corridorName: string;
  highlights: string[];
  pickupPoints: string[];
  dropoffPoints: string[];
  image: string;
  faqs: { question: string; answer: string }[];
}

export const POPULAR_ROUTES: RouteInfo[] = [
  {
    slug: 'bogota-medellin',
    origin: 'Bogotá',
    destination: 'Medellín',
    title: 'Viajes compartidos Bogotá a Medellín en carro',
    metaDescription: 'Encuentra o publica viajes compartidos de Bogotá a Medellín en Trayko. Ahorra hasta 40% frente al bus intermunicipal, viaja cómodo y seguro.',
    distance: '420 km',
    estimatedDuration: '8 - 9 horas',
    priceFrom: 45000,
    busPriceEstimate: '$85.000 - $110.000 COP',
    corridorName: 'Corredor Central',
    image: 'https://images.unsplash.com/photo-1690533683283-76cd18853006?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Puntos de encuentro flexibles en el norte o centro de Bogotá',
      'Ahorro de hasta 40% respecto a los tiquetes de bus',
      'Paradas programadas en restaurantes de carretera confortables',
      'Llegada directa al Valle de Aburrá sin transbordos innecesarios'
    ],
    pickupPoints: ['Portal Norte', 'Terminal Salitre', 'Calle 170', 'Autopista Medellín - Siberia'],
    dropoffPoints: ['Terminal del Norte', 'Estación Niquía', 'El Poblado', 'Estación Industriales'],
    faqs: [
      {
        question: '¿Cuánto cuesta un viaje compartido de Bogotá a Medellín en Trayko?',
        answer: 'Los aportes para compartir gastos suelen comenzar desde los $45.000 COP por puesto, frente a los $90.000 COP o más que cuesta un pasaje en bus intermunicipal.'
      },
      {
        question: '¿Dónde se acuerda el punto de encuentro?',
        answer: 'El conductor define puntos de salida estratégicos (como Portal Norte, Calle 80 o Terminal Salitre) y puedes coordinar paradas exactas mediante el chat de la app.'
      },
      {
        question: '¿Es seguro viajar en carro compartido en esta ruta?',
        answer: 'Sí. Todos los conductores en Trayko pasan por verificación de identidad biométrica, revisión de antecedentes y validación de SOAT y tecnomecánica vigente.'
      }
    ]
  },
  {
    slug: 'medellin-bogota',
    origin: 'Medellín',
    destination: 'Bogotá',
    title: 'Viajes compartidos Medellín a Bogotá en carro',
    metaDescription: 'Viaja de Medellín a Bogotá compartiendo carro particular con Trayko. Precios económicos, conductores verificados y reserva fácil en la app.',
    distance: '420 km',
    estimatedDuration: '8 - 9 horas',
    priceFrom: 45000,
    busPriceEstimate: '$85.000 - $110.000 COP',
    corridorName: 'Corredor Central',
    image: 'https://images.unsplash.com/photo-1690533683283-76cd18853006?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Salidas desde El Poblado, Laureles, Bello o Autopista Norte',
      'Menos tiempo de viaje que en transporte masivo tradicional',
      'Comunidad con perfiles y calificaciones verificadas',
      'Pagos protegidos y seguimiento en vivo'
    ],
    pickupPoints: ['Estación Niquía', 'Terminal del Norte', 'El Poblado', 'San Diego'],
    dropoffPoints: ['Portal Calle 80', 'Portal Norte', 'Terminal Salitre', 'Aeropuerto El Dorado'],
    faqs: [
      {
        question: '¿Cuánto tiempo dura el viaje de Medellín a Bogotá?',
        answer: 'En automóvil particular el recorrido toma en promedio 8 horas dependiendo del tráfico en la salida por Guarne y la entrada por Siberia.'
      },
      {
        question: '¿Puedo llevar equipaje o maletas?',
        answer: 'Sí. Al revisar los detalles del viaje publicado por el conductor en la app, verás la capacidad de maletas permitida en el baúl.'
      }
    ]
  },
  {
    slug: 'medellin-cartagena',
    origin: 'Medellín',
    destination: 'Cartagena',
    title: 'Viajes compartidos Medellín a Cartagena | Carpooling al Caribe',
    metaDescription: 'Viaja de Medellín a Cartagena compartiendo carro con Trayko. Disfruta tu viaje a la playa a un precio accesible y con conductores verificados.',
    distance: '640 km',
    estimatedDuration: '12 - 14 horas',
    priceFrom: 55000,
    busPriceEstimate: '$120.000 - $170.000 COP',
    corridorName: 'Corredor Caribe',
    image: 'https://images.unsplash.com/photo-1780403271384-e2695e549220?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Ruta hacia el Caribe colombiano en carros cómodos con aire acondicionado',
      'Ahorro significativo frente a tiquetes aéreos de última hora o buses',
      'Compañeros de viaje con verificación de identidad',
      'Flexibilidad de horarios diurnos y nocturnos'
    ],
    pickupPoints: ['Estación Niquía', 'Terminal Norte Medellín', 'Bello'],
    dropoffPoints: ['Bocagrande', 'Centro Histórico de Cartagena', 'Terminal de Cartagena', 'La Boquilla'],
    faqs: [
      {
        question: '¿Cuánto se ahorra viajando en carpooling a Cartagena?',
        answer: 'Puedes ahorrar más del 50% en comparación con un vuelo de última hora y entre un 30% a 40% frente al bus tradicional.'
      },
      {
        question: '¿Qué paradas se realizan durante el trayecto?',
        answer: 'Por ser un viaje largo, los conductores realizan paradas programadas para almorzar o cenar en paradores reconocidos de Caucasia o Planeta Rica.'
      }
    ]
  },
  {
    slug: 'cartagena-barranquilla',
    origin: 'Cartagena',
    destination: 'Barranquilla',
    title: 'Viajes compartidos Cartagena a Barranquilla por la Vía al Mar',
    metaDescription: 'Viaja entre Cartagena y Barranquilla en carro compartido con Trayko. Salidas frecuentes, trayecto rápido de 2 horas y tarifas desde $25.000 COP.',
    distance: '120 km',
    estimatedDuration: '2 - 2.5 horas',
    priceFrom: 25000,
    busPriceEstimate: '$35.000 - $50.000 COP',
    corridorName: 'Puerta de Oro y Vía al Mar',
    image: 'https://images.unsplash.com/photo-1612381068436-7ebfddd382d0?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Trayecto rápido y panorámico por la Vía al Mar o La Cordialidad',
      'Ideal para ejecutivos, estudiantes y turistas',
      'Sin filas ni esperas largas en terminales de transporte',
      'Puntos de recogida acordados cerca a tu ubicación'
    ],
    pickupPoints: ['Chambacú', 'Brescia', 'La Boquilla', 'Terminal de Cartagena'],
    dropoffPoints: ['Buenavista', 'Centro de Barranquilla', 'Villa Country', 'Terminal Barranquilla'],
    faqs: [
      {
        question: '¿Con cuánta anticipación debo reservar mi cupo?',
        answer: 'Dado que es una de las rutas con mayor frecuencia en la Costa, encontrarás viajes todos los días publicados con horas o días de anticipación.'
      },
      {
        question: '¿Cuánto demora el recorrido entre ambas ciudades?',
        answer: 'Por la Vía al Mar el trayecto toma aproximadamente 2 horas a 2 horas y media.'
      }
    ]
  },
  {
    slug: 'bogota-eje-cafetero',
    origin: 'Bogotá',
    destination: 'Eje Cafetero (Pereira, Armenia, Manizales)',
    title: 'Viajes compartidos Bogotá a Eje Cafetero en carro',
    metaDescription: 'Viaja de Bogotá a Pereira, Armenia o Manizales en auto compartido con Trayko. Cruza La Línea de forma rápida, económica y segura.',
    distance: '310 km',
    estimatedDuration: '6 - 7.5 horas',
    priceFrom: 35000,
    busPriceEstimate: '$65.000 - $85.000 COP',
    corridorName: 'Corredor Cafetero',
    image: 'https://images.unsplash.com/photo-1737914692082-a421d0a39b81?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Paso por el moderno Túnel de La Línea',
      'Llegada a las principales capitales del Eje Cafetero',
      'Ambiente amigable y seguro con viajeros verificados',
      'Ideal para vacaciones, turismo o visitas familiares'
    ],
    pickupPoints: ['Portal Calle 80', 'Portal Américas', 'Terminal Salitre'],
    dropoffPoints: ['Terminal de Pereira', 'Parque Sucre Armenia', 'Terminal Manizales', 'El Cable'],
    faqs: [
      {
        question: '¿El viaje llega a Pereira, Armenia o Manizales?',
        answer: 'Dependiendo del viaje publicado por el conductor, la ruta puede tener como destino Pereira, Armenia o Manizales. Puedes verificar la ciudad exacta en la ficha del viaje.'
      }
    ]
  },
  {
    slug: 'bogota-cali',
    origin: 'Bogotá',
    destination: 'Cali',
    title: 'Viajes compartidos Bogotá a Cali en carro',
    metaDescription: 'Comparte carro de Bogotá a Cali con Trayko. Ahorra en gasolina y peajes o viaja como pasajero seguro y cómodo hasta la Sucursal del Cielo.',
    distance: '460 km',
    estimatedDuration: '9 - 11 horas',
    priceFrom: 50000,
    busPriceEstimate: '$90.000 - $120.000 COP',
    corridorName: 'Corredor del Valle',
    image: 'https://images.unsplash.com/photo-1690533683283-76cd18853006?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Conexión directa entre la capital y el Valle del Cauca',
      'Ahorro notable frente a vuelos y mayor comodidad que un autobús',
      'Conductores con papeles y verificación al día',
      'Llegada a zonas norte, centro o sur de Cali'
    ],
    pickupPoints: ['Terminal Salitre', 'Autopista Sur', 'Soacha'],
    dropoffPoints: ['Sameco / Entrada Norte', 'Chipichape', 'Terminal de Cali', 'Ciudad Jardín'],
    faqs: [
      {
        question: '¿Cómo funciona el pago del viaje?',
        answer: 'El valor del viaje acordado se paga en efectivo directamente al conductor al iniciar el viaje. Solo la comisión de reserva se procesa de forma segura a través de la app.'
      }
    ]
  }
];

export function getRouteBySlug(slug: string): RouteInfo | undefined {
  return POPULAR_ROUTES.find((r) => r.slug === slug);
}
