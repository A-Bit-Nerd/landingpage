# A Bit Nerd - Landing Page

Una landing page moderna para la comunidad nerd A Bit Nerd, construida con Next.js 14 y TailwindCSS.

## 🚀 Características

- **Next.js 14** con App Router
- **TailwindCSS** con tema nerd personalizado
- **TypeScript** para mayor robustez
- **Diseño responsive** y accesible
- **Estética terminal nerd** con colores verde-neón, fucsia y cyan
- **Páginas estáticas** optimizadas para SEO
- **Navegación fluida** entre secciones de la comunidad
- **Integración con WhatsApp** para comunicación directa

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Estilos globales con tema nerd
│   ├── layout.tsx           # Layout principal con header y footer
│   ├── page.tsx             # Página principal (landing)
│   ├── manifest/
│   │   └── page.tsx         # Página del manifiesto
│   ├── mision/
│   │   └── page.tsx         # Página de misión, visión y valores
│   ├── wellbeing/
│   │   └── page.tsx         # Página de bienestar
│   ├── entertainment/
│   │   └── page.tsx         # Página de entretenimiento
│   ├── programming/
│   │   └── page.tsx         # Página de programación
│   ├── crypto/
│   │   └── page.tsx         # Página de crypto
├── components/
│   ├── Navigation.tsx       # Componente de navegación
│   ├── Header.tsx           # Componente del header
│   ├── Footer.tsx           # Componente de footer
│   ├── Donations.tsx        # Componente de donaciones
│   ├── Sponsors.tsx         # Componente de patrocinadores
│   └── WhatsAppFloat.tsx    # Botón flotante de WhatsApp
public/
├── manifest.json            # Manifest de la aplicación
└── robots.txt               # Configuración para crawlers
```

## 🎨 Paleta de Colores

- **Fondo principal**: `#0b1020` (nerd-bg)
- **Paneles**: `#0f1530` (nerd-panel)
- **Texto principal**: `#e5e7eb` (nerd-text)
- **Texto secundario**: `#94a3b8` (nerd-muted)
- **Acentos**:
  - Verde neón: `#00ff99` (nerd-green)
  - Fucsia: `#ff00ff` (nerd-fuchsia)
  - Cyan: `#00ccff` (nerd-cyan)
  - Amarillo: `#ffcc00` (nerd-yellow)

## 🛠️ Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start

# Ejecutar linter
npm run lint
```

## 📱 Páginas Incluidas

1. **Landing Page** (`/`) - Página principal con presentación de la comunidad
2. **Manifiesto** (`/manifest`) - Los principios y valores de A Bit Nerd
3. **Misión** (`/mision`) - Misión, visión y valores detallados
4. **Bienestar** (`/wellbeing`) - Salud mental y bienestar de la comunidad
5. **Entretenimiento** (`/entertainment`) - Escape rooms, puzzles y entretenimiento nerd
6. **Programación** (`/programming`) - Desarrollo de software y proyectos de código
7. **Crypto** (`/crypto`) - Criptomonedas, blockchain y tecnologías descentralizadas

## 🧭 Flujo de Navegación

La aplicación incluye un sistema de navegación secuencial entre páginas:

- **Manifiesto** → Explorar Misión (`/mision`)
- **Bienestar** → Explorar Entretenimiento (`/entertainment`)  
- **Entretenimiento** → Explorar Programación (`/programming`)
- **Programación** → Explorar Crypto (`/crypto`)
- **Crypto** → Explorar Manifiesto (`/manifest`)

Cada página incluye botones de "Explorar" que guían al usuario hacia la siguiente sección relevante, creando un flujo natural de descubrimiento del contenido.

## 🔧 Configuración

El proyecto está configurado para:

- **Exportación estática** (`output: 'export'` en next.config.js)
- **SEO optimizado** con metadatos apropiados
- **Accesibilidad** con ARIA labels y navegación semántica
- **Responsive design** que funciona en todos los dispositivos

## 🚀 Despliegue

Para desplegar la aplicación:

1. Ejecuta `npm run build`
2. Los archivos estáticos se generarán en la carpeta `out/`
3. Sube el contenido de `out/` a tu servidor web

## 📝 Próximos Pasos

- [ ] Agregar más páginas (blog, eventos, etc.)
- [ ] Implementar sistema de formularios
- [ ] Agregar analytics
- [ ] Optimizar imágenes
- [ ] Implementar PWA features

## 🤝 Contribución

Este proyecto está en desarrollo activo. Las contribuciones son bienvenidas siguiendo el estilo nerd establecido.

---

**© 2025 A Bit Nerd** - Hecho con ♥ desde la comunidad
