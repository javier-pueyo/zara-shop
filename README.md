# Zara Mobile Challenge - Frontend

Esta aplicación es un catálogo y carrito de compras para smartphones diseñada con un enfoque Mobile First, priorizando el rendimiento y la accesibilidad, siguiendo la estética minimalista de Zara.

## 🚀 Cómo levantar el proyecto

### 1. Variables de Entorno

El proyecto necesita configurar la API Key para funcionar correctamente. **He dejado un archivo `.env.example` como plantilla.**

1.  Copia el archivo de ejemplo para crear tu entorno local:
    ```bash
    cp .env.example .env.development.local
    ```
2.  Edita `.env.development.local` y añade la clave proporcionada:
    ```bash
    NEXT_PUBLIC_API_KEY=87909682e6cd74208f41a6ef39fe4191
    ```

### 2. Ejecutar en Desarrollo

Instala las dependencias y arranca el servidor:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🐳 Despliegue con Docker

Para desplegar la aplicación en un contenedor Docker:

1.  **Construir la imagen**:

    ```bash
    docker build -t zara-shop .
    ```

2.  **Correr el contenedor**:
    ```bash
    docker run -p 3000:3000 zara-shop
    ```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## 🛠️ Stack Tecnológico y Decisiones

### Framework: Next.js 14 (compatibilidad Node 18)

Se optó por **Next.js 14** (versión 14.2.3) en lugar de la última versión disponible (Next.js 15) para garantizar la máxima estabilidad y compatibilidad con **Node 18**, tal como se especificaba en los requisitos del backend.

- **Rendering Híbrido**: Actualmente, la estructura de la aplicación (`layout`, `page`) se renderiza en el servidor (SSR), mientras que los componentes de vistas (`ListPage`, `DetailPage`) utilizan `use client`. **Esta decisión se tomó por simplicidad para persistir el carrito usando `localStorage`**, dado que la API proporcionada no soporta gestión de carritos y se quería evitar la complejidad de implementar una base de datos propia. `localStorage` es una API exclusiva del navegador y requiere ejecución en cliente.
- **Data Fetching**: La obtención de datos se realiza en el cliente (CSR) mediante **TanStack Query**. Esto permite una experiencia de usuario fluida con caché y actualizaciones en segundo plano, ideal para una aplicación tipo SPA.
- **Optimización**: Uso nativo de `next/image` y `next/font` para performance automática.

### Estilos: Tailwind CSS + Headless UI

Aunque habitualmente prefiero soluciones CSS custom para tener control total, en este proyecto elegí **Tailwind CSS** y **Headless UI** por varias razones:

- **Velocidad de desarrollo**: Permite iterar rápidamente sobre los diseños de Figma.
- **Accesibilidad (A11y)**: Headless UI proporciona componentes totalmente accesibles "out of the box", un requisito clave del proyecto.
- **Neutralidad**: No añaden estilos por defecto difíciles de sobrescribir, encajando bien con el diseño minimalista.
- **Variables CSS**: Se configuró el archivo `tailwind.css` utilizando variables CSS nativas, cumpliendo con el requisito opcional.

### Slider Personalizado (Custom Implementation)

Evité utilizar librerías de terceros (como Swiper) para el carrusel de imágenes. Los requisitos de diseño eran muy específicos:

- Layout "Breakout" (ancho completo de pantalla pero contenido alineado al grid).
- Barra de progreso minimalista separada del contenido visual.
- Evitar "hacks" de CSS para forzar librerías a comportamientos no estándar.

La implementación nativa con **CSS Scroll Snap** resultó en un componente mucho más ligero y performante.

## 🏗️ Arquitectura (Feature-Sliced Design)

El proyecto sigue la metodología **Feature-Sliced Design (FSD)**. Aunque puede parecer una arquitectura compleja para una aplicación mediana, la elegí para garantizar:

1.  **Escalabilidad**: El código está organizado por capas de responsabilidad (Entities, Features, Widgets), lo que facilita añadir nuevas funcionalidades sin deuda técnica.
2.  **Testabilidad**: La separación clara de lógica de negocio y UI permite realizar tests unitarios y de integración mucho más sencillos.

### Estructura:

- `app/`: Configuración global y providers.
- `views/`: Páginas completas (Listado, Detalle).
- `widgets/`: Bloques de UI autónomos (Header, ProductSlider).
- `features/`: Funcionalidades de usuario (AddToCart, Search).
- `entities/`: Modelos de dominio (Product, Cart).
- `shared/`: Componentes base y utilidades.

## ⚠️ Cosas a Mejorar / Known Issues

### Animación de Búsqueda

El buscador funciona correctamente y filtra en tiempo real, pero no incluye la animación de reordenamiento visual de las tarjetas (Flip animation). Prioricé la funcionalidad y el rendimiento sobre esta animación compleja, considerándola un "nice-to-have".

### Imágenes de Producto

Se detectaron inconsistencias en las imágenes proporcionadas por la API:

- Algunas imágenes tienen márgenes transparentes excesivos, mientras que otras no.
- Al menos una imagen tiene un fondo sólido (no transparente).

Esto dificulta una alineación visual perfecta al "pixel". Idealmente, esto se solucionaría en el backend. Desde el frontend, se ha intentado mitigar usando `object-fit: contain` para mantener la consistencia.

### Favicon

El logotipo actual de la marca es muy horizontal y pierde legibilidad al usarse como favicon. Se recomienda diseñar una versión isologo/símbolo para este propósito.

## 🔍 Clarificación de Requisitos

### Selección de Imagen en Vista de Detalle

Se identificó una discrepancia técnica: según las instrucciones, no debe haber selección por defecto de color ni almacenamiento, pero el endpoint de detalle no devuelve una imagen "maestra" o por defecto (a diferencia del listado).

**Decisión**: Para evitar un espacio vacío y mejorar la UX, se ha optado por mostrar la primera imagen del listado de colores disponible como estado inicial, manteniendo los selectores sin marcar hasta la interacción del usuario.
