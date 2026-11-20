# Remotion Videos — ReciclaRed

Proyecto de producción audiovisual usando React y Remotion.

## Video de prueba terminado

- **Archivo:** [Descargar comercial de ReciclaRed (MP4)](out/reciclared-demo.mp4)
- **Formato:** vertical, 1080 × 1920, 30 fps
- **Duración:** 10 segundos
- **Contenido:** animaciones tipográficas sobre reutilización de dispositivos y servicios de ReciclaRed
- **Audio:** sin audio
- **Diseño:** demostración preliminar, no utiliza el logotipo oficial ni imágenes propias de la empresa.

## Ejecutar localmente

Instala Node.js 22 o superior y luego ejecuta:

```bash
npm install
npm run dev
```

Para renderizar:

```bash
npm run render
```

Esto creará `out/video.mp4`.

## Renderizar desde GitHub Actions

Abre **Actions → Renderizar video de ejemplo → Run workflow**. La ejecución instalará las dependencias en GitHub y subirá el MP4 como artefacto descargable, si el proceso termina correctamente.

## Código

- `src/Presentacion.tsx`: escenas, textos y animaciones
- `src/Root.tsx`: resolución, duración y FPS
- `src/index.ts`: entrada de Remotion
- `.github/workflows/render.yml`: exportación desde GitHub

Para edición de imagen, audio, música y corrección de color final se puede usar DaVinci Resolve más adelante. GitHub no ejecuta permanentemente una aplicación de edición.
