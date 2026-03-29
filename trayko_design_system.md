# Trayko — Sistema de Diseño

Guía de referencia para aplicar la identidad visual de Trayko de forma consistente en cualquier plataforma: web, app móvil (iOS/Android), emails, materiales impresos, etc.

Basado en la arquitectura de tokens **Material Design 3**.

> **Versión 5.1** — Paleta actualizada a Naranja Trayko + Grafito Neutro (#222222). Identidad cálida, humana y dinámica. Transmite movimiento, cercanía y personas reales.

---

## 1. Paleta de colores

### Nivel 1 — Primario (Naranja Trayko)

El naranja Trayko es el color insignia de la marca. Transmite energía, calidez, movimiento y cercanía humana. Vibrante y memorable sin ser agresivo.

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Primary** | `#C4420A` | Hover/pressed states, texto de marca con alto contraste |
| **Primary Container** | `#E8530A` | **Botón CTA principal**, logo, tab activo, íconos de acción |
| **On Primary** | `#ffffff` | Texto blanco sobre primary-container |
| **On Primary Container** | `#FEF0EB` | Texto sutil sobre fondos primarios oscuros |
| **Primary Fixed** | `#FEF0EB` | Fondos tintados muy claros (cards seleccionadas, tags) |
| **Primary Fixed Dim** | `#F9CCBA` | Bordes de cards con tinte naranja, acentos suaves |
| **Inverse Primary** | `#FF9B73` | Subtítulos sobre secciones oscuras |

### Nivel 2 — Secundario (Grafito)

El grafito es el color de estructura y confianza. Ancla la identidad con sofisticación y contrasta con el naranja de forma limpia. Gris neutro puro sin subtonos.

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Secondary** | `#222222` | Navbar, header, fondo hero, texto títulos, íconos |
| **Secondary Container** | `#333333` | Cards sobre fondo oscuro, surfaces en modo noche |
| **Secondary Fixed** | `#444444` | Elementos contenidos sobre grafito |
| **Secondary Fixed Dim** | `#666666` | Texto secundario, subtítulos, labels, placeholders |
| **On Secondary** | `#ffffff` | Texto blanco sobre secondary |
| **On Secondary Container** | `#E8530A` | Naranja sobre grafito (logo, acciones en dark) |
| **On Secondary Fixed** | `#F5F5F5` | Texto claro sobre fondos oscuros |
| **On Secondary Fixed Variant** | `#999999` | Texto terciario sobre grafito |

### Nivel 3 — Terciario (Verde Confirmación)

El verde se reserva exclusivamente para estados exitosos: confirmación, pago, conductor activo.

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Tertiary** | `#1A5038` | Texto de éxito oscuro |
| **Tertiary Container** | `#2D6A4F` | Badge "Confirmado", indicador online, pago OK |
| **Tertiary Fixed** | `#E0F2EA` | Fondo de estado exitoso suave |
| **Tertiary Fixed Dim** | `#A8D5BF` | Iconos de verificación, checkmarks |
| **On Tertiary** | `#ffffff` | Texto sobre tertiary-container |
| **On Tertiary Container** | `#0D3020` | Texto oscuro sobre tertiary-fixed |

### Nivel 4 — Neutros y Superficies

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Surface** | `#F6F4F2` | Fondo de pantalla base (crema neutro) |
| **Surface Container Lowest** | `#ffffff` | Tarjetas, modales, inputs, bottom sheets |
| **Surface Container Low** | `#F0EEEC` | Secciones alternadas, footer |
| **Surface Container** | `#EAE8E5` | Inputs con fondo, divisores suaves |
| **Surface Container High** | `#E3E1DE` | Cards de testimonios, secciones destacadas |
| **Surface Container Highest** | `#DCD9D6` | Placeholders de avatar, separadores fuertes |
| **Surface Dim** | `#D5D2CF` | Bordes sutiles, estados disabled |
| **Surface Variant** | `#EDE9E5` | Variante de superficie con subtono cálido |
| **Surface Tint** | `#E8530A` | Tint overlay de marca sobre superficies |
| **Background** | `#F6F4F2` | Equivalente a surface (fondo general de la app) |

### Texto y Bordes

| Nombre | Hex | Uso |
|--------|-----|-----|
| **On Surface** | `#222222` | Texto principal, títulos de tarjetas |
| **On Surface Variant** | `#5A5A5A` | Subtítulos, párrafos, descriptions |
| **On Background** | `#222222` | Texto principal sobre background |
| **Outline** | `#777777` | Texto terciario (fechas, meta info), bordes medianos |
| **Outline Variant** | `#CCCCCC` | Bordes sutiles, separadores, dividers |
| **Inverse Surface** | `#222222` | Fondos de tooltips, snackbars |
| **Inverse On Surface** | `#F5F5F5` | Texto sobre inverse-surface |

### Error

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Error** | `#D32F2F` | Texto/iconos de error |
| **Error Container** | `#FFEBEE` | Fondo de mensajes de error |
| **On Error** | `#ffffff` | Texto sobre botones de error |
| **On Error Container** | `#7F0000` | Texto sobre error-container |

---

## 2. Combinaciones aprobadas

### Botones

| Tipo | Fondo | Texto | Cuándo usarlo |
|------|-------|-------|---------------|
| **CTA Principal** | `primary-container` (#E8530A) | `on-primary` (#ffffff) | Acción principal: "Buscar Viaje", "Publicar ruta" |
| **Navegación oscura** | `secondary` (#222222) | `on-secondary-container` (#E8530A) | Navbar, header app |
| **Secundario** | `primary-fixed` (#FEF0EB) | `primary` (#C4420A) | Acción secundaria junto a CTA |
| **Outline** | transparente + borde `outline-variant` | `on-surface` | Acción terciaria, "Conductores" |
| **Confirmación** | `tertiary-container` (#2D6A4F) | `on-tertiary` (#ffffff) | Estados de éxito, viaje confirmado |

### Iconos en círculos

| Fondo | Color del icono | Contexto |
|-------|-----------------|----------|
| `primary-fixed` (#FEF0EB) | `primary-container` (#E8530A) | Features, pasos, verificaciones |
| `secondary` (#222222) | `primary-container` (#E8530A) | Avatares sobre fondo oscuro |
| `surface-container` (#EAE8E5) | `on-surface` (#222222) | Avatares placeholder neutros |

### Texto sobre fondos

| Fondo | Texto principal | Texto secundario |
|-------|----------------|-----------------|
| `surface` (#F6F4F2) | `on-surface` (#222222) | `on-surface-variant` (#5A5A5A) |
| `surface-container-lowest` (#fff) | `on-surface` (#222222) | `on-surface-variant` (#5A5A5A) |
| `secondary` (#222222) | `#ffffff` | `on-secondary-fixed` (#F5F5F5) |
| `primary-container` (#E8530A) | `#ffffff` | `on-primary-container` (#FEF0EB) |
| `primary-fixed` (#FEF0EB) | `primary` (#C4420A) | `outline` (#777777) |

---

## 3. Reglas de uso

### R1 — El naranja solo sobre grafito oscuro o blanco
Nunca sobre crema ni sobre verde — el contraste se rompe y se pierde legibilidad.

### R2 — El grafito ancla, el naranja activa
Fondos y estructura siempre en grafito (#222222) o crema (#F6F4F2). El naranja aparece solo en elementos interactivos y de énfasis.

### R3 — El verde es exclusivo para estados de éxito
`tertiary-container` (#2D6A4F) solo para: viaje confirmado, pago procesado, conductor verificado, usuario online. Nunca decorativo.

### R4 — Un solo botón naranja por pantalla
Si hay dos acciones, la secundaria va en outline grafito. El naranja no puede competir consigo mismo.

### R5 — Fondo en crema #F6F4F2, tarjetas en blanco
`surface` (#F6F4F2) para el fondo general. `surface-container-lowest` (#ffffff) para tarjetas, modales e inputs. Esta separación crea profundidad sin sombras.

### R6 — Respetar la familia de grises neutros
Usar exclusivamente los neutros del sistema (`on-surface-variant` #5A5A5A, `outline` #777777). Grises genéricos (#888, #999) rompen la cohesión.

### R7 — Diferenciación competitiva
Esta paleta fue elegida por diferenciación máxima frente a:
- **Lemon** (verde + ámbar quemado) → sensación crypto/fría, territorio completamente distinto
- **Miti Miti** (#1E3FFF teal eléctrico) → color frío vs. naranja cálido
- **inDrive** (verde esmeralda) → categoría diferente
- **BlaBlaCar** (azules genéricos) → identidad completamente distinta

---

## 4. Tipografía

| Rol | Familia | Pesos |
|-----|---------|-------|
| Headlines | Plus Jakarta Sans | 700, 800 |
| Body | Plus Jakarta Sans | 400, 500 |
| Labels | Plus Jakarta Sans | 500, 600, 700 |

### Escala recomendada (móvil)

| Elemento | Tamaño | Peso | Color |
|----------|--------|------|-------|
| H1 (hero) | 32–40px | 800 | `on-surface` (#222222) |
| H2 (sección) | 24–28px | 800 | `on-surface` (#222222) |
| H3 (tarjeta) | 18–20px | 700 | `on-surface` o `primary` |
| Body | 14–16px | 400 | `on-surface-variant` (#5A5A5A) |
| Caption / Meta | 11–12px | 500 | `outline` (#777777) |
| Label (uppercase) | 11–12px | 700 | `secondary-fixed-dim` (#666666) |
| Nombre de usuario | 14–16px | 700 | `primary-container` (#E8530A) |
| Botón CTA | 14–16px | 700 | `on-primary` (#ffffff) |

---

## 5. Bordes y radios

| Elemento | Radio |
|----------|-------|
| Botones | `9999px` (full) |
| Tarjetas | `16px` (1rem) |
| Modales / Bottom sheets | `24px` (1.5rem) |
| Inputs | `12px` (0.75rem) |
| Iconos en círculo | `50%` |
| Secciones grandes | `32px` (2rem) |

---

## 6. Tokens para plataformas

### CSS Custom Properties (vanilla)

```css
:root {
  /* Primario — Naranja Trayko */
  --tray-primary: #C4420A;
  --tray-primary-container: #E8530A;
  --tray-on-primary: #ffffff;
  --tray-on-primary-container: #FEF0EB;
  --tray-primary-fixed: #FEF0EB;
  --tray-primary-fixed-dim: #F9CCBA;
  --tray-inverse-primary: #FF9B73;

  /* Secundario — Grafito */
  --tray-secondary: #222222;
  --tray-secondary-container: #333333;
  --tray-secondary-fixed: #444444;
  --tray-secondary-fixed-dim: #666666;
  --tray-on-secondary: #ffffff;
  --tray-on-secondary-container: #E8530A;
  --tray-on-secondary-fixed: #F5F5F5;

  /* Terciario — Verde Confirmación */
  --tray-tertiary: #1A5038;
  --tray-tertiary-container: #2D6A4F;
  --tray-tertiary-fixed: #E0F2EA;
  --tray-tertiary-fixed-dim: #A8D5BF;
  --tray-on-tertiary: #ffffff;
  --tray-on-tertiary-container: #0D3020;

  /* Superficies */
  --tray-surface: #F6F4F2;
  --tray-surface-lowest: #ffffff;
  --tray-surface-low: #F0EEEC;
  --tray-surface-mid: #EAE8E5;
  --tray-surface-high: #E3E1DE;
  --tray-surface-highest: #DCD9D6;
  --tray-surface-dim: #D5D2CF;
  --tray-surface-variant: #EDE9E5;
  --tray-surface-tint: #E8530A;
  --tray-background: #F6F4F2;

  /* Texto y bordes */
  --tray-on-surface: #222222;
  --tray-on-surface-variant: #5A5A5A;
  --tray-on-background: #222222;
  --tray-outline: #777777;
  --tray-outline-variant: #CCCCCC;
  --tray-inverse-surface: #222222;
  --tray-inverse-on-surface: #F5F5F5;

  /* Error */
  --tray-error: #D32F2F;
  --tray-error-container: #FFEBEE;
  --tray-on-error: #ffffff;
  --tray-on-error-container: #7F0000;
}
```

### iOS (Swift / SwiftUI)

```swift
extension Color {
  // Primario — Naranja Trayko
  static let trayPrimary = Color(hex: "#C4420A")
  static let trayPrimaryContainer = Color(hex: "#E8530A")
  static let trayOnPrimary = Color.white
  static let trayOnPrimaryContainer = Color(hex: "#FEF0EB")
  static let trayPrimaryFixed = Color(hex: "#FEF0EB")
  static let trayPrimaryFixedDim = Color(hex: "#F9CCBA")
  static let trayInversePrimary = Color(hex: "#FF9B73")

  // Secundario — Grafito
  static let traySecondary = Color(hex: "#222222")
  static let traySecondaryContainer = Color(hex: "#333333")
  static let traySecondaryFixed = Color(hex: "#444444")
  static let traySecondaryFixedDim = Color(hex: "#666666")
  static let trayOnSecondary = Color.white
  static let trayOnSecondaryContainer = Color(hex: "#E8530A")
  static let trayOnSecondaryFixed = Color(hex: "#F5F5F5")

  // Terciario — Verde Confirmación
  static let trayTertiary = Color(hex: "#1A5038")
  static let trayTertiaryContainer = Color(hex: "#2D6A4F")
  static let trayTertiaryFixed = Color(hex: "#E0F2EA")
  static let trayTertiaryFixedDim = Color(hex: "#A8D5BF")
  static let trayOnTertiary = Color.white
  static let trayOnTertiaryContainer = Color(hex: "#0D3020")

  // Superficies
  static let traySurface = Color(hex: "#F6F4F2")
  static let traySurfaceLowest = Color.white
  static let traySurfaceLow = Color(hex: "#F0EEEC")
  static let traySurfaceMid = Color(hex: "#EAE8E5")
  static let traySurfaceHigh = Color(hex: "#E3E1DE")
  static let traySurfaceHighest = Color(hex: "#DCD9D6")
  static let traySurfaceVariant = Color(hex: "#EDE9E5")

  // Texto
  static let trayOnSurface = Color(hex: "#222222")
  static let trayOnSurfaceVariant = Color(hex: "#5A5A5A")
  static let trayOutline = Color(hex: "#777777")
  static let trayOutlineVariant = Color(hex: "#CCCCCC")
  static let trayInverseSurface = Color(hex: "#222222")
  static let trayInverseOnSurface = Color(hex: "#F5F5F5")

  // Error
  static let trayError = Color(hex: "#D32F2F")
  static let trayErrorContainer = Color(hex: "#FFEBEE")
}
```

### Android (Kotlin / Compose)

```kotlin
object TraykoColors {
  // Primario — Naranja Trayko
  val Primary = Color(0xFFC4420A)
  val PrimaryContainer = Color(0xFFE8530A)
  val OnPrimary = Color.White
  val OnPrimaryContainer = Color(0xFFFEF0EB)
  val PrimaryFixed = Color(0xFFFEF0EB)
  val PrimaryFixedDim = Color(0xFFF9CCBA)
  val InversePrimary = Color(0xFFFF9B73)

  // Secundario — Grafito
  val Secondary = Color(0xFF222222)
  val SecondaryContainer = Color(0xFF333333)
  val SecondaryFixed = Color(0xFF444444)
  val SecondaryFixedDim = Color(0xFF666666)
  val OnSecondary = Color.White
  val OnSecondaryContainer = Color(0xFFE8530A)
  val OnSecondaryFixed = Color(0xFFF5F5F5)

  // Terciario — Verde Confirmación
  val Tertiary = Color(0xFF1A5038)
  val TertiaryContainer = Color(0xFF2D6A4F)
  val TertiaryFixed = Color(0xFFE0F2EA)
  val TertiaryFixedDim = Color(0xFFA8D5BF)
  val OnTertiary = Color.White
  val OnTertiaryContainer = Color(0xFF0D3020)

  // Superficies
  val Surface = Color(0xFFF6F4F2)
  val SurfaceLowest = Color.White
  val SurfaceLow = Color(0xFFF0EEEC)
  val SurfaceMid = Color(0xFFEAE8E5)
  val SurfaceHigh = Color(0xFFE3E1DE)
  val SurfaceHighest = Color(0xFFDCD9D6)
  val SurfaceVariant = Color(0xFFEDE9E5)

  // Texto
  val OnSurface = Color(0xFF222222)
  val OnSurfaceVariant = Color(0xFF5A5A5A)
  val Outline = Color(0xFF777777)
  val OutlineVariant = Color(0xFFCCCCCC)
  val InverseSurface = Color(0xFF222222)
  val InverseOnSurface = Color(0xFFF5F5F5)

  // Error
  val Error = Color(0xFFD32F2F)
  val ErrorContainer = Color(0xFFFFEBEE)
}
```

### Flutter (Dart)

```dart
class TraykoColors {
  // Primario — Naranja Trayko
  static const primary = Color(0xFFC4420A);
  static const primaryContainer = Color(0xFFE8530A);
  static const onPrimary = Colors.white;
  static const onPrimaryContainer = Color(0xFFFEF0EB);
  static const primaryFixed = Color(0xFFFEF0EB);
  static const primaryFixedDim = Color(0xFFF9CCBA);
  static const inversePrimary = Color(0xFFFF9B73);

  // Secundario — Grafito
  static const secondary = Color(0xFF222222);
  static const secondaryContainer = Color(0xFF333333);
  static const secondaryFixed = Color(0xFF444444);
  static const secondaryFixedDim = Color(0xFF666666);
  static const onSecondary = Colors.white;
  static const onSecondaryContainer = Color(0xFFE8530A);
  static const onSecondaryFixed = Color(0xFFF5F5F5);

  // Terciario — Verde Confirmación
  static const tertiary = Color(0xFF1A5038);
  static const tertiaryContainer = Color(0xFF2D6A4F);
  static const tertiaryFixed = Color(0xFFE0F2EA);
  static const tertiaryFixedDim = Color(0xFFA8D5BF);
  static const onTertiary = Colors.white;
  static const onTertiaryContainer = Color(0xFF0D3020);

  // Superficies
  static const surface = Color(0xFFF6F4F2);
  static const surfaceLowest = Colors.white;
  static const surfaceLow = Color(0xFFF0EEEC);
  static const surfaceMid = Color(0xFFEAE8E5);
  static const surfaceHigh = Color(0xFFE3E1DE);
  static const surfaceHighest = Color(0xFFDCD9D6);
  static const surfaceVariant = Color(0xFFEDE9E5);

  // Texto
  static const onSurface = Color(0xFF222222);
  static const onSurfaceVariant = Color(0xFF5A5A5A);
  static const outline = Color(0xFF777777);
  static const outlineVariant = Color(0xFFCCCCCC);
  static const inverseSurface = Color(0xFF222222);
  static const inverseOnSurface = Color(0xFFF5F5F5);

  // Error
  static const error = Color(0xFFD32F2F);
  static const errorContainer = Color(0xFFFFEBEE);
}
```

---

## 7. Checklist para nuevas pantallas

- [ ] Fondo de pantalla usa `surface` (#F6F4F2) — crema neutro
- [ ] Tarjetas/cards usan `surface-container-lowest` (#ffffff)
- [ ] Solo 1 botón CTA naranja (`primary-container` #E8530A) por pantalla
- [ ] Verde aparece solo en estados de éxito — nunca decorativo
- [ ] Texto sobre naranja siempre en blanco (#ffffff)
- [ ] Naranja solo sobre grafito oscuro o blanco — nunca sobre crema
- [ ] Grises son exclusivamente del sistema neutro (no grises genéricos sueltos)
- [ ] Títulos usan `on-surface` (#222222)
- [ ] Texto de cuerpo usa `on-surface-variant` (#5A5A5A)
- [ ] Nombre de usuario en pantalla principal usa `primary-container` (#E8530A)
- [ ] Navbar / header fondo en `secondary` (#222222)
- [ ] Bordes usan `outline-variant` (#CCCCCC)
- [ ] Esta paleta no se parece a Lemon (ámbar/verde), Miti Miti (teal), inDrive (verde) ni BlaBlaCar (azul)
