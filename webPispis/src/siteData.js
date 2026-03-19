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
    ],
    chips: ["SwiftUI", "Lifestyle", "Çift Planlama", "App Store'a Hazır"],
    features: [
      "Özel gün takibi ve hatırlatıcılar",
      "Anı kaydetme ve ilişki notları",
      "Date idea ve karar destek araçları",
      "Seyahat ve mekan planlama",
    ],
    privacyUrl: `${base}hanimcilik/privacy.html`,
    supportUrl: "mailto:genezinsalih@gmail.com",
    ctaLabel: "App Store Linki Yakında",
    storeUrl: "mailto:genezinsalih@gmail.com",
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
    ctaLabel: "App Store'da Yakında",
    storeUrl: `${base}dugun-ajandasi/support.html`,
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
    ctaLabel: "App Store'da Yakında",
    storeUrl: `${base}pitpit-gebelik/support.html`,
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
    icon: `${base}pispis-bebek/site/iconpispis.png`,
    heroScreen: `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.39.36.png`,
    gallery: [
      `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.44.06.png`,
      `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.44.14.png`,
      `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.27.png`,
      `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.32.png`,
      `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.37.png`,
      `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.44.png`,
      `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.52.png`,
      `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.46.58.png`,
      `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.47.14.png`,
      `${base}pispis-bebek/site/Simulator%20Screenshot%20-%20iPhone%2011%20Pro%20Max%20-%202026-03-03%20at%2022.47.07.png`,
    ],
    chips: ["Local-first", "Bebek Takibi", "İstatistik", "iPhone"],
    features: [
      "Atak takvimi ve günlük kayıtlar",
      "Beslenme, uyku ve sağlık modülleri",
      "WHO uyumlu grafikler",
      "Rozetler ve analiz ekranları",
    ],
    privacyUrl: `${base}pispis-bebek/site/privacy.html`,
    supportUrl: `${base}pispis-bebek/site/terms.html`,
    ctaLabel: "App Store'a Git",
    storeUrl: "https://apps.apple.com/tr/app/p%C4%B1%C5%9Fp%C4%B1%C5%9F-bebek/id6759955301?l=tr",
    medicalNote: null,
  },
};

export const developerApps = [
  apps.hanimcilik,
  apps["dugun-ajandasi"],
  apps["pitpit-gebelik"],
  apps["pispis-bebek"],
];
