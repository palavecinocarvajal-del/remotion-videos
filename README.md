# Remotion Videos

Proyecto de videos programáticos con **React + Remotion**. Incluye una composición animada de ejemplo de 5 segundos en formato Full HD (1920 × 1080 a 30 fps).

## Requisitos

- Node.js 22 o superior
- npm

## Ejecutar Remotion Studio

```bash
npm install
npm run dev
```

Se abrirá Remotion Studio en el navegador de tu computador para editar y previsualizar el video.

## Exportar un video MP4

```bash
npm run render
```

El archivo se guardará en `out/video.mp4`.

## Generar el MP4 desde GitHub

También puedes generar el video sin instalar nada en tu equipo:

1. Abre la pestaña **Actions** de este repositorio.
2. Entra a **Renderizar video de ejemplo** y pulsa **Run workflow**.
3. Cuando finalice correctamente, abre la ejecución y descarga el artefacto `video-mp4`.

El flujo instala las dependencias en el entorno temporal de GitHub Actions y renderiza el ejemplo. El resultado solo estará disponible cuando la ejecución termine con éxito.

## Archivos principales

- `src/index.ts`: punto de entrada de Remotion.
- `src/Root.tsx`: registro de composiciones.
- `src/Presentacion.tsx`: animación del video.
- `remotion.config.ts`: configuración del render.
- `.github/workflows/render.yml`: flujo para exportar MP4 mediante GitHub Actions.

**Importante:** GitHub almacena el código; no mantiene Remotion Studio ejecutándose permanentemente. Para editar de forma interactiva debes iniciar el Studio en un equipo o entorno de desarrollo compatible.
