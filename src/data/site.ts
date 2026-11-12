/**
 * Configuración central del sitio: URLs de las apps, contacto y datos de la
 * organización. Todo lo que aparezca como enlace externo o como structured
 * data debe salir de aquí para no duplicar (ni contradecir) en varias páginas.
 */

export const SITE_NAME = 'Trayko';
export const SITE_URL = 'https://trayko.co';
export const SITE_LOCALE = 'es-CO';

/** WhatsApp oficial de soporte. */
export const WHATSAPP_URL = 'https://wa.me/573017727930';
export const PHONE_DISPLAY = '+57 301 772 7930';
export const PHONE_E164 = '+573017727930';
export const SUPPORT_EMAIL = 'soporte@trayko.co';
export const PRIVACY_EMAIL = 'privacidad@trayko.co';

/** Google Play: app publicada y verificable. */
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.trayko.app';

/**
 * App Store: la app para iOS todavía no está publicada con un id público, así
 * que la URL se toma de `PUBLIC_APP_STORE_URL` (ver .env.example). Cuando no
 * esté definida, `appStoreUrl()` devuelve `null` y los botones de iOS se
 * renderizan como "próximamente" en lugar de apuntar a la raíz de apps.apple.com
 * (que no lleva a ninguna app y desperdicia el anchor/link equity).
 */
export const APP_STORE_URL = import.meta.env.PUBLIC_APP_STORE_URL?.trim() || null;

export function appStoreUrl(): string | null {
  return APP_STORE_URL;
}

/** Perfiles oficiales de la organización (usados en `sameAs`). */
export const SAME_AS_PROFILES = [
  PLAY_STORE_URL,
  ...(APP_STORE_URL ? [APP_STORE_URL] : []),
];

/** Domicilio del prestador del servicio (Barranquilla, Atlántico). */
export const ORGANIZATION_ADDRESS = {
  addressLocality: 'Barranquilla',
  addressRegion: 'Atlántico',
  addressCountry: 'CO',
};
