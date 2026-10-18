import { CONFIG } from "./config.js";

export function createControls(canvas, onFirstDrag = () => {}) {
  const state = {
    down: false,
    x: 0,
    y: 0,
    time: 0,
    velocityX: 0,
    velocityY: 0,
    rotationX: 0,
    rotationY: 0,
    draggedThisGesture: false
  };
  function onPointerDown(event) {
    state.down = true;
    state.x = event.clientX;
    state.y = event.clientY;
    state.time = performance.now();
    state.velocityX = 0;
    state.velocityY = 0;
    state.draggedThisGesture = false;
    canvas.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event) {
    if (!state.down) return;
    const now = performance.now();
    const deltaX = event.clientX - state.x;
    const deltaY = event.clientY - state.y;
    if (!state.draggedThisGesture && Math.hypot(deltaX, deltaY) > 1) {
      state.draggedThisGesture = true;
      onFirstDrag();
    }
    const deltaTime = Math.max((now - state.time) / 1000, 0.008);

    state.rotationY += deltaX * CONFIG.dragSensitivity;
    state.rotationX = Math.max(
      -0.85,
      Math.min(0.85, state.rotationX + deltaY * CONFIG.tiltSensitivity)
    );
    state.velocityY = Math.max(
      -5,
      Math.min(5, deltaX * CONFIG.dragSensitivity / deltaTime)
    );
    state.velocityX = Math.max(
      -3,
      Math.min(3, deltaY * CONFIG.tiltSensitivity / deltaTime)
    );
    state.x = event.clientX;
    state.y = event.clientY;
    state.time = now;
  }

  function onPointerUp() {
    state.down = false;
  }

  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("pointercancel", onPointerUp);
  canvas.addEventListener("lostpointercapture", onPointerUp);

  function update(deltaSeconds, heartReady) {
    if (heartReady && !state.down) {
      state.rotationY += (CONFIG.idleRotationSpeed + state.velocityY) * deltaSeconds;
      state.rotationX += state.velocityX * deltaSeconds;
      state.velocityY *= Math.exp(-CONFIG.inertiaDamping * deltaSeconds);
      state.velocityX *= Math.exp(-CONFIG.inertiaDamping * deltaSeconds);
      state.rotationX = Math.max(-0.85, Math.min(0.85, state.rotationX));
    }
    return { rotationX: state.rotationX, rotationY: state.rotationY };
  }

  return { update };
}
