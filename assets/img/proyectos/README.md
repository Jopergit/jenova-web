# Fotos reales de proyectos

Guarda aquí las fotos finales de trabajos de JENOVA.

## Nombres recomendados

```text
senaletica-industrial-seguridad-01.webp
letrero-comercial-corporativo-01.webp
adhesivo-vinilo-vidrio-01.webp
identificacion-areas-bodega-01.webp
grafica-vehicular-industrial-01.webp
instalacion-terreno-letrero-01.webp
```

## Tamaños recomendados

- Galería: 1200 x 900 px.
- Hero o imagen grande: 1800 x 1100 px.
- Formato ideal: `.webp`.
- Peso ideal por imagen: bajo 300 KB cuando sea posible.

## Cómo reemplazar un placeholder

En `index.html`, busca una tarjeta como esta:

```html
<div class="project-image image-safety"></div>
```

Y cámbiala por una foto real:

```html
<img
  class="project-photo"
  src="assets/img/proyectos/senaletica-industrial-seguridad-01.webp"
  alt="Señalética industrial instalada en planta o bodega"
/>
```

El CSS ya incluye la clase `.project-photo`, así que la imagen se ajustará a la tarjeta.
