# Marea Rizada · Sistema de diseño

Sistema de diseño para **Marea Rizada** ([@marea.rizada](https://instagram.com/marea.rizada)), expertos en salud capilar que recuperan rizos. Incluye las submarcas Shop ([@marearizada_shop](https://instagram.com/marearizada_shop)) y Nails ([@marea.rizada_nails](https://instagram.com/marea.rizada_nails)).

**Idea guía:** cada rizo es una ola. La paleta sale del logo (espuma aqua, arena rosada, gris roca del rotulado), la letra tiene rebote como un rizo definido y todo el movimiento imita el agua.

## Ver la guía

Abre `index.html` en el navegador. No hay que compilar nada.

## Archivos

| Archivo | Contenido |
| --- | --- |
| `design-system/tokens.css` | Color (claro y oscuro), tipografía, espaciado, radios, sombras y movimiento |
| `design-system/components.css` | Botones, chips, tarjetas, formularios, navegación, separadores de ola |
| `design-system/motion.css` | Marea de carga, trazos que se dibujan, texto que riza, burbujas |
| `design-system/tide.js` | Olas rizadas en canvas (`MareaRizada.Tide`) y curvas de patrón 2A–4C (`MareaRizada.curlPath`) |
| `design-system/tokens.json` | Tokens en formato W3C para Figma Tokens o Style Dictionary |
| `assets/marea-mark.svg` | Isotipo **provisional**, reconstruido desde la foto de perfil de Instagram |
| `index.html`, `site/` | La guía navegable del sistema |

## Uso rápido

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&family=Martian+Mono:wght@400;500&family=Shantell+Sans:wght,BNCE,INFM@300..800,-100..100,0..100&display=swap">
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="design-system/components.css">
<link rel="stylesheet" href="design-system/motion.css">

<button class="mr-btn">Reservar diagnóstico</button>
<div class="mr-tide-loader" style="--level:60%"></div>

<canvas id="mar" style="width:100%;height:240px"></canvas>
<script src="design-system/tide.js"></script>
<script>new MareaRizada.Tide(document.getElementById('mar'));</script>
```

## Pendiente

- Sustituir el isotipo provisional por el logo oficial (SVG) y ajustar los colores de marca si el archivo original difiere.
