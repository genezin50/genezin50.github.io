const base = import.meta.env.BASE_URL;

const appAsset = (slug, file) => `${base}apps/${slug}/${file}`;

export const apps = {
  hanimcilik: {
    slug: "hanimcilik",
    eyebrow: "Relationship Lifestyle App",
    title: "Hanimcilik",
    heroTitle: "İlişkinizdeki güzel detayları tek yerde tutun.",
    heroSubtitle:
      "Özel günleri, anıları, planları ve günlük kararları daha keyifli hale getiren ilişki odaklı iPhone uygulaması.",
    description:
      "Hanimcilik; çiftlerin ilişkilerini daha düzenli, daha anlamlı ve daha keyifli yaşamalarına yardımcı olmak için tasarlanmış bir lifestyle uygulamasıdır.",
    locales: {
      tr: {
        eyebrow: "İlişki Odaklı Lifestyle Uygulaması",
        title: "Hanimcilik",
        heroTitle: "İlişkinizdeki güzel detayları tek yerde tutun.",
        heroSubtitle:
          "Özel günleri, anıları, planları ve günlük kararları daha keyifli hale getiren ilişki odaklı iPhone uygulaması.",
        description:
          "Hanimcilik; çiftlerin ilişkilerini daha düzenli, daha anlamlı ve daha keyifli yaşamalarına yardımcı olmak için tasarlanmış bir lifestyle uygulamasıdır.",
        chips: ["Native iOS", "Lifestyle", "Çift Planlama", "App Store'a Hazır"],
        features: [
          "Özel gün takibi ve hatırlatıcılar",
          "Anı kaydetme ve ilişki notları",
          "Date idea ve karar destek araçları",
          "Seyahat ve mekan planlama",
        ],
        ctaLabel: "App Store'dan İndir",
      },
      en: {
        eyebrow: "Relationship Lifestyle App",
        title: "Hanimcilik",
        heroTitle: "Keep the beautiful details of your relationship in one place.",
        heroSubtitle:
          "An iPhone app focused on relationships that makes special days, memories, plans, and daily decisions more enjoyable.",
        description:
          "Hanimcilik is a lifestyle app designed to help couples live their relationship in a more organized, meaningful, and enjoyable way.",
        chips: ["Native iOS", "Lifestyle", "Couple Planning", "App Store Ready"],
        features: [
          "Special date tracking and reminders",
          "Memory capture and relationship notes",
          "Date ideas and decision helpers",
          "Travel and venue planning",
        ],
        ctaLabel: "Download on the App Store",
      },
    },
    icon: appAsset("hanimcilik", "icon.png"),
    heroScreen: appAsset("hanimcilik", "screenshot-01.png"),
    gallery: [
      appAsset("hanimcilik", "screenshot-02.png"),
      appAsset("hanimcilik", "screenshot-03.png"),
      appAsset("hanimcilik", "screenshot-04.png"),
      appAsset("hanimcilik", "screenshot-05.png"),
      appAsset("hanimcilik", "screenshot-06.png"),
      appAsset("hanimcilik", "screenshot-07.png"),
      appAsset("hanimcilik", "screenshot-08.png"),
      appAsset("hanimcilik", "screenshot-09.png"),
      appAsset("hanimcilik", "screenshot-10.png"),
    ],
    chips: ["Native iOS", "Lifestyle", "Çift Planlama", "App Store'a Hazır"],
    features: [
      "Özel gün takibi ve hatırlatıcılar",
      "Anı kaydetme ve ilişki notları",
      "Date idea ve karar destek araçları",
      "Seyahat ve mekan planlama",
    ],
    privacyUrl: `${base}hanimcilik/privacy.html`,
    supportUrl: "mailto:genezinsalih@gmail.com",
    ctaLabel: "App Store'dan İndir",
    storeUrl: "https://apps.apple.com/tr/app/han%C4%B1mc%C4%B1l%C4%B1k/id6760728408?l=tr",
    medicalNote: null,
  },
  "dugun-ajandasi": {
    slug: "dugun-ajandasi",
    eyebrow: "Wedding Planner for iPhone",
    title: "Düğün Ajandası",
    heroTitle: "Düğün hazırlığınızı daha sakin ve daha düzenli yönetin.",
    heroSubtitle:
      "Görevler, bütçe, çeyiz listesi, davetliler ve özel günler için tek merkezli planlama deneyimi.",
    description:
      "Düğün Ajandası, evlilik hazırlığındaki çiftlerin tüm planlama sürecini daha kontrollü ve daha az stresli hale getirmek için tasarlanmış bir iPhone uygulamasıdır.",
    locales: {
      tr: {
        eyebrow: "iPhone için Düğün Planlayıcı",
        title: "Düğün Ajandası",
        heroTitle: "Düğün hazırlığınızı daha sakin ve daha düzenli yönetin.",
        heroSubtitle:
          "Görevler, bütçe, çeyiz listesi, davetliler ve özel günler için tek merkezli planlama deneyimi.",
        description:
          "Düğün Ajandası, evlilik hazırlığındaki çiftlerin tüm planlama sürecini daha kontrollü ve daha az stresli hale getirmek için tasarlanmış bir iPhone uygulamasıdır.",
        chips: ["Türkçe", "iPhone", "Google AdMob", "Planlama"],
        features: [
          "Görev oluşturma ve tamamlama",
          "Bütçe ve harcama takibi",
          "Çeyiz ve alınacaklar listesi",
          "Davetli ve katılım yönetimi",
        ],
        ctaLabel: "App Store'dan İndir",
      },
      en: {
        eyebrow: "Wedding Planner for iPhone",
        title: "Düğün Ajandası",
        heroTitle: "Manage your wedding prep more calmly and with better structure.",
        heroSubtitle:
          "A single planning experience for tasks, budget, dowry list, guests, and special dates.",
        description:
          "Düğün Ajandası is an iPhone app designed to help couples manage the entire wedding planning process with more control and less stress.",
        chips: ["Turkish", "iPhone", "Google AdMob", "Planning"],
        features: [
          "Create and complete tasks",
          "Track budget and expenses",
          "Dowry and shopping lists",
          "Guest and attendance management",
        ],
        ctaLabel: "Download on the App Store",
      },
    },
    icon: appAsset("dugun-ajandasi", "icon.png"),
    heroScreen: appAsset("dugun-ajandasi", "screenshot-01.png"),
    gallery: [
      appAsset("dugun-ajandasi", "screenshot-02.png"),
      appAsset("dugun-ajandasi", "screenshot-03.png"),
      appAsset("dugun-ajandasi", "screenshot-04.png"),
      appAsset("dugun-ajandasi", "screenshot-05.png"),
      appAsset("dugun-ajandasi", "screenshot-06.png"),
      appAsset("dugun-ajandasi", "screenshot-07.png"),
      appAsset("dugun-ajandasi", "screenshot-08.png"),
      appAsset("dugun-ajandasi", "screenshot-09.png"),
      appAsset("dugun-ajandasi", "screenshot-10.png"),
    ],
    chips: ["Türkçe", "iPhone", "Google AdMob", "Planlama"],
    features: [
      "Görev oluşturma ve tamamlama",
      "Bütçe ve harcama takibi",
      "Çeyiz ve alınacaklar listesi",
      "Davetli ve katılım yönetimi",
    ],
    privacyUrl: `${base}dugun-ajandasi/privacy.html`,
    supportUrl: `${base}dugun-ajandasi/support.html`,
    ctaLabel: "App Store'dan İndir",
    storeUrl: "https://apps.apple.com/tr/app/d%C3%BC%C4%9F%C3%BCn-ajandas%C4%B1/id6760776421?l=tr",
    medicalNote: null,
  },
  "pitpit-gebelik": {
    slug: "pitpit-gebelik",
    eyebrow: "Pregnancy Tracking Companion",
    title: "PıtPıt Gebelik",
    heroTitle: "Gebelik sürecinizi sakin, düzenli ve güven veren bir akışta takip edin.",
    heroSubtitle:
      "Randevular, bebeğin hareketleri, kasılmalar, semptomlar ve günlük sağlık kayıtları için tek mobil yardımcı.",
    description:
      "PıtPıt Gebelik, kullanıcıların gebelik sürecindeki günlük takibi kolaylaştırmak için geliştirilmiş bir iPhone uygulamasıdır. Kayıt, takip ve paylaşılabilir özetler tek deneyimde birleşir.",
    locales: {
      tr: {
        eyebrow: "Gebelik Takip Asistanı",
        title: "PıtPıt Gebelik",
        heroTitle: "Gebelik sürecinizi sakin, düzenli ve güven veren bir akışta takip edin.",
        heroSubtitle:
          "Randevular, bebeğin hareketleri, kasılmalar, semptomlar ve günlük sağlık kayıtları için tek mobil yardımcı.",
        description:
          "PıtPıt Gebelik, kullanıcıların gebelik sürecindeki günlük takibi kolaylaştırmak için geliştirilmiş bir iPhone uygulamasıdır. Kayıt, takip ve paylaşılabilir özetler tek deneyimde birleşir.",
        chips: ["Sağlık Kaydı", "Google AdMob", "ATT", "PDF Rapor"],
        features: [
          "Randevu planlama ve hatırlatma",
          "Tekme sayacı ve kasılma zamanlayıcı",
          "Tansiyon, kilo ve kan şekeri takibi",
          "Fotoğraf günlüğü ve doktor özeti",
        ],
        ctaLabel: "App Store'dan İndir",
        medicalNote:
          "PıtPıt Gebelik tıbbi tanı veya tedavi amacı taşımaz. Sağlıkla ilgili kararlar için doktorunuza danışmanız gerekir.",
      },
      en: {
        eyebrow: "Pregnancy Tracking Companion",
        title: "PıtPıt Gebelik",
        heroTitle: "Track your pregnancy in a calm, organized, and reassuring flow.",
        heroSubtitle:
          "A single mobile companion for appointments, baby movements, contractions, symptoms, and daily health records.",
        description:
          "PıtPıt Gebelik is an iPhone app built to make daily pregnancy tracking easier. Recording, tracking, and shareable summaries come together in one experience.",
        chips: ["Health Logs", "Google AdMob", "ATT", "PDF Report"],
        features: [
          "Appointment planning and reminders",
          "Kick counter and contraction timer",
          "Blood pressure, weight, and glucose tracking",
          "Photo journal and doctor summary",
        ],
        ctaLabel: "Download on the App Store",
        medicalNote:
          "PıtPıt Gebelik does not provide medical diagnosis or treatment. Consult your doctor for health-related decisions.",
      },
    },
    icon: appAsset("pitpit-gebelik", "icon.png"),
    heroScreen: appAsset("pitpit-gebelik", "screenshot-01.png"),
    gallery: [
      appAsset("pitpit-gebelik", "screenshot-02.png"),
      appAsset("pitpit-gebelik", "screenshot-03.png"),
      appAsset("pitpit-gebelik", "screenshot-04.png"),
      appAsset("pitpit-gebelik", "screenshot-05.png"),
      appAsset("pitpit-gebelik", "screenshot-06.png"),
      appAsset("pitpit-gebelik", "screenshot-07.png"),
      appAsset("pitpit-gebelik", "screenshot-08.png"),
      appAsset("pitpit-gebelik", "screenshot-09.png"),
    ],
    chips: ["Sağlık Kaydı", "Google AdMob", "ATT", "PDF Rapor"],
    features: [
      "Randevu planlama ve hatırlatma",
      "Tekme sayacı ve kasılma zamanlayıcı",
      "Tansiyon, kilo ve kan şekeri takibi",
      "Fotoğraf günlüğü ve doktor özeti",
    ],
    privacyUrl: `${base}pitpit-gebelik/privacy.html`,
    supportUrl: `${base}pitpit-gebelik/support.html`,
    ctaLabel: "App Store'dan İndir",
    storeUrl: "https://apps.apple.com/tr/app/pitpit-gebelik/id6760829989?l=tr",
    medicalNote:
      "PıtPıt Gebelik tıbbi tanı veya tedavi amacı taşımaz. Sağlıkla ilgili kararlar için doktorunuza danışmanız gerekir.",
  },
  "pispis-bebek": {
    slug: "pispis-bebek",
    eyebrow: "Baby Growth Assistant",
    title: "PışPış",
    heroTitle: "Bebeğinizin gelişimini modern ve sıcak bir deneyimde takip edin.",
    heroSubtitle:
      "Beslenme, uyku, atak haftaları ve sağlık kayıtları için yerel veri odaklı iOS yardımcısı.",
    description:
      "PışPış, ferah arayüzü ve güçlü takip modülleriyle ebeveynlerin günlük akışını hafifleten modern bir iPhone uygulamasıdır.",
    locales: {
      tr: {
        eyebrow: "Bebek Gelişim Asistanı",
        title: "PışPış",
        heroTitle: "Bebeğinizin gelişimini modern ve sıcak bir deneyimde takip edin.",
        heroSubtitle:
          "Beslenme, uyku, atak haftaları ve sağlık kayıtları için yerel veri odaklı iOS yardımcısı.",
        description:
          "PışPış, ferah arayüzü ve güçlü takip modülleriyle ebeveynlerin günlük akışını hafifleten modern bir iPhone uygulamasıdır.",
        chips: ["Local-first", "Bebek Takibi", "İstatistik", "iPhone"],
        features: [
          "Atak takvimi ve günlük kayıtlar",
          "Beslenme, uyku ve sağlık modülleri",
          "WHO uyumlu grafikler",
          "Rozetler ve analiz ekranları",
        ],
        ctaLabel: "App Store'dan İndir",
      },
      en: {
        eyebrow: "Baby Growth Assistant",
        title: "PışPış",
        heroTitle: "Track your baby's growth in a modern, warm experience.",
        heroSubtitle: "A local-first iOS companion for feeding, sleep, leap weeks, and health records.",
        description:
          "PışPış is a modern iPhone app that eases parents’ daily flow with a clean interface and powerful tracking modules.",
        chips: ["Local-first", "Baby Tracking", "Insights", "iPhone"],
        features: [
          "Leap week calendar and daily logs",
          "Feeding, sleep, and health modules",
          "WHO-compliant charts",
          "Badges and analytics screens",
        ],
        ctaLabel: "Download on the App Store",
      },
    },
    icon: `${base}site/iconpispis.png`,
    heroScreen: `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.39.36.png`,
    gallery: [
      `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.44.06.png`,
      `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.44.14.png`,
      `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.27.png`,
      `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.32.png`,
      `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.37.png`,
      `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.44.png`,
      `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.52.png`,
      `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.58.png`,
      `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.47.14.png`,
      `${base}site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.47.07.png`,
    ],
    chips: ["Local-first", "Bebek Takibi", "İstatistik", "iPhone"],
    features: [
      "Atak takvimi ve günlük kayıtlar",
      "Beslenme, uyku ve sağlık modülleri",
      "WHO uyumlu grafikler",
      "Rozetler ve analiz ekranları",
    ],
    privacyUrl: `${base}site/privacy.html`,
    supportUrl: `${base}site/terms.html`,
    ctaLabel: "App Store'dan İndir",
    storeUrl: "https://apps.apple.com/tr/app/p%C4%B1%C5%9Fp%C4%B1%C5%9F-bebek/id6760834342?l=tr",
    medicalNote: null,
  },
  "dualshot-recorder": {
    slug: "dualshot-recorder",
    eyebrow: "Creator Camera App",
    title: "DualShot Recorder",
    heroTitle: "Record once. Publish everywhere.",
    heroSubtitle:
      "Capture a single take and instantly create portrait and landscape outputs for TikTok, Instagram Reels, and YouTube.",
    description:
      "DualShot Recorder streamlines creator workflows with live framing guides, smart framing assist, quick trim tools, and a fast export pipeline for every major format.",
    locales: {
      tr: {
        eyebrow: "Creator Kamera Uygulaması",
        title: "DualShot Recorder",
        heroTitle: "Bir kez kaydet. Her yere yayınla.",
        heroSubtitle:
          "Tek çekimle TikTok, Instagram Reels ve YouTube için dikey ve yatay çıktılarını anında üret.",
        description:
          "DualShot Recorder; canlı framing kılavuzları, akıllı framing desteği, hızlı trim araçları ve tüm ana formatlar için hızlı dışa aktarma akışıyla üretici iş akışlarını hızlandırır.",
        chips: ["Creator Workflow", "Çift Format", "Framing Assist", "iPhone"],
        features: [
          "Tek çekimle dikey ve yatay çıktı",
          "Çekim sırasında canlı framing kılavuzları",
          "Ekstra güven için akıllı framing desteği",
          "Çekim sonrası hızlı kırpma araçları",
          "Daha güçlü küçük resimler için cover frame seçimi",
          "Saniyeler içinde Save All ve Share All",
          "Geçmiş seanslara yeniden erişim için yerleşik galeri",
          "Creator iş akışları için hız odaklı tasarım",
        ],
        ctaLabel: "App Store'dan İndir",
      },
      en: {
        eyebrow: "Creator Camera App",
        title: "DualShot Recorder",
        heroTitle: "Record once. Publish everywhere.",
        heroSubtitle:
          "Capture a single take and instantly create portrait and landscape outputs for TikTok, Instagram Reels, and YouTube.",
        description:
          "DualShot Recorder streamlines creator workflows with live framing guides, smart framing assist, quick trim tools, and a fast export pipeline for every major format.",
        chips: ["Creator Workflow", "Dual Format", "Framing Assist", "iPhone"],
        features: [
          "Record once, export portrait and landscape outputs",
          "Live framing guides while you shoot",
          "Smart framing assist for extra confidence",
          "Quick trim tools right after capture",
          "Cover frame picker for stronger thumbnails",
          "Save All and Share All actions in seconds",
          "Built-in gallery for reopening past sessions",
          "Designed for speed across creator workflows",
        ],
        ctaLabel: "Download on the App Store",
      },
    },
    icon: appAsset("dualshot-recorder", "appicon.png"),
    heroScreen: appAsset("dualshot-recorder", "01-post-everywhere.png"),
    gallery: [
      appAsset("dualshot-recorder", "02-dual-framing.png"),
      appAsset("dualshot-recorder", "03-single-framing.png"),
      appAsset("dualshot-recorder", "04-settings-control.png"),
      appAsset("dualshot-recorder", "05-create-faster.png"),
    ],
    chips: ["Creator Workflow", "Dual Format", "Framing Assist", "iPhone"],
    features: [
      "Record once, export portrait and landscape outputs",
      "Live framing guides while you shoot",
      "Smart framing assist for extra confidence",
      "Quick trim tools right after capture",
      "Cover frame picker for stronger thumbnails",
      "Save All and Share All actions in seconds",
      "Built-in gallery for reopening past sessions",
      "Designed for speed across creator workflows",
    ],
    privacyUrl: `${base}dualshot-recorder/privacy.html`,
    supportUrl: `${base}dualshot-recorder/support.html`,
    ctaLabel: "Download on the App Store",
    storeUrl: "https://apps.apple.com/tr/app/dualshot-recorder/id6761522885?l=tr",
    medicalNote: null,
  },
  "laser-eyes-ghost-rescue": {
    slug: "laser-eyes-ghost-rescue",
    eyebrow: "Face-Tracked Arcade Game",
    title: "Laser Eyes: Ghost Rescue",
    heroTitle: "You play with your face.",
    heroSubtitle:
      "A neon iPhone arcade game that uses the front camera. Aim with your eyes, blink or tap to fire, blast ghosts, and keep the cats safe.",
    description:
      "Laser Eyes: Ghost Rescue is a fast, funny, portrait-first arcade loop built for instant replays, neon chaos, and viral reactions.",
    locales: {
      en: {
        eyebrow: "Face-Tracked Arcade Game",
        title: "Laser Eyes: Ghost Rescue",
        heroTitle: "You play with your face.",
        heroSubtitle:
          "A neon iPhone arcade game that uses the front camera. Aim with your eyes, blink or tap to fire, blast ghosts, and keep the cats safe.",
        description:
          "Laser Eyes: Ghost Rescue is a fast, funny, portrait-first arcade loop built for instant replays, neon chaos, and viral reactions.",
        chips: ["iPhone", "Front Camera", "Arcade", "Portrait"],
        features: [
          "Live face camera gameplay",
          "Hybrid eye aim with blink or tap fire",
          "Ghost waves and mini boss events",
          "Power-ups, coins, and cosmetics",
        ],
        ctaLabel: "App Store — Coming Soon",
        secondaryLabel: "Privacy",
      },
      tr: {
        eyebrow: "Yüz Takipli Arcade Oyunu",
        title: "Laser Eyes: Ghost Rescue",
        heroTitle: "Yüzünle oynarsın.",
        heroSubtitle:
          "Ön kamerayı kullanan neon iPhone arcade oyunu. Gözünle nişan al, blink veya dokunarak ateş et, ghost’ları vur, kedileri koru.",
        description:
          "Laser Eyes: Ghost Rescue hızlı, komik ve portrait-first bir arcade döngüsü; neon kaos, viral tepki ve anında tekrar oynanma için tasarlandı.",
        chips: ["iPhone", "Ön Kamera", "Arcade", "Portrait"],
        features: [
          "Canlı yüz kamera oyun akışı",
          "Blink veya tap ile hibrit nişan",
          "Ghost dalgaları ve mini boss event’leri",
          "Power-up, coin ve cosmetic progression",
        ],
        ctaLabel: "App Store — Yakında",
        secondaryLabel: "Gizlilik",
      },
    },
    icon: appAsset("laser-eyes-ghost-rescue", "app-icon.png"),
    heroScreen: appAsset("laser-eyes-ghost-rescue", "01-laser-eyes-start.png"),
    gallery: [
      appAsset("laser-eyes-ghost-rescue", "02-ready-in-seconds.png"),
      appAsset("laser-eyes-ghost-rescue", "03-live-run.png"),
      appAsset("laser-eyes-ghost-rescue", "04-reward-loop.png"),
      appAsset("laser-eyes-ghost-rescue", "05-share-the-chaos.png"),
    ],
    chips: ["iPhone", "Front Camera", "Arcade", "Portrait"],
    features: [
      "Live face camera gameplay",
      "Hybrid eye aim with blink or tap fire",
      "Ghost waves and mini boss events",
      "Power-ups, coins, and cosmetics",
    ],
    privacyUrl: `${base}laser-eyes-ghost-rescue/privacy.html`,
    supportUrl: `${base}laser-eyes-ghost-rescue/support.html`,
    ctaLabel: "App Store — Coming Soon",
    secondaryLabel: "Privacy",
    secondaryUrl: `${base}laser-eyes-ghost-rescue/privacy.html`,
    storeUrl: "https://apps.apple.com/tr/app/id6761546813?l=tr",
    medicalNote: null,
  },
  "lift-log-pro": {
    slug: "lift-log-pro",
    eyebrow: "Strength Training App",
    title: "Lift Log Pro",
    description:
      "A focused strength training app for lifters who want built-in 5x5-style programs, fast logging, progress analytics and zero account friction.",
    locales: {
      tr: {
        eyebrow: "Güç Antrenmanı Uygulaması",
        title: "Lift Log Pro",
        description:
          "Yerleşik 5x5 tarzı programlar, hızlı loglama, progresyon analizleri ve sıfır hesap sürtünmesi isteyen sporcular için odaklı bir güç antrenmanı uygulaması.",
        ctaLabel: "App Store'dan İndir",
        secondaryLabel: "Gizlilik",
      },
      en: {
        eyebrow: "Strength Training App",
        title: "Lift Log Pro",
        description:
          "A focused strength training app for lifters who want built-in 5x5-style programs, fast logging, progress analytics and zero account friction.",
        ctaLabel: "Download on the App Store",
        secondaryLabel: "Privacy",
      },
    },
    icon: appAsset("lift-log-pro", "icon.svg"),
    gallery: [
      appAsset("lift-log-pro", "screenshot-01.png"),
      appAsset("lift-log-pro", "screenshot-02.png"),
    ],
    ctaLabel: "Download on the App Store",
    secondaryLabel: "Privacy",
    secondaryUrl: `${base}lift-log-pro/privacy.html`,
    privacyUrl: `${base}lift-log-pro/privacy.html`,
    storeUrl: "https://apps.apple.com/tr/app/liftlog5x5pro/id6760855317?l=tr",
  },
};

export const developerApps = [
  apps.hanimcilik,
  apps["dugun-ajandasi"],
  apps["pitpit-gebelik"],
  apps["pispis-bebek"],
  apps["dualshot-recorder"],
  apps["laser-eyes-ghost-rescue"],
  apps["lift-log-pro"],
];
