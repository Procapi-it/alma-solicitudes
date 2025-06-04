# Haus Panama - Plataforma Inmobiliaria Exclusiva

<div align="center">
  <img src="./public/assets/logohaus.svg" alt="Haus Panama Logo" width="200">
  <p><em>Propiedades exclusivas en la ciudad de Panamá</em></p>
</div>

## 🔮 Visión General

Haus Panama es una plataforma digital inmobiliaria desarrollada para SEMAH Group, diseñada para mostrar su exclusivo portafolio de propiedades en las zonas más demandadas de la ciudad de Panamá. El sitio web ofrece una experiencia de usuario premium con diseño elegante, navegación intuitiva y presentación detallada de cada proyecto inmobiliario.

### ✨ Características Principales

- **Diseño Moderno y Elegante**: Interfaz minimalista con enfoque en la experiencia visual
- **Navegación por Categorías**: Clasificación de propiedades por ubicación y tipo (Centro, Este, Oeste, apartamentos económicos, premium)
- **Fichas Detalladas**: Páginas completas para cada proyecto con galerías, características y ubicación
- **Formularios de Contacto**: Integración con Pipedrive para gestión de leads
- **Contenido Multimedia**: Galerías optimizadas, videos y mapas interactivos
- **Totalmente Responsivo**: Experiencia optimizada en dispositivos móviles, tablets y escritorio
- **Animaciones**: Efectos de transición y revelación al hacer scroll para una experiencia más dinámica

## 💻 Tecnologías Principales

- **Framework**: [Astro](https://astro.build/) con [React](https://reactjs.org/)
- **Estilizado**: [TailwindCSS](https://tailwindcss.com/)
- **Animaciones**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Tipografía**: Helvetica Neue (personalizada) e Inter
- **Gestión de Datos**: Sistema centralizado con archivos JSON estructurados
- **Almacenamiento de Media**: Google Cloud Storage para imágenes, videos y archivos
- **Formularios**: Integración con Pipedrive para captura de leads

## 📍 Estructura del Proyecto

```
├── public/
│   ├── fonts/              # Tipografías personalizadas (Helvetica Neue)
│   └── favicon.png         # Ícono del sitio
├── src/
│   ├── assets/             # Recursos estáticos
│   │   ├── BROCHURES/      # Material descargable de cada proyecto
│   │   ├── CENTRO/         # Imágenes de propiedades zona central
│   │   ├── ESTE/           # Imágenes de propiedades zona este
│   │   ├── OESTE/          # Imágenes de propiedades zona oeste
│   │   ├── MAPAS/          # Mapas de ubicación de los proyectos
│   │   ├── PORTADAS/       # Logos de los proyectos
│   │   ├── VIDEOS/         # Videos promocionales
│   │   └── logohaus.svg    # Logo principal de Haus Panama
│   ├── components/         # Componentes reutilizables
│   │   ├── ui/             # Componentes de interfaz de usuario
│   │   ├── Header.tsx      # Navegación principal con menú desplegable
│   │   ├── PropertyCard.tsx # Tarjetas de propiedades
│   │   ├── HeroBanner.tsx  # Banner principal con animaciones
│   │   ├── ContactForm.tsx # Formularios de contacto con Pipedrive
│   │   └── SocialFooter.astro # Pie de página con redes sociales
│   ├── data/               # Datos estructurados
│   │   ├── projects.json   # Información detallada de cada proyecto
│   │   └── properties.json # Categorización de propiedades por tipo
│   ├── layouts/            # Plantillas de página
│   │   ├── Layout.astro     # Plantilla base con meta tags
│   │   ├── ProjectLayout/   # Plantillas para proyectos individuales
│   │   │   └── ProjectDetailLayout.astro  # Layout detallado para proyectos
│   │   └── PropertyLayout/  # Plantillas para categorías de propiedades
│   ├── pages/              # Rutas y páginas
│   │   ├── index.astro      # Página principal
│   │   ├── athas/           # Proyecto premium
│   │   ├── amitie/          # Proyecto económico
│   │   ├── filia/           # Proyecto económico
│   │   ├── lagun/           # Proyecto económico
│   │   ├── siena/           # Proyecto en panamá oeste
│   │   ├── apartamentos-economicos/  # Categoría de apartamentos económicos
│   │   ├── apartamentos-premium/    # Categoría de apartamentos premium
│   │   ├── centro-ciudad/           # Categoría de proyectos en el centro
│   │   ├── casas-este/              # Categoría de casas en panamá este
│   │   └── casas-y-aptos-oeste/     # Categoría de propiedades en panamá oeste
│   ├── styles/             # Estilos globales
│   │   └── fonts.css       # Configuración de tipografías personalizadas
└── package.json            # Dependencias y scripts
```

## 🔨 Instalación y Configuración

1. **Clonar el repositorio**

   ```bash
   git clone [url-del-repositorio]
   cd hauspanama-web
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configuración del entorno**
   - Asegúrate de tener Node.js v16.x o superior
   - Se recomienda usar pnpm como gestor de paquetes para mejor rendimiento

## 🚀 Comandos de Desarrollo

| Comando             | Descripción                                        |
|:-------------------|:---------------------------------------------------|
| `npm run dev`       | Inicia servidor de desarrollo en `localhost:4321`  |
| `npm run build`     | Compila el sitio para producción en `./dist/`      |
| `npm run preview`   | Vista previa local de la versión compilada        |
| `npm run astro ...` | Ejecuta comandos CLI de Astro                      |

## 💯 Buenas Prácticas Implementadas

- **Arquitectura por Componentes**: Diseño modular con componentes React y Astro para mayor mantenibilidad
- **Estandarización de Proyectos**: Todas las páginas de proyecto utilizan un mismo layout (`ProjectDetailLayout`) que consume datos centralizados
- **Optimización de Imágenes**: Formato WebP para mejor rendimiento y carga progresiva
- **Animaciones Optimizadas**: Implementación de AOS para animaciones de scroll eficientes y con retardo secuencial
- **SEO Optimizado**: Meta tags, estructura semántica y Open Graph en cada página
- **Interacción y UX**: Menú desplegable mejorado con efectos de hover y focus para mayor engagement
- **Gestión de Datos**: Sistema centralizado con archivos JSON para facilitar el mantenimiento y actualización

## 🔒 Seguridad

La aplicación implementa múltiples capas de seguridad web para proteger a los usuarios y los datos:

### Content Security Policy (CSP)

Implementado a través del componente `CSPHeaders.astro`, nuestro CSP:

- Restringe el origen de recursos a dominios confiables
- Limita la ejecución de scripts con nonce criptográficos
- Controla conexiones, formularios y fuentes permitidas
- Integra de forma segura con proveedores externos (Pipedrive)

### Cabeceras HTTP de Seguridad

- **X-Content-Type-Options**: Previene MIME type sniffing
- **Referrer-Policy**: Controla la información de referencia compartida
- **Strict-Transport-Security (HSTS)**: Fuerza conexiones HTTPS
- **X-Frame-Options**: Protección contra clickjacking
- **X-XSS-Protection**: Capa adicional contra ataques XSS
- **Permissions-Policy**: Restringe acceso a funcionalidades sensibles del navegador

### Protección de Enlaces

Todos los enlaces externos incluyen:
- Atributo `rel="noopener noreferrer"` para prevenir ataques de tab nabbing
- Apertura en nuevas pestañas con las protecciones adecuadas

## 🎨 Estilo y Diseño

### Paleta de Colores
- **Primario (`--primary`)**: `#EE7A23` (Naranja)
- **Secundario (`--secondary`)**: `#444444` (Gris oscuro)
- **Fondo (`--background`)**: `#f6f6f6` (Gris claro)
- **Texto principal**: `#333333` (Gris oscuro)
- **Acento**: `#FFFFFF` (Blanco)

### Tipografía
- **Títulos**: Helvetica Neue Bold (personalizada vía `fonts.css`)
- **Menús**: Helvetica Neue Medium
- **Cuerpo**: Inter Regular

### Sistema de Animaciones
- **Fade Up**: Animaciones sutiles al hacer scroll para revelar elementos
- **Delay Secuencial**: Secuencias de animación con retardos escalonados para crear un efecto dinámico
- **Hover**: Efectos de hover personalizados en menús con escala y cambio de color

## 💬 Integración con Pipedrive

El sitio integra formularios de Pipedrive para la captura y gestión automática de leads:

- Cada proyecto inmobiliario tiene un formulario personalizado para captura de leads
- Las URLs de los formularios están configuradas en `projects.json` mediante la propiedad `pipedriveFormUrl`
- El componente `ContactForm.tsx` implementa la integración optimizada para máxima conversión

## 📝 Licencia y Propiedad

Desarrollado por [Roberto J. Vargas](https://rvargas.dev) para SEMAH Group.

&copy; 2025 SEMAH Group. Todos los derechos reservados.

---

<p align="center">
  <small>Una empresa de</small><br>
  <img src="./public/assets/semahLogo.png" alt="SEMAH Group Logo" width="120">
</p>
