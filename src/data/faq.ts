export interface FaqEntry {
    id: string;
    question: string;
    answer: string;
    /** Se muestra en el resumen embebido del home; la página /preguntas-frecuentes siempre muestra todas. */
    featured?: boolean;
}

export const FAQ_ITEMS: FaqEntry[] = [
    {
        id: 'payment',
        question: '¿Cómo se paga el viaje?',
        answer: 'El valor del viaje se paga en efectivo directamente al conductor. Lo único que se paga dentro de la app es la comisión de la plataforma, que se cobra una vez el conductor acepta tu solicitud: primero se descuenta de tu saldo de créditos y, si no alcanza, completas el resto con tarjeta.',
        featured: true,
    },
    {
        id: 'boarding-code',
        question: '¿Para qué sirve el código de abordaje?',
        answer: 'Cuando el conductor acepta tu solicitud, te llega un código de 4 dígitos. Muéstraselo al conductor al subir: él lo ingresa en su app para confirmar que abordaste, y solo funciona una vez el viaje está en curso.',
        featured: true,
    },
    {
        id: 'cancel-passenger',
        question: '¿Puedo cancelar mi reserva?',
        answer: 'Sí, mientras el viaje siga programado. El reembolso de la comisión depende de cuándo canceles: 24 horas o más antes de la salida se reembolsa el 100%, entre 2 y 24 horas el 50%, y con menos de 2 horas de anticipación no hay reembolso.',
        featured: true,
    },
    {
        id: 'chat-availability',
        question: '¿Por qué no veo el chat en algunos viajes?',
        answer: 'El chat con el conductor o pasajero solo está disponible mientras el viaje está programado o en curso. Una vez el viaje termina, se cancela o se interrumpe, el chat deja de mostrarse.',
        featured: true,
    },
    {
        id: 'wallet',
        question: '¿Qué es la billetera de créditos?',
        answer: 'Es tu saldo interno en Trayko (sección "Créditos"). Ahí ves tu historial de pagos de comisión, reembolsos y bonos. Ese saldo se usa automáticamente para pagar la comisión de tus próximos viajes; no es un monto que se pueda retirar en efectivo.',
    },
    {
        id: 'cancel-driver',
        question: '¿Qué pasa si el conductor cancela?',
        answer: 'Si ya tienes pasajeros confirmados, el conductor no puede cancelar un viaje programado dentro de las 24 horas previas a la salida por una razón normal; en ese caso debe reportarlo como emergencia. En cualquier cancelación del conductor, a los pasajeros se les reembolsa el 100% de la comisión.',
    },
    {
        id: 'emergency',
        question: '¿Qué hace el botón de emergencia (SOS)?',
        answer: 'Te marca directo a la línea de emergencias (123) o a tus contactos de confianza; es para una emergencia real en el momento. Si el problema ya pasó y quieres contárselo a Trayko (una incidencia, un mal comportamiento, etc.), usa la opción "Reportar incidencia" dentro del viaje.',
    },
    {
        id: 'driver-signup',
        question: '¿Cómo me convierto en conductor?',
        answer: 'Desde tu perfil puedes iniciar el registro de conductor: verificación de identidad, licencia de conducción, pasado judicial y los datos y documentos de tu vehículo (tarjeta de propiedad y SOAT). Cada documento pasa por una revisión antes de quedar aprobado.',
    },
    {
        id: 'ratings',
        question: '¿Es obligatorio calificar al final del viaje?',
        answer: 'No, es opcional. Al completarse el viaje te preguntamos cómo te fue, pero puedes elegir "Ahora no" si prefieres no calificar en ese momento.',
    },
    {
        id: 'roles',
        question: '¿Necesito una cuenta distinta para pasajero y conductor?',
        answer: 'No, es una sola cuenta. Desde tu perfil puedes cambiar entre modo pasajero y modo conductor cuando quieras (una vez tengas tu registro de conductor aprobado).',
    },
];
