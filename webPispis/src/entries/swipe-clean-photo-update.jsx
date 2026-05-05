import React from "react";
import ReactDOM from "react-dom/client";
import { AppLandingPage } from "../components";
import { apps } from "../siteData";
import "../styles.css";
import { setupSystemTheme } from "../theme";
import { LanguageProvider } from "../i18n";

setupSystemTheme();

const swipeCleanPhotoUpdate = {
  ...apps["swipe-clean-photo"],
  eyebrow: "Photo Cleanup Update",
  heroTitle: "A safer, smarter cleanup flow.",
  heroSubtitle: "Review, resume, and manage cleanup with more control.",
  description:
    "Swipe Clean Photo now gives you more confidence before deleting media. Check selected photos in a compact gallery, jump back into cleanup from the exact place you left off, and use improved Settings with updated themes, About, and privacy details.",
  chips: ["Compact delete review", "Resume cleanup", "Month picker", "Improved settings"],
  features: [
    "Review selected photos in a compact gallery before permanently deleting them",
    "Continue from where you left off, jump to the newest kept photo, or start from a selected month",
    "Improved Settings with updated themes, About section, and privacy information",
    "The same focused swipe cleanup experience, still designed for on-device privacy",
  ],
  locales: {
    ...apps["swipe-clean-photo"].locales,
    tr: {
      ...apps["swipe-clean-photo"].locales.tr,
      eyebrow: "Fotoğraf Temizleme Güncellemesi",
      title: "Swipe Clean Photo",
      heroTitle: "Daha güvenli ve kontrollü temizlik.",
      heroSubtitle: "Silmeden önce kontrol edin, kaldığınız yerden devam edin.",
      description:
        "Swipe Clean Photo yeni güncellemeyle fotoğraf temizliğini daha güvenli ve akıcı hale getirir. Seçilen fotoğrafları kalıcı olarak silmeden önce kompakt galeride tekrar kontrol edin, kaldığınız yerden devam edin ve geliştirilmiş Ayarlar bölümünü kullanın.",
      chips: ["Kompakt silme kontrolü", "Kaldığın yerden devam", "Aya göre başla", "Gelişmiş Ayarlar"],
      features: [
        "Seçilen fotoğrafları kalıcı olarak silmeden önce kompakt bir galeride tekrar kontrol edin",
        "Kaldığınız yerden devam edin, en yeni tutulan fotoğrafa gidin veya seçtiğiniz aydan başlayın",
        "Güncellenen temalar, Hakkında bölümü ve gizlilik bilgileriyle geliştirilmiş Ayarlar",
        "Aynı hızlı swipe deneyimi, yine cihaz üzerinde gizlilik odağıyla çalışır",
      ],
      ctaLabel: "App Store'dan İndir",
      secondaryLabel: "Gizlilik",
    },
    en: {
      ...apps["swipe-clean-photo"].locales.en,
      eyebrow: "Photo Cleanup Update",
      title: "Swipe Clean Photo",
      heroTitle: "A safer, smarter cleanup flow.",
      heroSubtitle: "Review, resume, and manage cleanup with more control.",
      description:
        "Swipe Clean Photo now gives you more confidence before deleting media. Check selected photos in a compact gallery, jump back into cleanup from the exact place you left off, and use improved Settings with updated themes, About, and privacy details.",
      chips: ["Compact delete review", "Resume cleanup", "Month picker", "Improved settings"],
      features: [
        "Review selected photos in a compact gallery before permanently deleting them",
        "Continue from where you left off, jump to the newest kept photo, or start from a selected month",
        "Improved Settings with updated themes, About section, and privacy information",
        "The same focused swipe cleanup experience, still designed for on-device privacy",
      ],
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <AppLandingPage app={swipeCleanPhotoUpdate} />
    </LanguageProvider>
  </React.StrictMode>
);
