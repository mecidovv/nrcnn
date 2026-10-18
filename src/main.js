import * as THREE from "three";
import "./style.css";
import { CONFIG, isMobileDevice } from "./config.js";
import { createScene } from "./scene.js";
import { createTextAtlas } from "./textAtlas.js";
import { createWords } from "./words.js";
import { createControls } from "./controls.js";
import { createUI } from "./ui.js";

const canvas = document.querySelector("#scene");
const ui = createUI();
const mobile = isMobileDevice();

function createStars(scene) {
  const positions = new Float32Array(CONFIG.starCount * 3);
  for (let index = 0; index < CONFIG.starCount; index += 1) {
    positions[index * 3] = (Math.random() - 0.5) * CONFIG.starSpread.width;
    positions[index * 3 + 1] = (Math.random() - 0.5) * CONFIG.starSpread.height;
    positions[index * 3 + 2] = CONFIG.starDepth[0]
      + Math.random() * (CONFIG.starDepth[1] - CONFIG.starDepth[0]);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: CONFIG.colors.lightPink,
    size: CONFIG.starSize,
    transparent: true,
    opacity: 0.3,
    sizeAttenuation: true,
    depthWrite: false
  });
  const stars = new THREE.Points(geometry, material);
  scene.add(stars);
  return stars;
}

function createHeartGlow(scene) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Mərkəzi işıq hazırlana bilmədi.");
  const gradient = context.createRadialGradient(64, 64, 2, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255,255,255,0.75)");
  gradient.addColorStop(0.12, "rgba(255,128,171,0.5)");
  gradient.addColorStop(0.38, "rgba(255,46,126,0.2)");
  gradient.addColorStop(1, "rgba(255,46,126,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);

  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(canvas),
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false
  }));
  sprite.renderOrder = 3;
  scene.add(sprite);
  return sprite;
}

async function start() {
  await document.fonts.load(`600 ${CONFIG.atlasTile.fontSize}px Poppins`);
  const world = await createScene(canvas, mobile);
  const atlas = createTextAtlas(world.renderer);
  const words = createWords({ ...atlas, mobile });
  world.scene.add(words.mesh);
  const stars = createStars(world.scene);
  const glow = createHeartGlow(world.scene);
  const controls = createControls(canvas, ui.hideHint);
  const clock = new THREE.Clock();
  let elapsed = 0;
  let morph = 0;
  let heartReady = false;
  let messagesStarted = false;

  function frame() {
    const delta = Math.min(clock.getDelta(), CONFIG.maxFrameDelta);
    elapsed += delta;
    if (elapsed >= CONFIG.vortexSeconds) {
      morph = Math.min((elapsed - CONFIG.vortexSeconds) / CONFIG.morphSeconds, 1);
    }
    heartReady = morph >= 1;
    words.setHeartBlending(heartReady);

    if (heartReady && !messagesStarted) {
      messagesStarted = true;
      ui.showHint();
      window.setTimeout(() => void ui.startMessages(), CONFIG.messageDelaySeconds * 1000);
    }

    const rotation = controls.update(delta, heartReady);
    const pulse = heartReady
      ? 1 + Math.sin(elapsed * CONFIG.heartPulseSpeed) * CONFIG.heartPulseRatio
      : 1;
    words.update({
      time: elapsed,
      morph,
      rotationX: rotation.rotationX,
      rotationY: rotation.rotationY,
      pulse,
      viewSize: world.getViewSize()
    });

    const viewSize = world.getViewSize();
    glow.position.set(0, 0, 0);
    glow.scale.setScalar(Math.min(viewSize.width, viewSize.height) * 0.38 * pulse);
    glow.material.opacity = morph * 0.5;
    stars.material.opacity = CONFIG.starOpacity
      + Math.sin(elapsed * CONFIG.starTwinkleSpeed) * CONFIG.starOpacityAmplitude;
    world.render();
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

start().catch((error) => {
  console.error("Animasiya başladılmadı:", error);
  ui.showError();
});
