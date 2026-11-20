# Publicidad FS AUTOS con Remotion

**Objetivo:** anuncio para Instagram Reels que consiga mensajes de personas que quieran vender su vehículo a FS AUTOS, Santiago, Chile.

## Video
- Duración: 20 segundos.
- Tamaño: 1080 × 1920, 30 fps, vertical 9:16.
- Audio: silenciado, para agregar narración publicitaria posteriormente.
- Mensajes: «¿VENDES TU AUTO?», «NOS ENVÍAS LOS DATOS», «EVALUAMOS TU VEHÍCULO», «RECIBES UNA OFERTA», «QUEREMOS COMPRAR TU AUTO».
- Contacto: WhatsApp +56 9 7715 2253.
- Preserva la composición original «Presentacion» de ReciclaRed.

## Archivos necesarios

La composición usa material **aportado por el usuario**. Los videos e imágenes binarios no se incluyen en esta rama de GitHub todavía; la copia ZIP entregada en el chat contiene los cuatro recursos.

Sube estos archivos a la carpeta `public/fsautos/` del repositorio:

1. `bmw-carretera.mp4` — video del BMW viajando, generado con Google Flow.
2. `bmw-animacion.mp4` — animación FS AUTOS con celular, generada con Google Flow.
3. `bmw-cierre.png` — fotografía de BMW para el cierre.
4. `logo-fs-autos.png` — logotipo extraído de la gráfica de FS AUTOS.

## Render

```bash
npm install
npm run dev
npm run render:fsautos
```

Se guardará en `out/FS_AUTOS_publicidad.mp4`.

También puedes abrir GitHub → Actions → **Renderizar FS AUTOS (Reel)** → **Run workflow** después de subir los archivos. En GitHub se descargará el MP4 como artefacto si el render termina correctamente.

Esta rama contiene el montaje editable en Remotion. La primera edición MP4 entregada en el chat fue exportada localmente con FFmpeg y no es idéntica al render posterior de Remotion. No se ha verificado todavía el render automático de esta rama.
