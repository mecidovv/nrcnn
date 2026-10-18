import * as THREE from "three";
import { CONFIG } from "./config.js";

const vertexShader = /* glsl */ `
  attribute vec4 aLayout;
  attribute vec4 aShape;
  attribute vec4 aUvRect;
  attribute vec3 aColor;
  attribute vec2 aText;

  uniform sampler2D uAtlas;
  uniform float uTime;
  uniform float uMorph;
  uniform float uRingCount;
  uniform float uWordsPerRing;
  uniform float uCameraZ;
  uniform float uVortexNearZ;
  uniform float uVortexFarZ;
  uniform float uVortexSpeed;
  uniform float uVortexTwist;
  uniform vec2 uVortexRotationSpeedRange;
  uniform float uVortexFarOpacity;
  uniform float uNearEnd;
  uniform float uNearStart;
  uniform float uFarStart;
  uniform float uFarEnd;
  uniform float uNearScaleGrowth;
  uniform float uInnerRadius;
  uniform float uOuterRadius;
  uniform vec2 uVortexWordWidth;
  uniform float uVortexArcGap;
  uniform float uHeartWordEnergy;
  uniform float uHeartScale;
  uniform float uHeartDepth;
  uniform float uHeartWordWidth;
  uniform float uHeartCenterY;
  uniform float uPulse;
  uniform vec2 uViewSize;
  uniform vec2 uRotation;

  varying vec2 vAtlasUv;
  varying vec3 vColor;
  varying float vOpacity;
  varying float vWordEnergy;
  varying float vCameraDistance;

  vec2 heartOutline(float t) {
    float s = sin(t);
    float c = cos(t);
    return vec2(
      16.0 * s * s * s,
      13.0 * c - 5.0 * cos(2.0 * t) - 2.0 * cos(3.0 * t) - cos(4.0 * t)
    );
  }

  void main() {
    float morph = smoothstep(0.0, 1.0, uMorph);
    float depth = fract((aLayout.x + uTime * uVortexSpeed) / uRingCount);
    float z = mix(uVortexNearZ, uVortexFarZ, depth);
    float radiusRatio = mix(uInnerRadius, uOuterRadius, depth);
    float radius = min(uViewSize.x, uViewSize.y) * radiusRatio
      * (uCameraZ - z) / uCameraZ;
    float ringProgress = aLayout.x / max(uRingCount - 1.0, 1.0);
    float ringSpeed = mix(
      uVortexRotationSpeedRange.x,
      uVortexRotationSpeedRange.y,
      ringProgress
    );
    float angle = aLayout.y + aLayout.x * uVortexTwist + uTime * ringSpeed;
    vec3 vortexPosition = vec3(cos(angle) * radius, sin(angle) * radius, z);

    vec2 outline = heartOutline(aLayout.z);
    vec2 heartPosition = outline * (uHeartScale * aLayout.w * uPulse);
    heartPosition.y += uHeartCenterY * uHeartScale * uPulse;
    float heartZ = aShape.y * uHeartDepth * uPulse;
    vec3 rotatedHeart = vec3(heartPosition, heartZ);
    float cosineX = cos(uRotation.x);
    float sineX = sin(uRotation.x);
    rotatedHeart = vec3(
      rotatedHeart.x,
      rotatedHeart.y * cosineX - rotatedHeart.z * sineX,
      rotatedHeart.y * sineX + rotatedHeart.z * cosineX
    );
    float cosineY = cos(uRotation.y);
    float sineY = sin(uRotation.y);
    rotatedHeart = vec3(
      rotatedHeart.x * cosineY + rotatedHeart.z * sineY,
      rotatedHeart.y,
      -rotatedHeart.x * sineY + rotatedHeart.z * cosineY
    );
    vec3 center = mix(vortexPosition, rotatedHeart, morph);
    float cameraDistance = uCameraZ - z;
    float nearFade = smoothstep(uNearEnd, uNearStart, cameraDistance);
    float projectedRadius = min(uViewSize.x, uViewSize.y) * radiusRatio;
    float arcSpacing = 6.28318530718 * projectedRadius / uWordsPerRing;
    float vortexWidth = min(uViewSize.x, uViewSize.y)
      * mix(uVortexWordWidth.x, uVortexWordWidth.y, depth)
      * (uCameraZ - z) / uCameraZ;
    vortexWidth = min(
      vortexWidth,
      arcSpacing * (1.0 - uVortexArcGap) * (uCameraZ - z) / uCameraZ
    );
    float heartWidth = min(uViewSize.x, uViewSize.y) * uHeartWordWidth;
    float vortexHeight = vortexWidth / aText.x;
    float heartHeight = heartWidth / aText.x;
    vortexHeight *= 1.0 + (1.0 - nearFade) * uNearScaleGrowth;
    float wordHeight = mix(vortexHeight, heartHeight, morph);

    vec4 viewCenter = viewMatrix * vec4(center, 1.0);
    vCameraDistance = -viewCenter.z;
    vec2 billboardOffset = position.xy * wordHeight;
    billboardOffset.x *= aText.x;
    float vortexRotation = angle + 1.57079632679;
    float tilt = mix(vortexRotation, aShape.z, morph);
    float cosineTilt = cos(tilt);
    float sineTilt = sin(tilt);
    billboardOffset = mat2(cosineTilt, sineTilt, -sineTilt, cosineTilt) * billboardOffset;
    viewCenter.xy += billboardOffset;

    vAtlasUv = aUvRect.xy + uv * aUvRect.zw;
    vColor = aColor;
    float backFade = mix(1.0, ${CONFIG.backWordOpacity.toFixed(2)}, smoothstep(0.0, 0.04, -center.z));
    vOpacity = mix(
      aShape.x * mix(uVortexFarOpacity, 1.0, depth),
      aShape.w * backFade,
      morph
    );
    vWordEnergy = mix(1.0, uHeartWordEnergy, morph);
    gl_Position = projectionMatrix * viewCenter;
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uAtlas;
  uniform float uNearEnd;
  uniform float uNearStart;
  uniform float uFarStart;
  uniform float uFarEnd;
  uniform float uMorph;
  varying vec2 vAtlasUv;
  varying vec3 vColor;
  varying float vOpacity;
  varying float vWordEnergy;
  varying float vCameraDistance;

  void main() {
    float glyphAlpha = texture2D(uAtlas, vAtlasUv).a;
    if (glyphAlpha < 0.015) discard;
    float fadeNear = smoothstep(uNearEnd, uNearStart, vCameraDistance);
    float fadeFar = smoothstep(uFarEnd, uFarStart, vCameraDistance);
    float vortexFade = fadeNear * fadeFar;
    float fade = mix(vortexFade, 1.0, smoothstep(0.0, 1.0, uMorph));
    gl_FragColor = vec4(vColor * vWordEnergy, glyphAlpha * vOpacity * fade);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function randomGenerator(seed = CONFIG.randomSeed) {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function heartOutlinePoint(angle) {
  return {
    x: 16 * Math.sin(angle) ** 3,
    y: 13 * Math.cos(angle)
      - 5 * Math.cos(2 * angle)
      - 2 * Math.cos(3 * angle)
      - Math.cos(4 * angle)
  };
}

function createHeartContourLookup(sampleCount = 4096) {
  const cumulativeLengths = new Float32Array(sampleCount + 1);
  let previousPoint = heartOutlinePoint(0);
  for (let sample = 1; sample <= sampleCount; sample += 1) {
    const point = heartOutlinePoint(sample / sampleCount * Math.PI * 2);
    cumulativeLengths[sample] = cumulativeLengths[sample - 1]
      + Math.hypot(point.x - previousPoint.x, point.y - previousPoint.y);
    previousPoint = point;
  }

  return {
    sampleCount,
    cumulativeLengths,
    perimeterLength: cumulativeLengths[sampleCount]
  };
}

function contourAngleAtFraction(fraction, lookup) {
  const normalizedFraction = ((fraction % 1) + 1) % 1;
  const targetLength = normalizedFraction * lookup.perimeterLength;
  let low = 0;
  let high = lookup.sampleCount;
  while (high - low > 1) {
    const middle = Math.floor((low + high) * 0.5);
    if (lookup.cumulativeLengths[middle] < targetLength) low = middle;
    else high = middle;
  }
  const segmentStart = lookup.cumulativeLengths[low];
  const segmentLength = lookup.cumulativeLengths[high] - segmentStart;
  const segmentProgress = segmentLength > 0
    ? (targetLength - segmentStart) / segmentLength
    : 0;
  return (low + segmentProgress) / lookup.sampleCount * Math.PI * 2;
}

function createLayout(count, aspects, rects, mobile) {
  const layouts = new Float32Array(count * 4);
  const shapes = new Float32Array(count * 4);
  const uvRects = new Float32Array(count * 4);
  const colors = new Float32Array(count * 3);
  const text = new Float32Array(count * 2);
  const random = randomGenerator();
  const vortexCount = CONFIG.vortexWordCount[mobile ? "mobile" : "desktop"];
  const ringCount = CONFIG.vortexRingCount[mobile ? "mobile" : "desktop"];
  const wordsPerRing = CONFIG.vortexWordsPerRing[mobile ? "mobile" : "desktop"];
  const ringSlots = new Uint16Array(ringCount);

  const contourCount = Math.round(count * CONFIG.heartContourRatio);
  const interiorCount = count - contourCount;
  const contourLookup = createHeartContourLookup();
  const innerRange = CONFIG.heartInnerScale[1] - CONFIG.heartInnerScale[0];
  const minOpacity = CONFIG.wordOpacity[0];
  const opacityRange = CONFIG.wordOpacity[1] - minOpacity;
  const pink = new THREE.Color(CONFIG.colors.pink);
  const lightPink = new THREE.Color(CONFIG.colors.lightPink);
  const color = new THREE.Color();
  for (let index = 0; index < count; index += 1) {
    const activeInVortex = index < vortexCount;
    const ring = activeInVortex
      ? Math.floor(index / wordsPerRing)
      : 0;
    const slot = activeInVortex
      ? ringSlots[ring]++
      : 0;
    const wordType = index % CONFIG.words.length;
    const dataOffset = index * 4;
    const shapeOffset = index * 4;
    const colorOffset = index * 3;
    const isContour = index < contourCount;
    const outlineT = isContour
      ? contourAngleAtFraction(
        (index + (random() - 0.5) * CONFIG.contourJitterRatio) / contourCount,
        contourLookup
      )
      : ((index - contourCount + 0.5) * 0.618033988749895 % 1) * Math.PI * 2;
    const interiorProgress = interiorCount > 0 ? (index - contourCount + 0.5) / interiorCount : 0;
    const radial = isContour
      ? 1 - random() * CONFIG.contourBandDepth
      : CONFIG.heartInnerScale[0] + Math.sqrt(interiorProgress) * innerRange;
    const vortexAngle = (slot / wordsPerRing) * Math.PI * 2;
    const opacity = minOpacity + random() * opacityRange;

    layouts[dataOffset] = ring;
    layouts[dataOffset + 1] = vortexAngle;
    layouts[dataOffset + 2] = outlineT;
    layouts[dataOffset + 3] = radial;
    shapes[shapeOffset] = activeInVortex ? 1 : 0;
    shapes[shapeOffset + 1] = random() - 0.5;
    shapes[shapeOffset + 2] = (random() - 0.5) * THREE.MathUtils.degToRad(CONFIG.heartTiltDegrees);
    shapes[shapeOffset + 3] = opacity;

    uvRects.set(rects[wordType], dataOffset);

    color.copy(pink).lerp(lightPink, 0.2 + random() * 0.48);
    colors[colorOffset] = color.r;
    colors[colorOffset + 1] = color.g;
    colors[colorOffset + 2] = color.b;
    text[index * 2] = aspects[wordType];
    text[index * 2 + 1] = 0;
  }

  return { layouts, shapes, uvRects, colors, text, ringCount, wordsPerRing };
}

export function createWords({ texture, aspects, rects, mobile }) {
  const count = mobile ? CONFIG.wordCount.mobile : CONFIG.wordCount.desktop;
  const layout = createLayout(count, aspects, rects, mobile);
  const geometry = new THREE.PlaneGeometry(1, 1);
  geometry.setAttribute("aLayout", new THREE.InstancedBufferAttribute(layout.layouts, 4));
  geometry.setAttribute("aShape", new THREE.InstancedBufferAttribute(layout.shapes, 4));
  geometry.setAttribute("aUvRect", new THREE.InstancedBufferAttribute(layout.uvRects, 4));
  geometry.setAttribute("aColor", new THREE.InstancedBufferAttribute(layout.colors, 3));
  geometry.setAttribute("aText", new THREE.InstancedBufferAttribute(layout.text, 2));

  const mobileWidth = CONFIG.mobileHeartWordWidth;
  const desktopWidth = CONFIG.desktopHeartWordWidth;
  const uniforms = {
    uAtlas: { value: texture },
    uTime: { value: 0 },
    uMorph: { value: 0 },
    uRingCount: { value: layout.ringCount },
    uWordsPerRing: { value: layout.wordsPerRing },
    uCameraZ: { value: CONFIG.cameraZ },
    uVortexNearZ: { value: CONFIG.vortexNearZ },
    uVortexFarZ: { value: CONFIG.vortexFarZ },
    uVortexSpeed: { value: CONFIG.vortexFlowSpeed },
    uVortexTwist: { value: CONFIG.vortexTwist },
    uVortexRotationSpeedRange: { value: new THREE.Vector2(...CONFIG.vortexRotationSpeedRange) },
    uVortexFarOpacity: { value: CONFIG.vortexFarOpacity },
    uNearEnd: { value: CONFIG.uNearEnd },
    uNearStart: { value: CONFIG.uNearStart },
    uFarStart: { value: CONFIG.uFarStart },
    uFarEnd: { value: CONFIG.uFarEnd },
    uNearScaleGrowth: { value: CONFIG.nearScaleGrowth },
    uInnerRadius: { value: CONFIG.vortexInnerRadius },
    uOuterRadius: { value: CONFIG.vortexOuterRadius },
    uVortexWordWidth: { value: new THREE.Vector2(...CONFIG.vortexWordWidth) },
    uVortexArcGap: { value: CONFIG.vortexArcGap },
    uHeartWordEnergy: { value: CONFIG.heartWordEnergy },
    uHeartScale: { value: 1 },
    uHeartDepth: { value: 1 },
    uHeartWordWidth: { value: mobile ? mobileWidth : desktopWidth },
    uHeartCenterY: { value: CONFIG.heartBounds.centerY },
    uPulse: { value: 1 },
    uViewSize: { value: new THREE.Vector2(1, 1) },
    uRotation: { value: new THREE.Vector2(0, 0) }
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.NormalBlending,
    toneMapped: false
  });
  const words = new THREE.InstancedMesh(geometry, material, count);
  words.count = count;
  words.frustumCulled = false;
  words.instanceMatrix.setUsage(THREE.StaticDrawUsage);
  let heartBlendEnabled = false;

  function setHeartBlending(enabled) {
    if (heartBlendEnabled === enabled) return;
    heartBlendEnabled = enabled;
    material.blending = enabled ? THREE.AdditiveBlending : THREE.NormalBlending;
    material.needsUpdate = true;
  }

  function update({ time, morph, rotationX, rotationY, pulse, viewSize }) {
    const u = material.uniforms;
    u.uTime.value = time;
    u.uMorph.value = morph;
    u.uPulse.value = pulse;
    u.uRotation.value.set(rotationX, rotationY);
    u.uViewSize.value.set(viewSize.width, viewSize.height);
    u.uHeartScale.value = Math.min(
      viewSize.width * CONFIG.heartWidthRatio / CONFIG.heartBounds.width,
      viewSize.height * CONFIG.heartHeightRatio / CONFIG.heartBounds.height
    );
    u.uHeartDepth.value = Math.min(viewSize.width, viewSize.height) * CONFIG.heartDepthRatio;
  }

  return { mesh: words, update, setHeartBlending, count };
}
