import React from "react";

const page = () => {
  return (
     <main className="min-h-screen bg-gradient-to-b from-[#050608] via-[#081010] to-[#bfe8d4] text-slate-50">
        {/* NAVBAR */}
        <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/40">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              {/* Logo circle */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/80">
                <span className="text-lg font-semibold">X</span>
              </div>
              <div className="text-sm leading-tight">
                <p className="font-semibold tracking-wide">X Calming Energy</p>
                <p className="text-[11px] text-slate-300">Calm Your Mind</p>
              </div>
            </div>

            <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
              <a
                href="#experience"
                className="hover:text-emerald-300 transition"
              >
                Experience
              </a>
              <a
                href="#ingredients"
                className="hover:text-emerald-300 transition"
              >
                Ingredients
              </a>
              <a href="#science" className="hover:text-emerald-300 transition">
                Science
              </a>
              <a href="#faq" className="hover:text-emerald-300 transition">
                FAQ
              </a>
            </nav>

            <a
              href="#cta"
              className="rounded-full border border-emerald-300/70 bg-emerald-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-emerald-300/20"
            >
              Get Early Access
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* radial pattern */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-20 pt-16 md:flex-row md:pb-28 md:pt-24">
            {/* Text */}
            <div className="z-10 flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                100% Natural · Mint Flavoured
              </div>

              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Calming energy
                <span className="block text-emerald-200">
                  for the overactive mind.
                </span>
              </h1>

              <p className="max-w-xl text-sm text-slate-200 sm:text-base">
                X is a calming energy drink crafted with Ashwagandha, Bacopa,
                L-Theanine and more. It relaxes your mind while keeping you
                focused—without sugar, jitters or crash.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="rounded-full bg-emerald-300 px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-lg shadow-emerald-300/40 hover:bg-emerald-200"
                >
                  Notify Me on Launch
                </a>
                <a
                  href="#experience"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 hover:text-emerald-200"
                >
                  See how it works →
                </a>
              </div>

              <div className="flex gap-6 pt-4 text-[11px] text-slate-300">
                <div>
                  <p className="font-semibold text-slate-100">No Sugar</p>
                  <p>Sweetened with Stevia.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">
                    No Colour Added
                  </p>
                  <p>100% natural ingredients.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Calm + Focus</p>
                  <p>Not hyper or drowsy.</p>
                </div>
              </div>
            </div>

            {/* Bottle visual */}
            <div className="relative flex-1">
              <div className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-[40%] bg-gradient-to-b from-emerald-300/40 to-transparent blur-3xl" />
              <div className="group relative mx-auto flex h-[340px] w-[180px] items-center justify-center">
                <div className="absolute inset-0 rounded-[36px] border border-emerald-100/40 bg-gradient-to-b from-[#c9f5df] to-[#a4ddc8] opacity-80 shadow-[0_0_40px_rgba(16,185,129,0.45)] group-hover:scale-[1.02] group-hover:shadow-[0_0_70px_rgba(16,185,129,0.7)] transition-all" />
                {/* Placeholder bottle image – replace src with actual product shot */}
                <Image
                  src="/x-bottle.png"
                  alt="X calming energy drink bottle"
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)] group-hover:-translate-y-1 transition-transform duration-700"
                />
              </div>
              <p className="mt-6 text-center text-xs text-slate-200">
                Calm your mind · Elevate your senses
              </p>
            </div>
          </div>

          {/* scroll hint */}
          <div className="flex justify-center pb-6">
            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <div className="h-7 w-4 rounded-full border border-slate-400/70 p-0.5">
                <div className="h-2 w-[2px] animate-bounce rounded-full bg-slate-300 mx-auto" />
              </div>
              Scroll to unwind
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          className="border-y border-white/10 bg-black/40"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-semibold text-emerald-100">
                Energy that feels like meditation,
                <span className="block text-slate-50">
                  not a caffeine punch.
                </span>
              </h2>
              <p className="text-sm text-slate-300">
                X is designed for people whose minds never switch off—students,
                founders, gamers, night-shift warriors. A precise blend of
                adaptogens and amino acids helps you stay calm, focused and
                present.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>• Smooth, sustained mental energy.</li>
                <li>• Calmer mood and reduced mental noise.</li>
                <li>• Zero sugar and no artificial colours.</li>
              </ul>
            </div>

            {/* Modes */}
            <div className="flex-1 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Focus Mode",
                  desc: "Sip before deep work, study or intense gaming. Keeps you sharp and centered.",
                },
                {
                  title: "Relax Mode",
                  desc: "Unwind after a hectic day without feeling drowsy or heavy.",
                },
                {
                  title: "Social Mode",
                  desc: "Stay calm, confident and present in conversations—not zoned out.",
                },
              ].map((mode) => (
                <div
                  key={mode.title}
                  className="group rounded-2xl border border-emerald-300/30 bg-gradient-to-br from-emerald-300/10 to-transparent p-4 text-sm shadow-[0_0_18px_rgba(16,185,129,0.15)] hover:border-emerald-300/80 hover:shadow-[0_0_32px_rgba(16,185,129,0.5)] transition"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200">
                    Mode
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-50">
                    {mode.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-200">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INGREDIENTS */}
        <section
          id="ingredients"
          className="bg-gradient-to-b from-black via-[#050b09] to-[#bfe8d4]"
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-emerald-100">
                  100% natural, science-backed ingredients.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-200">
                  Every sip of X is built from clinically studied botanicals and
                  amino acids, chosen to support calm focus without sugar
                  spikes.
                </p>
              </div>
              <p className="text-xs text-slate-300">
                No sugar · No colour added · 12+ only
              </p>
            </div>

            {/* grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Ashwagandha", "Helps manage stress and supports calm mood."],
                [
                  "L-Theanine",
                  "Promotes relaxed alertness without drowsiness.",
                ],
                [
                  "Bacopa Monnieri",
                  "Supports memory, focus and cognitive function.",
                ],
                [
                  "Centella Asiatica",
                  "Traditionally used to support mental clarity.",
                ],
                [
                  "Lemon Juice",
                  "Fresh, zesty base that keeps it light and clean.",
                ],
                [
                  "Himalayan Salt",
                  "Electrolytes to keep you balanced and hydrated.",
                ],
                ["Stevia Rebaudiana", "Natural sweetness with zero sugar."],
                [
                  "Citric Acid (Food Grade)",
                  "Stabilises flavour and freshness.",
                ],
              ].map(([name, desc]) => (
                <div
                  key={name}
                  className="group relative overflow-hidden rounded-2xl border border-emerald-200/30 bg-black/50 p-4 text-sm shadow-[0_0_22px_rgba(15,23,42,0.9)]"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-300/15 blur-2xl group-hover:bg-emerald-300/30 transition" />
                  <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-200">
                    Active
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-50">
                    {name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-200 group-hover:text-emerald-50">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCIENCE / TIMELINE */}
        <section
          id="science"
          className="border-t border-white/10 bg-[#bfe8d4] text-slate-900"
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 md:grid-cols-[1.1fr,1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-slate-950">
                  How X feels in the next 30 minutes.
                </h2>
                <p className="mt-2 text-sm text-slate-800">
                  Designed for a gentle landing into focus. No spikes, no
                  crashes—just a smooth transition from chaos to clarity.
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    [
                      "0 – 5 minutes",
                      "Mint cools your senses, first wave of relaxation begins.",
                    ],
                    [
                      "10 – 15 minutes",
                      "L-Theanine and botanicals turn down mental noise.",
                    ],
                    [
                      "20 – 30 minutes",
                      "Calm, steady energy with deep focus and no restlessness.",
                    ],
                  ].map(([time, desc], i) => (
                    <div key={time} className="flex gap-4">
                      <div className="mt-1 flex flex-col items-center">
                        <div className="h-3 w-3 rounded-full border border-emerald-700 bg-emerald-500" />
                        {i !== 2 && (
                          <div className="h-10 w-px bg-gradient-to-b from-emerald-500 to-transparent" />
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900">
                          {time}
                        </p>
                        <p className="text-sm text-slate-900">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparison */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-900">
                  X VS NORMAL ENERGY DRINKS
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-300 bg-white/60 p-4 text-sm shadow">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-red-500">
                      Normal Energy Drinks
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-slate-800">
                      <li>• High sugar & artificial flavours</li>
                      <li>• Jitters, anxiety & heart race</li>
                      <li>• Hard energy crash later</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-emerald-600 bg-emerald-900 text-emerald-50 p-4 text-sm shadow-[0_0_30px_rgba(22,163,74,0.5)]">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200">
                      X Calming Energy Drink
                    </p>
                    <ul className="mt-2 space-y-1 text-xs">
                      <li>• 100% natural, no sugar</li>
                      <li>• Calm, focused mental state</li>
                      <li>• No crash, just smooth landing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ + CTA */}
        <section id="faq" className="bg-black text-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 md:grid-cols-[1.1fr,1fr]">
              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-semibold text-emerald-100">
                  Questions, meet answers.
                </h2>
                <div className="mt-6 space-y-4">
                  {[
                    [
                      "Will X make me sleepy?",
                      "No. X is formulated to create a calm, alert state—relaxed but not drowsy.",
                    ],
                    [
                      "Is it safe to drink every day?",
                      "For most healthy adults above 12, daily consumption is fine. Always consult your doctor if in doubt.",
                    ],
                    [
                      "Does it contain caffeine?",
                      "X focuses on adaptogens and amino acids. Caffeine, if used, is kept within responsible limits (update with exact info).",
                    ],
                    [
                      "Who is X for?",
                      "Students, professionals, gamers—anyone who wants calm focus instead of anxious energy.",
                    ],
                  ].map(([q, a]) => (
                    <details
                      key={q}
                      className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-slate-100">
                        <span>{q}</span>
                        <span className="text-xl leading-none group-open:rotate-45 transition">
                          +
                        </span>
                      </summary>
                      <p className="mt-2 text-xs text-slate-300">{a}</p>
                    </details>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                id="cta"
                className="relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500 via-emerald-700 to-emerald-900 p-6 shadow-[0_0_45px_rgba(16,185,129,0.7)]"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-300/40 blur-3xl" />
                <h3 className="text-lg font-semibold text-emerald-50">
                  Be the first to sip calm energy.
                </h3>
                <p className="mt-2 text-xs text-emerald-50/90">
                  Drop your email and we&apos;ll let you know the moment X
                  launches in your city.
                </p>
                <form className="mt-4 space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-full border border-emerald-200/70 bg-emerald-900/40 px-4 py-2 text-sm text-emerald-50 placeholder:text-emerald-100/60 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-slate-950/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 hover:bg-black"
                  >
                    Notify Me on Launch
                  </button>
                </form>
                <p className="mt-2 text-[11px] text-emerald-100/80">
                  No spam. Just calm news.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 bg-black py-6 text-[11px] text-slate-400">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
            <p>© {new Date().getFullYear()} GVR Beverages · Hyderabad.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-300">
                Ingredients
              </a>
              <a href="#" className="hover:text-emerald-300">
                Contact
              </a>
              <a href="#" className="hover:text-emerald-300">
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </main>
  );
};

export default page;
