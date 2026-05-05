import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import { useLanguage } from "./i18n";

const base = import.meta.env.BASE_URL;

export function SiteFrame({ children }) {
  return (
    <div className="min-h-screen app-shell text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#ffffff_5%,#fcfbf8_40%,#f5f1ea_100%)] opacity-90 dark:bg-[radial-gradient(circle_at_top_left,#1b2333_5%,#0c111a_45%,#020617_100%)]" />
      {children}
    </div>
  );
}

const ui = {
  tr: {
    navHome: "Ana Sayfa",
    navPrivacy: "Gizlilik",
    navSupport: "Destek / Yasal",
    navUpdate: "Güncelleme",
    navApps: "Uygulamalar",
    navAbout: "Hakkımda",
    navContact: "İletişim",
    actionContact: "İletişime Geç",
    heroEyebrow: "Bağımsız iOS Geliştirici",
    heroTitle: "Meraklı, teknolojiyi takip eden ve ürün çıkaran bir iOS geliştirici.",
    heroBody:
      "Yeni teknolojileri yakından izliyor, fikirleri hızlıca ürüne dönüştürüyor ve her uygulamayı kendi karakteri olan temiz bir landing page ile yayınlıyorum.",
    heroCtaPrimary: "Uygulamaları Gör",
    heroCtaSecondary: "İletişim",
    approachTitle: "Yaklaşım",
    approachBody: "Fikirden yayına giden süreci sade, hızlı ve ürün odaklı kuruyorum.",
    focusTitle: "Odak",
    focusBody: "Lifestyle, planning, health-tracking ve utility kategorilerinde iPhone uygulamaları geliştiriyorum.",
    showcaseTitle: "Vitrin",
    showcaseBody: "Her uygulama kendi URL’si, kendi ekranları ve kendi yasal sayfalarıyla yayınlanıyor.",
    appsEyebrow: "Apps",
    appsTitle: "Aynı tasarım diliyle yayınlanan ürün vitrini",
    aboutEyebrow: "About",
    aboutTitle: "Merak, estetik ve yayın disiplini bir arada",
    aboutBody:
      "Ana hedefim, gerçek hayatta işi olan ama görsel olarak da özenli hissettiren iPhone uygulamaları üretmek. Bu yüzden sadece uygulamayı değil, onun vitrini olan web tarafını da aynı ciddiyetle tasarlıyorum.",
    contactEyebrow: "Contact",
    contactTitle: "Yeni uygulamalar, iş birlikleri ve ürün fikirleri için ulaş.",
    appPrivacyCta: "Gizlilik Politikası",
    highlightsEyebrow: "Öne Çıkanlar",
    highlightsTitle: "Uygulamanın temel değerini ilk bakışta anlatan modüller",
    featureLabel: "Özellik",
    screensEyebrow: "Gerçek Ekranlar",
    screensTitle: "Yüklenen tüm ekranları tek bir bütünlüklü galeride inceleyin",
    appPageCta: "Uygulama Sayfası",
    privacyLink: "Gizlilik",
  },
  en: {
    navHome: "Home",
    navPrivacy: "Privacy",
    navSupport: "Support / Legal",
    navUpdate: "Update",
    navApps: "Apps",
    navAbout: "About",
    navContact: "Contact",
    actionContact: "Get in Touch",
    heroEyebrow: "Indie iOS Developer",
    heroTitle: "A curious iOS developer who ships products with care.",
    heroBody:
      "I follow new technologies closely, turn ideas into products quickly, and publish each app with a clean landing page that reflects its character.",
    heroCtaPrimary: "View Apps",
    heroCtaSecondary: "Contact",
    approachTitle: "Approach",
    approachBody: "I keep the path from idea to release simple, fast, and product-focused.",
    focusTitle: "Focus",
    focusBody: "I build iPhone apps in lifestyle, planning, health-tracking, and utility categories.",
    showcaseTitle: "Showcase",
    showcaseBody: "Each app ships with its own URL, screens, and legal pages.",
    appsEyebrow: "Apps",
    appsTitle: "A product showcase published with a consistent design language",
    aboutEyebrow: "About",
    aboutTitle: "Curiosity, aesthetics, and release discipline together",
    aboutBody:
      "My main goal is to build iPhone apps that solve real problems while feeling carefully crafted. That’s why I design the web side—the product’s showcase—with the same seriousness.",
    contactEyebrow: "Contact",
    contactTitle: "Reach out for new apps, collaborations, or product ideas.",
    appPrivacyCta: "Privacy Policy",
    highlightsEyebrow: "Highlights",
    highlightsTitle: "Modules that communicate the core value at first glance",
    featureLabel: "Feature",
    screensEyebrow: "Real Screens",
    screensTitle: "Browse every uploaded screen in a single, cohesive gallery",
    appPageCta: "App Page",
    privacyLink: "Privacy",
  },
  es: {
    navHome: "Inicio",
    navPrivacy: "Privacidad",
    navSupport: "Soporte / Legal",
    navUpdate: "Actualización",
    navApps: "Apps",
    navAbout: "Sobre mí",
    navContact: "Contacto",
    actionContact: "Contáctame",
    heroEyebrow: "Desarrollador iOS Indie",
    heroTitle: "Un desarrollador iOS curioso que convierte ideas en productos.",
    heroBody:
      "Sigo de cerca nuevas tecnologías, convierto ideas en productos rápidamente y publico cada app con una landing limpia y con carácter propio.",
    heroCtaPrimary: "Ver Apps",
    heroCtaSecondary: "Contacto",
    approachTitle: "Enfoque",
    approachBody: "Mantengo el camino de la idea al lanzamiento simple, rápido y centrado en el producto.",
    focusTitle: "Foco",
    focusBody: "Desarrollo apps para iPhone en lifestyle, planificación, salud y utilidades.",
    showcaseTitle: "Vitrina",
    showcaseBody: "Cada app tiene su propia URL, pantallas y páginas legales.",
    appsEyebrow: "Apps",
    appsTitle: "Un escaparate de productos con un lenguaje visual consistente",
    aboutEyebrow: "Sobre mí",
    aboutTitle: "Curiosidad, estética y disciplina de lanzamiento",
    aboutBody:
      "Mi objetivo es crear apps de iPhone que resuelvan necesidades reales y se sientan cuidadas. Por eso diseño también el lado web con la misma seriedad.",
    contactEyebrow: "Contacto",
    contactTitle: "Escríbeme para nuevas apps, colaboraciones o ideas de producto.",
    appPrivacyCta: "Política de Privacidad",
    highlightsEyebrow: "Destacados",
    highlightsTitle: "Módulos que explican el valor central a primera vista",
    featureLabel: "Función",
    screensEyebrow: "Pantallas Reales",
    screensTitle: "Explora todas las pantallas en una galería coherente",
    appPageCta: "Página de la App",
    privacyLink: "Privacidad",
  },
  pt: {
    navHome: "Início",
    navPrivacy: "Privacidade",
    navSupport: "Suporte / Legal",
    navUpdate: "Atualização",
    navApps: "Apps",
    navAbout: "Sobre",
    navContact: "Contato",
    actionContact: "Fale comigo",
    heroEyebrow: "Desenvolvedor iOS Indie",
    heroTitle: "Um desenvolvedor iOS curioso que lança produtos com cuidado.",
    heroBody:
      "Acompanho novas tecnologias de perto, transformo ideias em produtos rapidamente e publico cada app com uma landing limpa que reflete sua personalidade.",
    heroCtaPrimary: "Ver Apps",
    heroCtaSecondary: "Contato",
    approachTitle: "Abordagem",
    approachBody: "Mantenho o caminho da ideia ao lançamento simples, rápido e focado no produto.",
    focusTitle: "Foco",
    focusBody: "Crio apps para iPhone nas categorias lifestyle, planejamento, saúde e utilidades.",
    showcaseTitle: "Vitrine",
    showcaseBody: "Cada app tem sua própria URL, telas e páginas legais.",
    appsEyebrow: "Apps",
    appsTitle: "Um portfólio de produtos com linguagem visual consistente",
    aboutEyebrow: "Sobre",
    aboutTitle: "Curiosidade, estética e disciplina de lançamento",
    aboutBody:
      "Meu objetivo é criar apps de iPhone que resolvam necessidades reais e tenham um cuidado visual evidente. Por isso também projeto o lado web com a mesma seriedade.",
    contactEyebrow: "Contato",
    contactTitle: "Entre em contato para novos apps, colaborações ou ideias de produto.",
    appPrivacyCta: "Política de Privacidade",
    highlightsEyebrow: "Destaques",
    highlightsTitle: "Módulos que mostram o valor central de cara",
    featureLabel: "Recurso",
    screensEyebrow: "Telas Reais",
    screensTitle: "Explore todas as telas em uma única galeria coesa",
    appPageCta: "Página do App",
    privacyLink: "Privacidade",
  },
};

const fallbackLangs = ["de", "fr", "hi", "ptbr"];
fallbackLangs.forEach((lang) => {
  ui[lang] = ui.en;
});

function useCopy() {
  const { lang } = useLanguage();
  return ui[lang] || ui.en || ui.tr;
}

function getAppCopy(app, lang) {
  const localized = app.locales?.[lang] || app.locales?.en || {};
  return {
    ...app,
    ...localized,
    chips: localized.chips || app.chips,
    features: localized.features || app.features,
  };
}

export function Header({ title = "Genezin Kepekci", links = [], action }) {
  const { lang, toggle } = useLanguage();
  const nextLangMap = { tr: "en", en: "es", es: "pt", pt: "ptbr", ptbr: "de", de: "fr", fr: "hi", hi: "tr" };
  const nextLang = nextLangMap[lang] || "en";
  const nextLangLabelMap = {
    tr: "Türkçeye geç",
    en: "Switch to English",
    es: "Cambiar a español",
    pt: "Mudar para português",
    ptbr: "Mudar para português (BR)",
    de: "Auf Deutsch wechseln",
    fr: "Passer en français",
    hi: "हिन्दी में बदलें",
  };
  const currentLangLabelMap = {
    tr: "TR",
    en: "EN",
    es: "ES",
    pt: "PT",
    ptbr: "PT-BR",
    de: "DE",
    fr: "FR",
    hi: "HI",
  };
  return (
    <header className="sticky top-0 z-30 glass-surface">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href={`${base}`} className="flex items-center gap-3">
          <div className="squircle grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-peach to-lilac text-sm font-bold text-ink shadow-card">
            GK
          </div>
          <span className="text-lg font-semibold tracking-tight text-ink">{title}</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-ink/70 transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            className="squircle rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-xs font-semibold text-ink shadow-card transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-white"
            aria-label={nextLangLabelMap[nextLang] || "Switch language"}
          >
            {currentLangLabelMap[lang] || lang.toUpperCase()}
          </button>
          {action || null}
        </div>
      </div>
    </header>
  );
}

export function PhoneShot({ file, alt }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32, scale: 0.96 }}
      animate={shouldReduceMotion ? false : { opacity: 1, y: 0, scale: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 18, delay: 0.15 }}
      className="relative mx-auto w-[300px] md:w-[340px]"
    >
      <div className="absolute inset-0 -z-10 rounded-[48px] bg-gradient-to-b from-lilac/70 via-peach/45 to-sky/55 blur-3xl" />
      <div className="squircle rounded-[44px] border border-white/40 bg-[#11151c] p-2 shadow-soft">
        <img
          src={file}
          alt={alt}
          className="squircle h-auto w-full rounded-[36px] bg-[#ebe8e2] object-cover"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width="1242"
          height="2688"
        />
      </div>
    </motion.div>
  );
}

export function AppLandingPage({ app }) {
  const { lang } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const copy = useCopy();
  const appCopy = getAppCopy(app, lang);
  const screens = [appCopy.heroScreen, ...appCopy.gallery];

  return (
    <SiteFrame>
      <Header
        links={[
          { href: `${base}`, label: copy.navHome },
          ...(appCopy.updateUrl ? [{ href: appCopy.updateUrl, label: copy.navUpdate }] : []),
          { href: appCopy.privacyUrl, label: copy.navPrivacy },
          { href: appCopy.supportUrl, label: copy.navSupport },
        ]}
        action={
          <a
            href={appCopy.storeUrl}
            target={appCopy.storeUrl.startsWith("http") ? "_blank" : undefined}
            rel={appCopy.storeUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            className="squircle rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:translate-y-[-1px] hover:bg-[#1f2634]"
          >
            {appCopy.ctaLabel}
          </a>
        }
      />

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pt-14">
        <section className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 18 }}
          >
            <span className="squircle inline-flex rounded-full border border-sky/45 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink/75 dark:bg-white/10 dark:text-white/70">
              {appCopy.eyebrow}
            </span>
            <div className="mt-5 flex items-center gap-4">
              <img src={appCopy.icon} alt={`${appCopy.title} uygulama ikonu`} className="squircle h-14 w-14 rounded-[18px] shadow-card" />
              <span className="text-xl font-semibold tracking-tight">{appCopy.title}</span>
            </div>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-6xl">{appCopy.heroTitle}</h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70">{appCopy.heroSubtitle}</p>
            <p className="mt-5 max-w-xl text-base leading-8 text-ink/65">{appCopy.description}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={appCopy.storeUrl}
                target={appCopy.storeUrl.startsWith("http") ? "_blank" : undefined}
                rel={appCopy.storeUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                className="squircle inline-flex items-center gap-3 rounded-2xl bg-ink px-7 py-4 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                {appCopy.ctaLabel}
              </a>
              <a href={appCopy.privacyUrl} className="surface-card squircle inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-base font-semibold text-ink">
                {copy.appPrivacyCta}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {appCopy.chips.map((chip) => (
                <span
                  key={chip}
                  className="squircle rounded-full border border-peach/70 bg-white/70 px-4 py-2 text-sm font-semibold text-ink/75 shadow-card dark:bg-white/10 dark:text-white/70"
                >
                  {chip}
                </span>
              ))}
            </div>

            {appCopy.medicalNote ? (
              <div className="surface-card squircle mt-6 rounded-[24px] p-5 text-sm leading-7 text-ink/70">
                <strong className="block text-ink/90">{lang === "tr" ? "Önemli Not" : "Important Note"}</strong>
                {appCopy.medicalNote}
              </div>
            ) : null}
          </motion.div>
          <PhoneShot file={appCopy.heroScreen} alt={`${appCopy.title} ana ekranı`} />
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">{copy.highlightsEyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{copy.highlightsTitle}</h2>
          </div>
          <div className="grid auto-rows-[190px] grid-cols-1 gap-5 md:grid-cols-2">
            {appCopy.features.map((feature, index) => (
              <motion.article
                key={feature}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 140, damping: 18, delay: index * 0.05 }}
                className="surface-card squircle rounded-[30px] bg-gradient-to-br from-peach/35 via-white/70 to-lilac/30 p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">
                  {copy.featureLabel} {index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold leading-snug">{feature}</h3>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">{copy.screensEyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{copy.screensTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {screens.map((screen, i) => (
              <motion.figure
                key={screen}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 150, damping: 20, delay: i * 0.02 }}
                className="surface-card squircle perf-visibility rounded-[30px] p-3"
              >
                <div className="squircle rounded-[28px] border border-white/20 bg-[#11151c] p-2 shadow-soft">
                  <img
                    src={screen}
                    alt={`${appCopy.title} ekran görüntüsü ${i + 1}`}
                    className="squircle h-auto w-full rounded-[22px] bg-[#ebe8e2] object-cover"
                    loading="lazy"
                    decoding="async"
                    width="1242"
                    height="2688"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

export function HomePage({ apps }) {
  const { lang } = useLanguage();
  const copy = useCopy();
  const localizedApps = apps.map((app) => getAppCopy(app, lang));

  return (
    <SiteFrame>
      <Header
        links={[
          { href: "#apps", label: copy.navApps },
          { href: "#about", label: copy.navAbout },
          { href: "#contact", label: copy.navContact },
        ]}
        action={
          <a href="mailto:genezinsalih@gmail.com" className="squircle rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:translate-y-[-1px] hover:bg-[#1f2634]">
            {copy.actionContact}
          </a>
        }
      />

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pt-14">
        <section className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <span className="squircle inline-flex rounded-full border border-sky/45 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink/75 dark:bg-white/10 dark:text-white/70">
              {copy.heroEyebrow}
            </span>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70">{copy.heroBody}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#apps" className="squircle inline-flex items-center gap-3 rounded-2xl bg-ink px-7 py-4 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5">
                {copy.heroCtaPrimary}
              </a>
              <a href="mailto:genezinsalih@gmail.com" className="surface-card squircle inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-base font-semibold text-ink">
                {copy.heroCtaSecondary}
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {[
              [copy.approachTitle, copy.approachBody],
              [copy.focusTitle, copy.focusBody],
              [copy.showcaseTitle, copy.showcaseBody],
            ].map(([title, desc]) => (
              <div key={title} className="surface-card squircle rounded-[28px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">{title}</p>
                <p className="mt-3 text-base leading-8 text-ink/75">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="apps" className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">{copy.appsEyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{copy.appsTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {localizedApps.map((app, index) => (
              <motion.article
                key={app.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ type: "spring", stiffness: 140, damping: 18, delay: index * 0.04 }}
                className="surface-card squircle rounded-[32px] p-6"
              >
                <div className="flex items-center gap-4">
                  <img src={app.icon} alt={`${app.title} ikonu`} className="squircle h-14 w-14 rounded-[18px] shadow-card" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">{app.eyebrow}</p>
                    <h3 className="mt-1 text-2xl font-semibold">{app.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-base leading-8 text-ink/70">{app.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {app.gallery.slice(0, 2).map((screen) => (
                    <div key={screen} className="surface-card squircle rounded-[22px] bg-cream p-2">
                      <img src={screen} alt={`${app.title} ekranı`} className="squircle h-auto w-full rounded-[18px]" />
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={app.pageUrl || `${base}${app.slug}/`} className="squircle rounded-2xl bg-ink px-5 py-3 text-sm font-semibold text-white shadow-card">
                    {copy.appPageCta}
                  </a>
                  <a
                    href={app.secondaryUrl || app.privacyUrl}
                    className="surface-card squircle rounded-2xl px-5 py-3 text-sm font-semibold text-ink"
                  >
                    {app.secondaryLabel || copy.privacyLink}
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="surface-card squircle mt-20 rounded-[32px] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">{copy.aboutEyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{copy.aboutTitle}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/70">{copy.aboutBody}</p>
        </section>

        <section id="contact" className="mt-20">
          <div className="surface-card squircle rounded-[32px] bg-gradient-to-r from-white/70 via-[#fff8f5]/80 to-[#f8f3ff]/75 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">{copy.contactEyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{copy.contactTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:genezinsalih@gmail.com" className="squircle rounded-2xl bg-ink px-6 py-3 text-sm font-semibold text-white shadow-card">
                genezinsalih@gmail.com
              </a>
              <a href="https://github.com/genezin50" target="_blank" rel="noreferrer" className="surface-card squircle rounded-2xl px-6 py-3 text-sm font-semibold text-ink">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
