import { motion } from "framer-motion";
import React from "react";
import { useLanguage } from "./i18n";

const base = import.meta.env.BASE_URL;

const asset = (file) => `${base}apps/laser-eyes-ghost-rescue/${file}`;

const gallery = [
  asset("placeholder-hero.svg"),
  asset("placeholder-1.svg"),
  asset("placeholder-2.svg"),
  asset("placeholder-3.svg"),
];

const copyByLang = {
  en: {
    nav: {
      how: "How It Works",
      features: "Features",
      bosses: "Bosses & Rewards",
      faq: "FAQ",
      support: "Support",
      privacy: "Privacy",
    },
    hero: {
      badge: "Arcade iPhone game · Front camera + eye aim",
      headline: "You play with your face.",
      subhead:
        "Laser Eyes: Ghost Rescue turns your front camera into a neon arcade battlefield. Aim with your eyes, blink or tap to fire, blast ghosts, and keep the cats safe.",
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
      tagline: "Laser Eyes: Ghost Rescue",
      support: "Support",
      privacy: "Privacy",
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
      support: "Destek",
      privacy: "Gizlilik",
    },
    hero: {
      badge: "Arcade iPhone oyunu · Ön kamera + göz nişanı",
      headline: "Yüzünle oynarsın.",
      subhead:
        "Laser Eyes: Ghost Rescue, ön kameranı neon bir arcade sahasına çevirir. Gözünle nişan al, blink veya dokunarak ateş et, ghost’ları vur, kedileri koru.",
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
      tagline: "Laser Eyes: Ghost Rescue",
      support: "Destek",
      privacy: "Gizlilik",
      company: "[Şirket Adı Placeholder]",
      email: "[destek@eposta.placeholder]",
    },
  },
};

function LaserHeader() {
  const { lang, toggle } = useLanguage();
  const copy = copyByLang[lang] || copyByLang.en;

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05060a]/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href={`${base}laser-eyes-ghost-rescue/`} className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#6df4ff] via-[#8b5cff] to-[#ff4fd8] text-xs font-semibold text-black shadow-[0_12px_40px_rgba(109,244,255,0.35)]">
            LE
          </div>
          <span className="text-base font-semibold text-white">Laser Eyes</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#how" className="transition hover:text-white">{copy.nav.how}</a>
          <a href="#features" className="transition hover:text-white">{copy.nav.features}</a>
          <a href="#bosses" className="transition hover:text-white">{copy.nav.bosses}</a>
          <a href="#faq" className="transition hover:text-white">{copy.nav.faq}</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:-translate-y-0.5"
            aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>
          <a
            href="#download"
            className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-[0_12px_30px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 md:inline-flex"
          >
            App Store
          </a>
        </div>
      </div>
    </header>
  );
}

export function LaserEyesPage() {
  const { lang } = useLanguage();
  const copy = copyByLang[lang] || copyByLang.en;

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1a1030,transparent_35%),radial-gradient(circle_at_85%_20%,rgba(109,244,255,0.25),transparent_38%),radial-gradient(circle_at_20%_80%,rgba(255,79,216,0.25),transparent_40%)]" />
      <LaserHeader />

      <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pt-16">
        <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              {copy.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">{copy.hero.headline}</h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">{copy.hero.subhead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#download"
                className="rounded-2xl bg-gradient-to-r from-[#6df4ff] via-[#8b5cff] to-[#ff4fd8] px-6 py-3 text-sm font-semibold text-black shadow-[0_20px_50px_rgba(109,244,255,0.28)] transition hover:-translate-y-0.5"
              >
                {copy.hero.ctaPrimary}
              </a>
              <a
                href="#how"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                {copy.hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-5 text-sm text-slate-400">{copy.hero.note}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#6df4ff]/20 via-transparent to-[#ff4fd8]/20 blur-2xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-[#0a0f1d] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              <img src={gallery[0]} alt="Laser Eyes hero screenshot" className="w-full rounded-[24px]" />
            </div>
          </motion.div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6df4ff]">{copy.slogan.kicker}</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{copy.slogan.title}</h2>
            <p className="mt-4 text-lg text-slate-300">{copy.slogan.body}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.how.steps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff4fd8]">{copy.how.title}</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.hero.headline}</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400">{copy.hero.note}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {copy.how.steps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-[#0b1224] p-6">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mt-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6df4ff]">{copy.features.title}</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.hero.headline}</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {copy.features.items.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="bosses" className="mt-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff4fd8]">{copy.bosses.title}</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.bosses.title}</h2>
              <p className="mt-4 text-lg text-slate-300">{copy.bosses.body}</p>
            </div>
            <div className="grid gap-4">
              {copy.bosses.cards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-white/10 bg-[#0b1224] p-5">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6df4ff]">{copy.showcase.title}</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.showcase.title}</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400">{copy.showcase.body}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((shot) => (
              <div key={shot} className="rounded-3xl border border-white/10 bg-[#0a0f1d] p-3">
                <img src={shot} alt="Laser Eyes placeholder" className="w-full rounded-2xl" />
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff4fd8]">{copy.faq.title}</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.faq.title}</h2>
          </div>
          <div className="mt-8 grid gap-4">
            {copy.faq.items.map((item) => (
              <div key={item.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className="mt-20">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-[#0b1224] via-[#120d22] to-[#0b0f1a] p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6df4ff]">Laser Eyes</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{copy.cta.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{copy.cta.body}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="rounded-2xl bg-gradient-to-r from-[#6df4ff] via-[#8b5cff] to-[#ff4fd8] px-6 py-3 text-sm font-semibold text-black shadow-[0_20px_50px_rgba(109,244,255,0.3)]"
              >
                {copy.cta.primary}
              </a>
              <a
                href={`${base}laser-eyes-ghost-rescue/support.html`}
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
              >
                {copy.cta.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#05060a] py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 md:px-8">
          <div>
            <p className="text-sm font-semibold text-white">{copy.footer.tagline}</p>
            <p className="text-xs text-slate-400">{copy.footer.company}</p>
            <p className="text-xs text-slate-400">{copy.footer.email}</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <a href={`${base}laser-eyes-ghost-rescue/support.html`} className="transition hover:text-white">
              {copy.footer.support}
            </a>
            <a href={`${base}laser-eyes-ghost-rescue/privacy.html`} className="transition hover:text-white">
              {copy.footer.privacy}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
