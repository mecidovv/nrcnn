import * as THREE from "three";
import { CONFIG } from "./config.js";

export async function createScene(canvas, mobile) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(CONFIG.colors.background);

  const camera = new THREE.PerspectiveCamera(
    CONFIG.cameraFov,
    1,
    CONFIG.cameraNear,
    CONFIG.cameraFar
  );
  camera.position.set(0, 0, CONFIG.cameraZ);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: CONFIG.antialias,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, CONFIG.maxPixelRatio));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;

  let composer = null;
  if (!mobile) {
    const [composerModule, renderPassModule, bloomModule, outputModule] = await Promise.all([
      import("three/addons/postprocessing/EffectComposer.js"),
      import("three/addons/postprocessing/RenderPass.js"),
      import("three/addons/postprocessing/UnrealBloomPass.js"),
      import("three/addons/postprocessing/OutputPass.js")
    ]);
    const { EffectComposer } = composerModule;
    const { RenderPass } = renderPassModule;
    const { UnrealBloomPass } = bloomModule;
    const { OutputPass } = outputModule;
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      CONFIG.desktopBloom.strength,
      CONFIG.desktopBloom.radius,
      CONFIG.desktopBloom.threshold
    );
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }

  let viewWidth = 1;
  let viewHeight = 1;

  function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, CONFIG.maxPixelRatio));
    renderer.setSize(width, height, false);
    if (composer) composer.setSize(width, height);
    viewHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    viewWidth = viewHeight * camera.aspect;
  }

  function render() {
    if (composer) composer.render();
    else renderer.render(scene, camera);
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("orientationchange", resize, { passive: true });

  return {
    scene,
    camera,
    renderer,
    isMobile: mobile,
    getViewSize: () => ({ width: viewWidth, height: viewHeight }),
    render
  };
}
