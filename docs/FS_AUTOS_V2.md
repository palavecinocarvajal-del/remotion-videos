# FS AUTOS — Reel dinámico V2 (15 segundos)

Esta es la composición editable `FSAutosV2` creada en el repositorio Remotion. No afecta las composiciones anteriores.

## Diseño

- Público objetivo: propietarios particulares que quieran vender su auto a FS AUTOS en Santiago.
- Formato: vertical 9:16, 720 × 1280 píxeles, 24 FPS, 15 segundos.
- Texto: «¿VAS A VENDER TU AUTO?», «ASÍ DE SIMPLE», «LO EVALUAMOS», «TRATO DIRECTO», «COMPRAMOS TU AUTO».
- Cierre: logotipo sin círculo, WhatsApp +56 9 7715 2253.
- La edición MP4 de la conversación incluye banda sonora instrumental sintetizada, sin narración.

## Archivos multimedia necesarios (pendientes de subir al repositorio)

Coloca estos dos archivos dentro de `public/fsautos/`:

- `34345.mp4`: el video original generado con Google Flow que aportó el usuario.
- `logo-fs-autos.png`: el logo de la empresa con fondo transparente.

Ambos recursos están incluidos en el ZIP editable proporcionado en el chat; el PNG del ZIP se llama `FS_AUTOS_logo_sin_fondo.png` y se debe renombrar a `logo-fs-autos.png` antes de subirlo.

## Render Remotion

```bash
npm install
npm run render:fsautos-v2
```

El comando crea `out/FS_AUTOS_Reel_Dinamico_v2.mp4`. También puedes usar el workflow **Renderizar FS AUTOS V2** desde GitHub Actions una vez cargados los archivos.

**Nota:** el MP4 entregado en el chat es una edición local con Python/FFmpeg y música original. El componente de Remotion es una adaptación editable de la misma estructura, no un render idéntico fotograma a fotograma. El flujo de GitHub no está verificado hasta que los dos assets estén cargados.
