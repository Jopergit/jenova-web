# JENOVA Publicidad Gráfica

Sitio web corporativo estático para JENOVA, empresa de publicidad gráfica, señalética industrial, letreros, adhesivos e instalación en terreno en la Región del Biobío, Chile.

## Cómo abrir el sitio

Abre el archivo `index.html` directamente en Edge, Chrome o cualquier navegador moderno.

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

La galería actual usa mockups creados con CSS. Cuando tengas fotos reales, agrega imágenes en `assets/img/proyectos/` y convierte cada tarjeta de proyecto para usar una etiqueta `<img>`.

La página `proyectos.html` ya está preparada como galería ampliada para mostrar trabajos reales.

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

## Publicar en GitHub Pages

1. Sube los archivos al repositorio.
2. En GitHub, entra a `Settings > Pages`.
3. Selecciona la rama principal y la carpeta raíz.
4. Guarda y espera la URL generada.

## SEO pendiente cuando tengas datos reales

Cuando tengas datos definitivos, actualiza:

- Número real de contacto.
- Email real.
- Comuna principal de atención.
- Dominio final, si compras uno.
- Fotos reales de proyectos.
- Instagram y redes sociales si existen.

También conviene actualizar el JSON-LD en el `<head>` de `index.html`, especialmente `telephone`, `email` y, si corresponde, dirección o comuna.
