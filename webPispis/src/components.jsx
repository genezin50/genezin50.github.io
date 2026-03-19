import { motion } from "framer-motion";
import React from "react";

const base = import.meta.env.BASE_URL;

export function SiteFrame({ children }) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#fff_5%,#FCFBF8_40%,#f6f2eb_100%)]" />
      {children}
    </div>
  );
}

export function Header({ title = "Genezin Kepekci", links = [], action }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href={`${base}`} className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-peach to-lilac text-sm font-black text-ink shadow-card">
            GK
          </div>
          <span className="text-lg font-extrabold tracking-tight text-ink">{title}</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-ink/70 transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        {action || null}
      </div>
    </header>
  );
}

export function PhoneShot({ file, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto w-[300px] md:w-[340px]"
    >
      <div className="absolute inset-0 -z-10 rounded-[48px] bg-gradient-to-b from-lilac/70 via-peach/45 to-sky/55 blur-3xl" />
      <div className="rounded-[44px] border border-white/70 bg-[#11151c] p-2 shadow-soft">
        <img src={file} alt={alt} className="h-auto w-full rounded-[36px] bg-[#ebe8e2] object-cover" loading="eager" />
      </div>
    </motion.div>
  );
}

export function AppLandingPage({ app }) {
  return (
    <SiteFrame>
      <Header
        links={[
          { href: `${base}`, label: "Ana Sayfa" },
          { href: app.privacyUrl, label: "Gizlilik" },
          { href: app.supportUrl, label: "Destek / Yasal" },
        ]}
        action={
          <a
            href={app.storeUrl}
            target={app.storeUrl.startsWith("http") ? "_blank" : undefined}
            rel={app.storeUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white shadow-card transition hover:translate-y-[-1px] hover:bg-[#1f2634]"
          >
            {app.ctaLabel}
          </a>
        }
      />

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pt-14">
        <section className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <span className="inline-flex rounded-full border border-sky/45 bg-white/75 px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] text-ink/75">
              {app.eyebrow}
            </span>
            <div className="mt-5 flex items-center gap-4">
              <img src={app.icon} alt={`${app.title} uygulama ikonu`} className="h-14 w-14 rounded-[18px] shadow-card" />
              <span className="text-xl font-black tracking-tight">{app.title}</span>
            </div>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-tight md:text-6xl">{app.heroTitle}</h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70">{app.heroSubtitle}</p>
            <p className="mt-5 max-w-xl text-base leading-8 text-ink/65">{app.description}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={app.storeUrl}
                target={app.storeUrl.startsWith("http") ? "_blank" : undefined}
                rel={app.storeUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-3 rounded-2xl bg-ink px-7 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                {app.ctaLabel}
              </a>
              <a href={app.privacyUrl} className="inline-flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 px-6 py-4 text-base font-bold text-ink shadow-card">
                Gizlilik Politikası
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {app.chips.map((chip) => (
                <span key={chip} className="rounded-full border border-peach/70 bg-white/70 px-4 py-2 text-sm font-bold text-ink/75 shadow-card">
                  {chip}
                </span>
              ))}
            </div>

            {app.medicalNote ? (
              <div className="mt-6 rounded-[24px] border border-peach/70 bg-white/70 p-5 text-sm leading-7 text-ink/70 shadow-card">
                <strong className="block text-ink">Önemli Not</strong>
                {app.medicalNote}
              </div>
            ) : null}
          </motion.div>
          <PhoneShot file={app.heroScreen} alt={`${app.title} ana ekranı`} />
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/55">Öne Çıkanlar</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Uygulamanın temel değerini ilk bakışta anlatan modüller</h2>
          </div>
          <div className="grid auto-rows-[190px] grid-cols-1 gap-5 md:grid-cols-2">
            {app.features.map((feature, index) => (
              <motion.article
                key={feature}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
                className="rounded-[30px] border border-white/85 bg-gradient-to-br from-peach/35 via-white to-lilac/30 p-6 shadow-card"
              >
                <span className="text-xs font-black uppercase tracking-[0.16em] text-ink/45">Feature {index + 1}</span>
                <h3 className="mt-4 text-2xl font-extrabold leading-snug">{feature}</h3>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/55">Real Screens</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Seçili ekranlarla daha premium bir ürün vitrini</h2>
          </div>
          <div className="grid items-start gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-[34px] border border-white/80 bg-white p-3 shadow-soft"
            >
              <img src={app.gallery[0]} alt={`${app.title} öne çıkan ekran`} className="h-auto w-full rounded-[28px]" loading="lazy" />
            </motion.figure>
            <div className="grid grid-cols-2 gap-4">
              {app.gallery.slice(1).map((screen, i) => (
                <motion.figure
                  key={screen}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="rounded-[28px] border border-white/80 bg-white p-2 shadow-card"
                >
                  <img src={screen} alt={`${app.title} ekran görüntüsü ${i + 2}`} className="h-auto w-full rounded-[22px]" loading="lazy" />
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}

export function HomePage({ apps }) {
  return (
    <SiteFrame>
      <Header
        links={[
          { href: "#apps", label: "Uygulamalar" },
          { href: "#about", label: "Hakkımda" },
          { href: "#contact", label: "İletişim" },
        ]}
        action={
          <a href="mailto:genezinsalih@gmail.com" className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white shadow-card transition hover:translate-y-[-1px] hover:bg-[#1f2634]">
            İletişime Geç
          </a>
        }
      />

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pt-14">
        <section className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <span className="inline-flex rounded-full border border-sky/45 bg-white/75 px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] text-ink/75">
              Indie iOS Developer
            </span>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-tight md:text-6xl">
              Meraklı, teknolojiyi takip eden ve ürün çıkaran bir iOS geliştirici.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70">
              Yeni teknolojileri yakından izliyor, fikirleri hızlıca ürüne dönüştürüyor ve her uygulamayı kendi karakteri olan temiz bir landing page ile yayınlıyorum.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#apps" className="inline-flex items-center gap-3 rounded-2xl bg-ink px-7 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5">
                Uygulamaları Gör
              </a>
              <a href="mailto:genezinsalih@gmail.com" className="inline-flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 px-6 py-4 text-base font-bold text-ink shadow-card">
                İletişim
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {[
              ["Yaklaşım", "Fikirden yayına giden süreci sade, hızlı ve ürün odaklı kuruyorum."],
              ["Odak", "Lifestyle, planning, health-tracking ve utility kategorilerinde iPhone uygulamaları geliştiriyorum."],
              ["Vitrin", "Her uygulama kendi URL’si, kendi ekranları ve kendi yasal sayfalarıyla yayınlanıyor."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[28px] border border-white/85 bg-white/75 p-6 shadow-card">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-ink/45">{title}</p>
                <p className="mt-3 text-base leading-8 text-ink/75">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="apps" className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/55">Apps</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Aynı tasarım diliyle yayınlanan ürün vitrini</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {apps.map((app, index) => (
              <motion.article
                key={app.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
                className="rounded-[32px] border border-white/85 bg-white/80 p-6 shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <img src={app.icon} alt={`${app.title} ikonu`} className="h-14 w-14 rounded-[18px] shadow-card" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-ink/45">{app.eyebrow}</p>
                    <h3 className="mt-1 text-2xl font-extrabold">{app.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-base leading-8 text-ink/70">{app.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {app.gallery.slice(0, 2).map((screen) => (
                    <div key={screen} className="rounded-[22px] border border-white/80 bg-cream p-2 shadow-card">
                      <img src={screen} alt={`${app.title} ekranı`} className="h-auto w-full rounded-[18px]" />
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={`${base}${app.slug}/`} className="rounded-2xl bg-ink px-5 py-3 text-sm font-extrabold text-white shadow-card">
                    Uygulama Sayfası
                  </a>
                  <a href={app.privacyUrl} className="rounded-2xl border border-white/80 bg-white px-5 py-3 text-sm font-bold text-ink shadow-card">
                    Gizlilik
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20 rounded-[32px] border border-white/85 bg-white/70 p-8 shadow-soft backdrop-blur-md md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/55">About</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Merak, estetik ve yayın disiplini bir arada</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/70">
            Ana hedefim, gerçek hayatta işi olan ama görsel olarak da özenli hissettiren iPhone uygulamaları üretmek.
            Bu yüzden sadece uygulamayı değil, onun vitrini olan web tarafını da aynı ciddiyetle tasarlıyorum.
          </p>
        </section>

        <section id="contact" className="mt-20">
          <div className="rounded-[32px] border border-white/85 bg-gradient-to-r from-white via-[#fff8f5] to-[#f8f3ff] p-8 shadow-soft md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/55">Contact</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Yeni uygulamalar, iş birlikleri ve ürün fikirleri için ulaş.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:genezinsalih@gmail.com" className="rounded-2xl bg-ink px-6 py-3 text-sm font-extrabold text-white shadow-card">
                genezinsalih@gmail.com
              </a>
              <a href="https://github.com/genezin50" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/80 bg-white px-6 py-3 text-sm font-bold text-ink shadow-card">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
