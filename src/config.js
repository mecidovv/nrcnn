export const CONFIG = {
  // Burulğan tunelində növbə ilə görünən yazılar.
  words: ["Səni sevirəm", "Nurcan", "Qamil ♥ Nurcan"],
  // Ürək formalaşandan sonra hərf-hərf görünən mesajlar.
  messages: [
    "SENİ SƏVİRƏM NURCANMMMM",
    "SEVİRƏMMM SƏNİ NURCANIMMM",
    "ÇOOOOOX SEVİRƏMMM!!!"
  ],
  // Səhnə və yazılar üçün istifadə olunan rəng palitrası.
  colors: {
    background: "#05010a",
    pink: "#ff2e7e",
    lightPink: "#ff80ab",
    white: "#ffffff"
  },
  // Ürək mərhələsinin başlandığı vaxt, saniyə ilə.
  vortexSeconds: 7,
  // Burulğandan ürəyə keçidin müddəti, saniyə ilə.
  morphSeconds: 3,
  // Ürək tam göründükdən sonra mesajların başlamasına qədərki fasilə.
  messageDelaySeconds: 3,
  // Burulğan boyunca yazıların irəli axma sürəti.
  vortexFlowSpeed: 2.15,
  // Tuneldə halqalar arasındakı burulma bucağı, radianla.
  vortexTwist: 0.72,
  // Halqaların tam dövrəsi 25-40 saniyə aralığında tamamlanır.
  vortexRotationSpeedRange: [0.16, 0.25],
  // Tunelin daxili radiusunun görünən ekranın minimum ölçüsünə nisbəti.
  vortexInnerRadius: 0.3,
  // Tunelin xarici radiusunun görünən ekranın minimum ölçüsünə nisbəti.
  vortexOuterRadius: 0.44,
  // Burulğanın hər halqasında yerləşdirilən bərabər aralıqlı söz sayı.
  vortexWordsPerRing: {
    mobile: 22,
    desktop: 28
  },
  // Burulğan üçün mobil və kompüter ekranlarında aktiv halqaların sayı.
  vortexRingCount: {
    mobile: 10,
    desktop: 10
  },
  // Burulğan tunelinin yaxın və uzaq uclarının kamera koordinatları.
  vortexNearZ: -11,
  vortexFarZ: 12,
  // Yaxın kameraya keçiddə soldurmanın tam bitdiyi baxış məsafəsi.
  uNearEnd: 22,
  // Yaxın soldurmanın başladığı məsafə; 8 vahidlik keçid təxminən 1.6 san çəkir.
  uNearStart: 30,
  // Tunelin uzaq ucunda yazıların yenidən yarana başladığı kamera məsafəsi.
  uFarStart: 36,
  // Tunelin uzaq ucunda soldurmanın tam bitdiyi kamera məsafəsi.
  uFarEnd: 43,
  // Yaxınlaşan yazıların solma zamanı böyüyə biləcəyi maksimum pay.
  nearScaleGrowth: 0.12,
  // Burulğandakı sözlərin eninin ekran eninə nisbət sərhədləri.
  vortexWordWidth: [0.09, 0.13],
  // Tuneldə sözlərin qonşu sözlərlə arasında saxlanılan minimum açıq pay.
  vortexArcGap: 0.5,
  // Tunelin uzaq qatlarındakı sözlərin minimum görünən şəffaflığı.
  vortexFarOpacity: 0.42,
  // Mobil və kompüter üçün instansiya sayı.
  wordCount: {
    mobile: 600,
    desktop: 1000
  },
  // Yalnız burulğanda görünən sözlərin sayı: 10*22 və 10*28.
  vortexWordCount: {
    mobile: 220,
    desktop: 280
  },
  // Ürək nəbzinin və ulduzların parıldamasının tezlikləri.
  heartPulseSpeed: 2.2,
  starTwinkleSpeed: 0.45,
  // Ürək düsturunun x/y sərhədləri və şaquli mərkəzinin düzəlişi.
  heartBounds: {
    width: 32,
    height: 29,
    centerY: 2.538
  },
  // Ürəyin eninin ekrana nisbəti; hündürlüyə sığmaq üçün də məhdudlaşdırılır.
  heartWidthRatio: 0.6,
  // Ürəyin hündürlüyünün görünən ekran hündürlüyünə nisbəti.
  heartHeightRatio: 0.46,
  // Ürəyin qalınlığı; görünən enin kiçik hissəsidir.
  heartDepthRatio: 0.035,
  // Ürəyin xarici konturuna ayrılan sözlərin payı.
  heartContourRatio: 0.6,
  // Paralel kontur izlərinin ürək kənarına nisbətən dərinliyi.
  contourBandDepth: 0.18,
  // Konturdan içəri yerləşdirilən sözlər üçün radial miqyas sərhədləri.
  heartInnerScale: [0.2, 0.9],
  // Sözlərin ürək mərhələsindəki fırlanma bucağının maksimum həddi.
  heartTiltDegrees: 8,
  // Kontur sözlərinin bərabər addımdan maksimum təsadüfi yayınma payı.
  contourJitterRatio: 0.2,
  // Proqramlı mövqelər üçün sabit təsadüfi ədəd toxumu.
  randomSeed: 1729,
  // Ürəkdə sözün eninin mobildə görünən enə nisbəti.
  mobileHeartWordWidth: 0.07,
  // Ürəkdə sözün eninin kompüterdə görünən enə nisbəti.
  desktopHeartWordWidth: 0.05,
  // Ürəkdə söz başına istifadə edilən şəffaflıq aralığı.
  wordOpacity: [0.55, 0.75],
  // Additive qarışmada ürək yazılarının oxunaqlı qalmasını təmin edən işıq gücü.
  heartWordEnergy: 0.42,
  // Ürəyin arxa qatlarının şəffaflıq əmsalı.
  backWordOpacity: 0.68,
  // Ürəyin nəbzi zamanı istifadə edilən miqyas amplitudası.
  heartPulseRatio: 0.03,
  // Ürəkdə sürüşdürmə olmayanda davam edən yavaş fırlanma.
  idleRotationSpeed: 0.16,
  // Sürüşdürmənin üfüqi və şaquli həssaslığı.
  dragSensitivity: 0.008,
  tiltSensitivity: 0.006,
  // Ətalətin zamanla sönmə sürəti.
  inertiaDamping: 2.3,
  // Ürəkdə hərf-yazma animasiyasının hərf arası intervalı, millisanıyə ilə.
  typingIntervalMs: 68,
  // Mesaj tam yazıldıqdan sonrakı fasilə, millisanıyə ilə.
  messagePauseMs: 1050,
  // Hissəcik fonunda istifadə edilən ulduzların sayı.
  starCount: 26,
  // Ulduzların səhnədə en və hündürlük üzrə yayılma sahəsi.
  starSpread: {
    width: 70,
    height: 55
  },
  // Ulduz nöqtələrinin ölçüsü və fon dərinliyinin sərhədləri.
  starSize: 0.075,
  starDepth: [-37, -12],
  // Ulduzların baza şəffaflığı və parıltı amplitudası.
  starOpacity: 0.23,
  starOpacityAmplitude: 0.1,
  // Söz atlasının panel ölçüsü və Poppins şriftinin başlanğıc ölçüsü.
  atlasTile: {
    width: 512,
    height: 128,
    fontSize: 92,
    minimumFontSize: 40
  },
  // Bloom-dan başqa mətn teksturalarına tətbiq olunmayan renderer parametrləri.
  antialias: false,
  // Renderer üçün cihaz piksel nisbətinin yuxarı həddi.
  maxPixelRatio: 2,
  // Uzun kadrdan sonra simulyasiya addımının yuxarı həddi, saniyə ilə.
  maxFrameDelta: 0.05,
  // Vortex/ürək shader-də istifadə olunan kamera məsafəsi və sahə bucağı.
  cameraZ: 32,
  // Perspektiv kameranın şaquli baxış bucağı, dərəcə ilə.
  cameraFov: 48,
  // Kamera üçün görünən ən yaxın məsafə.
  cameraNear: 0.1,
  // Kamera üçün görünən ən uzaq məsafə.
  cameraFar: 180,
  // Kompüterdə UnrealBloomPass gücü; telefonda bloom söndürülür.
  desktopBloom: {
    strength: 0.32,
    radius: 0.35,
    threshold: 0.42
  }
};

export function isMobileDevice() {
  return window.matchMedia("(max-width: 700px)").matches || navigator.maxTouchPoints > 0;
}
