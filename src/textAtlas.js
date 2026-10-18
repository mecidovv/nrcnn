import * as THREE from "three";
import { CONFIG } from "./config.js";

export function createTextAtlas(renderer) {
  const { width: tileWidth, height: tileHeight } = CONFIG.atlasTile;
  const canvas = document.createElement("canvas");
  const columns = Math.floor(2048 / tileWidth);
  const rows = Math.ceil(CONFIG.words.length / columns);
  canvas.width = Math.max(2048, columns * tileWidth);
  canvas.height = Math.max(2048, rows * tileHeight);
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Yazı teksturası hazırlana bilmədi.");

  context.textAlign = "center";
  context.textBaseline = "alphabetic";
  const aspects = [];
  const rects = [];
  const padding = 3;
  CONFIG.words.forEach((word, index) => {
    const tileX = (index % columns) * tileWidth;
    const tileY = Math.floor(index / columns) * tileHeight;
    let fontSize = CONFIG.atlasTile.fontSize;
    context.font = `600 ${fontSize}px Poppins`;
    while (context.measureText(word).width > tileWidth - 32
      && fontSize > CONFIG.atlasTile.minimumFontSize) {
      fontSize -= 2;
      context.font = `600 ${fontSize}px Poppins`;
    }
    const metrics = context.measureText(word);
    const baseline = tileY + (tileHeight + metrics.actualBoundingBoxAscent
      - metrics.actualBoundingBoxDescent) * 0.5;
    const cropX = tileX + (tileWidth - metrics.width) / 2 - padding;
    const cropY = baseline - metrics.actualBoundingBoxAscent - padding;
    const cropWidth = metrics.width + padding * 2;
    const cropHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent + padding * 2;
    context.fillStyle = CONFIG.colors.white;
    context.fillText(word, tileX + tileWidth * 0.5, baseline);
    const uvX = cropX / canvas.width;
    const uvY = 1 - (cropY + cropHeight) / canvas.height;
    const uvWidth = cropWidth / canvas.width;
    const uvHeight = cropHeight / canvas.height;
    rects.push([uvX, uvY, uvWidth, uvHeight]);
    aspects.push(cropWidth / cropHeight);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());

  return { texture, aspects, rects };
}
