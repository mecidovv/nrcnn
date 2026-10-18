const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./three-postprocessing-41Yus7Dn.js","./three-BSUtGyAW.js"])))=>i.map(i=>d[i]);
import{o as Q,b as O,P as tt,p as et,q as X,r as ot,V as E,s as _,t as Z,u as D,v as at,I as W,S as rt,w as N,x as nt,y as it,A as G,B as st,z as lt,D as ut,E as ct,G as dt,J as ht,a as mt}from"./three-BSUtGyAW.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const t={words:["Səni sevirəm","Nurcan","Qamil ♥ Nurcan"],messages:["SENİ SƏVİRƏM NURCANMMMM","SEVİRƏMMM SƏNİ NURCANIMMM","ÇOOOOOX SEVİRƏMMM!!!"],colors:{background:"#05010a",pink:"#ff2e7e",lightPink:"#ff80ab",white:"#ffffff"},vortexSeconds:7,morphSeconds:3,messageDelaySeconds:3,vortexFlowSpeed:2.15,vortexTwist:.72,vortexRotationSpeedRange:[.16,.25],vortexInnerRadius:.3,vortexOuterRadius:.44,vortexWordsPerRing:{mobile:22,desktop:28},vortexRingCount:{mobile:10,desktop:10},vortexNearZ:-11,vortexFarZ:12,uNearEnd:22,uNearStart:30,uFarStart:36,uFarEnd:43,nearScaleGrowth:.12,vortexWordWidth:[.09,.13],vortexArcGap:.5,vortexFarOpacity:.42,wordCount:{mobile:600,desktop:1e3},vortexWordCount:{mobile:220,desktop:280},heartPulseSpeed:2.2,starTwinkleSpeed:.45,heartBounds:{width:32,height:29,centerY:2.538},heartWidthRatio:.6,heartHeightRatio:.46,heartDepthRatio:.035,heartContourRatio:.6,contourBandDepth:.18,heartInnerScale:[.2,.9],heartTiltDegrees:8,contourJitterRatio:.2,randomSeed:1729,mobileHeartWordWidth:.07,desktopHeartWordWidth:.05,wordOpacity:[.55,.75],heartWordEnergy:.42,backWordOpacity:.68,heartPulseRatio:.03,idleRotationSpeed:.16,dragSensitivity:.008,tiltSensitivity:.006,typingIntervalMs:68,messagePauseMs:1050,starCount:26,starSpread:{width:70,height:55},starSize:.075,starDepth:[-37,-12],starOpacity:.23,starOpacityAmplitude:.1,atlasTile:{width:512,height:128,fontSize:92,minimumFontSize:40},antialias:!1,maxPixelRatio:2,maxFrameDelta:.05,cameraZ:32,cameraFov:48,cameraNear:.1,cameraFar:180,desktopBloom:{strength:.32,radius:.35,threshold:.42}};function ft(){return window.matchMedia("(max-width: 700px)").matches||navigator.maxTouchPoints>0}const pt="modulepreload",vt=function(a,i){return new URL(a,i).href},B={},F=function(i,e,n){let o=Promise.resolve();if(e&&e.length>0){let l=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const s=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),c=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=l(e.map(u=>{if(u=vt(u,n),u in B)return;B[u]=!0;const h=u.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(!!n)for(let f=s.length-1;f>=0;f--){const v=s[f];if(v.href===u&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${m}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":pt,h||(p.as="script"),p.crossOrigin="",p.href=u,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((f,v)=>{p.addEventListener("load",f),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&r(s.reason);return i().catch(r)})};async function gt(a,i){const e=new Q;e.background=new O(t.colors.background);const n=new tt(t.cameraFov,1,t.cameraNear,t.cameraFar);n.position.set(0,0,t.cameraZ);const o=new et({canvas:a,antialias:t.antialias,powerPreference:"high-performance"});o.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio)),o.outputColorSpace=X,o.toneMapping=ot;let r=null;if(!i){const[u,h,m,w]=await Promise.all([F(()=>import("./three-postprocessing-41Yus7Dn.js").then(x=>x.E),__vite__mapDeps([0,1]),import.meta.url),F(()=>import("./three-postprocessing-41Yus7Dn.js").then(x=>x.R),__vite__mapDeps([0,1]),import.meta.url),F(()=>import("./three-postprocessing-41Yus7Dn.js").then(x=>x.U),__vite__mapDeps([0,1]),import.meta.url),F(()=>import("./three-postprocessing-41Yus7Dn.js").then(x=>x.O),__vite__mapDeps([0,1]),import.meta.url)]),{EffectComposer:p}=u,{RenderPass:f}=h,{UnrealBloomPass:v}=m,{OutputPass:R}=w;r=new p(o),r.addPass(new f(e,n));const M=new v(new E(window.innerWidth,window.innerHeight),t.desktopBloom.strength,t.desktopBloom.radius,t.desktopBloom.threshold);r.addPass(M),r.addPass(new R)}let l=1,s=1;function d(){const u=window.innerWidth,h=window.innerHeight;n.aspect=u/h,n.updateProjectionMatrix(),o.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio)),o.setSize(u,h,!1),r&&r.setSize(u,h),s=2*Math.tan(_.degToRad(n.fov/2))*n.position.z,l=s*n.aspect}function c(){r?r.render():o.render(e,n)}return d(),window.addEventListener("resize",d,{passive:!0}),window.addEventListener("orientationchange",d,{passive:!0}),{scene:e,camera:n,renderer:o,isMobile:i,getViewSize:()=>({width:l,height:s}),render:c}}function wt(a){const{width:i,height:e}=t.atlasTile,n=document.createElement("canvas"),o=Math.floor(2048/i),r=Math.ceil(t.words.length/o);n.width=Math.max(2048,o*i),n.height=Math.max(2048,r*e);const l=n.getContext("2d");if(!l)throw new Error("Yazı teksturası hazırlana bilmədi.");l.textAlign="center",l.textBaseline="alphabetic";const s=[],d=[],c=3;t.words.forEach((h,m)=>{const w=m%o*i,p=Math.floor(m/o)*e;let f=t.atlasTile.fontSize;for(l.font=`600 ${f}px Poppins`;l.measureText(h).width>i-32&&f>t.atlasTile.minimumFontSize;)f-=2,l.font=`600 ${f}px Poppins`;const v=l.measureText(h),R=p+(e+v.actualBoundingBoxAscent-v.actualBoundingBoxDescent)*.5,M=w+(i-v.width)/2-c,x=R-v.actualBoundingBoxAscent-c,S=v.width+c*2,y=v.actualBoundingBoxAscent+v.actualBoundingBoxDescent+c*2;l.fillStyle=t.colors.white,l.fillText(h,w+i*.5,R);const P=M/n.width,g=1-(x+y)/n.height,C=S/n.width,A=y/n.height;d.push([P,g,C,A]),s.push(S/y)});const u=new Z(n);return u.colorSpace=X,u.minFilter=D,u.magFilter=D,u.generateMipmaps=!1,u.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy()),{texture:u,aspects:s,rects:d}}const xt=`
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
    float backFade = mix(1.0, ${t.backWordOpacity.toFixed(2)}, smoothstep(0.0, 0.04, -center.z));
    vOpacity = mix(
      aShape.x * mix(uVortexFarOpacity, 1.0, depth),
      aShape.w * backFade,
      morph
    );
    vWordEnergy = mix(1.0, uHeartWordEnergy, morph);
    gl_Position = projectionMatrix * viewCenter;
  }
`,yt=`
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
`;function St(a=t.randomSeed){let i=a;return()=>(i=i*1664525+1013904223>>>0,i/4294967296)}function k(a){return{x:16*Math.sin(a)**3,y:13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a)}}function Rt(a=4096){const i=new Float32Array(a+1);let e=k(0);for(let n=1;n<=a;n+=1){const o=k(n/a*Math.PI*2);i[n]=i[n-1]+Math.hypot(o.x-e.x,o.y-e.y),e=o}return{sampleCount:a,cumulativeLengths:i,perimeterLength:i[a]}}function Mt(a,i){const n=(a%1+1)%1*i.perimeterLength;let o=0,r=i.sampleCount;for(;r-o>1;){const c=Math.floor((o+r)*.5);i.cumulativeLengths[c]<n?o=c:r=c}const l=i.cumulativeLengths[o],s=i.cumulativeLengths[r]-l,d=s>0?(n-l)/s:0;return(o+d)/i.sampleCount*Math.PI*2}function Pt(a,i,e,n){const o=new Float32Array(a*4),r=new Float32Array(a*4),l=new Float32Array(a*4),s=new Float32Array(a*3),d=new Float32Array(a*2),c=St(),u=t.vortexWordCount[n?"mobile":"desktop"],h=t.vortexRingCount[n?"mobile":"desktop"],m=t.vortexWordsPerRing[n?"mobile":"desktop"],w=new Uint16Array(h),p=Math.round(a*t.heartContourRatio),f=a-p,v=Rt(),R=t.heartInnerScale[1]-t.heartInnerScale[0],M=t.wordOpacity[0],x=t.wordOpacity[1]-M,S=new O(t.colors.pink),y=new O(t.colors.lightPink),P=new O;for(let g=0;g<a;g+=1){const C=g<u,A=C?Math.floor(g/m):0,U=C?w[A]++:0,z=g%t.words.length,b=g*4,H=g*4,V=g*3,L=g<p,q=L?Mt((g+(c()-.5)*t.contourJitterRatio)/p,v):(g-p+.5)*.618033988749895%1*Math.PI*2,j=f>0?(g-p+.5)/f:0,$=L?1-c()*t.contourBandDepth:t.heartInnerScale[0]+Math.sqrt(j)*R,J=U/m*Math.PI*2,K=M+c()*x;o[b]=A,o[b+1]=J,o[b+2]=q,o[b+3]=$,r[H]=C?1:0,r[H+1]=c()-.5,r[H+2]=(c()-.5)*_.degToRad(t.heartTiltDegrees),r[H+3]=K,l.set(e[z],b),P.copy(S).lerp(y,.2+c()*.48),s[V]=P.r,s[V+1]=P.g,s[V+2]=P.b,d[g*2]=i[z],d[g*2+1]=0}return{layouts:o,shapes:r,uvRects:l,colors:s,text:d,ringCount:h,wordsPerRing:m}}function Ct({texture:a,aspects:i,rects:e,mobile:n}){const o=n?t.wordCount.mobile:t.wordCount.desktop,r=Pt(o,i,e,n),l=new at(1,1);l.setAttribute("aLayout",new W(r.layouts,4)),l.setAttribute("aShape",new W(r.shapes,4)),l.setAttribute("aUvRect",new W(r.uvRects,4)),l.setAttribute("aColor",new W(r.colors,3)),l.setAttribute("aText",new W(r.text,2));const s=t.mobileHeartWordWidth,d=t.desktopHeartWordWidth,c={uAtlas:{value:a},uTime:{value:0},uMorph:{value:0},uRingCount:{value:r.ringCount},uWordsPerRing:{value:r.wordsPerRing},uCameraZ:{value:t.cameraZ},uVortexNearZ:{value:t.vortexNearZ},uVortexFarZ:{value:t.vortexFarZ},uVortexSpeed:{value:t.vortexFlowSpeed},uVortexTwist:{value:t.vortexTwist},uVortexRotationSpeedRange:{value:new E(...t.vortexRotationSpeedRange)},uVortexFarOpacity:{value:t.vortexFarOpacity},uNearEnd:{value:t.uNearEnd},uNearStart:{value:t.uNearStart},uFarStart:{value:t.uFarStart},uFarEnd:{value:t.uFarEnd},uNearScaleGrowth:{value:t.nearScaleGrowth},uInnerRadius:{value:t.vortexInnerRadius},uOuterRadius:{value:t.vortexOuterRadius},uVortexWordWidth:{value:new E(...t.vortexWordWidth)},uVortexArcGap:{value:t.vortexArcGap},uHeartWordEnergy:{value:t.heartWordEnergy},uHeartScale:{value:1},uHeartDepth:{value:1},uHeartWordWidth:{value:n?s:d},uHeartCenterY:{value:t.heartBounds.centerY},uPulse:{value:1},uViewSize:{value:new E(1,1)},uRotation:{value:new E(0,0)}},u=new rt({uniforms:c,vertexShader:xt,fragmentShader:yt,transparent:!0,depthWrite:!1,depthTest:!0,blending:N,toneMapped:!1}),h=new nt(l,u,o);h.count=o,h.frustumCulled=!1,h.instanceMatrix.setUsage(it);let m=!1;function w(f){m!==f&&(m=f,u.blending=f?G:N,u.needsUpdate=!0)}function p({time:f,morph:v,rotationX:R,rotationY:M,pulse:x,viewSize:S}){const y=u.uniforms;y.uTime.value=f,y.uMorph.value=v,y.uPulse.value=x,y.uRotation.value.set(R,M),y.uViewSize.value.set(S.width,S.height),y.uHeartScale.value=Math.min(S.width*t.heartWidthRatio/t.heartBounds.width,S.height*t.heartHeightRatio/t.heartBounds.height),y.uHeartDepth.value=Math.min(S.width,S.height)*t.heartDepthRatio}return{mesh:h,update:p,setHeartBlending:w,count:o}}function bt(a,i=()=>{}){const e={down:!1,x:0,y:0,time:0,velocityX:0,velocityY:0,rotationX:0,rotationY:0,draggedThisGesture:!1};function n(s){e.down=!0,e.x=s.clientX,e.y=s.clientY,e.time=performance.now(),e.velocityX=0,e.velocityY=0,e.draggedThisGesture=!1,a.setPointerCapture(s.pointerId)}function o(s){if(!e.down)return;const d=performance.now(),c=s.clientX-e.x,u=s.clientY-e.y;!e.draggedThisGesture&&Math.hypot(c,u)>1&&(e.draggedThisGesture=!0,i());const h=Math.max((d-e.time)/1e3,.008);e.rotationY+=c*t.dragSensitivity,e.rotationX=Math.max(-.85,Math.min(.85,e.rotationX+u*t.tiltSensitivity)),e.velocityY=Math.max(-5,Math.min(5,c*t.dragSensitivity/h)),e.velocityX=Math.max(-3,Math.min(3,u*t.tiltSensitivity/h)),e.x=s.clientX,e.y=s.clientY,e.time=d}function r(){e.down=!1}a.addEventListener("pointerdown",n),a.addEventListener("pointermove",o),a.addEventListener("pointerup",r),a.addEventListener("pointercancel",r),a.addEventListener("lostpointercapture",r);function l(s,d){return d&&!e.down&&(e.rotationY+=(t.idleRotationSpeed+e.velocityY)*s,e.rotationX+=e.velocityX*s,e.velocityY*=Math.exp(-2.3*s),e.velocityX*=Math.exp(-2.3*s),e.rotationX=Math.max(-.85,Math.min(.85,e.rotationX))),{rotationX:e.rotationX,rotationY:e.rotationY}}return{update:l}}function Wt(){const a=document.querySelector("#typing-message"),i=document.querySelector("#final-message"),e=document.querySelector("#final-submessage"),n=document.querySelector("#drag-hint");function o(){n.classList.add("visible")}function r(){n.classList.remove("visible")}function l(c){const u=Array.from(c);return a.textContent="",new Promise(h=>{let m=0;const w=window.setInterval(()=>{m+=1,a.textContent=u.slice(0,m).join(""),m>=u.length&&(window.clearInterval(w),window.setTimeout(h,t.messagePauseMs))},t.typingIntervalMs)})}async function s(){for(const c of t.messages)await l(c);a.textContent="",i.classList.add("visible"),e.classList.add("visible")}function d(){a.textContent="Animasiya yüklənə bilmədi."}return{showHint:o,hideHint:r,startMessages:s,showError:d}}const Y=document.querySelector("#scene"),T=Wt(),I=ft();function Et(a){const i=new Float32Array(t.starCount*3);for(let r=0;r<t.starCount;r+=1)i[r*3]=(Math.random()-.5)*t.starSpread.width,i[r*3+1]=(Math.random()-.5)*t.starSpread.height,i[r*3+2]=t.starDepth[0]+Math.random()*(t.starDepth[1]-t.starDepth[0]);const e=new st;e.setAttribute("position",new lt(i,3));const n=new ut({color:t.colors.lightPink,size:t.starSize,transparent:!0,opacity:.3,sizeAttenuation:!0,depthWrite:!1}),o=new ct(e,n);return a.add(o),o}function At(a){const i=document.createElement("canvas");i.width=128,i.height=128;const e=i.getContext("2d");if(!e)throw new Error("Mərkəzi işıq hazırlana bilmədi.");const n=e.createRadialGradient(64,64,2,64,64,64);n.addColorStop(0,"rgba(255,255,255,0.75)"),n.addColorStop(.12,"rgba(255,128,171,0.5)"),n.addColorStop(.38,"rgba(255,46,126,0.2)"),n.addColorStop(1,"rgba(255,46,126,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);const o=new dt(new ht({map:new Z(i),transparent:!0,opacity:0,blending:G,depthWrite:!1,toneMapped:!1}));return o.renderOrder=3,a.add(o),o}async function Ht(){await document.fonts.load(`600 ${t.atlasTile.fontSize}px Poppins`);const a=await gt(Y,I),i=wt(a.renderer),e=Ct({...i,mobile:I});a.scene.add(e.mesh);const n=Et(a.scene),o=At(a.scene),r=bt(Y,T.hideHint),l=new mt;let s=0,d=0,c=!1,u=!1;function h(){const m=Math.min(l.getDelta(),t.maxFrameDelta);s+=m,s>=t.vortexSeconds&&(d=Math.min((s-t.vortexSeconds)/t.morphSeconds,1)),c=d>=1,e.setHeartBlending(c),c&&!u&&(u=!0,T.showHint(),window.setTimeout(()=>void T.startMessages(),t.messageDelaySeconds*1e3));const w=r.update(m,c),p=c?1+Math.sin(s*t.heartPulseSpeed)*t.heartPulseRatio:1;e.update({time:s,morph:d,rotationX:w.rotationX,rotationY:w.rotationY,pulse:p,viewSize:a.getViewSize()});const f=a.getViewSize();o.position.set(0,0,0),o.scale.setScalar(Math.min(f.width,f.height)*.38*p),o.material.opacity=d*.5,n.material.opacity=t.starOpacity+Math.sin(s*t.starTwinkleSpeed)*t.starOpacityAmplitude,a.render(),requestAnimationFrame(h)}requestAnimationFrame(h)}Ht().catch(a=>{console.error("Animasiya başladılmadı:",a),T.showError()});
