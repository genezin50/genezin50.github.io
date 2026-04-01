import { motion } from "framer-motion";
import React from "react";
import { Header, SiteFrame } from "./components";

const screenshotAsset = (file) => `${import.meta.env.BASE_URL}apps/lift-log-pro/${file}`;

const screenshots = [
  "screenshot-01.png",
  "screenshot-02.png",
  "screenshot-03.png",
  "screenshot-04.png",
  "screenshot-05.png",
  "screenshot-06.png",
  "screenshot-07.png",
  "screenshot-08.png",
  "screenshot-09.png",
  "screenshot-10.png",
].map(screenshotAsset);

const heroStats = [
  { label: "Programs", value: "4 built in" },
  { label: "Logging", value: "Fast + focused" },
  { label: "Setup", value: "No account" },
];

const benefitCards = [
  {
    title: "Build strength with structure",
    body: "Follow a clear Workout A / Workout B flow, run classic main lifts and stay locked into progressive overload without fluff.",
  },
  {
    title: "Track every training detail",
    body: "Log sets, reps, weights, notes, rest time and workout duration, then resume active sessions without losing momentum.",
  },
  {
    title: "See progress in real numbers",
    body: "Watch weight progression, estimated 1RM, volume, weekly trends and body-fat changes in one focused analytics view.",
  },
  {
    title: "Stay consistent",
    body: "Use reminders, badges, auto deload rules and workout history to keep training steady when motivation drops.",
  },
];

const builtInPrograms = [
  "Classic 5x5 Method",
  "Starting Strength",
  "Madcow 5x5",
  "Texas Method",
];

const featureGroups = [
  {
    eyebrow: "Programs",
    title: "Classic barbell progression, ready on day one",
    copy:
      "Lift Log Pro is built around 5x5-style strength work. Run Workout A / Workout B, follow a linear progression mindset and stay focused on the lifts that matter.",
    bullets: [
      "Squat, Bench Press, Barbell Row, Overhead Press and Deadlift",
      "Standard 5x5 logic, with Deadlift commonly handled as 1x5",
      "Built-in options for Classic 5x5 Method, Starting Strength, Madcow 5x5 and Texas Method",
    ],
  },
  {
    eyebrow: "Workout Tracking",
    title: "Fast logging that stays out of the way",
    copy:
      "Move through training sessions without friction. The app is made to keep your attention on the lift, not on bloated setup screens.",
    bullets: [
      "Log sets, reps and weights with workout notes",
      "Track rest time and full workout duration",
      "Resume active workout sessions when you come back",
      "Finish with a workout summary that shows duration, total rest, estimated 1RM, PR-related signals, notes and exercise breakdowns",
    ],
  },
  {
    eyebrow: "Analytics",
    title: "Progress you can actually use",
    copy:
      "The progress view turns your training into clear signals instead of noise. See where strength is moving and where consistency needs work.",
    bullets: [
      "Charts and statistics for weight progression over time",
      "Estimated 1RM tracking, volume tracking and weekly trends",
      "Advanced progress signals and performance patterns",
      "Body fat logging with time-based visual change tracking",
    ],
  },
  {
    eyebrow: "History",
    title: "Look back without digging around",
    copy:
      "Every past session stays easy to review, whether you want the last workout or a longer trend across weeks of training.",
    bullets: [
      "Workout history list view and calendar-based history view",
      "Open past workout details with logged weights, duration, total rest, notes and exercise data",
      "CSV export for workout and body-fat related data",
    ],
  },
];

const utilityCards = [
  {
    title: "Custom workouts",
    body: "Create your own workouts, add custom exercises and save personal templates that fit your exact training split.",
  },
  {
    title: "Smart warm-up",
    body: "Automatic warm-up set calculations help you ramp cleanly into your working weight.",
  },
  {
    title: "Plate calculator",
    body: "Load the bar correctly without second-guessing the math between sets.",
  },
  {
    title: "Auto deload",
    body: "Enable automatic deload rules with percentage-based or kg-based behavior tied to failure and training difficulty logic.",
  },
  {
    title: "Reminders + motivation",
    body: "Use workout reminders, rest reminders, progress badges and milestone notifications to stay on schedule.",
  },
  {
    title: "Personalization",
    body: "Switch between light, dark or system theme, choose your language and train in kg or lb.",
  },
];

const philosophyPoints = [
  "No fluff",
  "No account required",
  "Focused on progression",
  "Free and straightforward",
  "Built for consistent training",
  "Local-first workflow",
];

const faqItems = [
  {
    q: "Is Lift Log Pro free?",
    a: "Yes. The app is free to use and currently ad-supported. It is not positioned as a subscription product.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. Lift Log Pro works as a simple, local-first training tracker with no account required.",
  },
  {
    q: "Which programs are built in?",
    a: "The app includes Classic 5x5 Method, Starting Strength, Madcow 5x5 and Texas Method as built-in strength program options.",
  },
  {
    q: "Can I build my own workouts too?",
    a: "Yes. You can create custom workouts, add custom exercises and save your own workout templates.",
  },
  {
    q: "What can I track after a workout?",
    a: "You can review workout duration, total rest, estimated 1RM, PR-related insights, notes and a full exercise breakdown.",
  },
  {
    q: "Does it show long-term progress?",
    a: "Yes. Lift Log Pro includes charts and statistics for weight progression, estimated 1RM, volume, weekly trends and body-fat tracking.",
  },
];

function SectionHeader({ eyebrow, title, body, align = "left" }) {
  const alignClass = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignClass}>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#FF8A3D]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-ink md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-8 text-ink/70 md:text-lg">{body}</p> : null}
    </div>
  );
}

function MockPhone() {
  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="absolute inset-x-10 top-8 h-56 rounded-full bg-[#FF8A3D]/30 blur-3xl" />
      <div className="relative rounded-[42px] border border-white/80 bg-[#11151c] p-3 shadow-soft">
        <div className="rounded-[34px] border border-white/10 bg-[#171b22] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Today</p>
              <p className="mt-2 text-2xl font-black text-white">Workout A</p>
            </div>
            <div className="rounded-2xl bg-[#FF5A28] px-4 py-2 text-sm font-black text-white">5x5</div>
          </div>

          <div className="mt-5 space-y-3">
            {[
              ["Squat", "5 x 5", "100 kg"],
              ["Bench Press", "5 x 5", "72.5 kg"],
              ["Barbell Row", "5 x 5", "65 kg"],
            ].map(([lift, sets, weight]) => (
              <div key={lift} className="rounded-[24px] border border-white/8 bg-[#151A22] px-4 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base font-bold text-white">{lift}</p>
                    <p className="mt-1 text-sm text-slate-400">{sets}</p>
                  </div>
                  <p className="text-base font-black text-[#FF8A3D]">{weight}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-[22px] border border-white/8 bg-[#151A22] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Rest</p>
              <p className="mt-2 text-2xl font-black text-white">02:30</p>
            </div>
            <div className="rounded-[22px] border border-white/8 bg-[#151A22] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Warm-up</p>
              <p className="mt-2 text-lg font-black text-white">Bar • 40 • 60</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LiftLogPage() {
  return (
    <SiteFrame>
      <div className="min-h-screen text-ink">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,138,61,0.16),transparent_26%),radial-gradient(circle_at_85%_12%,rgba(255,220,203,0.7),transparent_18%)]" />
        <Header
          title="Lift Log Pro"
          links={[
            { href: "#features", label: "Features" },
            { href: "/lift-log-pro/privacy.html", label: "Privacy" },
            { href: "#philosophy", label: "Why It Works" },
            { href: "#faq", label: "FAQ" },
          ]}
          action={
            <a
              href="https://apps.apple.com/tr/app/liftlog5x5pro/id6760855317?l=tr"
              className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white shadow-card transition hover:bg-[#1f2634]"
            >
              Download on the App Store
            </a>
          }
        />

        <main>
          <section className="mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-3 rounded-full border border-peach/70 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-ink/75 shadow-card">
                <span className="h-2 w-2 rounded-full bg-[#FF5A28]" />
                Strength training app for focused lifters
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.05em] text-ink md:text-7xl">
                Follow your 5x5 progression with less friction and more signal.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 md:text-xl">
                Lift Log Pro is a strength training app built for lifters who want to follow 5x5-style progression,
                track workouts, monitor performance and stay consistent without unnecessary complexity.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://apps.apple.com/tr/app/liftlog5x5pro/id6760855317?l=tr"
                  className="inline-flex items-center rounded-2xl bg-ink px-7 py-4 text-base font-black text-white shadow-soft transition hover:-translate-y-0.5"
                >
                  Download on the App Store
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-2xl border border-white/80 bg-white/80 px-7 py-4 text-base font-bold text-ink shadow-card transition hover:bg-white"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Free", "No account required", "Local-first", "Ad-supported"].map((chip) => (
                  <span key={chip} className="rounded-full border border-peach/70 bg-white/75 px-4 py-2 text-sm font-semibold text-ink/75 shadow-card">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div key={item.label} className="rounded-[26px] border border-white/85 bg-white/75 p-5 shadow-card backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">{item.label}</p>
                    <p className="mt-3 text-2xl font-black text-ink">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.97, y: 26 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}>
              <div className="grid gap-4 lg:grid-cols-[1fr_180px]">
                <MockPhone />
                <div className="grid gap-4">
                  <div className="rounded-[28px] border border-white/85 bg-white/75 p-5 shadow-card">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">Built-in programs</p>
                    <div className="mt-4 space-y-3">
                      {builtInPrograms.map((program) => (
                        <div key={program} className="rounded-2xl border border-peach/60 bg-[#fff5ef] px-4 py-3 text-sm font-bold text-ink">
                          {program}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[28px] border border-white/85 bg-gradient-to-br from-[#fff6ee] via-white to-[#fff0e6] p-5 shadow-card">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">Progress signals</p>
                    <p className="mt-4 text-3xl font-black text-ink">1RM, volume, weekly trends</p>
                    <p className="mt-3 text-sm leading-7 text-ink/70">See strength progression, body-fat changes and session quality without clutter.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-5 py-6 md:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {benefitCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="rounded-[30px] border border-white/85 bg-white/75 p-6 shadow-card"
                >
                  <h2 className="text-2xl font-black tracking-[-0.03em] text-ink">{card.title}</h2>
                  <p className="mt-4 text-base leading-8 text-ink/70">{card.body}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-5 py-8 md:px-8 md:py-12">
            <SectionHeader
              eyebrow="App Screens"
              title="The actual app, shown in full"
              body="Every uploaded screen is included here so lifters can see the real flow before they hit the App Store."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {screenshots.map((screen, index) => (
                <motion.figure
                  key={screen}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                  className="rounded-[30px] border border-white/80 bg-white/90 p-3 shadow-card"
                >
                  <img
                    src={screen}
                    alt={`Lift Log Pro screenshot ${index + 1}`}
                    className="h-auto w-full rounded-[24px] border border-white/70 bg-[#0F1217]"
                    loading="lazy"
                  />
                </motion.figure>
              ))}
            </div>
          </section>

          <section id="features" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Everything active in the app, clearly explained"
              body="No inflated claims. No invented features. Just the training tools that are currently part of Lift Log Pro."
            />

            <div className="mt-12 grid gap-5 xl:grid-cols-2">
              {featureGroups.map((group, index) => (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="rounded-[34px] border border-white/85 bg-white/78 p-7 shadow-soft md:p-8"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF8A3D]">{group.eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-ink">{group.title}</h3>
                  <p className="mt-4 text-base leading-8 text-ink/70">{group.copy}</p>
                  <div className="mt-6 space-y-3">
                    {group.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3 rounded-2xl border border-peach/60 bg-[#fff7f0] px-4 py-4">
                        <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-[#FF5A28]" />
                        <p className="text-sm leading-7 text-ink/80">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-5 py-4 md:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {utilityCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.48, delay: index * 0.03 }}
                  className="rounded-[30px] border border-white/85 bg-white/75 p-6 shadow-card"
                >
                  <h3 className="text-2xl font-black tracking-[-0.03em] text-ink">{card.title}</h3>
                  <p className="mt-4 text-base leading-8 text-ink/70">{card.body}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="philosophy" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionHeader
                  eyebrow="Built for Lifters"
                  title="Simple and effective beats hype"
                  body="Lift Log Pro is made for disciplined training. It keeps structure, progression and usable data in front of you without turning the app into a project of its own."
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {philosophyPoints.map((point) => (
                  <div key={point} className="rounded-[28px] border border-white/85 bg-white/75 px-5 py-5 text-lg font-bold text-ink shadow-card">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-5 py-4 md:px-8">
            <div className="rounded-[38px] border border-white/85 bg-[linear-gradient(135deg,rgba(255,138,61,0.12),rgba(255,255,255,0.7))] p-8 shadow-soft md:p-10">
              <SectionHeader
                eyebrow="Free App"
                title="Start training without account setup or unnecessary friction"
                body="Lift Log Pro is free, ad-supported and built to work as a straightforward training tracker. Open the app, choose a program or build your own, then get to work."
              />
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  "No account required",
                  "Free to use",
                  "Focused on training, not complexity",
                ].map((item) => (
                  <div key={item} className="rounded-[24px] border border-peach/60 bg-[#fff6ee] px-5 py-5 text-base font-bold text-ink">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
            <SectionHeader eyebrow="FAQ" title="Answers before the App Store tap" align="center" />
            <div className="mx-auto mt-12 grid max-w-5xl gap-4">
              {faqItems.map((item, index) => (
                <motion.article
                  key={item.q}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                  className="rounded-[28px] border border-white/85 bg-white/78 p-6 shadow-card"
                >
                  <h3 className="text-xl font-black tracking-[-0.02em] text-ink">{item.q}</h3>
                  <p className="mt-3 text-base leading-8 text-ink/70">{item.a}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="download" className="mx-auto w-full max-w-7xl px-5 pb-24 pt-4 md:px-8 md:pb-32">
            <div className="rounded-[42px] border border-white/85 bg-gradient-to-r from-white via-[#fff6ef] to-[#fff0e7] p-8 text-center shadow-soft md:p-12">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#FF8A3D]">Final CTA</p>
              <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-ink md:text-6xl">
                Lift with structure. Log with clarity. Keep progressing.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink/70 md:text-lg">
                Lift Log Pro is built for lifters who want a straightforward way to train, review progress and stay consistent week after week.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://apps.apple.com/tr/app/liftlog5x5pro/id6760855317?l=tr"
                  className="inline-flex items-center rounded-2xl bg-ink px-7 py-4 text-base font-black text-white shadow-soft transition hover:-translate-y-0.5"
                >
                  Download on the App Store
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-2xl border border-white/80 bg-white/80 px-7 py-4 text-base font-bold text-ink shadow-card transition hover:bg-white"
                >
                  Review Every Feature
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SiteFrame>
  );
}
