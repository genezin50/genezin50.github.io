import { motion } from "framer-motion";
import React from "react";
import { Header, SiteFrame } from "./components";
import { useLanguage } from "./i18n";

const base = import.meta.env.BASE_URL;

const asset = (file) => `${base}apps/laser-eyes-ghost-rescue/${file}`;

  const gallery = [
    asset("01-laser-eyes-start.png"),
    asset("02-ready-in-seconds.png"),
    asset("03-live-run.png"),
    asset("04-reward-loop.png"),
    asset("05-share-the-chaos.png"),
  ];
  const storeUrl = "https://apps.apple.com/tr/app/id6761546813?l=tr";

const copyByLang = {
  en: {
    nav: {
      how: "How It Works",
      features: "Features",
      bosses: "Bosses & Rewards",
      faq: "FAQ",
    },
    hero: {
      badge: "Arcade iPhone game · Front camera + eye aim",
      headline: "You play with your face.",
      subhead:
        "Laser Eyes: Ghost Rescue turns your front camera into a premium arcade loop. Aim with your eyes, blink or tap to fire, blast ghosts, and keep the cats safe.",
      ctaPrimary: "App Store — Coming Soon",
      ctaSecondary: "Watch How It Works",
      note: "Portrait-first · Fast sessions · Viral reactions",
    },
    slogan: {
      kicker: "Premium arcade energy",
      title: "Fast, funny, and built for replays.",
      body:
        "Every run is a tight loop: jump in, lock targets with your eyes, clear waves, grab power-ups, and chase a higher score in under two minutes.",
    },
    how: {
      title: "How it works",
      steps: [
        {
          title: "Live face view",
          body: "The front camera keeps you in the frame so the game feels personal and instantly shareable.",
        },
        {
          title: "Hybrid eye aim",
          body: "Your gaze sets the target. Blink or tap to fire — play hands-free or with quick taps.",
        },
        {
          title: "Ghost waves",
          body: "Clear waves, survive mini boss events, and protect the cats before they panic.",
        },
      ],
    },
    features: {
      title: "Core features",
      items: [
        "Front camera live gameplay in portrait",
        "Hybrid eye-aim system with blink or tap firing",
        "Ghost waves + mini boss encounters",
        "Power-ups that change your rhythm mid-run",
        "Coins, unlocks, and cosmetic rewards",
        "Speedy replay loop for one-more-run energy",
      ],
    },
    bosses: {
      title: "Bosses, rewards, cosmetics",
      body:
        "Beat mini bosses to unlock neon masks, laser colors, and cat guardians. Every run feeds progression so the next session feels fresh.",
      cards: [
        {
          title: "Mini boss events",
          body: "Short spikes of chaos that test your aim and timing before the next wave.",
        },
        {
          title: "Power-up chain",
          body: "Stack lasers, slow time, or drop a rescue shield to save the cats.",
        },
        {
          title: "Cosmetic unlocks",
          body: "Collect coins to unlock skins, effects, and neon variants that pop on camera.",
        },
      ],
    },
    showcase: {
      title: "Screenshots & mockups",
      body: "Screens will be added next. Placeholders below show the intended layout.",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Does the game store my camera footage?",
          a: "No. Camera access is used only for gameplay, and footage is not uploaded or stored by default.",
        },
        {
          q: "Do I need to blink to play?",
          a: "No. You can blink or tap — the hybrid control system supports both.",
        },
        {
          q: "Is this optimized for iPhone?",
          a: "Yes. It is built for iPhone in portrait with a fast mobile-first loop.",
        },
        {
          q: "When will it be on the App Store?",
          a: "Soon. The App Store button will update as soon as the page is live.",
        },
      ],
    },
    cta: {
      title: "Ready to aim with your eyes?",
      body: "Laser Eyes: Ghost Rescue is built for instant fun, viral reactions, and fast replays.",
      primary: "App Store — Coming Soon",
      secondary: "Contact Support",
    },
    footer: {
      support: "Support",
      privacy: "Privacy",
      company: "[Company Name Placeholder]",
      email: "[support@email.placeholder]",
    },
  },
  es: {
    nav: {
      how: "Cómo funciona",
      features: "Funciones",
      bosses: "Jefes y Recompensas",
      faq: "FAQ",
    },
    hero: {
      badge: "Juego arcade para iPhone · Cámara frontal + mirada",
      headline: "Juegas con tu cara.",
      subhead:
        "Laser Eyes: Ghost Rescue convierte tu cámara frontal en un bucle arcade premium. Apunta con la mirada, parpadea o toca para disparar, elimina fantasmas y protege a los gatos.",
      ctaPrimary: "App Store — Próximamente",
      ctaSecondary: "Cómo funciona",
      note: "Portrait-first · Sesiones rápidas · Reacciones virales",
    },
    slogan: {
      kicker: "Energía arcade premium",
      title: "Rápido, divertido y pensado para repetir.",
      body:
        "Cada partida es un bucle corto: entra, fija objetivos con la mirada, limpia oleadas, toma power-ups y busca una mejor puntuación en menos de dos minutos.",
    },
    how: {
      title: "Cómo funciona",
      steps: [
        {
          title: "Vista facial en vivo",
          body: "La cámara frontal te mantiene en cuadro para que el juego sea personal y fácil de compartir.",
        },
        {
          title: "Puntería con la mirada",
          body: "Tu mirada marca el objetivo. Parpadea o toca para disparar: manos libres o taps rápidos.",
        },
        {
          title: "Oleadas de fantasmas",
          body: "Limpia oleadas, sobrevive mini jefes y protege a los gatos antes de que entren en pánico.",
        },
      ],
    },
    features: {
      title: "Funciones clave",
      items: [
        "Juego en vivo con cámara frontal en formato portrait",
        "Sistema híbrido de puntería con parpadeo o toque",
        "Oleadas de fantasmas + mini jefes",
        "Power-ups que cambian tu ritmo de juego",
        "Monedas, desbloqueos y cosméticos",
        "Bucle de rejuego rápido para otro intento más",
      ],
    },
    bosses: {
      title: "Jefes, recompensas y cosméticos",
      body:
        "Derrota mini jefes para desbloquear máscaras neón, colores de láser y guardianes felinos. Cada partida alimenta la progresión.",
      cards: [
        {
          title: "Eventos de mini jefes",
          body: "Picos de caos que ponen a prueba tu puntería y timing.",
        },
        {
          title: "Cadena de power-ups",
          body: "Potencia láseres, ralentiza el tiempo o despliega un escudo de rescate.",
        },
        {
          title: "Desbloqueos cosméticos",
          body: "Consigue monedas para skins, efectos y variantes neón que destacan en cámara.",
        },
      ],
    },
    showcase: {
      title: "Capturas y mockups",
      body: "Las capturas se añadirán pronto. Los placeholders muestran el layout final.",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "¿El juego guarda mis videos de cámara?",
          a: "No. La cámara se usa solo para gameplay y no se sube ni se guarda por defecto.",
        },
        {
          q: "¿Necesito parpadear para jugar?",
          a: "No. Puedes parpadear o tocar; el sistema híbrido soporta ambos.",
        },
        {
          q: "¿Está optimizado para iPhone?",
          a: "Sí. Está diseñado para iPhone en portrait con un bucle rápido mobile-first.",
        },
        {
          q: "¿Cuándo estará en App Store?",
          a: "Pronto. El botón se actualizará en cuanto esté disponible.",
        },
      ],
    },
    cta: {
      title: "¿Listo para apuntar con la mirada?",
      body: "Laser Eyes: Ghost Rescue está hecho para diversión instantánea y partidas rápidas.",
      primary: "App Store — Próximamente",
      secondary: "Contactar soporte",
    },
    footer: {
      support: "Soporte",
      privacy: "Privacidad",
      company: "[Company Name Placeholder]",
      email: "[support@email.placeholder]",
    },
  },
  tr: {
    nav: {
      how: "Nasıl Çalışır",
      features: "Özellikler",
      bosses: "Bosslar & Ödüller",
      faq: "SSS",
    },
    hero: {
      badge: "Arcade iPhone oyunu · Ön kamera + göz nişanı",
      headline: "Yüzünle oynarsın.",
      subhead:
        "Laser Eyes: Ghost Rescue, ön kameranı premium bir arcade döngüsüne çevirir. Gözünle nişan al, blink veya dokunarak ateş et, ghost’ları vur, kedileri koru.",
      ctaPrimary: "App Store — Yakında",
      ctaSecondary: "Nasıl Çalışıyor",
      note: "Portrait-first · Hızlı seanslar · Viral tepki",
    },
    slogan: {
      kicker: "Premium arcade enerjisi",
      title: "Hızlı, komik ve tekrar oynanır.",
      body:
        "Her koşu kısa ve net: gir, gözünle hedefi kilitle, dalgaları temizle, power-up al ve iki dakikadan kısa sürede daha iyi skor için dön.",
    },
    how: {
      title: "Nasıl çalışır",
      steps: [
        {
          title: "Canlı yüz görünümü",
          body: "Ön kamera seni kadrajda tutar; oyun kişisel ve paylaşılabilir hissettirir.",
        },
        {
          title: "Hibrit göz nişanı",
          body: "Bakışın hedefi belirler. Blink veya dokunarak ateş et — el serbest veya hızlı tap.",
        },
        {
          title: "Ghost dalgaları",
          body: "Dalgaları temizle, mini boss event’lerinde hayatta kal ve kedileri kurtar.",
        },
      ],
    },
    features: {
      title: "Ana özellikler",
      items: [
        "Portrait modda ön kamera ile canlı oyun",
        "Blink veya tap ile ateşlenen hibrit nişan",
        "Ghost dalgaları + mini boss karşılaşmaları",
        "Ritmi değiştiren power-up’lar",
        "Coin, unlock ve cosmetic progression",
        "Hızlı tekrar oynama döngüsü",
      ],
    },
    bosses: {
      title: "Bosslar, ödüller, kozmetikler",
      body:
        "Mini bossları yen, neon maskeler, lazer renkleri ve kedi koruyucular aç. Her koşu ilerlemeyi besler.",
      cards: [
        {
          title: "Mini boss event’leri",
          body: "Nişan ve zamanlamanı test eden kısa kaos patlamaları.",
        },
        {
          title: "Power-up zinciri",
          body: "Lazerleri güçlendir, zamanı yavaşlat veya kedileri koruyan kalkan düşür.",
        },
        {
          title: "Cosmetic unlock’lar",
          body: "Coin biriktir, maskeler, efektler ve kamerada parlayan neon varyantlar aç.",
        },
      ],
    },
    showcase: {
      title: "Ekran görüntüleri & mockup",
      body: "Ekranlar daha sonra eklenecek. Aşağıdaki alanlar yerleşimi gösterir.",
    },
    faq: {
      title: "SSS",
      items: [
        {
          q: "Kamera görüntülerim kaydediliyor mu?",
          a: "Hayır. Kamera erişimi sadece oyun için kullanılır; görüntüler varsayılan olarak yüklenmez veya saklanmaz.",
        },
        {
          q: "Blink kullanmak zorunda mıyım?",
          a: "Hayır. Blink veya tap ile oynayabilirsin; sistem ikisini de destekler.",
        },
        {
          q: "iPhone için optimize mi?",
          a: "Evet. iPhone’da portrait mod için tasarlandı ve hızlı bir oyun döngüsü sunar.",
        },
        {
          q: "App Store’a ne zaman gelecek?",
          a: "Yakında. Sayfa yayına alındığında buton güncellenecek.",
        },
      ],
    },
    cta: {
      title: "Gözlerinle nişan almaya hazır mısın?",
      body: "Laser Eyes: Ghost Rescue hızlı eğlence, viral tepki ve tekrar oynama için tasarlandı.",
      primary: "App Store — Yakında",
      secondary: "Desteğe Yaz",
    },
    footer: {
      support: "Destek",
      privacy: "Gizlilik",
      company: "[Şirket Adı Placeholder]",
      email: "[destek@eposta.placeholder]",
    },
  },
};

export function LaserEyesPage() {
  const { lang } = useLanguage();
  const copy = copyByLang[lang] || copyByLang.en;

  return (
    <SiteFrame>
      <Header
        title="Laser Eyes"
        links={[
          { href: "#how", label: copy.nav.how },
          { href: "#features", label: copy.nav.features },
          { href: "#bosses", label: copy.nav.bosses },
          { href: "#faq", label: copy.nav.faq },
        ]}
        action={
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="squircle rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:translate-y-[-1px] hover:bg-[#1f2634]"
          >
            App Store
          </a>
        }
      />

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pt-14">
        <section className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <span className="squircle inline-flex rounded-full border border-sky/45 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink/75 dark:bg-white/10 dark:text-white/70">
              {copy.hero.badge}
            </span>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-6xl">{copy.hero.headline}</h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70">{copy.hero.subhead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="squircle inline-flex items-center gap-3 rounded-2xl bg-ink px-7 py-4 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                {copy.hero.ctaPrimary}
              </a>
              <a
                href="#how"
                className="surface-card squircle inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-base font-semibold text-ink"
              >
                {copy.hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-5 text-sm text-ink/60">{copy.hero.note}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[42px] bg-gradient-to-br from-lilac/40 via-peach/30 to-sky/40 blur-3xl" />
            <div className="surface-card squircle rounded-[38px] p-4">
              <img src={gallery[0]} alt="Laser Eyes hero screenshot" className="squircle w-full rounded-[28px]" />
            </div>
          </motion.div>
        </section>

        <section className="mt-20 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">{copy.slogan.kicker}</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.slogan.title}</h2>
            <p className="mt-4 text-lg text-ink/70">{copy.slogan.body}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.how.steps.map((step) => (
              <div key={step.title} className="surface-card squircle rounded-[28px] p-6">
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="mt-20">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">{copy.how.title}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{copy.hero.headline}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.how.steps.map((step) => (
              <div key={step.title} className="surface-card squircle rounded-[28px] p-6">
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mt-20">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">{copy.features.title}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{copy.hero.headline}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.features.items.map((item) => (
              <div key={item} className="surface-card squircle rounded-[24px] p-5 text-sm text-ink/80">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="bosses" className="mt-20">
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">{copy.bosses.title}</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{copy.bosses.title}</h2>
              <p className="mt-4 text-lg text-ink/70">{copy.bosses.body}</p>
            </div>
            <div className="grid gap-4">
              {copy.bosses.cards.map((card) => (
                <div key={card.title} className="surface-card squircle rounded-[28px] p-6">
                  <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">{copy.showcase.title}</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{copy.showcase.title}</h2>
            </div>
            <p className="max-w-xl text-sm text-ink/60">{copy.showcase.body}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((shot) => (
              <div key={shot} className="surface-card squircle rounded-[28px] p-3">
                <img src={shot} alt="Laser Eyes placeholder" className="squircle w-full rounded-[22px]" />
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-20">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">{copy.faq.title}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{copy.faq.title}</h2>
          </div>
          <div className="grid gap-4">
            {copy.faq.items.map((item) => (
              <div key={item.q} className="surface-card squircle rounded-[28px] p-6">
                <h3 className="text-lg font-semibold text-ink">{item.q}</h3>
                <p className="mt-2 text-sm text-ink/70">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className="mt-20">
          <div className="surface-card squircle rounded-[32px] bg-gradient-to-r from-white/70 via-[#fff8f5]/80 to-[#f8f3ff]/75 p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">Laser Eyes</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.cta.title}</h2>
            <p className="mt-3 text-sm text-ink/70">{copy.cta.body}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="squircle rounded-2xl bg-ink px-6 py-3 text-sm font-semibold text-white shadow-card"
              >
                {copy.cta.primary}
              </a>
              <a
                href={`${base}laser-eyes-ghost-rescue/support.html`}
                className="surface-card squircle rounded-2xl px-6 py-3 text-sm font-semibold text-ink"
              >
                {copy.cta.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/40">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 md:px-8">
          <div>
            <p className="text-sm font-semibold text-ink">Laser Eyes: Ghost Rescue</p>
            <p className="text-xs text-ink/60">{copy.footer.company}</p>
            <p className="text-xs text-ink/60">{copy.footer.email}</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-ink/70">
            <a href={`${base}laser-eyes-ghost-rescue/support.html`} className="transition hover:text-ink">
              {copy.footer.support}
            </a>
            <a href={`${base}laser-eyes-ghost-rescue/privacy.html`} className="transition hover:text-ink">
              {copy.footer.privacy}
            </a>
          </div>
        </div>
      </footer>
    </SiteFrame>
  );
}
