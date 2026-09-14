// DATA STRUCTURES
const OATH_DATA = [
  {
    kanji: "人格完成に努むること",
    romaji: "Jinkaku kansei ni tsutomuru koto",
    meaning: "Berusaha menyempurnakan kepribadian",
    keywords: [
      "Jinkaku = Karakter",
      "Kansei = Penyempurnaan",
      "Tsutomuru = Berusaha",
    ],
  },
  {
    kanji: "誠の道を守ること",
    romaji: "Makoto no michi wo mamoru koto",
    meaning: "Menjaga jalan kebenaran dan kejujuran",
    keywords: ["Makoto = Kejujuran", "Michi = Jalan", "Mamoru = Menjaga"],
  },
  {
    kanji: "努力の精神を養うこと",
    romaji: "Doryoku no seishin wo yashinau koto",
    meaning: "Membina semangat pantang menyerah",
    keywords: [
      "Doryoku = Usaha keras",
      "Seishin = Semangat",
      "Yashinau = Membina",
    ],
  },
  {
    kanji: "礼儀を重んずること",
    romaji: "Reigi wo omonzuru koto",
    meaning: "Menghormati adab kesopanan di atas segalanya",
    keywords: ["Reigi = Kesopanan", "Omonzuru = Menghormati"],
  },
  {
    kanji: "血気の勇を戒むること",
    romaji: "Kekki no yū wo imashimuru koto",
    meaning: "Menahan diri dari tindakan kekerasan",
    keywords: ["Kekki = Emosi/Darah muda", "Imashimuru = Menahan diri"],
  },
];

const HISTORY_DATA = [
  {
    year: "1930",
    title: "Chojun Miyagi mendirikan Goju-Ryu",
    desc: 'Prinsip "Go" (keras) dan "Ju" (lembut) ditetapkan di Okinawa.',
  },
  {
    year: "1950",
    title: "Gogen Yamaguchi memperluas Gojukai",
    desc: 'Dikenal sebagai "The Cat", Yamaguchi membawa Gojukai ke Tokyo.',
  },
  {
    year: "1965",
    title: "IKGA Resmi Dibentuk",
    desc: "International Karate-Do Gojukai Association didirikan sebagai wadah global.",
  },
  {
    year: "2021",
    title: "Gojukai Banda Aceh Berdiri",
    desc: "Dojo pertama didirikan di SMK Cut Mutia, Peuniti, Banda Aceh.",
  },
];

const BELT_DATA = [
  {
    name: "Sabuk Putih",
    jp: "白帯",
    rank: "Mukyu",
    color: "#FFFFFF",
    syllabus: [
      { tech: "Sanchin Kata", type: "Kata" },
      { tech: "Kihon tsuki & uke", type: "Kihon" },
      { tech: "Sanchin-dachi", type: "Stance" },
    ],
  },
  {
    name: "Sabuk Kuning",
    jp: "黄帯",
    rank: "10th Kyu",
    color: "#F5C518",
    syllabus: [
      { tech: "Gekisai Dai Ichi", type: "Kata" },
      { tech: "Zenkutsu-dachi", type: "Stance" },
      { tech: "Oi-zuki & Gyaku-zuki", type: "Kihon" },
    ],
  },
  {
    name: "Sabuk Oranye",
    jp: "橙帯",
    rank: "9th Kyu",
    color: "#E8780A",
    syllabus: [
      { tech: "Saifa", type: "Kata" },
      { tech: "Mae-geri & Yoko-geri", type: "Kihon" },
      { tech: "Sanbon Kumite", type: "Kumite" },
    ],
  },
  {
    name: "Sabuk Hijau",
    jp: "緑帯",
    rank: "8th-7th Kyu",
    color: "#2E8B2E",
    syllabus: [
      { tech: "Seiyunchin", type: "Kata" },
      { tech: "Ippon Kumite", type: "Kumite" },
      { tech: "Mawashi-geri", type: "Kihon" },
    ],
  },
  {
    name: "Sabuk Biru",
    jp: "青帯",
    rank: "6th-5th Kyu",
    color: "#2563EB",
    syllabus: [
      { tech: "Sanseru", type: "Kata" },
      { tech: "Jiyu Ippon Kumite", type: "Kumite" },
      { tech: "Bunkai Oyo", type: "Bunkai" },
    ],
  },
  {
    name: "Sabuk Cokelat",
    jp: "茶帯",
    rank: "4th-1st Kyu",
    color: "#8B5E3C",
    syllabus: [
      { tech: "Seisan", type: "Kata" },
      { tech: "Jiyu Kumite", type: "Kumite" },
      { tech: "Renraku Waza", type: "Kihon" },
    ],
  },
  {
    name: "Sabuk Hitam",
    jp: "黒帯",
    rank: "1st Dan+",
    color: "#1A1A1A",
    syllabus: [
      { tech: "Suparinpei", type: "Kata" },
      { tech: "Instruktur & Evaluasi", type: "Pengajaran" },
      { tech: "Bunkai Lanjutan", type: "Bunkai" },
    ],
  },
];

const KEJURDA_ACEH_2025_PHOTOS = [
  "public/achievements/kejurda_forki_aceh_2025/alif_gold.webp",
  "public/achievements/kejurda_forki_aceh_2025/adeeva_gold.webp",
  "public/achievements/kejurda_forki_aceh_2025/albee_gold.webp",
  "public/achievements/kejurda_forki_aceh_2025/ammar_gold.webp",
  "public/achievements/kejurda_forki_aceh_2025/sjatha_gold.webp",
  "public/achievements/kejurda_forki_aceh_2025/wafda_gold.webp",
  "public/achievements/kejurda_forki_aceh_2025/yusuf_gold.webp",
  "public/achievements/kejurda_forki_aceh_2025/fahira_silver.webp",
  "public/achievements/kejurda_forki_aceh_2025/khansa_silver.webp",
  "public/achievements/kejurda_forki_aceh_2025/nura_silver.webp",
  "public/achievements/kejurda_forki_aceh_2025/raffa_silver.webp",
  "public/achievements/kejurda_forki_aceh_2025/rasya_silver.webp",
  "public/achievements/kejurda_forki_aceh_2025/zyan_silver.webp",
];

const ACHIEVEMENT_DATA = [
  {
    id: 1,
    eventName: "POMDA XIX Universitas Teuku Umar",
    category: "Kumite",
    year: "2025",
    awardLevel: "Juara 1",
    athleteName: "Amel",
    fullAward: "Medali Emas Kumite -61 Kg Putri",
    image: "public/achievements/prestasi_amel.webp",
    eventPhotos: [
      "public/achievements/prestasi_amel.webp",
    ],
  },
  {
    id: 2,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Open",
    year: "2025",
    awardLevel: "Juara 1",
    athleteName: "Alif",
    fullAward: "Medali Emas Kumite Open Usia Dini +30 Kg Putra",
    image: "public/achievements/kejurda_forki_aceh_2025/alif_gold.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 3,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 1",
    athleteName: "Adeeva",
    fullAward: "Medali Emas Kumite Festival Usia Dini Putri",
    image: "public/achievements/kejurda_forki_aceh_2025/adeeva_gold.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 4,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 1",
    athleteName: "Albee",
    fullAward: "Medali Emas Kumite Festival Usia Dini Putra",
    image: "public/achievements/kejurda_forki_aceh_2025/albee_gold.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 5,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 1",
    athleteName: "Ammar",
    fullAward: "Medali Emas Kumite Festival Usia Dini Putra",
    image: "public/achievements/kejurda_forki_aceh_2025/ammar_gold.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 6,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 1",
    athleteName: "Sjatha",
    fullAward: "Medali Emas Kumite Festival Pra Pemula Putra",
    image: "public/achievements/kejurda_forki_aceh_2025/sjatha_gold.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 7,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 1",
    athleteName: "Wafda",
    fullAward: "Medali Emas Kumite Festival Usia Dini Putra",
    image: "public/achievements/kejurda_forki_aceh_2025/wafda_gold.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 8,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 1",
    athleteName: "Yusuf",
    fullAward: "Medali Emas Kumite Festival Usia Dini Putra",
    image: "public/achievements/kejurda_forki_aceh_2025/yusuf_gold.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 9,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 2",
    athleteName: "Fahira",
    fullAward: "Medali Perak Kumite Festival Usia Dini Putri",
    image: "public/achievements/kejurda_forki_aceh_2025/fahira_silver.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 10,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 2",
    athleteName: "Khansa",
    fullAward: "Medali Perak Kumite Festival Usia Dini Putri",
    image: "public/achievements/kejurda_forki_aceh_2025/khansa_silver.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 11,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 2",
    athleteName: "Nura",
    fullAward: "Medali Perak Kumite Festival Pemula Putri",
    image: "public/achievements/kejurda_forki_aceh_2025/nura_silver.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 12,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 2",
    athleteName: "Raffa",
    fullAward: "Medali Perak Kumite Festival Usia Dini Putra",
    image: "public/achievements/kejurda_forki_aceh_2025/raffa_silver.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 13,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 2",
    athleteName: "Rasya",
    fullAward: "Medali Perak Kumite Festival Usia Dini Putra",
    image: "public/achievements/kejurda_forki_aceh_2025/rasya_silver.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
  {
    id: 14,
    eventName: "Kejurda FORKI Aceh Open Karate Championship 2025",
    category: "Kumite Festival",
    year: "2025",
    awardLevel: "Juara 2",
    athleteName: "Zyan",
    fullAward: "Medali Perak Kumite Festival Usia Dini Putra",
    image: "public/achievements/kejurda_forki_aceh_2025/zyan_silver.webp",
    eventPhotos: KEJURDA_ACEH_2025_PHOTOS,
  },
];

// GLOBAL VARIABLES
let lenis = null;
let audioCtx = null;
let isAudioEnabled = false;
let isCustomCursorEnabled = true;
let claimedPassCode = null;
let quizAnswers = { step1: "", step2: "", step3: "" };
let currentLightboxIndex = 0;
let lightboxImages = [];
let currentAchievementIndex = 0;
let achievementRotationInterval = null;
let achievementProgressInterval = null;
let isAchievementPaused = false;
const isMobilePerformanceMode = window.matchMedia(
  "(max-width: 1024px), (pointer: coarse)",
).matches;

// UTILITIES & SECURITY FUNCTIONS
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`/g, "&#96;")
    .replace(/\//g, "&#x2F;");
}

function safeOpenUrl(url) {
  if (!url || typeof url !== "string") return;
  var cleanUrl = url.trim();

  // Block dangerous protocol executions (XSS via pseudo-protocols)
  if (/^(javascript|data|vbscript|file):/i.test(cleanUrl)) {
    console.warn("[Security] Blocked dangerous protocol URI:", cleanUrl);
    return;
  }

  // Validate allowed protocols and safe external destinations
  var isAllowedTarget =
    /^https:\/\/(api\.whatsapp\.com|wa\.me|calendar\.google\.com|www\.instagram\.com|instagram\.com|maps\.google\.com|www\.google\.com)\//i.test(cleanUrl) ||
    /^(mailto:|tel:)/i.test(cleanUrl) ||
    cleanUrl.startsWith("https://") ||
    cleanUrl.startsWith("#");

  if (!isAllowedTarget) {
    console.warn("[Security] Blocked untrusted URL destination:", cleanUrl);
    return;
  }

  var w = window.open(cleanUrl, "_blank", "noopener,noreferrer");
  if (w) {
    try {
      w.opener = null;
    } catch (e) {}
  }
}

function dismissSplash() {
  var splash = document.getElementById("splash");
  if (splash && !splash.classList.contains("hidden")) {
    splash.classList.add("hidden");
    setTimeout(function () {
      splash.style.display = "none";
    }, 400);
  }
  if (typeof window.dismissSplashSafely === "function") {
    window.dismissSplashSafely();
  }
}

// LENIS SMOOTH SCROLL INITIALIZATION
function initLenis() {
  if (isMobilePerformanceMode) return;
  if (typeof Lenis !== "undefined") {
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        smoothTouch: false,
      });

      if (typeof ScrollTrigger !== "undefined") {
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    } catch (e) {
      console.warn("Lenis initialization skipped:", e);
    }
  }
}

// AUDIO SYSTEM
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSound(type) {
  if (!isAudioEnabled || !audioCtx) return;
  var osc = audioCtx.createOscillator();
  var gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  var now = audioCtx.currentTime;
  if (type === "click") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.start(now);
    osc.stop(now + 0.05);
  } else if (type === "chime") {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.08);
    osc.frequency.setValueAtTime(783.99, now + 0.16);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.start(now);
    osc.stop(now + 0.5);
  }
}

// CUSTOM CURSOR SYSTEM
function initCustomCursor() {
  var cursorBtn = document.getElementById("cursorBtn");
  if (cursorBtn) {
    cursorBtn.classList.toggle("is-active", isCustomCursorEnabled);
  }

  // Audio click on interactive hover
  document
    .querySelectorAll(
      "a, button, .tilt-card, .belt-card-btn, .faq-item, .quiz-option-btn, .hero-slide-dot",
    )
    .forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        if (!isCustomCursorEnabled) return;
        playSound("click");
      });
    });
}

function toggleCustomCursor() {
  isCustomCursorEnabled = !isCustomCursorEnabled;
  document.body.classList.toggle("native-cursor", !isCustomCursorEnabled);
  var cursorBtn = document.getElementById("cursorBtn");
  var dot = document.getElementById("cursorDot");
  var ring = document.getElementById("cursorRing");

  if (cursorBtn) {
    cursorBtn.classList.toggle("is-active", isCustomCursorEnabled);
  }

  if (dot && ring) {
    if (isCustomCursorEnabled) {
      dot.style.display = "";
      ring.style.display = "";
    } else {
      dot.style.display = "none";
      ring.style.display = "none";
    }
  }
}

// MAGNETIC BUTTONS
function initMagneticButtons() {
  if (!isMobilePerformanceMode && window.innerWidth > 1024) {
    document.querySelectorAll(".magnetic-btn").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - (rect.left + rect.width / 2);
        var y = e.clientY - (rect.top + rect.height / 2);
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0px, 0px)";
      });
    });
  }
}

// KIAI SHOCKWAVE EFFECT
function initKiaiShockwave() {
  if (isMobilePerformanceMode) return;
  document.addEventListener("click", function (e) {
    var target = e.target.closest(
      ".cta, .magnetic-btn, .tilt-card, .belt-card-btn, .quiz-option-btn",
    );
    if (target) {
      var ripple = document.createElement("div");
      ripple.className = "kiai-shockwave";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    }
  });
}

// TEXT SCRAMBLE EFFECT
const JAPANESE_CHARS = [
  "剛",
  "柔",
  "会",
  "空",
  "手",
  "道",
  "気",
  "勝",
  "魂",
  "忍",
  "武",
  "士",
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
];

function triggerScramble(el) {
  var originalText = el.getAttribute("data-original-text") || el.innerText;
  el.setAttribute("data-original-text", originalText);
  if (el.isScrambling) return;
  el.isScrambling = true;

  var iteration = 0;
  var totalSteps = originalText.length * 3;

  var interval = setInterval(() => {
    el.innerText = originalText
      .split("")
      .map((char, index) => {
        if (char === " " || char === "·") return char;
        if (index < Math.floor(iteration / 3)) {
          return originalText[index];
        }
        return JAPANESE_CHARS[
          Math.floor(Math.random() * JAPANESE_CHARS.length)
        ];
      })
      .join("");

    iteration += 1;

    if (iteration >= totalSteps) {
      clearInterval(interval);
      el.innerText = originalText;
      el.isScrambling = false;
    }
  }, 40);
}

function initScrambleEffects() {
  document.querySelectorAll("[data-scramble]").forEach((el) => {
    el.addEventListener("mouseenter", () => triggerScramble(el));
  });
}

// TILT CARD EFFECT
function initTiltCards() {
  if (isMobilePerformanceMode) return;
  document.querySelectorAll(".tilt-card").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      var rotX = (-y / (rect.height / 2)) * 8;
      var rotY = (x / (rect.width / 2)) * 8;
      card.style.transform =
        "perspective(1000px) rotateX(" +
        rotX +
        "deg) rotateY(" +
        rotY +
        "deg) scale3d(1.02,1.02,1.02)";
    });
    card.addEventListener("mouseleave", function () {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    });
  });
}

// COUNTDOWN TIMER
function updateClassCountdown() {
  var now = new Date();
  var nextClass = new Date(now);
  var day = now.getDay();
  var scheduleDays = [6, 0];
  var scheduleLabels = { 6: "SABTU", 0: "MINGGU" };
  var selectedDay = null;
  var candidates = [];

  for (var i = 0; i < 2; i++) {
    var candidateDay = scheduleDays[i];
    var daysAhead = (candidateDay - day + 7) % 7;
    var candidate = new Date(now);
    candidate.setDate(now.getDate() + daysAhead);
    candidate.setHours(15, 30, 0, 0);
    var classEnd = new Date(candidate);
    classEnd.setHours(17, 30, 0, 0);

    if (classEnd > now)
      candidates.push({
        date: candidate,
        day: candidateDay,
        daysAhead: daysAhead,
      });
  }

  if (candidates.length) {
    candidates.sort(function (a, b) {
      return a.daysAhead - b.daysAhead;
    });
    nextClass = candidates[0].date;
    selectedDay = candidates[0].day;
  }

  var diff = nextClass - now;
  if (diff < 0) diff = 0;
  var d = Math.floor(diff / (1000 * 60 * 60 * 24));
  var h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  var m = Math.floor((diff / (1000 * 60)) % 60);
  var s = Math.floor((diff / 1000) % 60);
  var cdDays = document.getElementById("cdDays");
  var cdHours = document.getElementById("cdHours");
  var cdMins = document.getElementById("cdMins");
  var cdSecs = document.getElementById("cdSecs");
  var cdDayLabel = document.getElementById("heroCountdownDay");
  if (cdDays) cdDays.innerHTML = (d < 10 ? "0" + d : d) + " <span>HARI</span>";
  if (cdHours) cdHours.innerHTML = (h < 10 ? "0" + h : h) + " <span>JAM</span>";
  if (cdMins) cdMins.innerHTML = (m < 10 ? "0" + m : m) + " <span>MENIT</span>";
  if (cdSecs) cdSecs.innerHTML = (s < 10 ? "0" + s : s) + " <span>DETIK</span>";
  if (cdDayLabel) cdDayLabel.textContent = scheduleLabels[selectedDay];
}

// GOOGLE CALENDAR & ICS
function buildGoogleCalendarUrl() {
  var title = encodeURIComponent("Latihan Rutin Karate-Do Gojukai Banda Aceh");
  var details = encodeURIComponent(
    "Jadwal latihan rutin Gojukai Karate-Do Banda Aceh.\nLokasi: SMK Cut Mutia Peuniti.\nWaktu: 15.30 - 17.30 WIB.",
  );
  var location = encodeURIComponent("SMK Cut Mutia Peuniti, Banda Aceh");
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&recur=RRULE:FREQ=WEEKLY;BYDAY=SA,SU`;
}

function downloadIcsFile() {
  var csContent =
    "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Gojukai Banda Aceh//Training Schedule//ID\nBEGIN:VEVENT\nSUMMARY:Latihan Rutin Karate Gojukai Banda Aceh\nDESCRIPTION:Latihan Rutin Gojukai Karate-Do di SMK Cut Mutia Peuniti, Banda Aceh.\nLOCATION:SMK Cut Mutia Peuniti, Banda Aceh\nRRULE:FREQ=WEEKLY;BYDAY=SA,SU\nDTSTART:20260103T153000Z\nDTEND:20260103T173000Z\nEND:VEVENT\nEND:VCALENDAR";
  var blob = new Blob([csContent], { type: "text/calendar;charset=utf-8;" });
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "Latihan_Gojukai_Banda_Aceh.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// PASS CLAIM SYSTEM
var isClaimingPass = false;
function initPassClaim() {
  var claimBtn = document.getElementById("claimPassBtn");
  if (claimBtn) {
    claimBtn.addEventListener("click", function () {
      if (claimedPassCode || isClaimingPass) return;
      isClaimingPass = true;
      var randomNum = Math.floor(1000 + Math.random() * 9000);
      claimedPassCode = "GOJU-PASS-" + randomNum;
      var codeDisplay = document.getElementById("ticketCodeDisplay");
      var passInput = document.getElementById("waPassCode");
      if (codeDisplay) codeDisplay.textContent = claimedPassCode;
      if (passInput) passInput.value = claimedPassCode;
      var banner = document.getElementById("voucherAlertBanner");
      if (banner) banner.classList.remove("hidden");
      var activeBadge = document.getElementById("activeBadge");
      if (activeBadge) activeBadge.style.display = "block";
      var opts = document.querySelectorAll(".belt-opt");
      if (opts.length > 0) {
        opts.forEach((o) => o.classList.remove("is-on"));
        opts[0].classList.add("is-on");
      }
      this.innerHTML =
        '<img src="public/icons/check.svg" alt="Check" style="width:14px;height:14px;display:inline-block;margin-right:4px"> Terklaim';
      this.classList.replace("cta-gold", "cta-solid");
      this.setAttribute("aria-disabled", "true");
      playSound("chime");
      updateWaPreview();
      setTimeout(function () {
        if (typeof lenis !== "undefined" && lenis) {
          lenis.scrollTo("#register");
        } else {
          var reg = document.getElementById("register");
          if (reg) reg.scrollIntoView({ behavior: "smooth" });
        }
      }, 600);
    });
  }
}

// QUIZ SYSTEM
function answerQuiz(step, value) {
  playSound("click");
  var current = document.getElementById("quizStep" + step);
  var next = document.getElementById("quizStep" + (step + 1));
  function showNextStep() {
    if (!next) return;
    next.style.display = "block";
    if (typeof gsap !== "undefined") {
      gsap.fromTo(
        next,
        { opacity: 0, x: 28 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
      );
    }
  }
  if (step === 1) {
    quizAnswers.step1 = value;
    document.getElementById("quizProgressFill").style.width = "33%";
    current.style.display = "none";
    showNextStep();
  } else if (step === 2) {
    quizAnswers.step2 = value;
    document.getElementById("quizProgressFill").style.width = "66%";
    current.style.display = "none";
    showNextStep();
  } else if (step === 3) {
    quizAnswers.step3 = value;
    document.getElementById("quizProgressFill").style.width = "100%";
    current.style.display = "none";
    showQuizResult();
  }
}

function showQuizResult() {
  var resultTitle = "Kelas Pemula & Karakter";
  var resultDesc =
    "Sangat direkomendasikan untuk membangun fondasi mental disiplin.";
  var waMessage =
    "Halo Dojo Gojukai Banda Aceh, saya telah mengikuti Kuis Evaluasi di website dan direkomendasikan untuk:";

  if (quizAnswers.step1 === "anak") {
    resultTitle = "Program Karate Pemula & Usia Dini (6–12 Thn)";
    resultDesc =
      "Fokus pada pengembangan motorik, pembentukan karakter, kedisiplinan, dan rasa percaya diri.";
  } else if (
    quizAnswers.step1 === "remaja" &&
    quizAnswers.step2 === "prestasi"
  ) {
    resultTitle = "Program Intensif Kata & Kumite Prestasi (13–18 Thn)";
    resultDesc =
      "Diperuntukkan bagi pelajar yang ingin mengejar prestasi kejuaraan regional/nasional.";
  } else if (quizAnswers.step1 === "dewasa") {
    resultTitle = "Program Kelas Reguler & Bela Diri Praktis (> 18 Thn)";
    resultDesc =
      "Didesain untuk stamina, kebugaran fisik, penguasaan aplikasi Bunkai, dan kesehatan mental.";
  }

  document.getElementById("quizResultTitle").textContent = resultTitle;
  document.getElementById("quizResultDesc").textContent = resultDesc;

  var resultBox = document.getElementById("quizResultBox");
  resultBox.classList.add("is-active");

  var waBtn = document.getElementById("quizWaBtn");
  waBtn.onclick = function () {
    var fullMsg = `${waMessage}\n• Recommended: *${resultTitle}*\n• Usia: ${quizAnswers.step1}\n• Tujuan: ${quizAnswers.step2}\n• Pengalaman: ${quizAnswers.step3}`;
    safeOpenUrl(
      `https://api.whatsapp.com/send?phone=62895410450540&text=${encodeURIComponent(fullMsg)}`,
    );
  };
}

function resetQuiz() {
  playSound("click");
  quizAnswers = { step1: "", step2: "", step3: "" };
  document.getElementById("quizResultBox").classList.remove("is-active");
  document.getElementById("quizStep1").style.display = "block";
  document.getElementById("quizStep2").style.display = "none";
  document.getElementById("quizStep3").style.display = "none";
  document.getElementById("quizProgressFill").style.width = "33%";
}

// LIGHTBOX SYSTEM
function initLightbox() {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");

  // Collect all images that should be in lightbox
  lightboxImages = Array.from(
    document.querySelectorAll(".history-photo-item img"),
  ).map((img) => img.src);

  document.querySelectorAll(".history-photo-item").forEach((item, index) => {
    item.addEventListener("click", function () {
      currentLightboxIndex = index;
      openLightbox();
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", function () {
      currentLightboxIndex =
        (currentLightboxIndex - 1 + lightboxImages.length) %
        lightboxImages.length;
      updateLightboxImage();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener("click", function () {
      currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
      updateLightboxImage();
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") {
      currentLightboxIndex =
        (currentLightboxIndex - 1 + lightboxImages.length) %
        lightboxImages.length;
      updateLightboxImage();
    }
    if (e.key === "ArrowRight") {
      currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
      updateLightboxImage();
    }
  });
}

function openLightbox() {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  if (lightbox && lightboxImg) {
    lightboxImg.src = lightboxImages[currentLightboxIndex];
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function updateLightboxImage() {
  var lightboxImg = document.getElementById("lightboxImg");
  if (lightboxImg) {
    lightboxImg.src = lightboxImages[currentLightboxIndex];
  }
}

// ACHIEVEMENT SHOWCASE SYSTEM
function initAchievementShowcase() {
  if (!ACHIEVEMENT_DATA || ACHIEVEMENT_DATA.length === 0) return;

  var achievementImage = document.getElementById("achievementImage");
  var achievementCategory = document.getElementById("achievementCategory");
  var achievementYear = document.getElementById("achievementYear");
  var achievementAward = document.getElementById("achievementAward");
  var achievementEvent = document.getElementById("achievementEvent");
  var achievementProgress = document.getElementById("achievementProgress");
  var achievementViewer = document.getElementById("achievementViewer");
  var achievementMarquee = document.getElementById("achievementMarquee");
  var viewAllBtn = document.getElementById("viewAllBtn");

  if (!achievementImage || !achievementViewer) return;

  // Display first achievement
  displayAchievement(0);

  // Setup hover pause on viewer
  achievementViewer.addEventListener("mouseenter", function () {
    isAchievementPaused = true;
    if (achievementProgressInterval) {
      clearInterval(achievementProgressInterval);
    }
  });

  achievementViewer.addEventListener("mouseleave", function () {
    isAchievementPaused = false;
    startAchievementProgress();
  });

  // Setup hover pause specifically for marquee banner
  if (achievementMarquee) {
    achievementMarquee.addEventListener("mouseenter", function () {
      isAchievementPaused = true;
      if (achievementProgressInterval) {
        clearInterval(achievementProgressInterval);
      }
    });

    achievementMarquee.addEventListener("mouseleave", function () {
      isAchievementPaused = false;
      startAchievementProgress();
    });
  }

  // Setup view all button
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", function () {
      var currentAchievement = ACHIEVEMENT_DATA[currentAchievementIndex];
      if (currentAchievement && currentAchievement.eventPhotos.length > 1) {
        openAchievementModal(currentAchievement);
      }
    });
  }

  // Start rotation
  startAchievementRotation();
}

function displayAchievement(index) {
  var achievement = ACHIEVEMENT_DATA[index];
  if (!achievement) return;

  var achievementImage = document.getElementById("achievementImage");
  var achievementCategory = document.getElementById("achievementCategory");
  var achievementYear = document.getElementById("achievementYear");
  var achievementAward = document.getElementById("achievementAward");
  var achievementEvent = document.getElementById("achievementEvent");
  var viewAllBtn = document.getElementById("viewAllBtn");

  // Reset progress bar
  resetAchievementProgress();

  // Fade out current image
  if (achievementImage) {
    achievementImage.classList.remove("active");
  }

  setTimeout(function () {
    // Update content
    if (achievementImage) {
      achievementImage.src = achievement.image;
      achievementImage.classList.add("active");
    }
    if (achievementCategory) achievementCategory.textContent = achievement.category;
    if (achievementYear) achievementYear.textContent = achievement.year;
    if (achievementAward) achievementAward.textContent = achievement.awardLevel;
    if (achievementEvent) achievementEvent.textContent = achievement.eventName;

    // Update metadata overlay badge
    var metaAthlete = document.getElementById("metaAthlete");
    var metaAward = document.getElementById("metaAward");
    var metaEvent = document.getElementById("metaEvent");

    if (metaAthlete) metaAthlete.textContent = achievement.athleteName;
    if (metaAward) {
      metaAward.textContent = achievement.fullAward;
      metaAward.className = "meta-value";
      var fullAwardLower = (achievement.fullAward || "").toLowerCase();
      var awardLevelLower = (achievement.awardLevel || "").toLowerCase();

      if (fullAwardLower.indexOf("emas") !== -1 || awardLevelLower.indexOf("emas") !== -1 || awardLevelLower === "juara 1") {
        metaAward.classList.add("medal-gold");
      } else if (fullAwardLower.indexOf("perak") !== -1 || awardLevelLower.indexOf("perak") !== -1 || awardLevelLower === "juara 2") {
        metaAward.classList.add("medal-silver");
      } else if (fullAwardLower.indexOf("perunggu") !== -1 || awardLevelLower.indexOf("perunggu") !== -1 || awardLevelLower === "juara 3") {
        metaAward.classList.add("medal-bronze");
      } else {
        metaAward.classList.add("accent-red");
      }
    }
    if (metaEvent) metaEvent.textContent = achievement.eventName;

    // Update Continuous Running Text Marquee
    var marqueeLine = "🏆 " + achievement.athleteName.toUpperCase() + " — " + achievement.fullAward.toUpperCase() + " — " + achievement.eventName.toUpperCase() + " 🥇";
    var marqueeElements = document.querySelectorAll("#marqueeTrack .marquee-item, #marqueeTrack span");
    if (marqueeElements && marqueeElements.length > 0) {
      marqueeElements.forEach(function (el) {
        el.textContent = marqueeLine;
      });
    }

    // Show view all button
    if (viewAllBtn) {
      viewAllBtn.classList.add("visible");
    }
  }, 300);
}

function startAchievementRotation() {
  if (achievementRotationInterval) {
    clearInterval(achievementRotationInterval);
  }

  achievementRotationInterval = setInterval(function () {
    if (!isAchievementPaused) {
      currentAchievementIndex = (currentAchievementIndex + 1) % ACHIEVEMENT_DATA.length;
      displayAchievement(currentAchievementIndex);
    }
  }, 4500); // 4s display + 0.5s fade

  startAchievementProgress();
}

function startAchievementProgress() {
  var achievementProgress = document.getElementById("achievementProgress");
  if (!achievementProgress) return;

  if (achievementProgressInterval) {
    clearInterval(achievementProgressInterval);
  }

  var progress = 0;
  var duration = 4000; // 4s display time
  var interval = 50; // Update every 50ms
  var startTime = Date.now();
  var pausedTime = 0;

  achievementProgressInterval = setInterval(function () {
    if (!isAchievementPaused) {
      var elapsed = Date.now() - startTime - pausedTime;
      progress = (elapsed / duration) * 100;
      
      if (progress >= 100) {
        progress = 0;
        startTime = Date.now();
        pausedTime = 0;
      }
      
      achievementProgress.style.width = progress + "%";
    } else {
      // Track paused time
      pausedTime = Date.now() - startTime - (progress / 100) * duration;
    }
  }, interval);
}

function resetAchievementProgress() {
  var achievementProgress = document.getElementById("achievementProgress");
  if (achievementProgress) {
    achievementProgress.style.width = "0%";
  }
}

// ACHIEVEMENT MODAL & EVENT DROPDOWN SYSTEM
function initAchievementModal() {
  var modalClose = document.getElementById("achievementModalClose");
  var modalOverlay = document.getElementById("achievementModalOverlay");
  var modalEventSelect = document.getElementById("modalEventSelect");

  if (modalClose) {
    modalClose.addEventListener("click", closeAchievementModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeAchievementModal);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAchievementModal();
    }
  });

  // Event dropdown change listener
  if (modalEventSelect) {
    populateEventDropdown();
    modalEventSelect.addEventListener("change", function () {
      renderModalGallery(this.value);
    });
  }
}

function populateEventDropdown() {
  var modalEventSelect = document.getElementById("modalEventSelect");
  if (!modalEventSelect || !ACHIEVEMENT_DATA) return;

  // Group achievements and count per event
  var eventCounts = {};
  ACHIEVEMENT_DATA.forEach(function (item) {
    var ev = item.eventName || "Lainnya";
    eventCounts[ev] = (eventCounts[ev] || 0) + 1;
  });

  modalEventSelect.innerHTML = "";

  // All events option
  var allOpt = document.createElement("option");
  allOpt.value = "all";
  allOpt.textContent = "🏆 Semua Event & Kejuaraan (" + ACHIEVEMENT_DATA.length + " Prestasi)";
  modalEventSelect.appendChild(allOpt);

  // Individual event options
  Object.keys(eventCounts).forEach(function (eventName) {
    var opt = document.createElement("option");
    opt.value = eventName;
    opt.textContent = eventName + " (" + eventCounts[eventName] + " Prestasi)";
    modalEventSelect.appendChild(opt);
  });
}

function openAchievementModal(selectedEventOrAchievement) {
  var modal = document.getElementById("achievementModal");
  var modalEventSelect = document.getElementById("modalEventSelect");
  if (!modal) return;

  var targetEvent = "all";
  if (typeof selectedEventOrAchievement === "string") {
    targetEvent = selectedEventOrAchievement;
  } else if (selectedEventOrAchievement && selectedEventOrAchievement.eventName) {
    targetEvent = selectedEventOrAchievement.eventName;
  }

  if (modalEventSelect) {
    populateEventDropdown();
    // Select requested event in dropdown
    var matched = false;
    for (var i = 0; i < modalEventSelect.options.length; i++) {
      if (modalEventSelect.options[i].value === targetEvent) {
        modalEventSelect.selectedIndex = i;
        matched = true;
        break;
      }
    }
    if (!matched) modalEventSelect.value = "all";
    renderModalGallery(modalEventSelect.value);
  } else {
    renderModalGallery(targetEvent);
  }

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  playSound("click");
}

function renderModalGallery(selectedEvent) {
  var modalEventTitle = document.getElementById("modalEventTitle");
  var modalCategory = document.getElementById("modalCategory");
  var modalYear = document.getElementById("modalYear");
  var modalGallery = document.getElementById("modalGallery");

  if (!modalGallery) return;

  var filteredList = [];
  if (!selectedEvent || selectedEvent === "all") {
    filteredList = ACHIEVEMENT_DATA;
    if (modalEventTitle) modalEventTitle.textContent = "Semua Prestasi & Kejuaraan";
    if (modalCategory) modalCategory.textContent = filteredList.length + " Atlet Berprestasi";
    if (modalYear) modalYear.textContent = "2025";
  } else {
    filteredList = ACHIEVEMENT_DATA.filter(function (item) {
      return item.eventName === selectedEvent;
    });
    if (modalEventTitle) modalEventTitle.textContent = selectedEvent;
    if (modalCategory) modalCategory.textContent = filteredList.length + " Atlet Juara";
    if (modalYear) modalYear.textContent = filteredList[0] ? filteredList[0].year : "2025";
  }

  // Clear and populate gallery
  modalGallery.innerHTML = "";

  if (filteredList.length === 0) {
    var emptyMsg = document.createElement("div");
    emptyMsg.className = "gallery-empty-state";
    emptyMsg.textContent = "Tidak ada data foto untuk event ini.";
    modalGallery.appendChild(emptyMsg);
    return;
  }

  filteredList.forEach(function (item) {
    var galleryItem = document.createElement("div");
    galleryItem.className = "achievement-modal-gallery-item";
    galleryItem.setAttribute("role", "button");
    galleryItem.setAttribute("tabindex", "0");
    galleryItem.setAttribute(
      "aria-label",
      "Lihat foto prestasi " + item.athleteName + " - " + item.fullAward,
    );

    var img = document.createElement("img");
    img.src = item.image;
    img.alt = item.athleteName + " - " + item.fullAward;
    img.loading = "lazy";
    img.decoding = "async";
    img.onerror = function () {
      this.src = "https://placehold.co/400x300/131315/D4AF37?text=Prestasi+Gojukai";
    };

    // Base Card Overlay Badge (Default bottom view)
    var cardOverlay = document.createElement("div");
    cardOverlay.className = "gallery-item-caption";

    var athleteSpan = document.createElement("div");
    athleteSpan.className = "gallery-item-athlete";
    athleteSpan.textContent = item.athleteName;

    var awardSpan = document.createElement("div");
    awardSpan.className = "gallery-item-award";
    var awardText = (item.fullAward || "").toLowerCase();
    var isGold = awardText.indexOf("emas") !== -1;
    var isSilver = awardText.indexOf("perak") !== -1;
    var medalIcon = isGold ? "🥇" : (isSilver ? "🥈" : "🥉");

    if (isGold) {
      awardSpan.classList.add("medal-gold");
    } else if (isSilver) {
      awardSpan.classList.add("medal-silver");
    }
    awardSpan.innerHTML = medalIcon + " " + escapeHtml(item.fullAward);

    cardOverlay.appendChild(athleteSpan);
    cardOverlay.appendChild(awardSpan);

    // Rich Hover Details Card (Appears on hover cursor / focus)
    var hoverDetails = document.createElement("div");
    hoverDetails.className = "gallery-item-hover-details";

    var nameRow = document.createElement("div");
    nameRow.className = "hover-detail-row";
    nameRow.innerHTML =
      '<span class="hover-detail-label">ATLET:</span><span class="hover-detail-val">' +
      escapeHtml(item.athleteName) +
      "</span>";

    var awardRow = document.createElement("div");
    awardRow.className = "hover-detail-row";
    var awardValClass = isGold
      ? "hover-detail-val gold"
      : isSilver
        ? "hover-detail-val silver"
        : "hover-detail-val";
    awardRow.innerHTML =
      '<span class="hover-detail-label">PENGHARGAAN:</span><span class="' +
      awardValClass +
      '">' +
      medalIcon +
      " " +
      escapeHtml(item.fullAward) +
      "</span>";

    var eventRow = document.createElement("div");
    eventRow.className = "hover-detail-row";
    eventRow.innerHTML =
      '<span class="hover-detail-label">EVENT:</span><span class="hover-detail-val event-name">' +
      escapeHtml(item.eventName) +
      " (" +
      escapeHtml(item.year) +
      ")</span>";

    var catRow = document.createElement("div");
    catRow.className = "hover-detail-row";
    catRow.innerHTML =
      '<span class="hover-detail-label">KATEGORI:</span><span class="hover-detail-val">' +
      escapeHtml(item.category) +
      "</span>";

    var hintRow = document.createElement("div");
    hintRow.className = "hover-detail-hint";
    hintRow.innerHTML =
      '<img src="public/icons/eye.svg" alt="Preview" style="width:12px;height:12px;display:inline-block;filter:brightness(1.5)"> <span>Klik untuk perbesar foto</span>';

    hoverDetails.appendChild(nameRow);
    hoverDetails.appendChild(awardRow);
    hoverDetails.appendChild(eventRow);
    hoverDetails.appendChild(catRow);
    hoverDetails.appendChild(hintRow);

    galleryItem.appendChild(img);
    galleryItem.appendChild(cardOverlay);
    galleryItem.appendChild(hoverDetails);

    function triggerItemLightbox() {
      openAchievementLightbox(
        item.image,
        item.athleteName +
          " — " +
          item.fullAward +
          " (" +
          item.eventName +
          ")",
      );
    }

    galleryItem.addEventListener("click", triggerItemLightbox);
    galleryItem.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        triggerItemLightbox();
      }
    });

    modalGallery.appendChild(galleryItem);
  });
}

function closeAchievementModal() {
  var modal = document.getElementById("achievementModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function openAchievementLightbox(imageUrl, captionText) {
  var lightbox = document.createElement("div");
  lightbox.className = "achievement-lightbox";

  var lightboxInner = document.createElement("div");
  lightboxInner.className = "achievement-lightbox-inner";

  var img = document.createElement("img");
  img.src = imageUrl;
  img.alt = captionText || "Achievement Photo";
  img.onerror = function () {
    this.src = "https://placehold.co/800x600/131315/D4AF37?text=Prestasi+Gojukai";
  };

  lightboxInner.appendChild(img);

  if (captionText) {
    var caption = document.createElement("div");
    caption.className = "achievement-lightbox-caption";
    caption.textContent = captionText;
    lightboxInner.appendChild(caption);
  }

  var closeBtn = document.createElement("button");
  closeBtn.className = "achievement-lightbox-close";
  closeBtn.setAttribute("aria-label", "Close Lightbox");

  var closeIcon = document.createElement("img");
  closeIcon.src = "public/icons/xmark.svg";
  closeIcon.alt = "Close";
  closeIcon.style.width = "22px";
  closeIcon.style.height = "22px";
  closeIcon.onerror = function () {
    this.style.display = "none";
  };

  closeBtn.appendChild(closeIcon);

  closeBtn.addEventListener("click", function () {
    lightbox.classList.remove("active");
    setTimeout(function () {
      if (lightbox.parentNode) document.body.removeChild(lightbox);
    }, 300);
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
      setTimeout(function () {
        if (lightbox.parentNode) document.body.removeChild(lightbox);
      }, 300);
    }
  });

  lightbox.appendChild(lightboxInner);
  lightbox.appendChild(closeBtn);
  document.body.appendChild(lightbox);

  setTimeout(function () {
    lightbox.classList.add("active");
  }, 10);
}

// WA FORM SYSTEM
function updateWaPreview() {
  var name = document.getElementById("waName").value.trim();
  var age = document.getElementById("waAge").value.trim();
  var alamat = document.getElementById("waAlamat").value.trim();
  var dogi = document.getElementById("waDogi").value;
  var passCode = document.getElementById("waPassCode").value;
  var selBeltOpt = document.querySelector(".belt-opt.is-on .label");
  var belt = selBeltOpt ? selBeltOpt.textContent : "Putih";
  var btn = document.getElementById("waSendBtn");
  var hint = document.getElementById("waHint");
  var preview = document.getElementById("waPreviewText");
  var bubble = document.getElementById("waBubble");
  var brochureName = document.getElementById("brochurePreviewName");
  var brochurePreference = document.getElementById("brochurePreviewPreference");
  var ready = name && age && alamat && dogi;
  btn.disabled = !ready;
  if (bubble) {
    bubble.classList.remove("is-updated");
    void bubble.offsetWidth;
    bubble.classList.add("is-updated");
  }
  hint.textContent = ready ? "Siap Dikirim" : "Lengkapi Semua Data";
  if (brochureName) brochureName.textContent = name || "Belum diisi";
  if (brochurePreference) {
    brochurePreference.textContent = `${dogi || "-"} · Sabuk ${belt}`;
  }
  if (ready) {
    preview.innerHTML = `
      Halo Dojo Gojukai Banda Aceh,<br>
      Saya ingin mendaftar:<br>
      • Nama: <b>${escapeHtml(name)}</b><br>
      • Usia: <b>${escapeHtml(age)} thn</b><br>
      • Alamat: <b>${escapeHtml(alamat)}</b><br>
      • Dogi: <b>${escapeHtml(dogi)}</b> | Sabuk: <b>${escapeHtml(belt)}</b>
      ${passCode ? `<br>• Voucher: <b style="color:var(--gold)">${escapeHtml(passCode)}</b>` : ""}
    `;
  } else {
    preview.textContent =
      "Isi nama, usia, alamat, dan ukuran dogi untuk melihat pratinjau...";
  }
}

function updateTime() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, "0");
  var minutes = now.getMinutes().toString().padStart(2, "0");
  var el = document.getElementById("waTime");
  if (el) el.textContent = hours + ":" + minutes;
}

var lastWaSubmitTime = 0;

function initWaForm() {
  ["waName", "waAge", "waAlamat", "waDogi"].forEach((id) => {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updateWaPreview);
      el.addEventListener("change", updateWaPreview);
    }
  });

  var waSendBtn = document.getElementById("waSendBtn");
  if (waSendBtn) {
    waSendBtn.addEventListener("click", function () {
      var now = Date.now();
      if (now - lastWaSubmitTime < 1500) {
        return; // Anti-spam cooldown
      }
      lastWaSubmitTime = now;

      var nameEl = document.getElementById("waName");
      var ageEl = document.getElementById("waAge");
      var alamatEl = document.getElementById("waAlamat");
      var dogiEl = document.getElementById("waDogi");
      var passCodeEl = document.getElementById("waPassCode");
      var selBelt = document.querySelector(".belt-opt.is-on .label");

      var name = (nameEl ? nameEl.value : "").trim().slice(0, 60);
      var age = parseInt((ageEl ? ageEl.value : "0"), 10) || 0;
      var alamat = (alamatEl ? alamatEl.value : "").trim().slice(0, 120);
      var dogi = (dogiEl ? dogiEl.value : "").slice(0, 10);
      var passCode = (passCodeEl ? passCodeEl.value : "").trim().slice(0, 30);
      var belt = selBelt ? selBelt.textContent.trim().slice(0, 30) : "Putih";

      if (!name || age <= 0 || !alamat || !dogi) {
        alert("Mohon lengkapi seluruh data pendaftaran sebelum mengirim.");
        return;
      }

      var msg = `Halo Dojo Gojukai Banda Aceh, saya ingin mendaftar:\n• Nama: ${name}\n• Usia: ${age} thn\n• Alamat: ${alamat}\n• Ukuran Dogi: ${dogi}\n• Sabuk: ${belt}${passCode ? `\n• Voucher Pass: ${passCode}` : ""}`;
      
      safeOpenUrl(
        `https://api.whatsapp.com/send?phone=62895410450540&text=${encodeURIComponent(msg)}`,
      );
    });
  }
}

// PDF BROCHURE GENERATION
function generatePdfBrochure(e) {
  if (e && e.preventDefault) e.preventDefault();

  var nameEl = document.getElementById("waName");
  var ageEl = document.getElementById("waAge");
  var alamatEl = document.getElementById("waAlamat");
  var dogiEl = document.getElementById("waDogi");
  var passCodeEl = document.getElementById("waPassCode");
  var selBelt = document.querySelector(".belt-opt.is-on .label");

  var name = (nameEl && nameEl.value.trim().slice(0, 60)) || "Calon Karateka";
  var age = (ageEl && ageEl.value.trim().slice(0, 10)) || "Belum diisi";
  var alamat = (alamatEl && alamatEl.value.trim().slice(0, 120)) || "Banda Aceh";
  var belt = selBelt ? selBelt.textContent.trim().slice(0, 30) : "Belum Ditentukan";
  var dogi = (dogiEl && dogiEl.value.slice(0, 10)) || "-";
  var passCode = (passCodeEl && passCodeEl.value.trim().slice(0, 30)) || "Belum ada pass";
  var logoUrl = new URL("public/logo-gojukai.webp", window.location.href).href;

  var printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert(
      "Pop-up blocker aktif pada peramban Anda. Silakan izinkan pop-up untuk membuka dan menyimpan brosur pendaftaran PDF.",
    );
    return;
  }
  try {
    printWindow.opener = null;
  } catch (err) {}

  var htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Brosur Pendaftaran Resmi — Dojo Gojukai Banda Aceh</title>
  <base href="${escapeHtml(window.location.href)}">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    @page {
      size: A4 portrait;
      margin: 10mm 12mm;
    }
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      color: #1a1a1a;
      padding: 20px;
      line-height: 1.5;
      background: #f4f1eb;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .action-bar {
      max-width: 760px;
      margin: 0 auto 16px;
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }
    .action-bar button {
      padding: 10px 22px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      border: none;
      transition: 0.2s;
    }
    .print-btn { background: #D32F2F; color: #fff; box-shadow: 0 2px 8px rgba(211, 47, 47, 0.3); }
    .print-btn:hover { background: #b71c1c; }
    .close-btn { background: #333; color: #fff; }
    .sheet {
      max-width: 760px;
      margin: auto;
      background: #fff;
      padding: 34px 38px 28px;
      border-top: 10px solid #D32F2F;
      border-radius: 6px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .header {
      display: flex;
      align-items: center;
      gap: 20px;
      border-bottom: 2.5px solid #D32F2F;
      padding-bottom: 18px;
      margin-bottom: 20px;
    }
    .logo {
      width: 72px;
      height: 72px;
      object-fit: contain;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .header-text {
      flex: 1;
    }
    .logo-title {
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;
      color: #D32F2F;
      letter-spacing: 1.5px;
      line-height: 1.2;
    }
    .sub-title {
      font-size: 13px;
      color: #4b5563;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      margin-top: 4px;
      font-weight: 500;
    }
    .tag-badge {
      display: inline-block;
      padding: 5px 14px;
      background: #111827;
      color: #fff;
      font-size: 11px;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-radius: 4px;
      margin-bottom: 16px;
      font-weight: 600;
    }
    .section-title {
      font-size: 14.5px;
      color: #D4AF37;
      text-transform: uppercase;
      border-bottom: 1.5px solid #e5e7eb;
      padding-bottom: 5px;
      margin: 20px 0 12px;
      font-weight: bold;
      letter-spacing: 0.8px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .info-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .box {
      background: #fafafa;
      padding: 12px 16px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
    }
    .box h4 {
      margin: 0 0 4px;
      color: #6b7280;
      font-size: 10.5px;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      font-weight: 600;
    }
    .box p {
      font-size: 14px;
      color: #111827;
      line-height: 1.35;
    }
    .data-highlight {
      color: #D32F2F;
      font-weight: bold;
      font-size: 15.5px !important;
    }
    .instructor-note {
      font-size: 12px;
      color: #374151;
      background: #fffbeb;
      border-left: 3.5px solid #D4AF37;
      padding: 10px 14px;
      border-radius: 0 6px 6px 0;
      margin-top: 18px;
      line-height: 1.45;
    }
    .foot {
      text-align: center;
      margin-top: 22px;
      font-size: 11px;
      color: #6b7280;
      border-top: 1px solid #e5e7eb;
      padding-top: 14px;
      line-height: 1.45;
    }
    @media print {
      body {
        padding: 0;
        background: #fff;
      }
      .action-bar {
        display: none !important;
      }
      .sheet {
        max-width: 100%;
        box-shadow: none;
        border-radius: 0;
        padding: 6mm 4mm;
        border-top: 8px solid #D32F2F;
      }
    }
  </style>
</head>
<body>
  <div class="action-bar">
    <button type="button" onclick="window.print()" class="print-btn">🖨️ Cetak / Simpan PDF</button>
    <button type="button" onclick="window.close()" class="close-btn">✖️ Tutup</button>
  </div>
  <div class="sheet">
    <div class="header">
      <img class="logo" src="${escapeHtml(logoUrl)}" alt="Logo Gojukai" onerror="this.style.display='none'">
      <div class="header-text">
        <div class="logo-title">Gojukai Karate-Do Banda Aceh</div>
        <div class="sub-title">International Karate-Do Gojukai Association (IKGA)</div>
      </div>
    </div>

    <div><span class="tag-badge">Brosur Pendaftaran Calon Karateka</span></div>

    <div class="section-title">Data Calon Karateka</div>
    <div class="info-grid">
      <div class="box">
        <h4>Nama Lengkap</h4>
        <p class="data-highlight">${escapeHtml(name)}</p>
      </div>
      <div class="box">
        <h4>Usia Calon</h4>
        <p><b>${escapeHtml(age)} Tahun</b></p>
      </div>
      <div class="box">
        <h4>Ukuran Dogi</h4>
        <p><b>${escapeHtml(dogi)}</b></p>
      </div>
      <div class="box" style="grid-column: span 2;">
        <h4>Alamat Domisili</h4>
        <p>${escapeHtml(alamat)}</p>
      </div>
      <div class="box">
        <h4>Sabuk Pilihan</h4>
        <p><b>${escapeHtml(belt)}</b></p>
      </div>
    </div>

    <div class="section-title">Informasi Jadwal &amp; Lokasi Dojo</div>
    <div class="info-grid-2">
      <div class="box">
        <h4>Jadwal Latihan Rutin</h4>
        <p>• <b>Sabtu</b>: 15.30 – 17.30 WIB<br>• <b>Minggu</b>: 15.30 – 17.30 WIB</p>
      </div>
      <div class="box">
        <h4>Lokasi Dojo Latihan</h4>
        <p><b>SMK Cut Mutia</b><br>Peuniti, Kota Banda Aceh, Aceh</p>
      </div>
    </div>

    <div class="section-title">Voucher &amp; Verifikasi Pendaftaran</div>
    <div class="info-grid-2">
      <div class="box">
        <h4>Kode Voucher Free Pass</h4>
        <p><b style="color: #D32F2F; font-size: 14px;">${escapeHtml(passCode)}</b></p>
      </div>
      <div class="box">
        <h4>Status Registrasi</h4>
        <p><b style="color: #15803d; font-size: 13.5px;">Terverifikasi Form Online</b></p>
      </div>
    </div>

    <div class="instructor-note">
      <b>Instruktur Dojo:</b> Dibina langsung oleh Sensei &amp; Senpai bersertifikasi resmi International Karate-Do Gojukai Association (IKGA).
    </div>

    <div class="foot">
      <p><b>Official WhatsApp:</b> +62 813-6008-8296 &nbsp;|&nbsp; <b>Website:</b> Gojukai Banda Aceh</p>
      <p style="margin-top: 4px; font-size: 10px; color: #9ca3af;">Lembar dokumen pendaftaran resmi — simpan sebagai bukti administrasi saat hadir di dojo.</p>
    </div>
  </div>

  <script>
    window.addEventListener('load', function() {
      setTimeout(function() {
        try { window.print(); } catch(e) {}
      }, 400);
    });
  </script>
</body>
</html>`;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}

// DYNAMIC CONTENT GENERATION
function buildOathGrid() {
  var oathGrid = document.getElementById("oathGrid");
  if (!oathGrid) return;

  OATH_DATA.forEach((o, i) => {
    var card = document.createElement("div");
    card.className = "oath-card tilt-card";
    card.innerHTML = `
      <div class="oath-num">Hitotsu ${i + 1}</div>
      <div class="oath-kanji scramble-text" data-scramble>${o.kanji}</div>
      <div class="oath-romaji">${o.romaji}</div>
      <div class="oath-meaning">${o.meaning}</div>
      <div class="oath-expand">
        <div class="oath-keywords">${o.keywords.map((k) => `<span class="oath-kw">${k}</span>`).join("")}</div>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("is-open"));
    oathGrid.appendChild(card);
  });
}

function buildHistoryTimeline() {
  var timeline = document.getElementById("historyTimeline");
  if (!timeline) return;

  // On non-mobile, mark the timeline so GSAP can animate items in.
  // The CSS hides items inside .gsap-anim-history; GSAP reveals them on scroll.
  // On mobile (performance mode), the class is NOT added, so items are visible.
  if (!isMobilePerformanceMode) {
    timeline.classList.add("gsap-anim-history");
  }

  HISTORY_DATA.forEach((h) => {
    var item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <div class="history-dot"></div>
      <div class="history-year">${h.year}</div>
      <div class="history-title">${h.title}</div>
      <div class="history-desc">${h.desc}</div>
    `;
    timeline.appendChild(item);
  });
}

function initMarqueeGallery() {
  var gallery = document.querySelector(".marquee-track");
  if (!gallery || gallery.dataset.duplicated === "true") return;
  Array.from(gallery.children).forEach(function (item) {
    var clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    gallery.appendChild(clone);
  });
  gallery.dataset.duplicated = "true";
}

function buildBeltSelector() {
  var beltGridCards = document.getElementById("beltGridCards");
  var syllabusTitle = document.getElementById("syllabusTitle");
  var syllabusRank = document.getElementById("syllabusRank");
  var syllabusGrid = document.getElementById("syllabusGrid");
  var hudBeltLabel = document.getElementById("hudBeltLabel");

  if (!beltGridCards) return;

  BELT_DATA.forEach((b, i) => {
    var btn = document.createElement("button");
    btn.className = "belt-card-btn" + (i === 0 ? " is-active" : "");
    btn.type = "button";
    btn.innerHTML = `
      <div class="belt-card-swatch" style="background:${b.color}"></div>
      <div class="belt-card-title">${b.name}</div>
      <div class="belt-card-jp scramble-text" data-scramble>${b.jp}</div>
    `;
    btn.addEventListener("click", () => selectBelt(i));
    beltGridCards.appendChild(btn);
  });

  function selectBelt(index) {
    var b = BELT_DATA[index];
    document
      .querySelectorAll(".belt-card-btn")
      .forEach((el, idx) => el.classList.toggle("is-active", idx === index));
    if (hudBeltLabel) hudBeltLabel.textContent = b.name.toUpperCase();
    var sBox = document.getElementById("syllabusBox");
    if (sBox) {
      sBox.classList.add("fade-out");
      setTimeout(() => {
        if (syllabusTitle) syllabusTitle.textContent = "Silabus " + b.name;
        if (syllabusRank) syllabusRank.textContent = b.rank + " · " + b.jp;
        if (syllabusGrid) {
          syllabusGrid.innerHTML = b.syllabus
            .map(
              (s) => `
              <div class="syllabus-item">
                <span class="syllabus-item-tech">${s.tech}</span>
                <span class="syllabus-item-type">${s.type}</span>
              </div>
            `,
            )
            .join("");
        }
        sBox.classList.remove("fade-out");
      }, 300);
    }
    if (sBox) {
      sBox.classList.remove("pulse-active");
      void sBox.offsetWidth;
      sBox.classList.add("pulse-active");
    }
    if (window.update3DBeltColor) {
      window.update3DBeltColor(b.color);
    }
  }
  selectBelt(0);
}

function buildWaBeltOpts() {
  var waBeltOpts = document.getElementById("waBeltOpts");
  if (!waBeltOpts) return;

  BELT_DATA.forEach((b, i) => {
    var opt = document.createElement("button");
    opt.className = "belt-opt" + (i === 0 ? " is-on" : "");
    opt.type = "button";
    opt.innerHTML = `<div class="swatch" style="background:${b.color}"></div><div class="label">${b.name.replace("Sabuk ", "")}</div>`;
    opt.addEventListener("click", function () {
      document
        .querySelectorAll(".belt-opt")
        .forEach((o) => o.classList.remove("is-on"));
      this.classList.add("is-on");
      updateWaPreview();
    });
    waBeltOpts.appendChild(opt);
  });
}

// HIGH-PERFORMANCE SCROLL REVEAL & COUNTER ENGINE
function animateCounter(el) {
  if (!el || el.dataset.counted === "true") return;
  el.dataset.counted = "true";
  var target = parseInt(el.getAttribute("data-target"), 10) || 0;
  var suffix = target === 150 ? "+" : target === 5 ? "+" : target === 100 ? "%" : "";
  var startTime = null;
  var duration = 1400;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = Math.min((timestamp - startTime) / duration, 1);
    var easeOut = 1 - Math.pow(1 - progress, 3);
    var current = Math.floor(easeOut * target);
    el.innerText = current + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.innerText = target + suffix;
    }
  }
  requestAnimationFrame(step);
}

function initStatsCounter() {
  document.querySelectorAll(".stat-num").forEach(function (el) {
    if (!("IntersectionObserver" in window)) {
      animateCounter(el);
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    obs.observe(el);
  });
}

function initKatanaReveals() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined" || isMobilePerformanceMode) {
    document.querySelectorAll(".katana-reveal").forEach(function (el) {
      el.classList.add("reveal-on-scroll", "is-revealed");
    });
    return;
  }
  document.querySelectorAll(".katana-reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0, y: 20 },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      },
    );
  });
}

function initScrollRevealEngine() {
  var revealSelectors = [
    // Section headers & titles
    "section h2",
    ".section .kanji-mark",
    ".section .lede",
    // Cards & widgets
    ".stat-card",
    ".oath-card",
    ".ticket-card",
    ".ticket-claim-box",
    ".pass-terms-box",
    ".quiz-card",
    ".history-intro",
    ".history-item",
    ".history-photo-item",
    ".achievement-showcase",
    ".achievement-info",
    ".achievement-marquee",
    ".sensei-card",
    ".stage-component",
    ".belt-selector-box",
    ".faq-item",
    ".wa-form-wrapper",
    ".wa-preview-wrapper",
    ".map-wrap",
    ".foot-brand",
    ".foot-col"
  ];

  var allTargets = document.querySelectorAll(revealSelectors.join(", "));
  if (!allTargets || allTargets.length === 0) return;

  var winH = window.innerHeight || document.documentElement.clientHeight;

  if (!("IntersectionObserver" in window)) {
    allTargets.forEach(function (el) {
      el.classList.add("is-revealed", "is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var target = entry.target;
          target.classList.add("is-revealed", "is-visible");
          // Trigger stat counters if inside revealed element
          var statEl = target.querySelector(".stat-num");
          if (statEl) animateCounter(statEl);
          obs.unobserve(target);
        }
      });
    },
    {
      rootMargin: "0px 0px -35px 0px",
      threshold: 0.05
    }
  );

  allTargets.forEach(function (el) {
    if (!el.classList.contains("reveal-on-scroll")) {
      el.classList.add("reveal-on-scroll");
    }

    // Add directional / subtle scale variants based on element type
    if (el.classList.contains("stat-card") || el.classList.contains("oath-card") || el.classList.contains("sensei-card") || el.classList.contains("quiz-card") || el.classList.contains("map-wrap")) {
      el.classList.add("reveal-scale");
    } else if (el.classList.contains("history-item") || el.classList.contains("faq-item")) {
      el.classList.add("reveal-left");
    }

    // Stagger delay for grid siblings
    if (el.parentElement) {
      var siblings = Array.from(el.parentElement.children);
      var idx = siblings.indexOf(el);
      if (idx >= 0 && idx < 6) {
        el.classList.add("stagger-" + (idx + 1));
      }
    }

    // If already above or in current viewport on load, reveal immediately
    var rect = el.getBoundingClientRect();
    if (rect.top < winH - 20) {
      el.classList.add("is-revealed", "is-visible");
      var stat = el.querySelector(".stat-num");
      if (stat) animateCounter(stat);
    } else {
      observer.observe(el);
    }
  });

  // Timeline progress line scrub (Desktop GSAP enhancement)
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined" && !isMobilePerformanceMode) {
    var timeline = document.querySelector(".history-timeline");
    if (timeline) {
      gsap.to(timeline, {
        "--timeline-progress": 1,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top 72%",
          end: "bottom 72%",
          scrub: true,
        },
      });
    }
  }
}

function triggerAnimations() {
  if (typeof gsap === "undefined") return;
  gsap.fromTo(
    ".hero-title .char-span",
    { opacity: 0, y: 30, scale: 0.8 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.45,
      stagger: 0.04,
      ease: "back.out(1.7)",
    },
  );
  gsap.fromTo(
    ".hero-title .sub",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: "power2.out" },
  );
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".oath-title-anim .word-span",
      { opacity: 0, y: 35, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#oath", start: "top 75%" },
      },
    );
  }
}

// NAVIGATION SYSTEM
function initNavigation() {
  var navLinks = document.querySelectorAll("#navCenter a");
  var navMobileLinks = document.querySelectorAll("#navMobile a");
  var navIndicator = document.getElementById("navIndicator");

  function moveIndicator(el) {
    if (!el || window.innerWidth <= 768) return;
    var rect = el.getBoundingClientRect();
    var parentRect = document
      .getElementById("navCenter")
      .getBoundingClientRect();
    navIndicator.style.left = rect.left - parentRect.left + "px";
    navIndicator.style.width = rect.width + "px";
  }

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      moveIndicator(this);
    });
    link.addEventListener("click", function (e) {
      if (lenis) {
        e.preventDefault();
        var target = this.getAttribute("href");
        lenis.scrollTo(target);
      }
    });
  });

  window.addEventListener("scroll", function () {
    var fromTop = window.scrollY + 180;
    navLinks.forEach((link) => {
      var section = document.querySelector(link.getAttribute("href"));
      if (
        section &&
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        moveIndicator(link);
        navMobileLinks.forEach((m) => {
          m.classList.toggle(
            "active",
            m.getAttribute("href") === link.getAttribute("href"),
          );
        });
      }
    });
  });
}

// THEME TOGGLE
function initThemeToggle() {
  var themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    function syncThemeIcon() {
      var cur = document.documentElement.getAttribute("data-theme") || "light";
      themeBtn.innerHTML =
        cur === "dark"
          ? '<img src="public/icons/sun.svg" alt="Sun" style="width:14px;height:14px">'
          : '<img src="public/icons/moon.svg" alt="Moon" style="width:14px;height:14px">';
      themeBtn.setAttribute(
        "title",
        cur === "dark" ? "Ganti ke Mode Terang (Light Mode)" : "Ganti ke Mode Gelap (Dark Mode)"
      );
    }
    syncThemeIcon();

    themeBtn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme") || "light";
      var nxt = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nxt);
      syncThemeIcon();
      playSound("click");
    });
  }
}

// AUDIO TOGGLE
function initAudioToggle() {
  var audioBtn = document.getElementById("audioBtn");
  if (audioBtn) {
    audioBtn.addEventListener("click", function () {
      initAudio();
      isAudioEnabled = !isAudioEnabled;
      this.classList.toggle("is-active", isAudioEnabled);
      this.innerHTML = isAudioEnabled
        ? '<img src="public/icons/volume-high.svg" alt="Volume High" style="width:14px;height:14px">'
        : '<img src="public/icons/volume-xmark.svg" alt="Volume Off" style="width:14px;height:14px">';
      if (isAudioEnabled) playSound("chime");
    });
  }
}

// CURSOR TOGGLE
function initCursorToggle() {
  var cursorBtn = document.getElementById("cursorBtn");
  if (cursorBtn) {
    cursorBtn.addEventListener("click", toggleCustomCursor);
  }
}

// BACK TO TOP
function initBackToTop() {
  window.addEventListener("scroll", function () {
    var btt = document.getElementById("backToTop");
    if (btt) {
      if (window.scrollY > 500) btt.classList.add("visible");
      else btt.classList.remove("visible");
    }
  });
}

// HERO TITLE ANIMATION
function initHeroTitle() {
  var heroTitleEl = document.getElementById("heroTitle");
  if (heroTitleEl) {
    function splitChars(str) {
      return str
        .split("")
        .map((c) => `<span class="char-span">${c}</span>`)
        .join("");
    }
    heroTitleEl.innerHTML = `
      <span class="lock">
        <span class="brand-red">${splitChars("Go")}</span><span class="brand-white">${splitChars("jukai")}</span><br>
        <span class="brand-red">${splitChars("Aceh")}</span>
      </span>
      <span class="sub">The art of <em>hard</em> and <em>soft</em></span>
    `;
  }

  var oathTitleEl = document.getElementById("oathTitle");
  if (oathTitleEl) {
    var words = oathTitleEl.innerText.split(" ");
    oathTitleEl.innerHTML = words
      .map((w) => `<span class="word-span">${w}</span>`)
      .join(" ");
  }

  var splashTextEl = document.getElementById("splashText");
  if (splashTextEl) {
    if (!splashTextEl.getAttribute("data-original-text")) {
      splashTextEl.setAttribute("data-original-text", splashTextEl.innerText);
    }
    triggerScramble(splashTextEl);
  }

  var brandGoEl = document.querySelector(".brand-go");
  if (brandGoEl) triggerScramble(brandGoEl);
}

// CALENDAR LINKS
function initCalendarLinks() {
  var linkGoogleCal = document.getElementById("linkGoogleCal");
  if (linkGoogleCal) {
    linkGoogleCal.addEventListener("click", function (e) {
      e.preventDefault();
      safeOpenUrl(buildGoogleCalendarUrl());
    });
  }

  var linkIcsCal = document.getElementById("linkIcsCal");
  if (linkIcsCal) {
    linkIcsCal.addEventListener("click", function (e) {
      e.preventDefault();
      downloadIcsFile();
    });
  }

  var btnLocCal = document.getElementById("btnLocationCalendar");
  if (btnLocCal) {
    btnLocCal.addEventListener("click", function () {
      safeOpenUrl(buildGoogleCalendarUrl());
    });
  }
}

// PDF BUTTON
function initPdfButton() {
  var btnDownloadBrochure = document.getElementById("btnDownloadBrochureForm");
  if (btnDownloadBrochure) {
    btnDownloadBrochure.addEventListener("click", generatePdfBrochure);
  }
}

// HERO BACKGROUND SLIDESHOW ROTATOR (15-Second Cycle)
function initHeroBackgroundSlideshow() {
  var slides = document.querySelectorAll(".hero-bg-slide");
  var dots = document.querySelectorAll(".hero-slide-dot");
  if (!slides || slides.length < 2) return;

  var preloadImg = new Image();
  preloadImg.src = "public/hero-bg-2.webp";

  var currentIdx = 0;
  var slideTimer = null;

  function setSlide(index) {
    slides[currentIdx].classList.remove("is-active");
    if (dots[currentIdx]) dots[currentIdx].classList.remove("is-active");

    currentIdx = index % slides.length;

    slides[currentIdx].classList.add("is-active");
    if (dots[currentIdx]) dots[currentIdx].classList.add("is-active");
  }

  function startCycle() {
    if (slideTimer) clearInterval(slideTimer);
    slideTimer = setInterval(function () {
      setSlide(currentIdx + 1);
    }, 15000); // 15 detik interval
  }

  dots.forEach(function (dot, idx) {
    dot.addEventListener("click", function () {
      setSlide(idx);
      startCycle();
    });
  });

  startCycle();
}

// MAIN INITIALIZATION
function safeInit(name, fn) {
  try {
    fn();
  } catch (err) {
    console.warn("[Init] " + name + " skipped or error:", err);
  }
}

function init() {
  document.body.classList.toggle(
    "mobile-performance-mode",
    isMobilePerformanceMode,
  );

  // Core UI setup with safe isolated runners
  safeInit("heroSlideshow", initHeroBackgroundSlideshow);
  safeInit("lenis", initLenis);
  safeInit("customCursor", initCustomCursor);
  safeInit("magneticBtns", initMagneticButtons);
  safeInit("kiaiShockwave", initKiaiShockwave);
  safeInit("scrambleEffects", initScrambleEffects);
  safeInit("tiltCards", initTiltCards);
  safeInit("themeToggle", initThemeToggle);
  safeInit("audioToggle", initAudioToggle);
  safeInit("cursorToggle", initCursorToggle);
  safeInit("navigation", initNavigation);
  safeInit("backToTop", initBackToTop);
  safeInit("calendarLinks", initCalendarLinks);
  safeInit("pdfButton", initPdfButton);
  safeInit("passClaim", initPassClaim);
  safeInit("waForm", initWaForm);
  safeInit("lightbox", initLightbox);
  safeInit("achievementShowcase", initAchievementShowcase);
  safeInit("achievementModal", initAchievementModal);

  // Build dynamic content
  safeInit("oathGrid", buildOathGrid);
  safeInit("historyTimeline", buildHistoryTimeline);
  safeInit("marqueeGallery", initMarqueeGallery);
  safeInit("beltSelector", buildBeltSelector);
  safeInit("waBeltOpts", buildWaBeltOpts);

  // Timers
  safeInit("countdown", function () {
    setInterval(updateClassCountdown, 1000);
    updateClassCountdown();
    setInterval(updateTime, 60000);
    updateTime();
  });

  // Hero title animation & scramble
  safeInit("heroTitle", initHeroTitle);

  // Initialize high-performance scroll reveal engine & counters
  safeInit("scrollRevealEngine", initScrollRevealEngine);
  safeInit("katanaReveals", initKatanaReveals);

  // Trigger hero animation and refresh ScrollTrigger on splash dismissal
  var animationsTriggered = false;
  function onSplashDismiss() {
    if (animationsTriggered) return;
    animationsTriggered = true;
    safeInit("animations", triggerAnimations);
    safeInit("scrollRevealEngine", initScrollRevealEngine);
    if (typeof ScrollTrigger !== "undefined") {
      setTimeout(function () {
        ScrollTrigger.refresh();
      }, 100);
    }
  }

  window.onSplashDismissed = onSplashDismiss;

  // Auto-dismiss check with shorter delay
  var dismissDelay = isMobilePerformanceMode ? 1600 : 1200;
  setTimeout(function () {
    dismissSplash();
    onSplashDismiss();
  }, dismissDelay);

  // Hard safety fallback (2.5s max)
  setTimeout(function () {
    dismissSplash();
    onSplashDismiss();
  }, 2500);
}

// Start when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
