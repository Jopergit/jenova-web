# JENOVA Publicidad Gráfica

Sitio web corporativo estático para JENOVA, empresa de publicidad gráfica, señalética industrial, letreros, adhesivos, vinilos e instalación en terreno en Concepción, Coronel y la Región del Biobío, Chile.

## Cómo abrir el sitio

Versión publicada:

```text
https://jenova.cl
```

Para revisar localmente, abre el archivo `index.html` directamente en Edge, Chrome o cualquier navegador moderno.

No necesita instalar dependencias ni levantar servidor.

## Estructura

```text
/
├── index.html
├── servicios.html
├── proyectos.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── icons/
    │   └── favicon.svg
    └── img/
        ├── hero-industrial-signage.png
        └── README.md
```

## Cambiar teléfono de contacto

Edita `js/main.js` y cambia esta línea:

```js
const CONTACT_PHONE = "+56972426256";
```

Usa formato internacional. Ejemplo:

```js
const CONTACT_PHONE = "+56912345678";
```

WhatsApp e Instagram quedan pendientes hasta definir canales activos.

## Cambiar email

Edita `js/main.js`:

```js
const CONTACT_EMAIL = "contacto.jenova@gmail.com";
```

Y cambia el texto visible del footer en `index.html` si quieres que aparezca el nuevo correo escrito.

## Cambiar imágenes

La imagen principal está en:

```text
assets/img/hero-industrial-signage.png
```

Puedes reemplazarla por una foto real manteniendo el mismo nombre. Si usas otro nombre, cambia el `src` en `index.html`.

La galería actual usa imágenes reales y piezas referenciales en `assets/img/proyectos/`.

## Cambiar logo

El logo actual es tipográfico y se arma en HTML/CSS con el texto `JENOVA`.

Para usar un logo real:

El logo web actual está en `assets/img/logo-jenova-web.png`.

Si quieres cambiarlo, reemplaza ese archivo manteniendo el mismo nombre o actualiza las rutas de los `<img>` del header y footer.

## Cambiar colores

Los colores principales están al inicio de `css/styles.css`:

```css
:root {
  --bg: #0f1115;
  --bg-2: #171a21;
  --accent: #f5b301;
  --text: #ffffff;
  --muted: #b8beca;
}
```

## Publicar en Cloudflare Pages

1. Sube esta carpeta a un repositorio de GitHub.
2. En Cloudflare Pages, crea un proyecto nuevo conectado al repositorio.
3. Framework preset: `None`.
4. Build command: dejar vacío.
5. Output directory: `/` o dejar vacío según la interfaz.

## SEO pendiente cuando tengas más datos reales

Cuando tengas datos definitivos, actualiza:

- Nuevas fotos reales de proyectos.
- Instagram y redes sociales si existen.
- Dirección o comuna principal si se decide publicarla.

También conviene actualizar el JSON-LD en el `<head>` de `index.html`, especialmente `telephone`, `email` y, si corresponde, dirección o comuna.
