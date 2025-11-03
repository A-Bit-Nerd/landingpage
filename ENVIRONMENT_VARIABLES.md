# 🎛️ Configuración de Variables de Entorno

## Secciones Condicionales

La página principal incluye dos secciones que pueden habilitarse/deshabilitarse mediante variables de entorno:

### 🏢 Sección de Sponsors

Controla si se muestra la sección de patrocinadores con sus diferentes tiers (Gold, Silver, Bronze).

**Variable:** `NEXT_PUBLIC_SHOW_SPONSORS`
**Valores:** `true` | `false`

### 💰 Sección de Donaciones

Controla si se muestra la sección de donaciones con métodos tradicionales y crypto.

**Variable:** `NEXT_PUBLIC_SHOW_DONATIONS`
**Valores:** `true` | `false`

## 📊 Estadísticas de la Comunidad

Las estadísticas mostradas en la homepage pueden configurarse mediante variables de entorno:

### 👥 Miembros Activos

**Variable:** `NEXT_PUBLIC_ACTIVE_MEMBERS`
**Ejemplos:** `500+`, `1.2K`, `5000`, `10K+`
**Por defecto:** `500+`

### 📅 Eventos Mensuales

**Variable:** `NEXT_PUBLIC_MONTHLY_EVENTS`
**Ejemplos:** `50+`, `100`, `25`, `200+`
**Por defecto:** `50+`

### ⏰ Disponibilidad de la Comunidad

**Variable:** `NEXT_PUBLIC_COMMUNITY_AVAILABILITY`
**Ejemplos:** `24/7`, `Always On`, `Live`, `Online`
**Por defecto:** `24/7`

## 🚀 Configuración Rápida

1. **Copia el archivo de ejemplo:**

   ```bash
   cp .env.example .env.local
   ```

2. **Edita `.env.local` con tus valores:**

   ```env
   # Secciones condicionales
   NEXT_PUBLIC_SHOW_SPONSORS=true
   NEXT_PUBLIC_SHOW_DONATIONS=true

   # Estadísticas de la comunidad
   NEXT_PUBLIC_ACTIVE_MEMBERS=1.2K
   NEXT_PUBLIC_MONTHLY_EVENTS=75
   NEXT_PUBLIC_COMMUNITY_AVAILABILITY=24/7
   ```

3. **Reinicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## 📋 Casos de Uso

### Fase Inicial (Sin monetización)

```env
NEXT_PUBLIC_SHOW_SPONSORS=false
NEXT_PUBLIC_SHOW_DONATIONS=false
NEXT_PUBLIC_ACTIVE_MEMBERS=50+
NEXT_PUBLIC_MONTHLY_EVENTS=10
NEXT_PUBLIC_COMMUNITY_AVAILABILITY=Growing
```

### Con Sponsors pero sin Donaciones

```env
NEXT_PUBLIC_SHOW_SPONSORS=true
NEXT_PUBLIC_SHOW_DONATIONS=false
NEXT_PUBLIC_ACTIVE_MEMBERS=500+
NEXT_PUBLIC_MONTHLY_EVENTS=25
NEXT_PUBLIC_COMMUNITY_AVAILABILITY=24/7
```

### Solo Donaciones

```env
NEXT_PUBLIC_SHOW_SPONSORS=false
NEXT_PUBLIC_SHOW_DONATIONS=true
NEXT_PUBLIC_ACTIVE_MEMBERS=800+
NEXT_PUBLIC_MONTHLY_EVENTS=40
NEXT_PUBLIC_COMMUNITY_AVAILABILITY=24/7
```

### Comunidad Establecida (Ambas activas)

```env
NEXT_PUBLIC_SHOW_SPONSORS=true
NEXT_PUBLIC_SHOW_DONATIONS=true
NEXT_PUBLIC_ACTIVE_MEMBERS=2K+
NEXT_PUBLIC_MONTHLY_EVENTS=100+
NEXT_PUBLIC_COMMUNITY_AVAILABILITY=24/7
```

## 🔧 Producción

Para producción, configura estas variables en tu plataforma de hosting:

- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Environment Variables
- **Railway:** Variables tab en el proyecto

## 💡 Notas Importantes

- Las variables deben tener el prefijo `NEXT_PUBLIC_` para ser accesibles en el cliente
- Los valores deben ser strings: `'true'` o `'false'`
- Los cambios requieren reiniciar el servidor de desarrollo
- En producción, los cambios requieren un nuevo deploy
